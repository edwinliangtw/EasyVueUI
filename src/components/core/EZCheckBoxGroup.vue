<template>
    <EZGroup layout="horizontal" gap="10px" @click="onItemsSelect(names)">
        <EZToggle v-for="(item, index) in items" :key="index" type="checkBox" :name="'item_'+index" :onToggle="onToggle">
            {{items[index]}}
        </EZToggle>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZToggle from '@/components/core/EZToggle.vue'
import { ref } from 'vue'
const names = ref([])
defineProps({
    items: { type: Array, default: [] },
    onItemsSelect: { type: Function, required: true },
})
function onToggle(name, checked){
    const index = parseInt(name.split('_')[1])
    const idx = names.value.findIndex(idx=>idx == index) 
    if(checked){
        idx==-1 && names.value.push(index)
    }else{
        idx>-1 && names.value.splice(idx,1)
    }
    names.value.sort()
}
</script>
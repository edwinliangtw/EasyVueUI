<template>
    <EZGroup layout="horizontal" gap="10px" @click="onItemsSelect(names)">
        <EZToggle v-for="(item, index) in items" type="radioBox" :name="'item_'+index" :onToggle="onToggle" :key="keys[index]">
            {{items[index]}}
        </EZToggle>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZToggle from '@/components/core/EZToggle.vue'
import { ref } from 'vue'
const props = defineProps({
    items: { type: Array, default: [] },
    onItemsSelect: { type: Function, required: true },
})
const keys = ref(Array(props.items.length).fill(Math.random()))
function onToggle(name, checked){
    if(checked){
        const index = parseInt(name.split('_')[1])
        keys.value.forEach((item,idx)=> idx != index && (keys.value[idx]=Math.random()))
    }
}
</script>
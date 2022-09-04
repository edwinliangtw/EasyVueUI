<template>
    <EZGroup class="ez-pointer" gap="3px" @click="onToggle(name, checked = !checked)">
        <EZGroup bg="#333" :borderRadius="borderRadius" border="1px solid white" width="15px" height="15px" align="center">
            <EZLabel>
                <template v-if="checked">
                    <div v-if="type=='checkBox'" class="symbol-check"></div>
                    <div v-else class="symbol-radio"></div>
                </template>
                <template v-else>&nbsp;</template>
            </EZLabel>
        </EZGroup>
        <EZLabel><slot></slot></EZLabel>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZImage from '@/components/core/EZImage.vue'
import EZLabel from '@/components/core/EZLabel.vue'
import { ref } from 'vue'
const checked = ref(false)
const borderRadius = ref('4px')
const props = defineProps({
    type:{ type: String, default: 'checkBox' }, // checkBox | radioBox
    name: { type: String, required: true },
    onToggle: { type: Function, required: true },
})
switch(props.type){
    case 'checkBox':borderRadius.value = '4px';break;
    case 'radioBox':borderRadius.value = '15px';break;
}
</script>

<style scoped>
.symbol-check{
    position: relative;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}
.symbol-radio{
    position: relative;
    left: 2px;
    top: 2px;
    width: 9px;
    height: 9px;
    background: #FFF;
    border-radius: 9px;
}
</style>
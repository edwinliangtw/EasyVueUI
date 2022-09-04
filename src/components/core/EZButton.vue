<template>
    <div class="ez-button"
        @mouseenter="bgColor=bgOverColor"
        @mouseleave="bgColor=bgUpColor"
    ><EZLabel color="white"><slot>Button</slot></EZLabel></div>
</template>

<script setup>
import { ref } from 'vue'
import EZLabel from '@/components/core/EZLabel.vue'
let alignSetting = ref('')
let bgColor = ref('')
const props = defineProps({
    width: { type: String, default: '100px' },
    height: { type: String, default: 'auto' },
    bgUpColor: { type: String, default: '#900C3F' },
    bgOverColor: { type: String, default: '#C70039' },
    padding: { type: String, default: '10px' },
    margin: { type: String, default: '0px' },
    border: {type: String, default: 'none' },
    borderRadius: {type: String, default: '5px' },
    shadow: {type: String, default: 'none'},
    verticalAlign: {type: String, default: 'top'}
})
bgColor.value = props.bgUpColor;
switch(props.verticalAlign){
    case 'top': alignSetting.value = 'flex-start'; break;
    case 'middle': alignSetting.value = 'center'; break;
    case 'bottom': alignSetting.value = 'flex-end'; break;
}
</script>

<style scoped>
.ez-button {
    cursor: pointer;
    box-sizing: border-box;
    width: v-bind(width);
    height: v-bind(height);
    text-align: center;
    background-color: v-bind(bgColor);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border: v-bind(border);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(shadow);
    align-self: v-bind(alignSetting);
}
</style>
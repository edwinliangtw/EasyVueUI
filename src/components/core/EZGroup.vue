<template>
    <div class="ez-group"><slot></slot></div>
</template>

<script setup>
import { ref } from 'vue'
let layoutSetting = ref('')
let zIndexSetting = ref('')
let marginAutoSetting = ref('')
let alignSetting = ref('')
const props = defineProps({
    position: { type: String, default: 'relative' },
    layout: { type: String, default: 'horizontal' },
    gap: {type: String, default: '0px'},
    justify : { type: String, default: 'none' },
    width: { type: String, default: 'auto' },
    height: { type: String, default: 'auto' },
    minHeight: { type: String, default: 'auto' },
    maxWidth: { type: String, default: 'auto' },
    bg: { type: String, default: 'none' },
    padding: { type: String, default: '0' },
    margin: { type: String, default: '0' },
    border: {type: String, default: 'none' },
    borderRadius: {type: String, default: '0px' },
    shadow: {type: String, default: 'none'},
    marginAuto: {type: String, default: 'false'},
    align: {type: String, default: 'none'},
})
switch(props.layout){
    case 'vertical': layoutSetting.value = 'column'; break;
    case 'horizontal': layoutSetting.value = 'row'; break;
}
switch(props.marginAuto){
    case 'false': marginAutoSetting.value = '0'; break;
    case 'true': marginAutoSetting.value = '0 auto'; break;
}
switch(props.position){
    case 'absolute': zIndexSetting.value = '1'; break;
}
switch(props.align){
    case 'start': alignSetting.value = 'flex-start'; break;
    case 'center': alignSetting.value = 'center'; break;
    case 'end': alignSetting.value = 'flex-end'; break;
}
</script>

<style scoped>
.ez-group {
    position: v-bind(position);
    display: inline-flex;
    gap: v-bind(gap);
    flex-direction: v-bind(layoutSetting);
    flex-wrap: no-wrap;
    justify-content: v-bind(justify);
    align-items: v-bind(justify);
    box-sizing: border-box;
    width: v-bind(width);
    height: v-bind(height);
    background: v-bind(bg);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border: v-bind(border);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(shadow);
    margin: v-bind(marginAutoSetting);
    min-height: v-bind(minHeight);
    max-width: v-bind(maxWidth);
    z-index: v-bind(zIndexSetting);
    align-self: v-bind(alignSetting);
}
</style>
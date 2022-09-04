<template>
    <EZGroup class="ez-image" justify="center">
        <template v-if="!src">
            {{parseInt(widthSetting)}} x {{parseInt(heightSetting)}}
        </template>
        <slot></slot>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import { ref } from 'vue'
let alignSetting = ref('')
let widthSetting = ref('')
let heightSetting = ref('')
let srcSetting = ref('')
const props = defineProps({
    color:{ type: String, default: '#FFF' },
    size: { type: String, default: '.5em' },
    src: { type: String },
    width: { type: String },
    height: { type: String },
    shadow: { type: String, default: 'none' },
    align: {type: String, default: 'none'},
})
switch(props.align){
    case 'start': alignSetting.value = 'flex-start'; break;
    case 'center': alignSetting.value = 'center'; break;
    case 'end': alignSetting.value = 'flex-end'; break;
}
widthSetting.value = props.width || '100px'
heightSetting.value = props.height || '100px'
srcSetting.value = '#333'
if(props.src){
    let img = new Image
    img.src = new URL('../../'+props.src,import.meta.url).href
    img.onload = ()=>{
        img.onload = null
        widthSetting.value = props.width || (img.naturalWidth+'px')
        heightSetting.value = props.height || (img.naturalHeight+'px')
        srcSetting.value = `url(${img.src})`
        img = null
    }
}
</script>

<style scoped>
.ez-image {
    color: v-bind(color);
    font-size: v-bind(size);
    width: v-bind(widthSetting);
    height: v-bind(heightSetting);
    background: v-bind(srcSetting);
    background-size: 100%;
    box-shadow: v-bind(shadow);
    align-self: v-bind(alignSetting);
}
</style>
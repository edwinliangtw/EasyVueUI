<template>
    <EZGroup class="ez-image" layout="v" @mouseenter="refShowInfo = true" @mouseleave="refShowInfo = false"
        :class="{fadeIn:refCSSSrc}">
        <!-- 防止拷貝圖片與自適應圖片大小 -->
        <img :src="refSrc" class="hiddenImage" />
        <EZGroup position="absolute" width="100%" height="100%" vJustify="flex-start">
            <EZLabel v-if="$config.ez.debugImage && refShowInfo" x="5px" y="5px" color="white"
                textShadow="0px 0px 5px black" size="10px" zIndex="9999999">
                {{ refWidth }} x {{ refHeight }} <br>
                {{ src }}
            </EZLabel>
            <slot></slot>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { ref, watch } from 'vue'
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const refSrc = ref('')
const refCSSSrc = ref('')
const refWidth = ref('')
const refHeight = ref('')
const refShowInfo = ref(false)
const props = defineProps({
    src: { type: String, required: true },
    width: { type: String, default: '' },
    height: { type: String, default: 'auto' },
    bg: { type: String, default: '' },
})
function setImage(src) {
    let img = new Image();
    refSrc.value = img.src = new URL(`/src/assets/${src}`, import.meta.url).href;
    img.onload = () => {
        img.onload = null;
        refWidth.value = props.width || img.naturalWidth + "px";
        refHeight.value = props.height || img.naturalHeight + "px";
        refCSSSrc.value = `url(${img.src}) ${props.bg}`;
        img = null;
    };
}
setImage(props.src);
watch(() => props.src, setImage);
</script>

<style scoped>
.ez-image {
    width: v-bind(refWidth);
    height: v-bind(refHeight);
    background: v-bind(refCSSSrc);
    background-size: 100%;
    background-repeat: no-repeat;
    image-rendering: -webkit-optimize-contrast;
    opacity: 0;
    transition: opacity .2s;
}

.fadeIn {
    opacity: 1;
}

.hiddenImage {
    width: 100%;
    height: auto;
    opacity: 0;
    pointer-events: none;
}
</style>
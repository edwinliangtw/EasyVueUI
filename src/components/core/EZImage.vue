<template>
    <EZGroup class="ez-image" layout="v" @mouseenter="setShowInfo()" @mouseleave="clearShowInfo()"
        :class="[refSrc ? 'fadeIn' : '']">
        <EZLabel v-if="refShowInfo" position="absolute" x="5px" y="5px" color="white" textShadow="0px 0px 5px black"
            size="10px" zIndex="9999999">
            {{ refWidth }} x {{ refHeight }} <br>
            {{ src }}
        </EZLabel>
    </EZGroup>
</template>

<script setup>
import { ref, watch } from 'vue'
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const refSrc = ref('')
const refWidth = ref('')
const refHeight = ref('')
const refSize = ref('')
const refShowInfo = ref(false)
const props = defineProps({
    src: { type: String, required: true },
    width: { type: String, default: '' },
    height: { type: String, default: '' },
})
let t = -1;
function setShowInfo() {
    t = setTimeout(() => this.refShowInfo = true, 0)
}
function clearShowInfo() {
    this.refShowInfo = false
    clearTimeout(t);
    t = -1;
}
function setImage(src) {
    let img = new Image();
    img.src = new URL(`/src/assets/${src}`, import.meta.url).href;
    img.onload = () => {
        img.onload = null;
        refWidth.value = props.width || img.naturalWidth + "px";
        refHeight.value = props.height || img.naturalHeight + "px";
        refSrc.value = `url(${img.src})`;
        refSize.value = `${refWidth.value} ${refHeight.value}`
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
    background: v-bind(refSrc);
    background-size: v-bind(refSize);
    background-repeat: no-repeat;
    image-rendering: -webkit-optimize-contrast;
    opacity: 0;
    transition: opacity .2s;
}

.fadeIn {
    opacity: 1;
}
</style>
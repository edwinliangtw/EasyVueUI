<template>
    <EZGroup class="ez-image" layout="v" :class="[refSrc ? 'fadeIn' : '']" @mouseenter="setShowInfo()"
        @mouseleave="clearShowInfo()">
        <EZLabel v-if="refShowInfo" color="gray" size="10px">
            {{ parseInt(refWidth) }} x {{ parseInt(refHeight) }}
        </EZLabel>
        <EZLabel v-if="refShowInfo" color="gray" size="10px">
            {{ src }}
        </EZLabel>
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue'
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const refSrc = ref('')
const refWidth = ref('')
const refHeight = ref('')
const refShowInfo = ref(false)
const props = defineProps({
    src: { type: String, required: true },
})
if (props.src) {
    let img = new Image
    img.src = new URL('../../' + props.src, import.meta.url).href
    img.onload = () => {
        img.onload = null
        refWidth.value = props.width || (img.naturalWidth + 'px')
        refHeight.value = props.height || (img.naturalHeight + 'px')
        refSrc.value = `url(${img.src})`
        img = null
    }
}
let t = -1;
function setShowInfo() {
    t = setTimeout(() => this.refShowInfo = true, 1000)
}
function clearShowInfo() {
    this.refShowInfo = false
    clearTimeout(t);
    t = -1;
}
</script>

<style scoped>
.ez-image {
    width: v-bind(refWidth);
    height: v-bind(refHeight);
    background: v-bind(refSrc);
    background-size: 100%;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity .2s;
}

.fadeIn {
    opacity: 1;
}
</style>
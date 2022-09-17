<template>
    <EZGroup :width="length" height="30px" vJustify="center">
        <EZGroup bg="#333" height="1px" width="100%">
            <EZGroup position="absolute" ref="refHandle" class="ez-slider" :x="-parseInt(handleWidth)*.5+'px'"
                :y="-parseInt(handleWidth)*.5+'px'" :width="handleWidth" :height="handleWidth" borderRadius="50%"
                bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)" cursorEnable="true"
                @pointerdown="sliderDown" @pointermove="sliderMove" @pointerup="sliderUp" noSelect="true"
                hJustify="center">
                <EZLabel pointerEvent="none" y="-20px" size="0.8em" textShadow="0 0 5px var(--theme-main)">
                    {{refValue}}</EZLabel>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { onBeforeUnmount, onMounted, ref } from 'vue';
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const emits = defineEmits(['onSlide'])
const props = defineProps({
    handleWidth: { type: String, default: '20px' },           // css width for handle
    length: { type: String, default: '300px' },               // css width
    min: { type: String, default: '0' },                      // min value
    max: { type: String, default: '100' },                    // max value
})
const refValue = ref(0)
const refHandle = ref(null)
let process = parseInt(0)

onMounted(() => {
    window.addEventListener('resize', windowResize)
})

onBeforeUnmount(() => {
    window.removeEventListener('resize', windowResize)
})

function sliderDown(e) {
    const t = e.target;
    window.document.body.style.overflow = 'hidden';
    t.setPointerCapture(e.pointerId);
    t.classList.add("active");
    sliderMove(e)
}

function sliderUp(e) {
    const t = e.target;
    t.classList.remove("active");
    window.document.body.style.overflow = '';
}

function sliderMove(e) {
    const t = e.target;
    if ((t.hasPointerCapture && t.hasPointerCapture(e.pointerId)) || t.classList.contains('active')) {
        let parentLeft = getLeft(t.parentElement)
        let newPos = e.clientX - parentLeft - t.offsetWidth * .5;
        let minPos = -parseInt(props.handleWidth) * .5
        let maxPos = (t.parentElement.offsetWidth - t.offsetWidth) + parseInt(props.handleWidth) * .5
        if (newPos < minPos) {
            newPos = minPos;
        } else if (newPos > maxPos) {
            newPos = maxPos;
        }
        process = (newPos + 10) / t.parentElement.offsetWidth
        refValue.value = ~~(process * (parseInt(props.max) - parseInt(props.min)) + parseInt(props.min))
        emits("onSlide", refValue.value)
        t.style.left = newPos + 'px';
    }
}

function windowResize() {
    const t = refHandle.value.$el
    let newPos = process * t.parentElement.offsetWidth - 10
    t.style.left = newPos + 'px';
}

const getLeft = function (obj) {
    let offset = obj.offsetLeft;
    if (obj.offsetParent != null) offset += getLeft(obj.offsetParent);
    return offset;
};

</script>

<style scoped>
.ez-slider>* {
    opacity: 0;
    transition: opacity .3s;
}

.ez-slider.active>* {
    opacity: 1;
}
</style>
<template>
    <EZGroup width="30px" :height="length" hJustify="center">
        <EZGroup bg="#333" height="100%" width="1px">
            <EZGroup position="absolute" ref="refHandle" class="ez-slider" :x="-parseInt(handleWidth)*.5+'px'"
                :y="cpWidth" :width="handleWidth" :height="handleWidth" borderRadius="50%" bg="var(--theme-main)"
                boxShadow="0 0 5px var(--theme-main)" cursorEnable="true" @pointerdown="sliderDown"
                @pointermove="sliderMove" @pointerup="sliderUp" noSelect="true" vJustify="center">
                <EZLabel pointerEvent="none" x="25px" size="0.8em" textShadow="0 0 5px var(--theme-main)">
                    {{refValue}}</EZLabel>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onBeforeUnmount, onMounted, ref } from 'vue';
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const emits = defineEmits(['onSlide'])
const props = defineProps({
    handleWidth: { type: String, default: '20px' },           // css width for handle
    length: { type: String, default: '300px' },               // css height
    min: { type: String, default: '0' },                      // min value
    max: { type: String, default: '100' },                    // max value
})
const refValue = ref(0)
const refHandle = ref(null)
const cpWidth = computed({
    get: () => {
        if (refHandle.value) {
            return (refHandle.value.$el.parentElement.offsetHeight - parseInt(props.handleWidth) * .5) + 'px'
        }
        return '0px'
    }
})
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
        let parentTop = getTop(t.parentElement)
        let newPos = e.clientY - parentTop - t.offsetHeight * .5 + window.scrollY;
        let minPos = (t.parentElement.offsetHeight - t.offsetHeight) + parseInt(props.handleWidth) * .5
        let maxPos = -parseInt(props.handleWidth) * .5
        if (newPos < maxPos) {
            newPos = maxPos;
        } else if (newPos > minPos) {
            newPos = minPos;
        }
        process = (newPos + 10) / t.parentElement.offsetHeight
        refValue.value = ~~(process * (parseInt(props.max) - parseInt(props.min)) + parseInt(props.min))
        refValue.value = props.max - refValue.value + 1
        emits("onSlide", refValue.value)
        t.style.top = newPos + 'px';
    }
}

function windowResize() {
    const t = refHandle.value.$el
    let newPos = process * t.parentElement.offsetHeight - 10
    t.style.top = newPos + 'px';
}

const getTop = function (obj) {
    let offset = obj.offsetTop;
    if (obj.offsetParent != null) offset += getTop(obj.offsetParent);
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
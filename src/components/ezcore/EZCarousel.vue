<template>
    <EZGroup :width="width" :height="height" overflow="hidden" noSelect="true">
        <EZGroup position="absolute" :width="cpWidth" :height="height" :key="cpWidth">
            <template class="ez-carousel carouselSlide" ref="refCarousel" style="display:inline-flex;"
                :style="{width:cpWidth, height}">
                <slot></slot>
            </template>
        </EZGroup>
        <EZGroup position="absolute" :width="width" :height="height" hJustify="space-between" padding="20px"
            pointerEvents="none">
            <EZGroup layout="v" vJustify="center" @click="leftClick" cursorEnable="true" pointerEvents="all">
                <EZGroup class="symbol-arrow-left" />
            </EZGroup>
            <EZGroup layout="h" vJustify="flex-end">
                <EZGroup gap="10px">
                    <EZGroup :opacity="i-1==refSlideIndex?'1':'.5'" width="13px" height="13px" border="2px solid white"
                        borderRadius="50%" bg="rgba(255,255,255,.8)" v-for="i in refCount" cursorEnable="true"
                        @click="refSlideIndex=i-1" pointerEvents="all"></EZGroup>
                </EZGroup>
            </EZGroup>
            <EZGroup layout="v" vJustify="center" @click="rightClick" cursorEnable="true" pointerEvents="all">
                <EZGroup class="symbol-arrow-right" />
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { computed } from '@vue/reactivity';
import { onMounted, ref } from 'vue';
import EZGroup from './EZGroup.vue';
const refCarousel = ref(null)
const refCount = ref(0)
const refSlideIndex = ref(0)
const props = defineProps({
    width: { type: String, default: 'auto' },           // css width
    height: { type: String, default: 'auto' },          // css height
})
const cpWidth = computed({
    get: () => {
        if (refCount.value && refCarousel.value)
            [...refCarousel.value.children].map(item => {
                item.style.width = `calc(100% / ${refCount.value})`
            })
        return 'calc(' + props.width + ' * ' + refCount.value + ')'
    },
})
const cpSlide = computed({
    get: () => `translate(-${100 / refCount.value * refSlideIndex.value}%)`,
})
onMounted(() => {
    refCount.value = refCarousel.value.children.length
})
const leftClick = () => {
    refSlideIndex.value--;
    refSlideIndex.value < 0 && (refSlideIndex.value = refCount.value - 1)
}
const rightClick = () => {
    refSlideIndex.value++;
    refSlideIndex.value > refCount.value - 1 && (refSlideIndex.value = 0)
}
</script>

<style scoped>
.ez-carousel {
    transform: translate(0);
    transition: transform .3s;
}

.carouselSlide {
    transform: v-bind(cpSlide);
}

.symbol-arrow-left {
    position: relative;
    left: 1px;
    top: 0px;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(135deg);
}

.symbol-arrow-right {
    position: relative;
    left: 0px;
    top: 0px;
    width: 30px;
    height: 30px;
    border-bottom: 5px solid white;
    border-right: 5px solid white;
    transform: rotate(315deg);
}
</style>
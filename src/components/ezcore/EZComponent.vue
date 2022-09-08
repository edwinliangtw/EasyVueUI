<template>
    <div class="ez-component" :title="title">
        <slot>&nbsp;</slot>
    </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const refCursor = ref('')
const refWidth = ref('')
const props = defineProps({
    position: { type: String, default: 'relative' },
    x: { type: String, default: '0' },
    y: { type: String, default: '0' },
    width: { type: String, default: 'auto' },
    minWidth: { type: String, default: 'auto' },
    maxWidth: { type: String, default: 'auto' },
    height: { type: String, default: 'auto' },
    minHeight: { type: String, default: 'auto' },
    maxHeight: { type: String, default: 'auto' },
    bg: { type: String, default: 'none' },
    padding: { type: String, default: '0' },
    margin: { type: String, default: '0' },
    border: { type: String, default: 'none' },
    borderRadius: { type: String, default: '0' },
    boxShadow: { type: String, default: 'none' },
    zIndex: { type: String, default: '' },
    cursorEnable: { type: String, default: 'false' },
    opacity: { type: String, default: '1' },
    alignSelf: { type: String, default: 'auto' },
    title: { type: String, default: '' },
    rwdWidth: { type: String, default: '' },
})
switch (props.cursorEnable) {
    case 'true': refCursor.value = 'pointer'; break;
    case 'false': refCursor.value = ''; break;
}
refWidth.value = props.width
if (props.rwdWidth) {
    let resize = (() => {
        if (window.innerWidth <= +props.rwdWidth)
            refWidth.value = '100%'
        else if (window.innerWidth > +props.rwdWidth)
            refWidth.value = props.width
    })
    onMounted(() => { window.addEventListener('resize', resize); resize() })
    onUnmounted(() => window.removeEventListener('resize', resize))
}
</script>

<style scoped>
.ez-component {
    position: v-bind(position);
    top: v-bind(y);
    left: v-bind(x);
    display: inline-flex;
    box-sizing: border-box;
    width: v-bind(refWidth);
    min-width: v-bind(minWidth);
    max-width: v-bind(maxWidth);
    height: v-bind(height);
    min-height: v-bind(minHeight);
    max-height: v-bind(maxHeight);
    background: v-bind(bg);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border: v-bind(border);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(boxShadow);
    z-index: v-bind(zIndex);
    cursor: v-bind(refCursor);
    opacity: v-bind(opacity);
    align-self: v-bind(alignSelf);
}
</style>
<template>
    <EZGroup overflow="scroll">
        <table class="ez-table" :title="title" :class="{noselect:refNoSelect}">
            <slot>&nbsp;</slot>
        </table>
    </EZGroup>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
import EZGroup from './EZGroup.vue';
const refCursor = ref('')
const refWidth = ref('')
const refNoSelect = ref('')
const props = defineProps({
    position: { type: String, default: 'relative' },    // css position
    x: { type: String, default: '0' },                  // css left
    y: { type: String, default: '0' },                  // css top
    width: { type: String, default: 'auto' },           // css width
    minWidth: { type: String, default: 'auto' },        // css min-width
    maxWidth: { type: String, default: 'auto' },        // css max-width
    height: { type: String, default: 'auto' },          // css height
    minHeight: { type: String, default: 'auto' },       // css min-height
    maxHeight: { type: String, default: 'auto' },       // css max-height
    bg: { type: String, default: 'none' },              // css background
    padding: { type: String, default: '0' },            // css padding
    margin: { type: String, default: '0' },             // css margin
    border: { type: String, default: '1px solid gray' },// css border
    borderRadius: { type: String, default: '0' },       // css border-radius
    boxShadow: { type: String, default: 'none' },       // css box-shadow
    zIndex: { type: String, default: '' },              // css z-index
    cursorEnable: { type: String, default: 'false' },   // true | false - display cursor pointer
    opacity: { type: String, default: '1' },            // css opacity
    alignSelf: { type: String, default: 'auto' },       // css align-self
    title: { type: String, default: '' },               // html title
    rwdWidth: { type: String, default: '' },            // number without unit - rwd break point setting
    noSelect: { type: String, default: 'false' },       // true | false - enable text selection
})
switch (props.cursorEnable) {
    case 'true': refCursor.value = 'pointer'; break;
    case 'false': refCursor.value = ''; break;
}
switch (props.noSelect) {
    case 'true': refNoSelect.value = true; break;
    case 'false': refNoSelect.value = false; break;
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

<style>
.ez-table {
    position: v-bind(position);
    top: v-bind(y);
    left: v-bind(x);
    display: table;
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
    border-collapse: collapse;
    border-spacing: 0px;
}

.ez-table tr,
.ez-table td {
    border: v-bind(border);
    padding: 0;
}

.noselect {
    /* iOS Safari */
    -webkit-touch-callout: none;
    /* Safari */
    -webkit-user-select: none;
    /* Konqueror HTML */
    -khtml-user-select: none;
    /* Old versions of Firefox */
    -moz-user-select: none;
    /* Internet Explorer/Edge */
    -ms-user-select: none;
    /* Non-prefixed version, currently supported by Chrome, Edge, Opera and Firefox */
    user-select: none;
}
</style>
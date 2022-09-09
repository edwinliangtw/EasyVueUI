<template>
    <input v-if="refSingleLine" class="ez-textinput" v-model="refInputText" @focus="refFocusColor=focusColor"
        @blur="refFocusColor='gray'" />
    <textarea v-else class="ez-textinput" v-model="refInputText" :rows="refRow" @focus="refFocusColor=focusColor"
        @blur="refFocusColor='gray'"></textarea>
</template>

<script setup>
import { onMounted, onUnmounted, ref } from 'vue';
const refInputText = ref('')
const refCursor = ref('')
const refWidth = ref('')
const refBorder = ref('')
const refSingleLine = ref(false)
const refFocusColor = ref('')
const refRow = ref('')
const props = defineProps({
    color: { type: String, default: '#000' },
    size: { type: String, default: '1em' },
    textShadow: { type: String, default: 'none' },
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
    padding: { type: String, default: '5px' },
    margin: { type: String, default: '0' },
    border: { type: String, default: '1px solid gray' },
    borderRadius: { type: String, default: '0' },
    boxShadow: { type: String, default: 'none' },
    zIndex: { type: String, default: '' },
    opacity: { type: String, default: '1' },
    alignSelf: { type: String, default: 'auto' },
    title: { type: String, default: '' },
    rwdWidth: { type: String, default: '' },
    text: { type: String, default: '' },
    singleLine: { type: String, default: 'true' },
    focusColor: { type: String, default: 'blue' },
    row: { type: String, default: '5' }
})
refBorder.value = props.border
refInputText.value = props.text
refFocusColor.value = 'gray'
refRow.value = props.row
switch (props.cursorEnable) {
    case 'true': refCursor.value = 'pointer'; break;
    case 'false': refCursor.value = ''; break;
}
switch (props.singleLine) {
    case 'true': refSingleLine.value = true; break;
    case 'false': refSingleLine.value = false; break;
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
.ez-textinput {
    color: v-bind(color);
    font-size: v-bind(size);
    text-shadow: v-bind(textShadow);
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
    border: v-bind(refBorder);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(boxShadow);
    z-index: v-bind(zIndex);
    cursor: v-bind(refCursor);
    opacity: v-bind(opacity);
    align-self: v-bind(alignSelf);
    outline: none;
    font-family: 'Microsoft JhengHei', Arial, Helvetica, sans-serif;
    border-color: v-bind(refFocusColor);
    resize: none;
}
</style>
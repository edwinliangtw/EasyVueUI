<template>
    <span class="ez-font" :class="{fontPointer:isFontPointer, compositionPointer:isCompositionPointer}">
        <slot>&nbsp;</slot>
    </span>
</template>

<script setup>
import { ref } from 'vue';
const refBold = ref('')
const refItalic = ref('')
const props = defineProps({
    color: { type: String, default: '#000' },                   // css color
    size: { type: String, default: '1em' },                     // css font-szie
    bold: { type: String, default: 'false' },                   // true | false - css font weight bold
    italic: { type: String, default: 'false' },                 // true | false - css font style italic
    bg: { type: String, default: 'transparent' },               // css background
    textShadow: { type: String, default: 'none' },              // css text-shadow
    isFontPointer: { type: Boolean, default: false },           // true | false - font pointer
    isCompositionPointer: { type: Boolean, default: false },    // true | false - composition pointer
})
switch (props.bold) {
    case 'true': refBold.value = 'bold'; break;
    case 'false': refBold.value = 'normal'; break;
}
switch (props.italic) {
    case 'true': refItalic.value = 'italic'; break;
    case 'false': refItalic.value = 'normal'; break;
}
</script>
    
<style scoped>
.ez-font {
    position: relative;
    display: inline-flex;
    color: v-bind(color);
    font-family: Arial;
    font-size: v-bind(size);
    font-weight: v-bind(refBold);
    text-shadow: v-bind(textShadow);
    font-style: v-bind(refItalic);
    background: v-bind(bg);
    text-shadow: v-bind(textShadow);
    line-height: 1.5em;
}

.ez-font.fontPointer::before {
    content: '.';
    display: inline-flex;
    position: absolute;
    left: 0px;
    top: 0px;
    color: transparent;
    background-color: black;
    width: 1px;
    height: 1.5em;
    opacity: 1;
    animation: fade 1s linear infinite;
    line-height: 1.5em;
}

.ez-font.compositionPointer::after {
    content: '.';
    display: inline-flex;
    position: absolute;
    left: 0px;
    bottom: 0px;
    color: transparent;
    background-color: black;
    width: 100%;
    height: 1px;
    opacity: 1;
}


@keyframes fade {

    0%,
    100% {
        opacity: 1
    }

    50% {
        opacity: 0
    }
}
</style>
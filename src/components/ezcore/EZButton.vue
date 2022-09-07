<template>
    <EZGroup class="ez-button" padding="5px" bg="#666" :borderRadius="borderRadius" hJustify="center" vJustify="center"
        @mouseenter="refOpacity = '.2'" @mouseleave="refOpacity = '.1'" @mousedown="refOpacity = '0'"
        @mouseup="refOpacity = '.2'" alignSelf="center">
        <slot>Button</slot>
        <EZGroup position="absolute" width="100%" height="100%" bg="white" :opacity="refOpacity"
            :borderRadius="borderRadius" cursorEnable="true">
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue';
import EZGroup from './EZGroup.vue';
const refOpacity = ref('.1')
defineProps({
    borderRadius: { type: String, default: '5px' },
})
</script>
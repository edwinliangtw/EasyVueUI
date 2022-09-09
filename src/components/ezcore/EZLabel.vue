<template>
    <EZGroup class="ez-label" vJustify="center">
        <slot>Label</slot>
    </EZGroup>
</template>

<script setup>
import EZGroup from './EZGroup.vue'
const props = defineProps({
    color: { type: String, default: '#000' },           // css color
    size: { type: String, default: '1em' },             // css font-szie
    textShadow: { type: String, default: 'none' },      // css text-shadow
})
</script>

<style scoped>
.ez-label {
    color: v-bind(color);
    font-size: v-bind(size);
    text-shadow: v-bind(textShadow);
}
</style>
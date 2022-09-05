<template>
    <EZComponent class="ez-label">
        <slot>Label</slot>
    </EZComponent>
</template>

<script setup>
import EZComponent from './EZComponent.vue';
defineProps({
    color: { type: String, default: '#000' },
    size: { type: String, default: '1em' },
})
</script>

<style scoped>
.ez-label {
    color: v-bind(color);
    font-size: v-bind(size);
}
</style>
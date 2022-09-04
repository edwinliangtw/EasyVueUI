<template>
    <div><slot>Label</slot></div>
</template>

<script setup>
const props = defineProps({
    color:{ type: String, default: '#000000' },
    size: { type: String, default: '1em' },
    shadow: {type: String, default: 'none'},
})
</script>

<style scoped>
div {
    color: v-bind(color);
    font-size: v-bind(size);
    box-shadow: v-bind(shadow);
}
</style>
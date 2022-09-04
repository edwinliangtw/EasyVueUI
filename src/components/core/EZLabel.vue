<template>
    <div class="ez-label"><slot>Label</slot></div>
</template>

<script setup>
defineProps({
    x:{ type: String, default: '0' },
    y:{ type: String, default: '0' },
    color:{ type: String, default: '#000000' },
    size: { type: String, default: '1em' },
    shadow: {type: String, default: 'none'},
})
</script>

<style scoped>
.ez-label {
    position: relative;
    top: v-bind(y);
    left: v-bind(x);
    color: v-bind(color);
    font-size: v-bind(size);
    box-shadow: v-bind(shadow);
}
</style>
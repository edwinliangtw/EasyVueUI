<template>
    <EZComponent class="ez-group">
        <slot></slot>
    </EZComponent>
</template>

<script setup>
import { ref } from 'vue';
import EZComponent from './EZComponent.vue';
const refLayout = ref('')
const refWrap = ref('')
const refMJustify = ref('')
const refAJustify = ref('')
const props = defineProps({
    layout: { type: String, default: 'h' },
    wrap: { type: String, default: 'true' },
    vJustify: { type: String, default: 'none' },
    hJustify: { type: String, default: 'none' },
    gap: { type: String, default: '0' },
})
switch (props.layout) {
    case 'v': refLayout.value = 'column'; break;
    case 'h': refLayout.value = 'row'; break;
}
switch (props.layout) {
    case 'v':
        refMJustify.value = props.vJustify
        refAJustify.value = props.hJustify
        break;
    case 'h':
        refMJustify.value = props.hJustify
        refAJustify.value = props.vJustify
        break;
}
switch (props.wrap) {
    case 'true': refWrap.value = 'wrap'; break;
    case 'false': refWrap.value = 'no-wrap'; break;
}
</script>

<style scoped>
.ez-group {
    flex-direction: v-bind(refLayout);
    flex-wrap: v-bind(refWrap);
    justify-content: v-bind(refMJustify);
    align-items: v-bind(refAJustify);
    gap: v-bind(gap);
}
</style>
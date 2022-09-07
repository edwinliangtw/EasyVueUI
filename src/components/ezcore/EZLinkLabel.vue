<template>
    <EZLabel class="ez-linklabel" vJustify="center">
        <RouterLink :to="to">
            <slot></slot>
        </RouterLink>
    </EZLabel>
</template>

<script setup>
import EZLabel from './EZLabel.vue'
const props = defineProps({
    to: { type: String, default: '' },
    color: { type: String, default: '#000' },
})
</script>

<style scoped>
.ez-linklabel>a {
    color: v-bind(color);
    text-decoration: none;
    cursor: pointer;
}
</style>
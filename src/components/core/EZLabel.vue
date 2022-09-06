<template>
    <EZComponent class="ez-label">
        <a :href="href" :target="target">
            <slot>Label</slot>
        </a>
    </EZComponent>
</template>

<script setup>
import { ref } from 'vue'
import EZComponent from './EZComponent.vue'
const refCursor = ref('')
const props = defineProps({
    color: { type: String, default: '#000' },
    size: { type: String, default: '1em' },
    textShadow: { type: String, default: 'none' },
    href: { type: String, default: 'javascript:void(0)' },
    target: { type: String, default: '_self' },
    cursorEnable: { type: String, default: 'false' },
})
refCursor.value = props.href == 'javascript:void(0)' ? 'auto' : 'pointer'
switch (props.cursorEnable) {
    case 'true': refCursor.value = 'pointer'; break;
}
</script>

<style scoped>
.ez-label {
    color: v-bind(color);
    font-size: v-bind(size);
    text-shadow: v-bind(textShadow);
}

.ez-label>a {
    color: inherit;
    text-decoration: none;
    cursor: v-bind(refCursor);
}
</style>
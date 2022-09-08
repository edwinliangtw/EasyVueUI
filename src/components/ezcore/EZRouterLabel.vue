<template>
    <RouterLink class="ez-routerlabel">
        <EZGroup vJustify="center">
            <slot></slot>
        </EZGroup>
    </RouterLink>
</template>

<script setup>
import EZGroup from './EZGroup.vue';
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
    padding: { type: String, default: '0' },
    margin: { type: String, default: '0' },
    border: { type: String, default: 'none' },
    borderRadius: { type: String, default: '0' },
    boxShadow: { type: String, default: 'none' },
    zIndex: { type: String, default: '' },
    opacity: { type: String, default: '1' },
    alignSelf: { type: String, default: 'auto' },
    title: { type: String, default: '' },
})
</script>

<style scoped>
.ez-routerlabel {
    color: v-bind(color);
    font-size: v-bind(size);
    text-shadow: v-bind(textShadow);
    text-decoration: none;
    position: v-bind(position);
    top: v-bind(y);
    left: v-bind(x);
    display: inline-flex;
    box-sizing: border-box;
    width: v-bind(width);
    min-width: v-bind(minWidth);
    max-width: v-bind(maxWidth);
    height: v-bind(height);
    min-height: v-bind(minHeight);
    max-height: v-bind(maxHeight);
    background: v-bind(bg);
    padding: v-bind(padding);
    margin: v-bind(margin);
    border: v-bind(border);
    border-radius: v-bind(borderRadius);
    box-shadow: v-bind(boxShadow);
    z-index: v-bind(zIndex);
    cursor: pointer;
    opacity: v-bind(opacity);
    align-self: v-bind(alignSelf);
}
</style>
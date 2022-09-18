<template>
    <p class="ez-paragraph">
        <slot>&nbsp;</slot>
    </p>
</template>

<script setup>
const props = defineProps({
    textAlign: { type: String, default: 'left' },           // css text-align
})
</script>
    
<style scoped>
.ez-paragraph {
    padding: 0;
    margin: 0;
    text-align: v-bind(textAlign);
    line-height: 1em
}
</style>
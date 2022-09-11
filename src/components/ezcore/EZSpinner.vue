<template>
    <EZGroup class="ez-spinner" border="3px solid var(--theme-main)" borderRadius="50%" width="2em" height="2em" />
</template>

<script setup>
import EZGroup from './EZGroup.vue';

</script>

<style>
.ez-spinner {
    border-right-color: transparent !important;
    animation: ez-spinner .75s linear infinite;
}

@keyframes ez-spinner {
    to {
        transform: rotate(360deg);
    }
}
</style>
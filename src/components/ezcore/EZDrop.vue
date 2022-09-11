<template>
    <EZGroup noSelect="true" class="ez-drop" width="100%" height="300px" border="1px solid gray" borderRadius="20px"
        hJustify="center" vJustify="center" @drop="drop_handler" @dragover="dragover_handler">
        <EZLabel :color="color" size="1em">
            <slot>Drop File Here</slot>
        </EZLabel>
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue';
import EZGroup from './EZGroup.vue'
import EZLabel from './EZLabel.vue';
const refFiles = ref([])
const emit = defineEmits(['onGetDropFiles'])
const props = defineProps({
    color: { type: String, default: 'var(--theme-main)' },           // css color
})
function dragover_handler(ev) {
    ev.preventDefault();
}
function drop_handler(ev) {
    ev.preventDefault();
    refFiles.value.length = 0
    if (ev.dataTransfer.items) {
        for (var i = 0; i < ev.dataTransfer.items.length; i++) {
            if (ev.dataTransfer.items[i].kind === 'file') {
                const file = ev.dataTransfer.items[i].getAsFile();
                refFiles.value.push(file)
            }
        }
    } else {
        for (var i = 0; i < ev.dataTransfer.files.length; i++) {
            const file = ev.dataTransfer.files[i]
            refFiles.value.push(file)
        }
    }
    emit("onGetDropFiles", refFiles.value)
}
</script>

<style scoped>
.ez-drop {
    cursor: grabbing;
    border-color: v-bind(color);
}
</style>
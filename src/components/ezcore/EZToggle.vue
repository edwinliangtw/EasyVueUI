<template>
    <EZGroup noSelect="true" class="ez-toggle" gap="3px" @click="onClick()" vJustify="center">
        <EZGroup bg="var(--theme-toggle-bg)" :borderRadius="borderRadius" border="1px solid white" width="15px"
            height="15px" boxShadow="0 0 5px var(--theme-toggle-shadow)">
            <EZLabel>
                <template v-if="refChecked">
                    <div v-if="type=='checkBox'" class="symbol-check"></div>
                    <div v-else class="symbol-radio"></div>
                </template>
                <template v-else>&nbsp;</template>
            </EZLabel>
        </EZGroup>
        <EZLabel vJustify="center">
            <slot></slot>
        </EZLabel>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue'
import EZLabel from '@/components/ezcore/EZLabel.vue'
import { ref } from 'vue'
const refChecked = ref(false)
const borderRadius = ref('4px')
const props = defineProps({
    type: { type: String, default: 'checkBox' }, // checkBox | radioBox
    name: { type: String, required: true },
    checked: { type: String, default: 'false' }, // true | false
})
const emit = defineEmits(['onToggle'])
switch (props.type) {
    case 'checkBox': borderRadius.value = '4px'; break;
    case 'radioBox': borderRadius.value = '15px'; break;
}
switch (props.checked) {
    case 'true': refChecked.value = true; break;
    case 'false': refChecked.value = false; break;
}
function onClick() {
    if (props.type == 'checkBox') {
        emit('onToggle', { name: props.name, checked: refChecked.value = !refChecked.value })
    } else emit('onToggle', { name: props.name, checked: refChecked.value = true })
}
</script>

<style scoped>
.ez-toggle {
    cursor: pointer;
}

.symbol-check {
    position: relative;
    left: 3px;
    top: -1px;
    width: 6px;
    height: 10px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}

.symbol-radio {
    position: relative;
    left: 2px;
    top: 0px;
    width: 9px;
    height: 9px;
    background: #FFF;
    border-radius: 9px;
}
</style>
<template>
    <EZDialog titleText="Alert" @onClose="$emit('onClose')">
        <EZLabel size="1em">Alert Dialog</EZLabel>
        <EZGroup hJustify="flex-end" width="100%">
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)" @click="$emit('onClose')">
                <EZLabel color="white" size="1em">OK</EZLabel>
            </EZButton>
        </EZGroup>
    </EZDialog>
</template>

<script setup>
import EZDialog from './EZDialog.vue';
import EZLabel from './EZLabel.vue';
import EZButton from './EZButton.vue';
import EZGroup from './EZGroup.vue';
const emit = defineEmits(['onClose'])
</script>
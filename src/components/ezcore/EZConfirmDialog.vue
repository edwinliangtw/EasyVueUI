<template>
    <EZDialog titleText="Confirm" @onClose="$emit('onClose', false)">
        <EZLabel size="1em">Confirm Dialog</EZLabel>
        <EZGroup gap="10px" hJustify="flex-end" width="100%">
            <EZButton bg="var(--theme-main-light)" border="1px solid var(--theme-main)"
                boxShadow="0 0 5px var(--theme-main)" @click="$emit('onClose', false)">
                <EZLabel color="var(--theme-main)" size="1em">Cancel</EZLabel>
            </EZButton>
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)" @click="$emit('onClose', true)">
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

<style scoped>

</style>
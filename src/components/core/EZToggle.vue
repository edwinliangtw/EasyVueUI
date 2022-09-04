<template>
    <EZGroup class="ez-pointer" gap="3px" @click="onToggle(name, checked = !checked)">
        <EZGroup bg="yellow" borderRadius="4px" border="1px solid red" width="15px" height="15px" align="center">
            <EZLabel y="-5px">
                <template v-if="checked">✔</template>
                <template v-else>&nbsp;</template>
            </EZLabel>
        </EZGroup>
        <EZLabel><slot></slot></EZLabel>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZImage from '@/components/core/EZImage.vue'
import EZLabel from '@/components/core/EZLabel.vue'
import { ref } from 'vue'
const checked = ref(false)
const props = defineProps({
    name:{ type: String, required:true },
    onToggle: { type: Function, required: true },
})
</script>

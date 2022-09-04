<template>
    <EZGroup layout="vertical" @mouseleave="addOutsideEvent()"  @mouseenter="removeOutsideEvent()">
        <EZGroup class="ez-pointer" justify="space-between" @click="showSelection=true" :width="width" :bg="bg" padding="5px">
            <EZLabel color="white">{{title}}</EZLabel>
            <EZLabel color="white">
                <template v-if="showSelection">▲</template>
                <template v-else>▼</template>
            </EZLabel>
        </EZGroup>
        <EZGroup v-if="showSelection">
            <EZGroup layout="vertical" position="absolute">
                <EZButton v-for="(item, index) in items" :key="index" borderRadius="0px" :bgUpColor="bg" :width="width" padding="5px" @click="onSelect(items[index], index), showSelection=false, title = items[index]">
                    {{items[index]}}
                </EZButton>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZLabel from '@/components/core/EZLabel.vue'
import EZButton from '@/components/core/EZButton.vue'
import { ref } from 'vue'
const showSelection = ref(false)
defineProps({
    title: { type: String, default: 'please select:' },
    items: { type: Array, default: [] },
    onSelect: { type: Function, required: true },
    width: { type: String, default: '100px' },
    bg: { type: String, default: '#333' },
})
function close(){
    showSelection.value = false;
    document.body.removeEventListener('click', close)
}
function addOutsideEvent(){
    document.body.addEventListener('click', close)
}
function removeOutsideEvent(){
    document.body.removeEventListener('click', close)
}
</script>
<template>
    <EZGroup layout="v" noSelect="true" @mouseleave="addOutsideEvent()" @mouseenter="removeOutsideEvent()">
        <EZGroup class="ez-select" hJustify="space-between" width="100%" :bg="bg" padding="5px 10px" cursorEnable="true"
            :borderRadius="showSelection?'5px 5px 0 0':'5px'" @click="showSelection=!showSelection"
            :boxShadow="boxShadow" gap="10px">
            <EZLabel color="white">{{title}}</EZLabel>
            <EZGroup :class="[showSelection?'symbol-arrow-up':'symbol-arrow-down']" />
        </EZGroup>
        <EZGroup v-if="showSelection" zIndex="9999999" width="100%">
            <EZGroup layout="v" position="absolute" width="100%" boxShadow="0 0 5px var(--theme-main)"
                borderRadius="0 0 5px 5px">
                <EZButton v-for="(item, key, index) in items" :key="index"
                    :borderRadius="index==Object.keys(items).length-1?'0 0 5px 5px':'0px'" :bg="bg" width="100%"
                    padding="5px" @click="$emit('onSelect',[key, item.label]), showSelection=false, title = item.label">
                    <EZLabel :color="color" size="1em">{{item.label}}</EZLabel>
                </EZButton>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue'
import EZLabel from '@/components/ezcore/EZLabel.vue'
import EZButton from '@/components/ezcore/EZButton.vue'
import { ref } from 'vue'
const showSelection = ref(false)
defineProps({
    title: { type: String, default: 'please select' },
    items: {
        type: Object, default() {
            return {
                keyItem1: { label: 'label 1' },
                keyItem2: { label: 'label 2' },
                keyItem3: { label: 'label 3' },
            }
        }
    },
    bg: { type: String, default: 'black' },
    color: { type: String, default: '#FFF' },
    boxShadow: { type: String, default: '0 0 5px var(--theme-main)' },
})
function close() {
    showSelection.value = false;
    document.body.removeEventListener('click', close)
}
function addOutsideEvent() {
    document.body.addEventListener('click', close)
}
function removeOutsideEvent() {
    document.body.removeEventListener('click', close)
}
</script>

<style scoped>
.symbol-arrow-up {
    position: relative;
    left: -1px;
    top: 8px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(225deg);
}

.symbol-arrow-down {
    position: relative;
    left: -1px;
    top: 5px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}
</style>
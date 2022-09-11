<template>
    <teleport to="body">
        <EZGroup class="ez-dialog" width="100%" height="100%" bg="rgba(255,255,255,.5)" hJustify="center"
            vJustify="center" padding="10px" boxShadow="0 0 5px var(--theme-main)" zIndex="9999999">
            <EZGroup layout="v" :width="width" minWidth="300px" bg="var(--theme-main-light)" borderRadius="7px"
                boxShadow="0 0 5px var(--theme-main)">
                <EZGroup bg="var(--theme-main)" borderRadius="5px 5px 0 0" padding="5px 10px" hJustify="space-between">
                    <EZGroup></EZGroup>
                    <EZLabel color="white">{{titleText}}</EZLabel>
                    <EZGroup>
                        <EZGroup position="absolute" x="-10px" @click="$emit('onClose')" width="20px" height="20px"
                            cursorEnable="true">
                            <EZGroup class="symbol-arrow-down" />
                            <EZGroup class="symbol-arrow-up" />
                        </EZGroup>
                    </EZGroup>
                </EZGroup>
                <EZGroup layout="v" width="100%" hJustify="center" padding="10px" gap="10px">
                    <slot>Dialog</slot>
                </EZGroup>
            </EZGroup>
        </EZGroup>
    </teleport>
</template>

<script setup>
import { getCurrentInstance, onUnmounted } from 'vue';
import EZGroup from './EZGroup.vue';
import EZLabel from './EZLabel.vue';
const emit = defineEmits(['onClose'])
defineProps({
    titleText: { type: String, default: 'title' },
    width: { type: String, default: 'auto' },
})
const $ez = getCurrentInstance().appContext.config.globalProperties.$ez
$ez.dialogMode = true
onUnmounted(() => $ez.dialogMode = false)
</script>

<style scoped>
.ez-dialog {
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
}

.symbol-arrow-up {
    position: absolute;
    left: 3px;
    top: 9px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(225deg);
}

.symbol-arrow-down {
    position: absolute;
    left: 3px;
    top: 4px;
    width: 6px;
    height: 6px;
    border-bottom: 2px solid white;
    border-right: 2px solid white;
    transform: rotate(45deg);
}
</style>
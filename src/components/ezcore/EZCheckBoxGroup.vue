<template>
    <EZGroup gap="10px" @click="$emit('onItemsSelect',refSelected)">
        <EZToggle type="checkBox" v-for="(val, key, index) in keysLabels" :key="index" :name="key"
            :checked="val.checked" @onToggle="onToggle">
            {{val.label}}
        </EZToggle>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue'
import EZToggle from '@/components/ezcore/EZToggle.vue'
import { ref } from 'vue';
const refKeys = ref({})
const refSelected = ref([])
const props = defineProps({
    keysLabels: {
        type: Object, default() {
            return {
                keyLeft: { label: 'label left', checked: 'true' },
                keyCenter: { label: 'label center', checked: 'false' },
                keyRight: { label: 'label right', checked: 'false' },
            }
        }
    },
})
Object.keys(props.keysLabels).forEach(k => refKeys.value[k] = props.keysLabels[k].checked == 'false' ? false : true)
function onToggle({ name, checked }) {
    refKeys.value[name] = checked
    refSelected.value.length = 0
    Object.keys(refKeys.value).forEach(k => refKeys.value[k] && refSelected.value.push([k, props.keysLabels[k].label]))
}
</script>
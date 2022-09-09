<template>
    <EZGroup gap="10px" @click="$emit('onItemSelect',refSelected)">
        <EZToggle type="radioBox" v-for="(val, key) in keysLabels" :key="refKey[key]" :name="key"
            :checked="refKeys[key]?'true':'false'" @onToggle="onToggle">
            {{val.label}}
        </EZToggle>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue'
import EZToggle from '@/components/ezcore/EZToggle.vue'
import { ref } from 'vue';
const refKeys = ref({})
const refKey = ref({})
const refSelected = ref([])
const props = defineProps({
    keysLabels: {
        type: Object, default() {
            return {
                keyBoy: { label: 'label boy', checked: 'true' },
                keyGirl: { label: 'label girl' },
                keyDog: { label: 'label dog' },
            }
        }
    },
})
const kls = Object.keys(props.keysLabels)
kls.forEach(k => {
    refKeys.value[k] = props.keysLabels[k].checked ? true : false
    refKey.value[k] = Math.random()
})
function onToggle({ name, checked }) {
    kls.forEach(k => refKeys.value[k] = false)
    refKeys.value[name] = checked
    if (checked) {
        refSelected.value = [name, props.keysLabels[name].label]
        kls.forEach(k => !refKeys.value[k] && (refKey.value[k] = Math.random()))
    }
}
</script>
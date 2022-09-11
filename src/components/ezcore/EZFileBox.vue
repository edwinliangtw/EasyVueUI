<template>
    <EZGroup width="400px" boxShadow="0 0 5px var(--theme-main)" borderRadius="5px">
        <EZGroup bg="white" width="calc(100% - 100px)" borderRadius="5px 0 0 5px" padding="5px 10px">
            <EZLabel color="gray">{{refFilePath}}</EZLabel>
        </EZGroup>
        <EZButton borderRadius="0 5px 5px 0" width="100px" @click="refFile.click()" @change="">
            <EZLabel color="white">Choose File</EZLabel>
        </EZButton>
        <input ref="refFile" type="file" style="display:none"
            @change="refFilePath=refFile.files[0].name, $emit('onFile',refFile.files[0])" />
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue';
import EZGroup from './EZGroup.vue';
import EZButton from './EZButton.vue';
import EZLabel from './EZLabel.vue';
const refFile = ref(null)
const refFilePath = ref('Choose a File...')
const emit = defineEmits(['onFile'])
</script>
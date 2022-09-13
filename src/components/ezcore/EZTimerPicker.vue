<template>
    <EZDialog titleText="Time Picker" width="300px" @onClose="$emit('onClose')">
        <EZGroup width="100%" hJustify="space-around" height="300px">
            <EZGroup ref="refHG" width="25%" height="100%" bg="black" overflow="auto" hJustify="center" padding="5px"
                gap="5px" borderRadius="5px" border="3px solid var(--theme-main)">
                <EZButton v-for="i in 24" width="100%" alignSelf="start" borderRadius="0" @click="refH=i"
                    :bg="refH==i?'white':'var(--theme-main)'">
                    <EZLabel :color="refH==i?'black':'white'" size=".8em" :class="{'time-pointer':refH==i}">
                        {{(i-1).toString().padStart(2,'0')}}
                    </EZLabel>
                </EZButton>
            </EZGroup>
            <EZRuleV />
            <EZGroup ref="refMG" width="25%" height="100%" bg="black" overflow="auto" hJustify="center" padding="5px"
                gap="5px" borderRadius="5px" border="3px solid var(--theme-main)">
                <EZButton v-for="i in 60" width="100%" alignSelf="start" borderRadius="0" @click="refM=i"
                    :bg="refM==i?'white':'var(--theme-main)'">
                    <EZLabel :color="refM==i?'black':'white'" size=".8em" :class="{'time-pointer':refM==i}">
                        {{(i-1).toString().padStart(2,'0')}}</EZLabel>
                </EZButton>
            </EZGroup>
            <EZRuleV />
            <EZGroup ref="refSG" width="25%" height="100%" bg="black" overflow="auto" hJustify="center" padding="5px"
                gap="5px" borderRadius="5px" border="3px solid var(--theme-main)">
                <EZButton v-for="i in 60" width="100%" alignSelf="start" borderRadius="0" @click="refS=i"
                    :bg="refS==i?'white':'var(--theme-main)'">
                    <EZLabel :color="refS==i?'black':'white'" size=".8em" :class="{'time-pointer':refS==i}">
                        {{(i-1).toString().padStart(2,'0')}}</EZLabel>
                </EZButton>
            </EZGroup>
        </EZGroup>
        <EZGroup hJustify="space-between" width="100%">
            <EZLabel size=".8em" color="black" bg="white" padding="0px 5px" borderRadius="5px">
                {{(refH-1).toString().padStart(2,'0')}}:{{(refM-1).toString().padStart(2,'0')}}:{{(refS-1).toString().padStart(2,'0')}}
            </EZLabel>
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)"
                @click="$emit('onClose',(refH-1).toString().padStart(2,'0')+':'+(refM-1).toString().padStart(2,'0')+':'+(refS-1).toString().padStart(2,'0'))">
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
import EZRuleV from './EZRuleV.vue';
import { ref, watch } from 'vue'
const emit = defineEmits(['onClose'])
const refH = ref(1)
const refM = ref(1)
const refS = ref(1)
const refHG = ref(null)
const refMG = ref(null)
const refSG = ref(null)

watch(refH, (v) => {
    refHG.value.$el.scrollTop = (v - 1 - 4) * (refHG.value.$el.scrollHeight - 5) / 24
})
watch(refM, (v) => {
    refMG.value.$el.scrollTop = (v - 1 - 4) * (refMG.value.$el.scrollHeight - 5) / 60
})
watch(refS, (v) => {
    refSG.value.$el.scrollTop = (v - 1 - 4) * (refSG.value.$el.scrollHeight - 5) / 60
})
</script>

<style>
.time-pointer::before {
    position: absolute;
    display: block;
    content: '▶';
    line-height: 1em;
    font-size: 10px;
    left: -25px
}

.time-pointer::after {
    position: absolute;
    display: block;
    content: '◀';
    line-height: 1em;
    font-size: 10px;
    left: 29px
}
</style>
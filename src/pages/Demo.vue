<template>
    <EZGroup layout="v" gap="20px" width="90%" bg="white" margin="0 auto" padding="50px" hJustify="center">
        <EZLabel color="var(--theme-main)" size="2em">功能展示</EZLabel>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZSelect width="200px" @onSelect="onSelect" bg="#333" boxShadow="0 0 5px #333" />
            <EZSelect width="200px" @onSelect="onSelect" bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZButton bg="#EC7063" boxShadow="0 0 5px #EC7063" padding="5px 10px" alignSelf="center">
                <EZLabel size="1em" color="white">Red</EZLabel>
            </EZButton>
            <EZButton bg="#2ECC71" boxShadow="0 0 5px #2ECC71" padding="5px 10px" alignSelf="center">
                <EZLabel size="1em" color="white">Green</EZLabel>
            </EZButton>
            <EZButton bg="#5DADE2" boxShadow="0 0 5px #5DADE2" padding="5px 10px" alignSelf="center">
                <EZLabel size="1em" color="white">Blue</EZLabel>
            </EZButton>

            <EZRuleV />

            <EZButton bg="var(--theme-main-light)" boxShadow="0 0 5px var(--theme-main-light)" padding="10px"
                alignSelf="center">
                <EZLabel size="1em" color="white">
                    <EZImage src="img/vue.png" />
                    IconButton
                </EZLabel>
            </EZButton>
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refDialogOpen=!refDialogOpen">
                <EZLabel size="1em" color="white">Show Dialog</EZLabel>
            </EZButton>
            <EZDialog v-if="refDialogOpen" @onClose="refDialogOpen=false" />

            <EZRuleV />

            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refAlertDialogOpen=!refAlertDialogOpen">
                <EZLabel size="1em" color="white">Show Alert Dialog</EZLabel>
            </EZButton>
            <EZAlertDialog v-if="refAlertDialogOpen" @onClose="refAlertDialogOpen=false" />

            <EZRuleV />

            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refConfirmDialogOpen=!refConfirmDialogOpen">
                <EZLabel size="1em" color="white">Show Confirm Dialog</EZLabel>
            </EZButton>
            <EZConfirmDialog v-if="refConfirmDialogOpen" @onClose="refConfirmDialogOpen=false" />

            <EZRuleH />

            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refColorPickerOpen=!refColorPickerOpen">
                <EZLabel size="1em" color="white">Show Color Picker</EZLabel>
            </EZButton>
            <EZColorPicker v-if="refColorPickerOpen" @onClose="onColor" />

            <EZRuleV />

            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refDatePickerOpen=!refDatePickerOpen">
                <EZLabel size="1em" color="white">Show Date Picker</EZLabel>
            </EZButton>
            <EZDatePicker v-if="refDatePickerOpen" @onClose="onDate" />

            <EZRuleV />

            <EZButton boxShadow="0 0 5px var(--theme-main)" padding="5px 10px" alignSelf="center"
                @click="refTimePickerOpen=!refTimePickerOpen">
                <EZLabel size="1em" color="white">Show Time Picker</EZLabel>
            </EZButton>
            <EZTimerPicker v-if="refTimePickerOpen" @onClose="onTime" />

        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZFileBox @onFile="onFile" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZSpinner border="1px solid var(--theme-main)" />
            <EZSpinner border="3px solid var(--theme-main)" />
            <EZSpinner border="5px solid var(--theme-main)" />
            <EZSpinner border="13px solid var(--theme-main)" />
            <EZSpinner border="3px solid var(--theme-main)" filter="drop-shadow(0 0 5px var(--theme-main))" />
            <EZSpinner border="3px solid var(--theme-main)" filter="blur(5px)" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            vJustify="center" gap="30px">
            <EZSliderV length="100px" min="1" max="5" />
            <EZSliderH length="100px" min="0" max="10" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            vJustify="center" gap="30px">
            <EZTextEdtitor />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZCarousel width="100%" height="300px" bg="black">
                <EZGroup layout="v" bg="red" hJustify="center" vJustify="center" gap="10px">
                    <EZLabel color="white" size="2em">Carousel A</EZLabel>
                    <EZButton bg="red" border="1px solid white">
                        <EZLabel color="white">Click Me</EZLabel>
                    </EZButton>
                </EZGroup>
                <EZGroup layout="v" bg="green" hJustify="center" vJustify="center">
                    <EZLabel color="white" size="2em">Carousel B</EZLabel>
                </EZGroup>
                <EZGroup layout="v" bg="blue" hJustify="center" vJustify="center">
                    <EZLabel color="white" size="2em">Carousel C</EZLabel>
                </EZGroup>
            </EZCarousel>
        </EZGroup>
        <EZGroup layout="v" width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px"
            hJustify="center">
            <EZDrop @onGetDropFiles="onGetDropFiles" />
            <EZGroup layout="v" padding="10px">
                <EZLabel size="1em" color="gray" v-for="file in refDrops">{{file.name}}</EZLabel>
            </EZGroup>
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center"
            gap="10px">
            <EZTable border="1px dotted var(--theme-main)" width="400px" height="200px" minWidth="400px">
                <tr>
                    <td>
                        <EZGroup width="100%" height="100%" hJustify="flex-start" vJustify="flex-start">
                            <EZLabel size="1em" color="var(--theme-main)">left top</EZLabel>
                        </EZGroup>
                    </td>
                    <td>
                        <EZGroup width="100%" height="100%" hJustify="center" vJustify="center">
                            <EZLabel size="1em" color="var(--theme-main)">center</EZLabel>
                        </EZGroup>
                    </td>
                    <td>
                        <EZGroup width="100%" height="100%" hJustify="flex-end" vJustify="flex-end">
                            <EZLabel size="1em" color="var(--theme-main)">right bottom</EZLabel>
                        </EZGroup>
                    </td>
                </tr>
                <tr>
                    <td>
                        <EZGroup width="100%" height="100%" hJustify="center" vJustify="flex-end" gap="10px"
                            padding="20px">
                            <EZButton alignSelf="start">
                                <EZLabel size="1em" color="white">Edwin</EZLabel>
                            </EZButton>
                            <EZButton>
                                <EZLabel size="1em" color="white">Edwin</EZLabel>
                            </EZButton>
                            <EZButton alignSelf="center">
                                <EZLabel size="1em" color="white">Edwin</EZLabel>
                            </EZButton>
                        </EZGroup>
                    </td>
                    <td colspan="2">
                        <EZGroup width="100%" height="100%" hJustify="space-around" vJustify="center" padding="20px"
                            bg="var(--theme-main)">
                            <EZLabel size="1em" color="white" alignSelf="start">Hi</EZLabel>
                            <EZLabel size="1em" color="white" alignSelf="center">Say</EZLabel>
                            <EZLabel size="1em" color="white" alignSelf="end">HelloWorld</EZLabel>
                        </EZGroup>
                    </td>
                </tr>
            </EZTable>
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZTextInput text="SingleLine" borderRadius="5px" bg="rgba(255,255,255,.5)" color="gray" focusColor="blue"
                rwdWidth="720" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZTextInput text="MutipleLines" borderRadius="5px" bg="rgba(255,255,255,.5)" color="gray" row="10"
                singleLine="false" focusColor="red" rwdWidth="720" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZToggle name="checkBox" type="checkBox" @onToggle="onToggle">checkBox</EZToggle>
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZToggle name="radioBox" type="radioBox" @onToggle="onToggle">radioBox</EZToggle>
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZCheckBoxGroup layout="h" @onItemsSelect="onItemsSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZCheckBoxGroup layout="v" @onItemsSelect="onItemsSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZRadioBoxGroup layout="h" @onItemSelect="onItemSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="var(--theme-main-light)" padding="10px" borderRadius="10px" hJustify="center">
            <EZRadioBoxGroup layout="v" @onItemSelect="onItemSelect" />
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue';
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZTextInput from '@/components/ezcore/EZTextInput.vue';
import EZToggle from '@/components/ezcore/EZToggle.vue';
import EZCheckBoxGroup from '@/components/ezcore/EZCheckBoxGroup.vue';
import EZRadioBoxGroup from '@/components/ezcore/EZRadioBoxGroup.vue';
import EZSelect from '@/components/ezcore/EZSelect.vue';
import EZDrop from '@/components/ezcore/EZDrop.vue';
import EZTable from '@/components/ezcore/EZTable.vue';
import EZButton from '@/components/ezcore/EZButton.vue';
import EZImage from '@/components/ezcore/EZImage.vue';
import EZDialog from '@/components/ezcore/EZDialog.vue';
import EZAlertDialog from '@/components/ezcore/EZAlertDialog.vue';
import EZConfirmDialog from '@/components/ezcore/EZConfirmDialog.vue';
import EZFileBox from '@/components/ezcore/EZFileBox.vue';
import EZColorPicker from '@/components/ezcore/EZColorPicker.vue';
import EZDatePicker from '@/components/ezcore/EZDatePicker.vue';
import EZTimerPicker from '@/components/ezcore/EZTimerPicker.vue';
import EZSpinner from '@/components/ezcore/EZSpinner.vue';
import EZCarousel from '@/components/ezcore/EZCarousel.vue';
// import EZTextEdtitor from '@/components/ezcore/EZTextEdtitor/index.vue';
import EZRuleH from '@/components/ezcore/EZRuleH.vue';
import EZRuleV from '@/components/ezcore/EZRuleV.vue';
import EZSliderH from '@/components/ezcore/EZSliderH.vue';
import EZSliderV from '../components/ezcore/EZSliderV.vue';
import EZTextEdtitor from '../components/ezcore/EZTextEdtitor/index.vue';

const refDrops = ref(null)
const refDialogOpen = ref(false)
const refAlertDialogOpen = ref(false)
const refConfirmDialogOpen = ref(false)
const refColorPickerOpen = ref(false)
const refDatePickerOpen = ref(false)
const refTimePickerOpen = ref(false)
function onColor(obj) {
    refColorPickerOpen.value = false;
    console.log(obj)
}
function onDate(obj) {
    refDatePickerOpen.value = false;
    console.log(obj)
}
function onTime(obj) {
    refTimePickerOpen.value = false;
    console.log(obj)
}
function onFile(obj) {
    console.log(obj)
}
function onGetDropFiles(obj) {
    console.log(obj)
    refDrops.value = [...obj]
}
function onSelect(obj) {
    console.log(obj)
}
function onToggle(obj) {
    console.log(obj)
}
function onItemsSelect(obj) {
    console.log(obj)
}
function onItemSelect(obj) {
    console.log(obj)
}
</script>
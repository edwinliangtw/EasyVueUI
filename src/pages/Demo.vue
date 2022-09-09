<template>
    <EZGroup layout="v" gap="20px" width="90%" bg="white" margin="0 auto" padding="50px" hJustify="center">
        <EZLabel color="deeppink" size="2em">功能展示</EZLabel>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center" gap="10px">
            <EZSelect width="200px" @onSelect="onSelect" />
            <EZSelect width="200px" @onSelect="onSelect" bg="deeppink" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZTextInput text="SingleLine" borderRadius="5px" bg="rgba(255,255,255,.5)" color="gray" focusColor="blue"
                rwdWidth="720" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZTextInput text="MutipleLines" borderRadius="5px" bg="rgba(255,255,255,.5)" color="gray" row="10"
                singleLine="false" focusColor="red" rwdWidth="720" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZToggle name="checkBox" type="checkBox" @onToggle="onToggle">checkBox</EZToggle>
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZToggle name="radioBox" type="radioBox" @onToggle="onToggle">radioBox</EZToggle>
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZCheckBoxGroup layout="h" @onItemsSelect="onItemsSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZCheckBoxGroup layout="v" @onItemsSelect="onItemsSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZRadioBoxGroup layout="h" @onItemSelect="onItemSelect" />
        </EZGroup>
        <EZGroup width="100%" bg="pink" padding="10px" borderRadius="10px" hJustify="center">
            <EZRadioBoxGroup layout="v" @onItemSelect="onItemSelect" />
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZTextInput from '@/components/ezcore/EZTextInput.vue';
import EZToggle from '@/components/ezcore/EZToggle.vue';
import EZCheckBoxGroup from '@/components/ezcore/EZCheckBoxGroup.vue';
import EZRadioBoxGroup from '@/components/ezcore/EZRadioBoxGroup.vue';
import EZSelect from '@/components/ezcore/EZSelect.vue';

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
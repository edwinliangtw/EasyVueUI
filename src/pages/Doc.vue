<template>
    <EZGroup layout="v" width="90%" bg="white" margin="0 auto" hJustify="center">
        <EZGroup layout="v" gap="30px" width="100%" bg="#FFF" vJustify="center" hJustify="center" padding="50px">
            <EZLabel color="deeppink" size="2em">指南手冊</EZLabel>
            <EZLabel color="gray" size="1em">所有元件皆繼承 EZComponent，即 EZGroup, EZButton, EZImage, EZLabel, EZRouterLabel
                皆有共用 props 屬性來自 EZComponent。</EZLabel>
            <EZImage src="img/sample.png" width="100%" borderRadius="20px" boxShadow="0 0 5px gray" />
            <EZGroup layout="v" width="100%" gap="20px">
                <!-- EZComponent -->
                <EZLabel color="deeppink" size="1.3em">EZComponent Props</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
position: { type: String, default: 'relative' },    // css position
x: { type: String, default: '0' },                  // css left
y: { type: String, default: '0' },                  // css top
width: { type: String, default: 'auto' },           // css width
minWidth: { type: String, default: 'auto' },        // css min-width
maxWidth: { type: String, default: 'auto' },        // css max-width
height: { type: String, default: 'auto' },          // css height
minHeight: { type: String, default: 'auto' },       // css min-height
maxHeight: { type: String, default: 'auto' },       // css max-height
bg: { type: String, default: 'none' },              // css background
padding: { type: String, default: '0' },            // css padding
margin: { type: String, default: '0' },             // css margin     
border: { type: String, default: 'none' },          // css border
borderRadius: { type: String, default: '0' },       // css border-raduis
boxShadow: { type: String, default: 'none' },       // css box-shadow
zIndex: { type: String, default: '' },              // css z-index
cursorEnable: { type: String, default: 'false' },   // true | false - display cursor pointer
opacity: { type: String, default: '1' },            // css opacity
alignSelf: { type: String, default: 'auto' },       // css align-self
title: { type: String, default: '' },               // html title
rwdWidth: { type: String, default: '' },            // number without unit - rwd break point setting</pre>
                </EZLabel>
                <!-- EZGroup -->
                <EZLabel color="deeppink" size="1.3em">EZGroup Props</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
layout: { type: String, default: 'h' },             // v | h - vertical or horizontal layout
wrap: { type: String, default: 'true' },            // true | false - wrap content
vJustify: { type: String, default: 'none' },        // css justify-content - vertical
hJustify: { type: String, default: 'none' },        // css justify-content - horizontal
gap: { type: String, default: '0' },                // css gap - gap between elements </pre>
                </EZLabel>
                <!-- EZImage -->
                <EZLabel color="deeppink" size="1.3em">EZImage Props (extends EZGroup)</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
src: { type: String, required: true },              // html src
width: { type: String, default: '' },               // css width
height: { type: String, default: '' },              // css height </pre>
                </EZLabel>
                <!-- EZLabel -->
                <EZLabel color="deeppink" size="1.3em">EZLabel Props (extends EZGroup)</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
color: { type: String, default: '#000' },           // css color
size: { type: String, default: '1em' },             // css font-size
textShadow: { type: String, default: 'none' },      // css text-shadow </pre>
                </EZLabel>
                <!-- EZRouterLabel -->
                <EZLabel color="deeppink" size="1.3em">EZRouterLabel Props (extends RouterLink, implements EZLabel)
                </EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
include all RouterLink props</pre>
                </EZLabel>
                <!-- EZButton -->
                <EZLabel color="deeppink" size="1.3em">EZButton Props (extends EZGroup)</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll">
                    <pre>
include all EZGroup props</pre>
                </EZLabel>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZImage from '@/components/ezcore/EZImage.vue';
</script>
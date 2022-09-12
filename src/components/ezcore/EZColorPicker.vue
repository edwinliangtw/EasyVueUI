<template>
    <EZDialog titleText="Color Picker" @onClose="$emit('onClose')">
        <EZGroup border="3px solid var(--theme-main)" borderRadius="5px" noSelect="true">
            <EZGroup>
                <canvas ref="refSingleColor" width="255" height="255"></canvas>
            </EZGroup>
            <EZGroup bg="var(--theme-main)" width="10px" height="255px"></EZGroup>
            <EZGroup>
                <canvas ref="refAllColor" width="40" height="255"></canvas>
            </EZGroup>
        </EZGroup>
        <EZGroup hJustify="space-between" width="100%" vJustify="center">
            <EZGroup gap="10px">
                <EZGroup :bg="refCurrentColor" width="20px" height="20px" border="3px solid var(--theme-main)"
                    borderRadius="5px"></EZGroup>
                <EZLabel size=".8em" color="black" bg="white" padding="0px 5px" borderRadius="5px">{{refRGB}}</EZLabel>
                <EZLabel size=".8em" color="black" bg="white" padding="0px 5px" borderRadius="5px">{{refHex}}</EZLabel>
            </EZGroup>
            <EZButton bg="var(--theme-main)" boxShadow="0 0 5px var(--theme-main)"
                @click="$emit('onClose', {rgb:refRGB.split(', ').map(c=>parseInt(c)), hex:refHex})">
                <EZLabel color="white" size="1em">OK</EZLabel>
            </EZButton>
        </EZGroup>
    </EZDialog>
</template>

<script setup>
import EZDialog from './EZDialog.vue'
import EZLabel from './EZLabel.vue'
import EZButton from './EZButton.vue'
import EZGroup from './EZGroup.vue'
import { ref, onMounted, onBeforeUnmount } from 'vue';
const emit = defineEmits(['onClose'])
const refSingleColor = ref(null)
const refAllColor = ref(null)
const refCurrentColor = ref('')
const refRGB = ref('255, 0, 0')
const refHex = ref('#FF0000')

onMounted(() => {
    createMultiColorSpectrum()
    createSingleColorSpectrum()
    refCurrentColor.value = 'rgb(255, 0 ,0)'
})

onBeforeUnmount(() => {
    refAllColor.value.onmousedown = null
    refAllColor.value.onmousemove = null
    refAllColor.value.onmouseup = null
    refAllColor.value.onmouseleave = null
    refSingleColor.value.onmousedown = null
    refSingleColor.value.onmousemove = null
    refSingleColor.value.onmouseup = null
    refSingleColor.value.onmouseleave = null
})

let isMouseDown = false

const createSingleColorSpectrum = function (color) {
    let canvas = refSingleColor.value
    let ctx = canvas.getContext('2d')

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    if (!color) color = '#f00'
    ctx.fillStyle = color;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let whiteGradient = ctx.createLinearGradient(0, 0, canvas.width, 0);
    whiteGradient.addColorStop(0, "#fff");
    whiteGradient.addColorStop(1, "transparent");
    ctx.fillStyle = whiteGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    let blackGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    blackGradient.addColorStop(0, "transparent");
    blackGradient.addColorStop(1, "#000");
    ctx.fillStyle = blackGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    refSingleColor.value.onmousedown = e => { isMouseDown = true, spectrumClick(e) }
    refSingleColor.value.onmousemove = e => { isMouseDown && spectrumClick(e) }
    refSingleColor.value.onmouseup = e => { isMouseDown = false, spectrumClick(e) }
    refSingleColor.value.onmouseleave = e => { isMouseDown = false }
}

const createMultiColorSpectrum = function () {
    let canvas = refAllColor.value
    let ctx = canvas.getContext('2d')

    let hueGradient = ctx.createLinearGradient(0, 0, 0, canvas.height);
    hueGradient.addColorStop(0.00, "#ff0000");
    hueGradient.addColorStop(0.17, "#ff00ff");
    hueGradient.addColorStop(0.33, "#0000ff");
    hueGradient.addColorStop(0.50, "#00ffff");
    hueGradient.addColorStop(0.67, "#00ff00");
    hueGradient.addColorStop(0.83, "#ffff00");
    hueGradient.addColorStop(1.00, "#ff0000");

    ctx.fillStyle = hueGradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    refAllColor.value.onmousedown = e => { isMouseDown = true, hueClick(e) }
    refAllColor.value.onmousemove = e => { isMouseDown && hueClick(e) }
    refAllColor.value.onmouseup = e => { isMouseDown = false, hueClick(e) }
    refAllColor.value.onmouseleave = e => { isMouseDown = false }
}

const hueClick = function (e) {
    let y = e.pageY - getTop(e.currentTarget) - window.scrollY;
    const allColorContext = refAllColor.value.getContext('2d')
    let imgData = allColorContext.getImageData(0, y, 1, 1).data;
    createSingleColorSpectrum('rgb(' + imgData[0] + ', ' + imgData[1] + ', ' + imgData[2] + ')');
}

const spectrumClick = function (e) {
    let x = e.pageX - getLeft(e.currentTarget) - 2;
    let y = e.pageY - getTop(e.currentTarget) - window.scrollY;
    const singleColorContext = refSingleColor.value.getContext('2d')
    let imgData = singleColorContext.getImageData(x, y, 1, 1).data;
    refCurrentColor.value = 'rgb(' + imgData[0] + ', ' + imgData[1] + ', ' + imgData[2] + ')'
    refRGB.value = `${imgData[0]}, ${imgData[1]}, ${imgData[2]}`
    refHex.value = `${rgbToHex(imgData[0], imgData[1], imgData[2])}`
}

const getLeft = function (obj) {
    var offset = obj.offsetLeft;
    if (obj.offsetParent != null) offset += getLeft(obj.offsetParent);
    return offset;
};

const getTop = function (obj) {
    var offset = obj.offsetTop;
    if (obj.offsetParent != null) offset += getTop(obj.offsetParent);
    return offset;
};

const componentToHex = (c) => {
    var hex = c.toString(16);
    return hex.length == 1 ? "0" + hex : hex;
}

const rgbToHex = (r, g, b) => {
    return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}
</script>
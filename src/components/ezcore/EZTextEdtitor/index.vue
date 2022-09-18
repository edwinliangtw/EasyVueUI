<template>
    <EZGroup width="100%">

        <EZGroup ref="refTextGroup" position="fixed" pointerEvent="none" opacity="0">
            <textarea ref="refTextArea" v-model="refTextAreaValue" @keydown="onKeyDown"
                @compositionstart="onCompositionStart" @compositionupdate="onCompositionUpdate"
                @compositionend="onCompositionEnd"></textarea>
        </EZGroup>

        <EZGroup width="100%" padding="50px" bg="white">
            <template ref="refContainer" style="display:inline-flex; flex-direction: column; gap: .5em;">
                <EZParagraph v-for="(paragraph, pIndex) in refContent" :key="pIndex+'_'+paragraph.length">
                    <EZFont v-for="(font, fIndex) in splitWithEmoji(paragraph)"
                        :isFontPointer="refFontPointer.pi==pIndex && refFontPointer.fi==fIndex"
                        :isCompositionPointer="refComposition.pi == pIndex && fIndex >= refComposition.fi && fIndex < refComposition.fi + refComposition.flen"
                        @pointerdown="onFontDown(pIndex, fIndex, $event)" @pointerup="onFontUp(pIndex, fIndex, $event)"
                        :color="fontInRange(pIndex, fIndex)?'red':'black'">
                        {{font == '\n'?'&nbsp;':(font==' '?'&nbsp;':font)}}
                    </EZFont>
                </EZParagraph>
            </template>
        </EZGroup>

    </EZGroup>
</template>

<script setup>
import { nextTick, onMounted, ref, watch } from 'vue';
import EZGroup from '../EZGroup.vue';
import EZParagraph from './EZParagraph.vue';
import EZFont from './EZFont.vue';

const refContent = ref([])
const refTextArea = ref(null)
const refTextGroup = ref(null)
const refTextAreaValue = ref('')
const refContainer = ref(null)

const refFontPointer = ref({ pi: 0, fi: 0 })
const refComposition = ref({ lock: false, pi: 0, fi: 0, flen: 0 })
const refFontRangeStartIndex = ref({ pi: 0, fi: 0, x: 0, y: 0 })
const refFontRangeEndIndex = ref({ pi: 0, fi: 0, x: 0, y: 0 })
const fontRanges = []

onMounted(() => {
    refTextArea.value.focus()
    refContent.value.push('🙈–👍–⭐ 試試輸入文字 🙈–👍–⭐')
    refContent.value.push('Text Editor V0.1')
})

function setFocus() {
    console.log('setFocus')
    nextTick(() => setTimeout(() => refTextArea.value.focus()))
}

function updateContent() {
    refContent.value.push('')
    refContent.value.pop()
}

function onFontDown(pIndex, fIndex, event) {
    let rect = getCursorPos(pIndex, fIndex)
    refFontPointer.value.pi = pIndex
    if (event.offsetX > rect.width * .5) {
        refFontPointer.value.fi = fIndex + 1
    } else {
        refFontPointer.value.fi = fIndex
    }
    refFontRangeStartIndex.value.pi = pIndex;
    refFontRangeStartIndex.value.fi = refFontPointer.value.fi
    refFontRangeStartIndex.value.x = rect.x
    refFontRangeStartIndex.value.y = rect.y
    resetHiddenTextAreaPos()
}

function onFontUp(pIndex, fIndex, event) {
    let rect = getCursorPos(pIndex, fIndex)
    refFontPointer.value.pi = pIndex
    if (event.offsetX > rect.width * .5) {
        refFontPointer.value.fi = fIndex + 1
    } else {
        refFontPointer.value.fi = fIndex
    }
    refFontRangeEndIndex.value.pi = pIndex;
    refFontRangeEndIndex.value.fi = refFontPointer.value.fi - 1
    refFontRangeEndIndex.value.x = rect.x
    refFontRangeEndIndex.value.y = rect.y

    if (refFontRangeStartIndex.value.x == refFontRangeEndIndex.value.x && refFontRangeStartIndex.value.y == refFontRangeEndIndex.value.y) setFocus()
    //calculateSelection()
}

function clearSelection() {
    fontRanges.length = refContent.value.length

    // 清空選取
    refContent.value.forEach((_, index) => {
        fontRanges[index] = null
    })

    updateContent()
}

function calculateSelection() {

    clearSelection();

    if (refFontRangeEndIndex.value.pi != refFontRangeStartIndex.value.pi) {
        console.log(refFontRangeEndIndex.value.pi, refFontRangeStartIndex.value.pi, 'pi != refFontRangeStartIndex pi')
        if (refFontRangeStartIndex.value.pi < refFontRangeEndIndex.value.pi) {
            refFontPointer.value.pi = refFontRangeStartIndex.value.pi
            refFontPointer.value.fi = refFontRangeStartIndex.value.fi
            fontRanges[refFontRangeStartIndex.value.pi] = { s: refFontRangeStartIndex.value.fi, e: refContent.value[refFontRangeStartIndex.value.pi].length }
            fontRanges[refFontRangeEndIndex.value.pi] = { s: 0, e: refFontRangeEndIndex.value.fi }
        } else if (refFontRangeStartIndex.value.pi > refFontRangeEndIndex.value.pi) {
            refFontPointer.value.pi = refFontRangeStartIndex.value.pi
            refFontPointer.value.fi = refFontRangeStartIndex.value.fi + 1
            fontRanges[refFontRangeStartIndex.value.pi] = { s: 0, e: refFontRangeStartIndex.value.fi }
            fontRanges[refFontRangeEndIndex.value.pi] = { s: refFontRangeEndIndex.value.fi, e: refContent.value[refFontRangeEndIndex.value.pi].length }
        }
        const pDist = Math.abs(refFontRangeStartIndex.value.pi - refFontRangeEndIndex.value.pi) + 1
        if (pDist > 2) {
            let pStart = refFontRangeStartIndex.value.pi
            if (refFontRangeStartIndex.value.pi > refFontRangeEndIndex.value.pi) pStart = refFontRangeEndIndex.value.pi
            for (let i = pStart + 1; i < pStart + pDist - 1; i++) {
                fontRanges[i] = { s: 0, e: refContent.value[i].length }
            }
        }
    } else {
        console.log(refFontRangeEndIndex.value.fi, refFontRangeStartIndex.value.fi, 'same')
        if (refFontRangeEndIndex.value.fi > refFontRangeStartIndex.value.fi)
            fontRanges[refFontRangeEndIndex.value.pi] = { s: refFontRangeStartIndex.value.fi, e: refFontRangeEndIndex.value.fi }
        else
            fontRanges[refFontRangeEndIndex.value.pi] = { s: refFontRangeEndIndex.value.fi + 1, e: refFontRangeStartIndex.value.fi - 1 }
    }
}

function fontInRange(pi, fi) {
    if (fontRanges[pi]) {
        return fi >= fontRanges[pi].s && fi <= fontRanges[pi].e
    } else return false
}

function getCursorPos(pIndex, fIndex) {
    const paragraph = refContainer.value.getElementsByTagName('p')[pIndex]
    const font = paragraph.getElementsByTagName('span')[fIndex]
    const rect = font.getBoundingClientRect()
    return rect
}

function resetHiddenTextAreaPos() {
    const cursor = getCursorPos(refFontPointer.value.pi, refFontPointer.value.fi)
    refTextGroup.value.$el.style.left = cursor.x + 'px'
    refTextGroup.value.$el.style.top = cursor.y + window.scrollY + 'px'
}

function getLineInfo(pIndex, fIndex) {
    const paragraph = refContainer.value.getElementsByTagName('p')[pIndex]
    const fonts = paragraph.getElementsByTagName('span')
    let lineFontIndex = 0
    let currentLineFontIndex = 0
    let changeBottoms = 0
    let lineFontIndexs = []
    let fontBottoms = []
    for (let i = 0; i < fonts.length; i++) {
        const bottom = fonts[i].getBoundingClientRect().bottom
        // 檢查換行
        if (Math.abs(changeBottoms - bottom) > 8) {
            changeBottoms = bottom
            fontBottoms.push(bottom)
            lineFontIndexs.push(i)
            lineFontIndex = 0
        }
        // 當前行左側索引
        if (i == fIndex) {
            currentLineFontIndex = lineFontIndex
        }
        lineFontIndex++
    }
    // 段落尾加上指標
    const fArr = refContent.value[pIndex].split('').filter(f => f != '\n')
    fArr.push('\n')
    refContent.value[pIndex] = fArr.join('')
    // 目前所在行數
    const lineIndex = fontBottoms.indexOf(fonts[fIndex].getBoundingClientRect().bottom)
    return { lineIndex, lineLength: lineFontIndexs.length, lineFontIndexs, currentLineFontIndex }
}

function onKeyDown(e) {

    // clearSelection();

    nextTick(() => {
        console.log(1, e.key, refTextAreaValue.value)

        resetHiddenTextAreaPos()

        if (refComposition.value.lock) return;

        if (['ArrowDown', 'ArrowUp', 'ArrowLeft', 'ArrowRight'].indexOf(e.key) > -1) {
            e.preventDefault();
            arrowHandle(e)
            return
        } else if (e.key == 'Backspace') {
            deleteFont()
        } else if (e.key == 'Enter') {
            breakLine()
        }
    })

}

watch(refTextAreaValue, (oV) => {
    if (refComposition.value.lock) return;
    let textareaValue = oV.length > 1 ? oV.trim() : oV
    if (textareaValue.length) {
        putText(textareaValue)
        refTextAreaValue.value = ''
    }
})

function onCompositionStart(e) {
    console.log('c_start', e.data)
    refComposition.value.lock = true
    refComposition.value.pi = refFontPointer.value.pi
    refComposition.value.fi = refFontPointer.value.fi
}

function onCompositionUpdate(e) {
    console.log('c_update', e.data)
    writeCompositionText(e.data, refComposition.value.pi, refComposition.value.fi)
    refComposition.value.flen = splitWithEmoji(e.data).length
}

function onCompositionEnd(e) {
    console.log('c_end', e.data)
    refComposition.value.lock = false
    refComposition.value.pi = 0
    refComposition.value.fi = 0
    refComposition.value.flen = 0
    refTextAreaValue.value = ''
}

function writeCompositionText(f, pIndex, fIndex) {
    console.log('writeText', f)
    refFontPointer.value.pi = pIndex
    refFontPointer.value.fi = fIndex
    const fi = refFontPointer.value.fi
    let spc = splitWithEmoji(refContent.value[pIndex])
    refFontPointer.value.fi += splitWithEmoji(f).length
    spc.splice(fi, refComposition.value.flen, f)
    refContent.value[pIndex] = spc.join('')
}

function splitWithEmoji(str) {
    const re = /\p{Emoji}/ug
    let emojiMap = {}
    let temp = [...str.matchAll(re)].map(item => emojiMap[item.index] = { emoji: item[0], length: item[0].length, index: item.index })
    const splitData = []
    for (let i = 0; i < str.length; i++) {
        if (emojiMap[i]) {
            splitData.push(emojiMap[i].emoji)
            i += emojiMap[i].length - 1
        } else {
            splitData.push(str[i])
        }
    }
    return splitData
}

function deleteFont() {
    console.log('deleteFont')
    const pi = refFontPointer.value.pi
    const fi = refFontPointer.value.fi
    if (fi <= 0) {
        refFontPointer.value.fi = 0
        // 刪除一行
        if (refFontPointer.value.pi > 0) {
            const s = splitWithEmoji(refContent.value[pi - 1])
            const newFi = s.length - 1
            const newText = s.slice(0, newFi).join('') + refContent.value[pi]
            refContent.value.splice(pi - 1, 1)
            refContent.value[pi - 1] = newText
            refFontPointer.value.pi--
            refFontPointer.value.fi = newFi
        }
        return
    }
    let spc = splitWithEmoji(refContent.value[pi])
    spc.splice(fi - 1, 1)
    refFontPointer.value.fi -= 1
    refContent.value[pi] = spc.join('')
}

function putText(text) {
    console.log('putText', text)
    const pi = refFontPointer.value.pi
    const fi = refFontPointer.value.fi
    let spc = splitWithEmoji(refContent.value[pi])
    refFontPointer.value.fi += splitWithEmoji(text).length
    spc.splice(fi, 0, text)
    refContent.value[pi] = spc.join('')
}

function breakLine() {
    const pi = refFontPointer.value.pi
    const fi = refFontPointer.value.fi
    const newFi = 0
    let spc = splitWithEmoji(refContent.value[pi])
    const ogText = spc.slice(0, fi).join('')
    const newText = spc.slice(fi, spc.length).join('')
    refContent.value[pi] = ogText
    refContent.value.splice(pi + 1, 0, newText)
    refFontPointer.value.pi++
    setTimeout(() => {
        refContent.value.forEach((_, pIndex) => {
            const fArr = refContent.value[pIndex].split('').filter(f => f != '\n')
            fArr.push('\n')
            refContent.value[pIndex] = fArr.join('')
        })
        refFontPointer.value.fi = newFi
    })
}

/** 按鍵文字遊走 */
function arrowHandle(e) {
    let { lineIndex, lineLength, lineFontIndexs, currentLineFontIndex } = getLineInfo(refFontPointer.value.pi, refFontPointer.value.fi)
    let len = 0
    switch (e.key) {
        case 'ArrowDown':
            lineIndex++
            if (lineIndex > lineLength - 1) {
                refFontPointer.value.pi++
                lineIndex = 0
                if (refFontPointer.value.pi > refContent.value.length - 1) {
                    refFontPointer.value.pi = refContent.value.length - 1
                    lineIndex = lineLength - 1
                }
            }
            refFontPointer.value.fi = lineFontIndexs[lineIndex] + currentLineFontIndex;
            len = splitWithEmoji(refContent.value[refFontPointer.value.pi]).length
            if (refFontPointer.value.fi > len - 1) {
                refFontPointer.value.fi = len - 1
            }
            break;
        case 'ArrowUp':
            lineIndex--
            refFontPointer.value.fi = lineFontIndexs[lineIndex] + currentLineFontIndex;
            if (lineIndex < 0) {
                const info = getLineInfo(refFontPointer.value.pi - 1 < 0 ? 0 : refFontPointer.value.pi - 1, 0)
                refFontPointer.value.pi--
                lineIndex = info.lineLength - 1
                if (refFontPointer.value.pi < 0) {
                    refFontPointer.value.pi = 0
                    lineIndex = 0
                }
                refFontPointer.value.fi = info.lineFontIndexs[lineIndex] + currentLineFontIndex;
                len = splitWithEmoji(refContent.value[refFontPointer.value.pi]).length
                if (refFontPointer.value.fi > len - 1) {
                    refFontPointer.value.fi = len - 1
                }
            }
            break;
        case 'ArrowLeft':
            refFontPointer.value.fi--;
            if (refFontPointer.value.fi < 0) {
                len = splitWithEmoji(refContent.value[refFontPointer.value.pi - 1 < 0 ? 0 : refFontPointer.value.pi - 1]).length
                refFontPointer.value.fi = len - 1
                refFontPointer.value.pi--
                if (refFontPointer.value.pi < 0) {
                    refFontPointer.value.pi = 0
                    refFontPointer.value.fi = 0
                }
            }
            break;
        case 'ArrowRight':
            refFontPointer.value.fi++;
            len = splitWithEmoji(refContent.value[refFontPointer.value.pi]).length
            if (refFontPointer.value.fi > len - 1) {
                refFontPointer.value.pi++
                refFontPointer.value.fi = 0
                if (refFontPointer.value.pi > refContent.value.length - 1) {
                    refFontPointer.value.pi = refContent.value.length - 1
                    refFontPointer.value.fi = len - 1
                }
            }
            break;
    }
}

</script>
    
<style scoped>
::selection {
    background-color: greenyellow;
}
</style>
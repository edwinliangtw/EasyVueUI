<template>
    <EZGroup layout="v" width="90%" margin="0 auto" hJustify="center">
        <EZGroup layout="v" gap="30px" width="100%" bg="#FFF" vJustify="center" hJustify="center" padding="50px">
            <EZLabel color="deeppink" size="4em">Vue3 UI 框架</EZLabel>
            <EZLabel color="gray" size="1.5em">易學易用，快速建構頁面，從沒想過這麼簡單</EZLabel>
            <EZGroup gap="20px">
                <EZButton bg="white" boxShadow="0 0 5px deeppink" padding="10px" border="1px solid deeppink"
                    @click="$router.push('/doc')">
                    <EZLabel color="deeppink" size="1em">快速上手</EZLabel>
                </EZButton>
                <EZButton bg="deeppink" boxShadow="0 0 5px deeppink" padding="10px" width="100px"
                    onclick="window.open('https://github.com/edwinliangtw/EasyVueUI')">
                    <EZLabel color="white" size="1em">馬上下載</EZLabel>
                </EZButton>
            </EZGroup>
            <EZGroup width="100%" hJustify="space-between" margin="50px 0px" gap="30px">
                <EZGroup layout="v" width="25%" gap="10px" rwdWidth="720">
                    <EZLabel color="deeppink" size="1.3em">易學易用</EZLabel>
                    <EZLabel color="gray" size="1em">html 與 css 基本概念掌握即可使用，元件已整理常用 css 建立於標籤屬性上</EZLabel>
                </EZGroup>
                <EZGroup layout="v" width="25%" gap="10px" rwdWidth="720">
                    <EZLabel color="deeppink" size="1.3em">快速建構</EZLabel>
                    <EZLabel color="gray" size="1em">不用重複撰寫複雜 css 即可快速排版頁面。 EZGroup 元件透過 layout 屬性設置 v (垂直) 或 h (水平)
                        即可設定元件排列方向
                    </EZLabel>
                </EZGroup>
                <EZGroup layout="v" width="25%" gap="10px" rwdWidth="720">
                    <EZLabel color="deeppink" size="1.3em">豐富UI組件</EZLabel>
                    <EZLabel color="gray" size="1em">目前 UI 組件庫有常用設計元件如 EZGroup, EZButton, EZImage, EZLabel,
                        EZRouterLabel (元件待擴增)
                    </EZLabel>
                </EZGroup>
            </EZGroup>
            <EZGroup layout="v" width="100%" gap="20px">
                <EZLabel color="deeppink" size="1.3em">下載</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll"
                    color="deeppink" size=".8em">
                    <pre>
git clone https://github.com/edwinliangtw/EasyVueUI.git</pre>
                </EZLabel>
                <EZLabel color="deeppink" size="1.3em">安裝相依套件</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll"
                    color="deeppink" size=".8em">
                    <pre>
npm i</pre>
                </EZLabel>
                <EZLabel color="deeppink" size="1.3em">運行專案</EZLabel>
                <EZLabel bg="pink" opacity=".8" padding="10px" borderRadius="10px" width="100%" overflow="scroll"
                    color="deeppink" size=".8em">
                    <pre>
npm run dev</pre>
                </EZLabel>
            </EZGroup>
        </EZGroup>
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZButton from '@/components/ezcore/EZButton.vue';
</script>
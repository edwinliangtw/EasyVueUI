<template>
    <EZGroup layout="v" gap="20px" width="90%" bg="white" margin="0 auto" padding="50px" hJustify="center">
        <EZLabel color="deeppink" size="1.3em">關於作者</EZLabel>
        <EZLabel color="gray" size="1em">
            喜歡程式, 咖啡與正妹<br>
            專業領域為遊戲設計,網站開發與視覺設計<br>
            edwinliang.tw@gmail.com
        </EZLabel>
        <EZImage src="img/symbol.png" width="100%" maxWidth="400px" />
    </EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZImage from '@/components/ezcore/EZImage.vue';
</script>
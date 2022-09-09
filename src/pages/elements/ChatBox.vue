<template>
    <EZGroup class="chatbox" :class="{chatboxActive:refOpen}" opacity=".95">
        <EZGroup bg="pink" boxShadow="0 0 5px pink">
            <iframe src="https://www3.cbox.ws/box/?boxid=3521042&boxtag=YNTNWb" allowtransparency="yes" allow="autoplay"
                frameborder="0" marginheight="0" marginwidth="0" scrolling="auto"></iframe>
        </EZGroup>
        <EZButton class="chatboxButton" bg="orange" boxShadow="0 0 5px orange" borderRadius="0px"
            @click="refOpen = !refOpen" alignSelf="end">
            <EZLabel color="white" size="1em">點我留言</EZLabel>
        </EZButton>
    </EZGroup>
</template>

<script setup>
import { ref } from 'vue';
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZButton from '@/components/ezcore/EZButton.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
const refOpen = ref(false)
</script>

<style scoped>
.chatbox {
    position: fixed;
    top: 0;
    left: -300px;
    width: 450px;
    height: 100vh;
    transition: left .3s;
    pointer-events: none;
}

.chatbox.chatboxActive {
    left: 0px;
}

.chatbox>.chatboxButton {
    pointer-events: all;
}

.chatbox iframe {
    pointer-events: all;
    width: 100%;
    height: 100%;
}
</style>

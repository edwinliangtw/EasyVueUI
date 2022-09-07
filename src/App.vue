<template>
	<!-- container -->
	<EZGroup layout="v" width="100%" minHeight="calc(100vh - 100px)" bg="pink">
		<!-- nav -->
		<EZGroup layout="h" width="100%" height="50px" bg="black" padding="10px" hJustify="space-between">
			<EZLinkLabel to="/" color="white" size="24px">
				<EZImage src="assets/img/favicon.ico" />
				EasyVueUI
			</EZLinkLabel>
			<EZGroup gap="10px" vJustify="center" deeppink>
				<EZLinkLabel to="/" color="deeppink" size="16px">首頁</EZLinkLabel>
				<EZLinkLabel to="/doc" color="white" size="16px">文件</EZLinkLabel>
				<EZLinkLabel to="/about" color="white" size="16px">關於</EZLinkLabel>
			</EZGroup>
		</EZGroup>
		<!-- main -->
		<EZGroup layout="h" width="100%" height="100%" bg="deeppink">
			<RouterView />
		</EZGroup>
	</EZGroup>
	<!-- footer -->
	<EZGroup layout="v" width="100%" height="100px" bg="black" hJustify="center" vJustify="center">
		<EZLabel color="gray" size=".5em">版權聲明</EZLabel>
		<EZLabel color="gray" size=".5em">本中文文檔內容版權為 edwinliang.tw@gmail.com 所有，保留所有權利。</EZLabel>
	</EZGroup>
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZLinkLabel from '@/components/ezcore/EZLinkLabel.vue';
import EZImage from './components/ezcore/EZImage.vue';
</script>

<style scoped>

</style>

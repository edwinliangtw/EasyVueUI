<template>
	<!-- container -->
	<EZGroup layout="v" width="100%" minHeight="calc(100vh - 100px)" bg="pink">
		<!-- nav -->
		<EZGroup layout="h" width="100%" height="50px" bg="black" padding="10px" hJustify="space-between">
			<EZRouterLabel to="/" color="white" size="24px">
				<EZImage src="img/vue.png" />
				EasyVueUI
			</EZRouterLabel>
			<EZGroup gap="10px" vJustify="center">
				<EZRouterLabel to="/" color="deeppink" size="16px" activeClass="active">首頁</EZRouterLabel>
				<EZRouterLabel to="/demo" color="white" size="16px" activeClass="active">展示</EZRouterLabel>
				<EZRouterLabel to="/doc" color="white" size="16px" activeClass="active">文件</EZRouterLabel>
				<EZRouterLabel to="/about" color="white" size="16px" activeClass="active">關於</EZRouterLabel>
			</EZGroup>
		</EZGroup>
		<!-- main -->
		<EZGroup layout="h" width="100%" height="100%" bg="deeppink" boxShadow="0 0 5px deeppink">
			<EZRouterView />
		</EZGroup>
	</EZGroup>
	<!-- footer -->
	<EZGroup layout="v" width="100%" height="100px" bg="black" padding="10px" hJustify="center" vJustify="center">
		<EZLabel color="gray" size=".8em">版權聲明</EZLabel>
		<EZLabel color="gray" size=".8em">本中文文檔內容版權為 edwinliang.tw@gmail.com 所有，保留所有權利。</EZLabel>
	</EZGroup>
	<ChatBox position="fixed" y="0" />
</template>

<script setup>
import EZGroup from '@/components/ezcore/EZGroup.vue';
import EZLabel from '@/components/ezcore/EZLabel.vue';
import EZRouterLabel from '@/components/ezcore/EZRouterLabel.vue';
import EZImage from '@/components/ezcore/EZImage.vue';
import EZRouterView from '@/components/ezcore/EZRouterView.vue';
import ChatBox from '@/pages/elements/ChatBox.vue';
</script>

<style scoped>
.active {
	border-bottom: 2px solid deeppink;
}
</style>
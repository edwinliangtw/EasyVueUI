<template>
	<EZGroup width="100%" layout="vertical">
		<EZGroup width="100%" layout="vertical" bg="#CCC" minHeight="calc(100vh - 100px)">
			<!-- header -->
			<EZGroup width="100%" bg="black" justify="space-between" padding="10px">
				<EZLabel color="white">Website Title</EZLabel>
				<EZGroup layout="horizontal" gap="10px">
					<EZLabel color="deeppink">Links1</EZLabel>
					<EZLabel color="white">Links2</EZLabel>
					<EZLabel color="white">Links3</EZLabel>
				</EZGroup>
			</EZGroup>
			<EZGroup width="600px" layout="vertical" marginAuto="true">
				<!-- banner -->
				<EZGroup bg="#666" layout="vertical" justify="center" padding="10px">
					<EZLabel color="white" size="3em">Banner</EZLabel>
					<EZSelect width="200px" :items="['test1','test2','test3']" :onSelect="onSelect"/>
					<EZImage src="assets/img/appIcon.png" width="100px" height="100px" />
					<!-- <EZToggle /> -->
				</EZGroup>
				<!-- contents -->
				<EZGroup layout="vertical" bg="#FFCC00" padding="10px">
					<EZLabel color="white" size="3em">Content</EZLabel>
					<EZLabel color="white" size="3em">Content</EZLabel>
					<EZLabel color="white" size="3em">Content</EZLabel>
					<EZLabel color="white" size="3em">Content</EZLabel>
					<EZLabel color="white" size="3em">Content</EZLabel>
				</EZGroup>
			</EZGroup>
		</EZGroup>
		<!-- footer -->
		<EZGroup width="100%" bg="#000" height="100px" justify="center" padding="10px">
			<EZLabel color="white" size="3em">Footer</EZLabel>
		</EZGroup>
	</EZGroup>
</template>

<script setup>
import EZGroup from '@/components/core/EZGroup.vue'
import EZButton from '@/components/core/EZButton.vue'
import EZLabel from '@/components/core/EZLabel.vue'
import EZSelect from '@/components/core/EZSelect.vue'
import EZImage from '@/components/core/EZImage.vue'
import EZToggle from '@/components/core/EZToggle.vue'
import { ref } from 'vue'
function onSelect(item, index) {
	console.log(item, index)
}
</script>

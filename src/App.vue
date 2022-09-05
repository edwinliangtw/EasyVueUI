<template>
	<!-- container -->
	<EZGroup layout="v" width="100%" minHeight="calc(100vh - 100px)" bg="gray">
		<!-- nav -->
		<EZGroup layout="h" width="100%" height="50px" bg="black" padding="10px" hJustify="space-between">
			<EZLabel color="white" size="24px">WebTitle</EZLabel>
			<EZGroup gap="10px">
				<EZLabel color="deeppink" size="24px">Link1</EZLabel>
				<EZLabel color="white" size="24px">Link2</EZLabel>
				<EZLabel color="white" size="24px">Link3</EZLabel>
			</EZGroup>
		</EZGroup>
		<!-- main -->
		<EZGroup layout="h" width="100%" height="100%" bg="#666">
			<EZGroup layout="v" width="90%" bg="#333" margin="0 auto" hJustify="center">
				<EZGroup width="100%">
					<EZGroup width="50%" height="200px" bg="#FFCC00" vJustify="center" hJustify="center">
						<EZLabel color="white" size="2em" cursorEnable="true">Hello</EZLabel>
						<EZLabel color="white" size="2em">world</EZLabel>
					</EZGroup>
					<EZGroup width="50%" bg="#333">
						<EZImage src="assets/img/appIcon.png" />
					</EZGroup>
				</EZGroup>
				<EZLabel color="white" size="24px">Content</EZLabel>
				<EZLabel color="white" size="24px">Content</EZLabel>
				<EZLabel color="white" size="24px">Content</EZLabel>
			</EZGroup>
		</EZGroup>
	</EZGroup>
	<!-- footer -->
	<EZGroup layout="v" width="100%" height="100px" bg="black" hJustify="center" vJustify="center">
		<EZLabel color="white" size="24px">Footer</EZLabel>
	</EZGroup>
</template>

<script setup>
import EZGroup from './components/core/EZGroup.vue';
import EZLabel from './components/core/EZLabel.vue';
import EZImage from './components/core/EZImage.vue';
</script>

<style scoped>
</style>

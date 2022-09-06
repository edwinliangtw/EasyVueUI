<template>
	<!-- container -->
	<EZGroup layout="v" width="100%" minHeight="calc(100vh - 100px)" bg="gray">
		<!-- nav -->
		<EZGroup layout="h" width="100%" height="50px" bg="black" padding="10px" hJustify="space-between">
			<EZLabel color="white" size="24px">EasyVueUI</EZLabel>
			<EZGroup gap="10px" vJustify="center">
				<EZLabel color="deeppink" size="16px" href="https://www.google.com/" target="_blank">Link1</EZLabel>
				<EZLabel color="white" size="16px">Link2</EZLabel>
				<EZLabel color="white" size="16px">Link3</EZLabel>
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
						<EZImage src="./img/app.jpg" width="100%" />
						<EZImage src="./img/app.jpg" width="100%" />
						<EZImage src="./img/app.jpg" width="100%" />
					</EZGroup>
				</EZGroup>
				<EZLabel color="white" size="24px">Content</EZLabel>
				<EZGroup gap="20px">
					<EZButton bg="deeppink" boxShadow="0 0 5px black">
						<EZLabel color="white" size="10px">Button</EZLabel>
					</EZButton>
					<EZButton bg="blue" boxShadow="0 0 5px black" width="200px">
						<EZLabel color="white" size="10px">Button</EZLabel>
					</EZButton>
					<EZButton bg="green" boxShadow="0 0 5px black">
						<EZLabel color="white" size="10px">Button</EZLabel>
					</EZButton>
				</EZGroup>
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
import EZButton from './components/core/EZButton.vue';
</script>

<style scoped>
</style>

<script setup lang="ts">
import SiteHeader from "./components/SiteHeader.vue";
import Hero from "./components/Hero.vue";
import ServicesSection from "./components/ServicesSection.vue";
import ProjectsSection from "./components/ProjectsSection.vue";
import ContactForm from "./components/ContactForm.vue";
import SiteFooter from "./components/SiteFooter.vue";
</script>

<template>
	<div id="landing">
		<SiteHeader />
		<Hero />
		<ServicesSection />
		<ProjectsSection />
		<ContactForm />
		<SiteFooter />
	</div>
</template>

<style>
/* Component-specific styles were moved into each component's
   <style scoped> block. Shared primitives live in `src/style.css`.
*/
</style>

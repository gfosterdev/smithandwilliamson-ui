<template>
	<section class="hero">
		<div class="container hero-inner">
			<div class="hero-copy">
				<h2>Quality windows and glasswork, installed with care</h2>
				<p>
					We deliver high-performance, energy-efficient windows,
					commercial glazing, and fast repair & replacement services
					in King's Lynn and across Norfolk. Trusted by homeowners and
					businesses for reliable, local workmanship.
				</p>
				<div class="hero-actions">
					<a href="#contact" class="btn primary">Request a quote</a>
					<a href="#projects" class="btn">See our work</a>
				</div>
			</div>
			<div class="hero-visual" aria-hidden>
				<img
					:src="heroImg"
					alt="Project example - doors"
					class="hero-image"
				/>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const heroImg = new URL("../assets/portfolio/doors1.jpeg", import.meta.url)
	.href;
</script>

<style scoped>
/* Hero styles */
.hero {
	padding: 4rem 0;
}
.hero-inner {
	display: flex;
	gap: 2rem;
	align-items: center;
}
.hero-copy {
	flex: 1;
	text-align: left;
}
.hero-copy h2 {
	font-size: 2.2rem;
	margin-bottom: 0.5rem;
}
.hero-actions .btn {
	margin-right: 0.5rem;
}
.hero-visual {
	flex: 0 0 min(360px, 40%);
	max-width: 420px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.hero-image {
	width: 100%;
	height: auto;
	aspect-ratio: 16/10;
	object-fit: cover;
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
	border: 1px solid rgba(255, 255, 255, 0.04);
}

@media (max-width: 1000px) {
	.hero-inner {
		flex-direction: column;
		gap: 1rem;
		align-items: stretch;
	}
	.hero-visual {
		display: none;
	}
	.hero {
		padding: 2rem 0;
	}
	.hero-copy h2 {
		font-size: 1.6rem;
	}
}
</style>

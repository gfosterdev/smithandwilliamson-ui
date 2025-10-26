<template>
	<section class="hero" :style="{ backgroundImage: `url(${heroImg})` }">
		<div class="container hero-inner">
			<div class="hero-copy stagger" aria-hidden>
				<h2 class="fade-in-up" :style="{ '--delay': '80ms' }">
					Quality windows and glasswork, installed with care
				</h2>
				<p class="fade-in" :style="{ '--delay': '160ms' }">
					We deliver high-performance, energy-efficient windows,
					commercial glazing, and fast repair & replacement services
					in King's Lynn and across Norfolk. Trusted by homeowners and
					businesses for reliable, local workmanship.
				</p>
				<div
					class="hero-actions"
					style="display: flex; gap: 0.5rem"
					aria-hidden
				>
					<a
						href="#contact"
						class="btn primary fade-in"
						:style="{ '--delay': '240ms' }"
						>Request a quote</a
					>
					<a
						href="#projects"
						class="btn fade-in"
						:style="{ '--delay': '300ms' }"
						>See our work</a
					>
				</div>
			</div>
			<!-- Decorative background image; provide hidden text for screen readers -->
			<span class="visually-hidden">Project example - doors</span>
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
	/* use background image to cover the entire hero area */
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	/* ensure a reasonable visible area for the background image */
	min-height: 60vh;
	position: relative; /* create stacking context for overlay */
}
.hero-inner {
	display: flex;
	gap: 2rem;
	align-items: center;
	position: relative;
	z-index: 1; /* place content above the overlay */
}
.hero-copy {
	flex: 1;
	text-align: left;
}
.hero-copy,
.hero-copy p,
.hero-copy h2 {
	color: #fff;
	text-shadow: 0 2px 8px rgba(0, 0, 0, 0.6);
}

/* Dark overlay to improve contrast against background images */
.hero::before {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 0;
	pointer-events: none;
	/* subtle graduated darkening from top to bottom */
	background: linear-gradient(
		to bottom,
		rgba(0, 0, 0, 0.25) 0%,
		rgba(0, 0, 0, 0.55) 100%
	);
}
.hero-copy h2 {
	font-size: 2.25rem;
	margin-bottom: 0.5rem;
}
.hero-actions .btn {
	margin-right: 0.5rem;
}
.hero-visual {
	flex: 0 0 44%;
	max-width: 520px;
	display: block;
}
.hero-image {
	width: 100%;
	height: auto;
	aspect-ratio: 16/10;
	object-fit: cover;
	border-radius: 12px;
	box-shadow: 0 18px 40px var(--shadow-lg);
	border: 1px solid var(--border-weak);
}

/* Accessibility helper: visually hide content but keep it available to screen readers */
.visually-hidden {
	position: absolute !important;
	width: 1px !important;
	height: 1px !important;
	padding: 0 !important;
	margin: -1px !important;
	overflow: hidden !important;
	clip: rect(0 0 0 0) !important;
	white-space: nowrap !important;
	border: 0 !important;
}

@media (max-width: 1000px) {
	.hero-inner {
		flex-direction: column-reverse;
		gap: 1rem;
		align-items: stretch;
	}
	.hero-visual {
		display: block;
		width: 100%;
	}
	.hero {
		padding: 2rem 0;
	}
	.hero-copy h2 {
		font-size: 1.6rem;
	}
}
</style>

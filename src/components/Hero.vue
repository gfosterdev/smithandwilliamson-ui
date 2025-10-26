<template>
	<section class="hero" :style="{ backgroundImage: `url(${heroImg})` }">
		<div class="hero-overlay"></div>
		<div class="container hero-inner">
			<div class="hero-copy">
				<div class="hero-badge fade-in" :style="{ '--delay': '0ms' }">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						stroke-width="2"
					>
						<path d="M9 11l3 3L22 4"></path>
						<path
							d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"
						></path>
					</svg>
					<span>Trusted Local Experts</span>
				</div>
				<h1 class="fade-in-up" :style="{ '--delay': '80ms' }">
					Quality windows and glasswork, installed with care
				</h1>
				<p
					class="hero-subtitle fade-in"
					:style="{ '--delay': '160ms' }"
				>
					We deliver high-performance, energy-efficient windows,
					commercial glazing, and fast repair & replacement services
					in King's Lynn and across Norfolk. Trusted by homeowners and
					businesses for reliable, local workmanship.
				</p>
				<div
					class="hero-actions fade-in"
					:style="{ '--delay': '240ms' }"
				>
					<a href="#contact" class="btn primary">Request a quote</a>
					<a href="#projects" class="btn ghost">See our work</a>
				</div>
				<div class="hero-trust fade-in" :style="{ '--delay': '320ms' }">
					<div class="trust-item">
						<span class="trust-number">10,000+</span>
						<span class="trust-label">Happy Customers</span>
					</div>
					<div class="trust-divider"></div>
					<div class="trust-item">
						<span class="trust-number">25+</span>
						<span class="trust-label">Years Experience</span>
					</div>
					<div class="trust-divider"></div>
					<div class="trust-item">
						<span class="trust-number">A+</span>
						<span class="trust-label">Energy Rating</span>
					</div>
				</div>
			</div>
			<span class="visually-hidden">Project example - doors</span>
		</div>
	</section>
</template>

<script setup lang="ts">
const heroImg = new URL("../assets/portfolio/doors1.jpeg", import.meta.url)
	.href;
</script>

<style scoped>
/* Modern Hero with professional glass/construction aesthetic */
.hero {
	position: relative;
	min-height: 85vh;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	overflow: hidden;
}

/* Enhanced dark overlay with gradient for better text contrast */
.hero-overlay {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 0;
	pointer-events: none;
	background: linear-gradient(
		135deg,
		rgba(30, 58, 95, 0.92) 0%,
		rgba(30, 58, 95, 0.85) 50%,
		rgba(15, 29, 47, 0.88) 100%
	);
}

.hero-inner {
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	padding: var(--space-xl) var(--space-md);
}

.hero-copy {
	max-width: 700px;
	color: var(--white);
}

/* Trust badge at top */
.hero-badge {
	display: inline-flex;
	align-items: center;
	gap: 0.5rem;
	padding: 0.5rem 1rem;
	background: rgba(255, 255, 255, 0.15);
	backdrop-filter: blur(10px);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: 24px;
	color: var(--white);
	font-size: 0.9rem;
	font-weight: 600;
	margin-bottom: var(--space-sm);
}

.hero-badge svg {
	flex-shrink: 0;
}

.hero-copy h1 {
	font-size: clamp(2.25rem, 5vw, 3.75rem);
	color: var(--white);
	margin-bottom: var(--space-sm);
	text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
	line-height: 1.15;
	font-weight: 700;
	letter-spacing: -0.02em;
}

.hero-subtitle {
	font-size: 1.15rem;
	color: rgba(255, 255, 255, 0.95);
	margin-bottom: var(--space-md);
	line-height: 1.7;
	max-width: 600px;
}

.hero-actions {
	display: flex;
	gap: var(--space-sm);
	flex-wrap: wrap;
	margin-bottom: var(--space-lg);
}

.hero-actions .btn.ghost {
	background: transparent;
	border-color: rgba(255, 255, 255, 0.8);
	color: var(--white);
}

.hero-actions .btn.ghost:hover {
	background: rgba(255, 255, 255, 0.15);
	border-color: var(--white);
	transform: translateY(-2px);
}

/* Trust indicators */
.hero-trust {
	display: flex;
	gap: var(--space-md);
	align-items: center;
	flex-wrap: wrap;
	padding-top: var(--space-md);
	border-top: 1px solid rgba(255, 255, 255, 0.2);
}

.trust-item {
	display: flex;
	flex-direction: column;
	gap: 0.25rem;
}

.trust-number {
	font-size: 2rem;
	font-weight: 700;
	color: var(--white);
	line-height: 1;
}

.trust-label {
	font-size: 0.875rem;
	color: rgba(255, 255, 255, 0.8);
	font-weight: 500;
}

.trust-divider {
	width: 1px;
	height: 40px;
	background: rgba(255, 255, 255, 0.2);
}

@media (max-width: 768px) {
	.hero {
		min-height: 70vh;
	}

	.hero-inner {
		padding: var(--space-lg) var(--space-sm);
	}

	.hero-copy h1 {
		font-size: 2rem;
	}

	.hero-subtitle {
		font-size: 1rem;
	}

	.hero-actions {
		flex-direction: column;
		width: 100%;
	}

	.hero-actions .btn {
		width: 100%;
		justify-content: center;
	}

	.hero-trust {
		gap: var(--space-sm);
	}

	.trust-divider {
		display: none;
	}

	.trust-number {
		font-size: 1.5rem;
	}

	.trust-label {
		font-size: 0.8rem;
	}
}
</style>

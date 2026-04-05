<template>
	<section class="hero" :style="{ backgroundImage: `url(${heroImg})` }">
		<div class="hero-overlay"></div>
		<div class="container">
			<div class="hero-inner">
				<div class="hero-copy">
					<h1 class="fade-in-up" :style="{ '--delay': '0ms' }">
						Premium Windows & Glazing Solutions
					</h1>
					<p
						class="hero-subtitle fade-in"
						:style="{ '--delay': '100ms' }"
					>
						Expert installation of windows, doors, and commercial
						glazing across Norfolk. Family-run business with over 25
						years of trusted service. Quality products, professional
						fitting, competitive prices.
					</p>
					<div
						class="hero-actions fade-in"
						:style="{ '--delay': '200ms' }"
					>
						<a href="#contact" class="btn primary"
							>Get Free Quote</a
						>
						<a href="#projects" class="btn ghost">View Portfolio</a>
					</div>
				</div>
			</div>
		</div>
	</section>

	<!-- Welcome section with USPs -->
	<section id="about" class="welcome-section">
		<div class="container">
			<div class="welcome-content">
				<h2>Welcome to Smith & Williamson</h2>
				<p class="lead">
					Your trusted local glazing specialists in King's Lynn and
					Norfolk. We provide expert installation of energy-efficient
					windows, secure doors, and bespoke glazing solutions for
					both residential and commercial projects.
				</p>
				<div class="usp-grid">
					<div class="usp-item">
						<div class="usp-icon">
							<svg
								width="32"
								height="32"
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
						</div>
						<h3>Quality Assured</h3>
						<p>
							All work guaranteed with FENSA certification and
							full insurance cover
						</p>
					</div>
					<div class="usp-item">
						<div class="usp-icon">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M12 22s-8-4.5-8-11.8A8 8 0 0 1 12 2a8 8 0 0 1 8 8.2c0 7.3-8 11.8-8 11.8z"
								></path>
								<circle cx="12" cy="10" r="3"></circle>
							</svg>
						</div>
						<h3>Local Experts</h3>
						<p>
							Family-run business serving Norfolk for over 25
							years
						</p>
					</div>
					<div class="usp-item">
						<div class="usp-icon">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<polyline points="12 6 12 12 16 14"></polyline>
							</svg>
						</div>
						<h3>Fast Service</h3>
						<p>
							Quick quotes, efficient installation, minimal
							disruption
						</p>
					</div>
					<div class="usp-item">
						<div class="usp-icon">
							<svg
								width="32"
								height="32"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"
								></path>
							</svg>
						</div>
						<h3>Competitive Pricing</h3>
						<p>
							Best value without compromising on quality or
							service
						</p>
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
const heroImg = new URL("../assets/portfolio/doors1.jpeg", import.meta.url)
	.href;
</script>

<style scoped>
/* Full-width hero section - Eastern Frames style */
.hero {
	position: relative;
	min-height: 600px;
	display: flex;
	align-items: center;
	background-size: cover;
	background-position: center center;
	background-repeat: no-repeat;
	overflow: hidden;
	width: 100%;
}

/* Dark overlay for text contrast */
.hero-overlay {
	content: "";
	position: absolute;
	inset: 0;
	z-index: 0;
	pointer-events: none;
	background: linear-gradient(
		135deg,
		rgba(0, 51, 102, 0.88) 0%,
		rgba(0, 34, 68, 0.92) 100%
	);
}

.hero-inner {
	position: relative;
	z-index: 1;
	display: flex;
	align-items: center;
	padding: 6rem 0;
	width: 100%;
}

.hero-copy {
	max-width: 700px;
	color: var(--white);
}

.hero-copy h1 {
	font-size: clamp(2.5rem, 5vw, 4rem);
	color: var(--white);
	margin-bottom: 1.5rem;
	text-shadow: 0 2px 12px rgba(0, 0, 0, 0.4);
	line-height: 1.2;
	font-weight: 700;
	letter-spacing: -0.02em;
}

.hero-subtitle {
	font-size: 1.25rem;
	color: rgba(255, 255, 255, 0.95);
	margin-bottom: 2rem;
	line-height: 1.7;
	max-width: 650px;
}

.hero-actions {
	display: flex;
	gap: 1rem;
	flex-wrap: wrap;
}

.hero-actions .btn.ghost {
	background: transparent;
	border-color: rgba(255, 255, 255, 0.9);
	color: var(--white);
}

.hero-actions .btn.ghost:hover {
	background: var(--white);
	border-color: var(--white);
	color: var(--brand);
}

/* Welcome section with USPs */
.welcome-section {
	background: var(--white);
	padding: 5rem 0;
}

.welcome-content {
	text-align: center;
	max-width: 1000px;
	margin: 0 auto;
}

.welcome-content h2 {
	font-size: clamp(2rem, 4vw, 3rem);
	color: var(--brand);
	margin-bottom: 1.5rem;
	font-weight: 700;
}

.lead {
	font-size: 1.125rem;
	line-height: 1.8;
	color: var(--text-secondary);
	margin-bottom: 3rem;
	max-width: 800px;
	margin-left: auto;
	margin-right: auto;
}

.usp-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 2.5rem;
	margin-top: 3rem;
}

.usp-item {
	text-align: center;
	padding: 1.5rem;
}

.usp-icon {
	width: 64px;
	height: 64px;
	margin: 0 auto 1rem;
	display: flex;
	align-items: center;
	justify-content: center;
	background: linear-gradient(
		135deg,
		var(--brand) 0%,
		var(--brand-light) 100%
	);
	border-radius: 50%;
	color: var(--white);
}

.usp-item h3 {
	font-size: 1.25rem;
	color: var(--brand);
	margin-bottom: 0.75rem;
	font-weight: 700;
}

.usp-item p {
	font-size: 0.95rem;
	color: var(--text-secondary);
	line-height: 1.6;
}

@media (max-width: 768px) {
	.hero {
		min-height: 500px;
	}

	.hero-inner {
		padding: 4rem 0;
	}

	.hero-copy h1 {
		font-size: 2rem;
	}

	.hero-subtitle {
		font-size: 1.05rem;
	}

	.hero-actions {
		flex-direction: column;
		width: 100%;
	}

	.hero-actions .btn {
		width: 100%;
		justify-content: center;
	}

	.welcome-section {
		padding: 3rem 0;
	}

	.usp-grid {
		grid-template-columns: 1fr;
		gap: 2rem;
	}
}
</style>

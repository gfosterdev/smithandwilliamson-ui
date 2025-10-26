<template>
	<section id="services" class="services">
		<div class="container">
			<div class="services-header">
				<h2>Our services</h2>
				<p class="lead">
					Professional window, door and glazing services for homes and
					businesses — installed with care and warranty-backed.
				</p>
			</div>

			<div class="service-grid">
				<article
					class="service-card fade-in-up"
					:style="{ '--delay': '80ms' }"
				>
					<div class="service-icon">
						<svg
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<rect
								x="3"
								y="3"
								width="18"
								height="18"
								rx="2"
							></rect>
							<path d="M9 3v18"></path>
							<path d="M15 3v18"></path>
						</svg>
					</div>
					<div class="service-content">
						<h3>Residential Windows</h3>
						<p>
							Double and triple-glazed windows, frames and bespoke
							installations to improve comfort and reduce energy
							bills.
						</p>
					</div>
				</article>

				<article
					class="service-card fade-in-up"
					:style="{ '--delay': '160ms' }"
				>
					<div class="service-icon">
						<svg
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"
							></path>
							<polyline points="9 22 9 12 15 12 15 22"></polyline>
						</svg>
					</div>
					<div class="service-content">
						<h3>Commercial Glazing</h3>
						<p>
							Shopfronts, curtain walling, and specialist
							commercial glazing with compliance and durability in
							mind.
						</p>
					</div>
				</article>

				<article
					class="service-card fade-in-up"
					:style="{ '--delay': '240ms' }"
				>
					<div class="service-icon">
						<svg
							width="40"
							height="40"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z"
							></path>
						</svg>
					</div>
					<div class="service-content">
						<h3>Repairs &amp; Replacements</h3>
						<p>
							Fast glass repairs, sealed unit replacements, and
							emergency boarding to keep properties secure.
						</p>
					</div>
				</article>
			</div>

			<div class="accreditation-section">
				<p class="accreditation">
					<strong>FENSA Accredited Installer</strong> — We operate in
					line with recognised industry standards for compliance and
					energy-efficient installations.
					<a
						class="fensa-link"
						href="https://www.fensa.org.uk"
						target="_blank"
						rel="noopener noreferrer"
					>
						<img
							src="../assets/fensa-badge.svg"
							alt="FENSA accredited"
							class="fensa-badge"
						/>
					</a>
				</p>
			</div>

			<!-- Residence Collection installer details -->
			<section class="residence">
				<div class="residence-header">
					<h3>Residence Collection Approved Installer</h3>
				</div>
				<p class="residence-blurb">
					We are a family-run business with over 10 years' experience.
					We are fully FENSA registered and warrant our products
					through the GGFI. We specialise in Residence systems (R9,
					R7, R2) for windows, doors, conservatories and orangeries.
					We offer complete installations or supply-only at
					competitive rates.
				</p>

				<div class="residence-branding" aria-hidden>
					<div class="partners">
						<img
							src="../assets/residence/r9.svg"
							alt="Residence R9"
						/>
						<img
							src="../assets/residence/r7.svg"
							alt="Residence R7"
						/>
						<img
							src="../assets/residence/r2.svg"
							alt="Residence R2"
						/>
						<img
							src="../assets/residence/rd.svg"
							alt="Residence RD"
						/>
					</div>

					<div class="experience-grid">
						<img
							src="../assets/residence/100-Installation.svg"
							alt="100+ installations"
						/>
						<img
							src="../assets/residence/5-Conservation.svg"
							alt="Conservation area installations"
						/>
						<img
							src="../assets/residence/Sample-window.svg"
							alt="Sample window available"
						/>
					</div>
				</div>

				<div class="residence-cta">
					<a
						class="btn primary"
						href="https://www.residencecollection.co.uk/installers/smith-williamson/"
						target="_blank"
						rel="noopener noreferrer"
					>
						View our Residence profile
					</a>
					<a class="btn ghost" href="#contact">Request a callback</a>
				</div>
			</section>
		</div>
	</section>
</template>

<script setup lang="ts">
// presentational
</script>

<style scoped>
/* Modern services section with professional card styling */
.services {
	padding: var(--space-xl) 0;
	background: linear-gradient(
		180deg,
		var(--white) 0%,
		var(--glass-tint) 100%
	);
}

.services-header {
	text-align: center;
	max-width: 700px;
	margin: 0 auto var(--space-lg);
}

.services-header h2 {
	color: var(--brand);
	margin-bottom: var(--space-sm);
}

.lead {
	font-size: 1.125rem;
	color: var(--text-secondary);
	line-height: 1.6;
	margin: 0;
}

.service-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
	gap: var(--space-md);
	margin-bottom: var(--space-lg);
}

.service-card {
	background: var(--white);
	padding: var(--space-md);
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-md);
	display: flex;
	flex-direction: column;
	gap: var(--space-sm);
	transition: all var(--transition-base);
	position: relative;
	overflow: hidden;
}

.service-card::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 4px;
	background: linear-gradient(90deg, var(--accent), var(--accent-warm));
	opacity: 0;
	transition: opacity var(--transition-base);
}

.service-card:hover {
	transform: translateY(-8px);
	box-shadow: var(--shadow-xl);
	border-color: var(--accent);
}

.service-card:hover::before {
	opacity: 1;
}

.service-icon {
	width: 64px;
	height: 64px;
	border-radius: var(--radius-md);
	background: linear-gradient(135deg, var(--accent) 0%, var(--brand) 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white);
	flex-shrink: 0;
	box-shadow: 0 4px 12px rgba(74, 144, 226, 0.3);
	transition: all var(--transition-base);
}

.service-card:hover .service-icon {
	transform: scale(1.1) rotate(5deg);
	box-shadow: 0 6px 20px rgba(74, 144, 226, 0.4);
}

.service-content h3 {
	color: var(--brand);
	margin: 0 0 var(--space-xs);
	font-size: 1.375rem;
}

.service-content p {
	color: var(--text-secondary);
	line-height: 1.6;
	margin: 0;
	font-size: 1rem;
}

/* Accreditation section */
.accreditation-section {
	background: var(--white);
	padding: var(--space-md);
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-sm);
	margin-bottom: var(--space-lg);
}

.accreditation {
	display: flex;
	align-items: center;
	justify-content: center;
	gap: var(--space-sm);
	flex-wrap: wrap;
	margin: 0;
	color: var(--text-secondary);
	text-align: center;
}

.accreditation strong {
	color: var(--brand);
}

.fensa-link {
	display: inline-flex;
	align-items: center;
}

.fensa-badge {
	height: 48px;
	width: auto;
	transition: transform var(--transition-base);
}

.fensa-link:hover .fensa-badge {
	transform: scale(1.05);
}

/* Residence Collection section */
.residence {
	background: linear-gradient(
		135deg,
		var(--brand-dark) 0%,
		var(--brand) 100%
	);
	padding: var(--space-lg) var(--space-md);
	border-radius: var(--radius-lg);
	color: var(--white);
	text-align: center;
	box-shadow: var(--shadow-lg);
	margin-top: var(--space-lg);
}

.residence-header h3 {
	color: var(--white);
	margin-bottom: var(--space-sm);
	font-size: 1.75rem;
}

.residence-blurb {
	max-width: 700px;
	margin: 0 auto var(--space-md);
	color: rgba(255, 255, 255, 0.95);
	line-height: 1.7;
	font-size: 1.05rem;
}

.residence-branding {
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
	margin: var(--space-lg) 0;
}

.partners {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--space-md);
	flex-wrap: wrap;
}

.partners img {
	height: 48px;
	width: auto;
	filter: brightness(0) invert(1);
	opacity: 0.9;
	transition: all var(--transition-base);
}

.partners img:hover {
	opacity: 1;
	transform: scale(1.1);
}

.experience-grid {
	display: flex;
	justify-content: center;
	align-items: center;
	gap: var(--space-lg);
	flex-wrap: wrap;
	padding: var(--space-md);
	background: rgba(255, 255, 255, 0.1);
	border-radius: var(--radius-md);
	backdrop-filter: blur(10px);
}

.experience-grid img {
	height: 56px;
	width: auto;
	opacity: 0.95;
}

.residence-cta {
	display: flex;
	justify-content: center;
	gap: var(--space-sm);
	flex-wrap: wrap;
	margin-top: var(--space-md);
}

.residence-cta .btn.primary {
	background: var(--accent-warm);
	border-color: var(--accent-warm);
}

.residence-cta .btn.ghost {
	background: transparent;
	border-color: rgba(255, 255, 255, 0.8);
	color: var(--white);
}

.residence-cta .btn.ghost:hover {
	background: rgba(255, 255, 255, 0.15);
	border-color: var(--white);
}

@media (max-width: 768px) {
	.services {
		padding: var(--space-lg) 0;
	}

	.service-grid {
		grid-template-columns: 1fr;
		gap: var(--space-sm);
	}

	.services-header h2 {
		font-size: 1.75rem;
	}

	.lead {
		font-size: 1rem;
	}

	.accreditation {
		flex-direction: column;
		text-align: center;
	}

	.residence {
		padding: var(--space-md) var(--space-sm);
		margin-left: calc(-1 * var(--space-sm));
		margin-right: calc(-1 * var(--space-sm));
		border-radius: 0;
	}

	.partners {
		gap: var(--space-sm);
	}

	.partners img {
		height: 36px;
	}

	.experience-grid {
		gap: var(--space-sm);
	}

	.experience-grid img {
		height: 44px;
	}

	.residence-cta {
		flex-direction: column;
		width: 100%;
		gap: var(--space-xs);
	}

	.residence-cta .btn {
		padding: 0.75rem 1rem;
		font-size: 0.9rem;
	}
}
</style>

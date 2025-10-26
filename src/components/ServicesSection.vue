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

			<div class="accreditation-grid">
				<!-- FENSA item -->
				<div class="acc-item">
					<div class="acc-logo">
						<a
							class="fensa-link"
							href="https://www.fensa.org.uk"
							target="_blank"
							rel="noopener noreferrer"
						>
							<img
								src="../assets/fensa-badge-better.svg"
								alt="FENSA accredited"
								class="acc-logo-img"
							/>
						</a>
					</div>
					<div class="acc-content">
						<div class="acc-title">FENSA Accredited Installer</div>
						<div class="acc-text">
							We operate in line with recognised industry
							standards for compliance and energy-efficient
							installations.
						</div>
					</div>
				</div>

				<!-- GGFI item -->
				<div class="acc-item">
					<div class="acc-logo">
						<img
							src="../assets/ggfi-warranted.svg"
							alt="GGFI Warranted"
							class="acc-logo-img"
						/>
					</div>
					<div class="acc-content">
						<div class="acc-title">GGFI Warranted</div>
						<div class="acc-text">
							Products warrantied through the Glass &amp; Glazing
							Federation Insurance (GGFI).
						</div>
					</div>
				</div>
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
						<span
							class="logo"
							data-tooltip="Residence R9"
							tabindex="0"
						>
							<img
								src="../assets/residence/r9.svg"
								alt="Residence R9"
								title="Residence R9"
							/>
						</span>
						<span
							class="logo"
							data-tooltip="Residence R7"
							tabindex="0"
						>
							<img
								src="../assets/residence/r7.svg"
								alt="Residence R7"
								title="Residence R7"
							/>
						</span>
						<span
							class="logo"
							data-tooltip="Residence R2"
							tabindex="0"
						>
							<img
								src="../assets/residence/r2.svg"
								alt="Residence R2"
								title="Residence R2"
							/>
						</span>
						<span
							class="logo"
							data-tooltip="Residence RD"
							tabindex="0"
						>
							<img
								src="../assets/residence/rd.svg"
								alt="Residence RD"
								title="Residence RD"
							/>
						</span>
					</div>

					<div class="experience-grid">
						<span
							class="logo"
							data-tooltip="100+ installations"
							tabindex="0"
						>
							<img
								src="../assets/residence/100-Installation.svg"
								alt="100+ installations"
								title="100+ installations"
							/>
						</span>
						<span
							class="logo"
							data-tooltip="Conservation area installations"
							tabindex="0"
						>
							<img
								src="../assets/residence/5-Conservation.svg"
								alt="Conservation area installations"
								title="Conservation area installations"
							/>
						</span>
						<span
							class="logo"
							data-tooltip="Sample window available"
							tabindex="0"
						>
							<img
								src="../assets/residence/Sample-window.svg"
								alt="Sample window available"
								title="Sample window available"
							/>
						</span>
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

.accreditation-grid {
	display: flex;
	gap: var(--space-lg);
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap; /* keep items in a single row */
	overflow-x: auto;
	padding-bottom: var(--space-sm);
}

.acc-item {
	display: flex;
	flex-direction: column;
	align-items: flex-start;
	gap: var(--space-sm);
	background: var(--white);
	padding: var(--space-md);
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-md);
	transition: transform var(--transition-base),
		box-shadow var(--transition-base);
	position: relative;
}

.acc-item::before {
	content: "";
	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	height: 4px;
	background: linear-gradient(90deg, var(--accent), var(--accent-warm));
	border-top-left-radius: calc(var(--radius-lg) - 1px);
	border-top-right-radius: calc(var(--radius-lg) - 1px);
	opacity: 0;
	transition: opacity var(--transition-base);
}

.acc-item:hover {
	transform: translateY(-6px);
	box-shadow: var(--shadow-xl);
}

.acc-logo {
	flex: 0 0 auto;
	display: flex;
	align-items: center;
	justify-content: flex-start;
	width: 100%;
	min-height: 80px;
	margin-bottom: var(--space-xs);
}

.acc-logo-img {
	/* max-height: 80px;
	max-width: 120px; */
	width: auto;
	height: auto;
	display: block;
	object-fit: contain;
}

.acc-content {
	text-align: left;
	max-width: 100%;
}

.acc-title {
	font-weight: 700;
	color: var(--brand);
	margin-bottom: 0.25rem;
}

.acc-text {
	color: var(--text-secondary);
	font-size: 0.95rem;
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

/* Tooltip wrapper for logos */
.logo {
	position: relative;
	display: inline-block;
}

.logo::after {
	content: attr(data-tooltip);
	position: absolute;
	bottom: calc(100% + 8px);
	left: 50%;
	transform: translateX(-50%) translateY(4px);
	background: rgba(0, 0, 0, 0.8);
	color: #fff;
	padding: 6px 8px;
	border-radius: 6px;
	font-size: 0.85rem;
	white-space: nowrap;
	opacity: 0;
	pointer-events: none;
	transition: opacity 0.15s ease, transform 0.15s ease;
	z-index: 1000;
}

.logo:hover::after,
.logo:focus::after {
	opacity: 1;
	transform: translateX(-50%) translateY(0);
}

.logo img {
	display: block;
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

	/* allow accreditation items to wrap on small screens */
	.accreditation-grid {
		flex-wrap: wrap;
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

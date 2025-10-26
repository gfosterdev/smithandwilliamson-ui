<template>
	<section id="services" class="container services">
		<div class="services-header">
			<h3>Our services</h3>
			<p class="lead">
				Professional window, door and glazing services for homes and
				businesses — installed with care and warranty-backed.
			</p>
		</div>

		<div class="service-grid">
			<article class="service">
				<div class="service-head">
					<div class="service-icon" aria-hidden></div>
					<h4>Residential Windows</h4>
				</div>
				<p>
					Double and triple-glazed windows, frames and bespoke
					installations to improve comfort and reduce energy bills.
				</p>
			</article>

			<article class="service">
				<div class="service-head">
					<div class="service-icon" aria-hidden></div>
					<h4>Commercial Glazing</h4>
				</div>
				<p>
					Shopfronts, curtain walling, and specialist commercial
					glazing with compliance and durability in mind.
				</p>
			</article>

			<article class="service">
				<div class="service-head">
					<div class="service-icon" aria-hidden></div>
					<h4>Repairs &amp; Replacements</h4>
				</div>
				<p>
					Fast glass repairs, sealed unit replacements, and emergency
					boarding to keep properties secure.
				</p>
			</article>
		</div>

		<p class="accreditation">
			Accredited installer: <strong>FENSA</strong>. We operate in line
			with recognised industry standards for compliance and
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

		<!-- Residence Collection installer details (sourced from Residence profile) -->
		<section class="residence">
			<p class="residence-blurb">
				We are a family-run business with over 10 years' experience. We
				are fully FENSA registered and warrant our products through the
				GGFI. We specialise in Residence systems (R9, R7, R2) for
				windows, doors, conservatories and orangeries. We offer complete
				installations or supply-only at competitive rates.
			</p>

			<div class="residence-branding" aria-hidden>
				<div class="partners">
					<!-- Local copies of Residence brand marks -->
					<img src="../assets/residence/r9.svg" alt="Residence R9" />
					<img src="../assets/residence/r7.svg" alt="Residence R7" />
					<img src="../assets/residence/r2.svg" alt="Residence R2" />
					<img src="../assets/residence/rd.svg" alt="Residence RD" />
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
					Residence-approved installer — View profile
				</a>
				<a class="btn" href="#contact">Request a callback</a>
			</div>
		</section>
	</section>
</template>

<script setup lang="ts">
// presentational
</script>

<style scoped>
/* Services section styles */
.services {
	padding-top: 2rem;
}
.service-grid {
	display: grid;
	grid-template-columns: repeat(3, 1fr);
	gap: 1.25rem;
	margin-top: 1rem;
	align-items: stretch;
}
.service {
	background: var(--surface);
	padding: 1.5rem;
	border-radius: 12px;
	border: 1px solid var(--border-weak);
	box-shadow: 0 10px 30px var(--shadow-sm);
	display: flex;
	flex-direction: column;
	transition: transform 0.18s ease, box-shadow 0.18s ease;
}
.service:hover {
	transform: translateY(-6px);
	box-shadow: 0 18px 40px var(--shadow-md);
}
.service h4 {
	margin: 0 0 0.5rem 0;
	font-size: 1.05rem;
}
.service-head {
	display: flex;
	align-items: center;
	gap: 0.75rem;
	margin-bottom: 0.5rem;
}
.service-icon {
	width: 56px;
	height: 56px;
	border-radius: 10px;
	background: linear-gradient(180deg, var(--brand), var(--brand-dark));
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
	flex: 0 0 56px;
}
.lead {
	margin: 0.25rem 0 0.75rem 0;
	color: var(--muted-text);
	max-width: 60ch;
}
.accreditation {
	margin-top: 0.75rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.fensa-badge {
	height: 36px;
}
.residence {
	margin-top: 1rem;
	padding-top: 0.75rem;
	border-top: 1px dashed var(--border-weak);
}
.residence-blurb {
	margin: 0.5rem 0;
	color: var(--muted-text);
}
.residence {
	margin-top: 1rem;
	padding-top: 0.75rem;
	border-top: 1px dashed var(--border-weak);
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}
.residence-blurb {
	margin: 0.5rem 0;
	color: var(--muted-text);
}
.partners,
.experience-grid {
	display: flex;
	flex-direction: row; /* logos displayed horizontally */
	flex-wrap: wrap;
	gap: 0.75rem;
	align-items: center;
	margin-top: 0.25rem;
}
.partners img,
.experience-grid img {
	height: 36px;
	width: auto;
	display: inline-block;
	filter: none;
	opacity: 0.98;
}

.experience-grid img {
	height: 42px;
}

/* CTA in the Residence section: make buttons smaller and tighter */
.residence-cta {
	display: flex;
	gap: 0.5rem;
	margin-top: 0.5rem;
	align-items: center;
}
.residence-cta .btn {
	padding: 0.35rem 0.6rem;
	font-size: 0.85rem;
	line-height: 1;
	border-radius: 8px;
}
.residence-cta .btn.primary {
	padding: 0.4rem 0.7rem;
}

/* container to group partners above experience logos */
.residence-branding {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	/* center the branding block underneath the blurb */
	align-self: center;
}

/* ensure CTA buttons sit centered under the blurb */
.residence-cta {
	align-self: center;
}

@media (max-width: 1000px) {
	.service-grid {
		grid-template-columns: repeat(2, 1fr);
	}
	.accreditation {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
	}
	.accreditation .fensa-link {
		align-self: flex-end;
	}
	.residence {
		border-top: none;
	}
	.partners {
		gap: 0.5rem;
	}
	.partners img {
		height: 30px;
	}
}

@media (max-width: 620px) {
	.service-grid {
		grid-template-columns: 1fr;
	}
	.service {
		padding: 1rem;
	}
	.service-icon {
		width: 48px;
		height: 48px;
	}
}
</style>

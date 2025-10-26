<template>
	<section id="services" class="container services">
		<h3>Our services</h3>
		<div class="service-grid">
			<article class="service">
				<h4>Residential Windows</h4>
				<p>
					Double and triple-glazed windows, frames and bespoke
					installations to improve comfort and reduce energy bills.
				</p>
			</article>
			<article class="service">
				<h4>Commercial Glazing</h4>
				<p>
					Shopfronts, curtain walling, and specialist commercial
					glazing with compliance and durability in mind.
				</p>
			</article>
			<article class="service">
				<h4>Repairs &amp; Replacements</h4>
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

			<div class="partners" aria-hidden>
				<!-- Local copies of Residence brand marks -->
				<img src="../assets/residence/r9.svg" alt="Residence R9" />
				<img src="../assets/residence/r7.svg" alt="Residence R7" />
				<img src="../assets/residence/r2.svg" alt="Residence R2" />
				<img src="../assets/residence/rd.svg" alt="Residence RD" />
			</div>

			<div class="experience-grid" aria-hidden>
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
	grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}
.service {
	background: var(--surface);
	padding: 1.25rem;
	border-radius: 10px;
	border: 1px solid var(--border-weak);
	box-shadow: 0 8px 20px var(--shadow-sm);
}
.service h4 {
	margin-bottom: 0.5rem;
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
.partners {
	display: flex;
	gap: 0.75rem;
	align-items: center;
	margin-top: 0.5rem;
}
.partners img {
	height: 36px;
	width: auto;
	display: inline-block;
}
.experience-grid {
	display: flex;
	gap: 0.5rem;
	align-items: center;
	margin-top: 0.75rem;
}
.experience-grid img {
	height: 42px;
	width: auto;
	display: inline-block;
	filter: none;
	opacity: 0.95;
}

@media (max-width: 1000px) {
	.service-grid {
		grid-template-columns: 1fr;
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
</style>

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
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}
.service {
	background: rgba(255, 255, 255, 0.02);
	padding: 1.25rem;
	border-radius: 8px;
}
.accreditation {
	margin-top: 0.75rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.fensa-badge {
	height: 32px;
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
}
</style>

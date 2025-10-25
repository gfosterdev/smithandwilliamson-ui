<script setup lang="ts">
import { ref } from "vue";

const name = ref("");
const email = ref("");
const message = ref("");

// Project images from assets/portfolio
const projects = [
	{
		title: "Doors & Entrances",
		img: new URL("./assets/portfolio/doors1.jpeg", import.meta.url).href,
	},
	{
		title: "Roof & Fascia",
		img: new URL("./assets/portfolio/fascia1.png", import.meta.url).href,
	},
	{
		title: "Residential Retrofit",
		img: new URL("./assets/portfolio/house1.jpg", import.meta.url).href,
	},
	{
		title: "Refurbishment",
		img: new URL("./assets/portfolio/ref1.jpg", import.meta.url).href,
	},
	{
		title: "Windows Installation",
		img: new URL("./assets/portfolio/windows1.jpeg", import.meta.url).href,
	},
];

function submitContact(e: Event) {
	e.preventDefault();
	// fallback: open user's email client with a prefilled message
	const subject = encodeURIComponent(
		"Website enquiry from " + (name.value || "Website")
	);
	const body = encodeURIComponent(
		`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
	);
	window.location.href = `mailto:info@smithandwilliamson.co.uk?subject=${subject}&body=${body}`;
}
</script>

<template>
	<div id="landing">
		<header class="site-header">
			<div class="container header-inner">
				<div class="brand">
					<img
						src="./assets/logo.png"
						alt="Smith &amp; Williamson logo"
						class="brand-logo"
					/>
					<h1>Smith &amp; Williamson</h1>
					<p class="tag">Windows &amp; Glass Solutions</p>
				</div>
				<nav class="nav">
					<a href="#services">Services</a>
					<a href="#projects">Projects</a>
					<a href="#contact" class="cta">Get a Quote</a>
				</nav>
			</div>
		</header>

		<section class="hero">
			<div class="container hero-inner">
				<div class="hero-copy">
					<h2>Quality windows and glasswork, installed with care</h2>
					<p>
						We deliver high-performance, energy-efficient windows,
						commercial glazing, and fast repair & replacement
						services in King's Lynn and across Norfolk. Trusted by
						homeowners and businesses for reliable, local
						workmanship.
					</p>
					<div class="hero-actions">
						<a href="#contact" class="btn primary"
							>Request a quote</a
						>
						<a href="#projects" class="btn">See our work</a>
					</div>
				</div>
				<div class="hero-visual" aria-hidden>
					<!-- Simple decorative glass illustration (CSS) -->
					<div class="glass-illustration"></div>
				</div>
			</div>
		</section>

		<section id="services" class="container services">
			<h3>Our services</h3>
			<div class="service-grid">
				<article class="service">
					<h4>Residential Windows</h4>
					<p>
						Double and triple-glazed windows, frames and bespoke
						installations to improve comfort and reduce energy
						bills.
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
						Fast glass repairs, sealed unit replacements, and
						emergency boarding to keep properties secure.
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
						src="./assets/fensa-badge.svg"
						alt="FENSA accredited"
						class="fensa-badge"
					/>
				</a>
			</p>
		</section>

		<section id="projects" class="container projects">
			<h3>Recent projects</h3>
			<div class="project-grid">
				<div class="project-card" v-for="(p, i) in projects" :key="i">
					<img :src="p.img" :alt="p.title" />
					<div class="project-caption">{{ p.title }}</div>
				</div>
			</div>
		</section>

		<section id="contact" class="container contact">
			<h3>Contact us</h3>
			<p>
				Based in King's Lynn:
				<strong
					>75 Hall Lane, West Winch, King's Lynn, Norfolk, PE33
					0PJ</strong
				>.
			</p>
			<p>
				Call us on <strong>01553 841 175</strong> or
				<strong>07799 620 883</strong>, or use the form below and we'll
				get back within one business day.
			</p>
			<form class="contact-form" @submit="submitContact">
				<div class="form-row">
					<input
						v-model="name"
						type="text"
						placeholder="Your name"
						required
					/>
					<input
						v-model="email"
						type="email"
						placeholder="Email address"
						required
					/>
				</div>
				<textarea
					v-model="message"
					placeholder="How can we help?"
					rows="5"
				></textarea>
				<div class="form-row form-actions">
					<button type="submit" class="btn primary">
						Send enquiry
					</button>
					<a class="btn" href="tel:01553841175">Call us</a>
				</div>
			</form>
		</section>

		<footer class="site-footer">
			<div class="container footer-inner">
				<div>
					© {{ new Date().getFullYear() }} Smith &amp; Williamson — 75
					Hall Lane, West Winch, King's Lynn
				</div>
				<div class="footer-links">
					<a href="#">Privacy</a>
					<a href="#">Terms</a>
				</div>
			</div>
		</footer>
	</div>
</template>

<style scoped>
.container {
	max-width: 1100px;
	margin: 0 auto;
	padding: 2rem;
}

.site-header {
	background: linear-gradient(180deg, rgba(11, 116, 222, 0.06), transparent);
	border-bottom: 1px solid rgba(255, 255, 255, 0.04);
}
.header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.brand h1 {
	margin: 0;
	font-size: 1.2rem;
	color: var(--brand);
}
.brand {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}
.brand-logo {
	height: 40px;
	width: auto;
	display: inline-block;
}
.tag {
	margin: 0;
	font-size: 0.9rem;
	color: rgba(255, 255, 255, 0.7);
}
.nav a {
	margin-left: 1rem;
	color: inherit;
	text-decoration: none;
}
.nav .cta {
	padding: 0.45rem 0.75rem;
	background: var(--brand);
	color: white;
	border-radius: 6px;
}

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
.hero-copy p {
	color: rgba(255, 255, 255, 0.8);
	margin-bottom: 1rem;
}
.hero-actions .btn {
	margin-right: 0.5rem;
}
.btn {
	display: inline-block;
	text-decoration: none;
	border-radius: 8px;
	padding: 0.6rem 1rem;
	border: 1px solid transparent;
	background: transparent;
	color: inherit;
	cursor: pointer;
}
.btn.primary {
	background: var(--brand);
	color: white;
}

.hero-visual {
	width: 320px;
	height: 200px;
	display: flex;
	align-items: center;
	justify-content: center;
}
.glass-illustration {
	width: 220px;
	height: 160px;
	background: linear-gradient(
		135deg,
		rgba(11, 116, 222, 0.15),
		rgba(0, 188, 212, 0.08)
	);
	border-radius: 8px;
	box-shadow: 0 8px 24px rgba(0, 0, 0, 0.35);
	border: 1px solid rgba(255, 255, 255, 0.04);
}

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

.projects {
	padding-top: 2rem;
}
.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}
.project-card {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.02),
		rgba(255, 255, 255, 0.01)
	);
	padding: 0;
	border-radius: 8px;
	overflow: hidden;
	min-height: 120px;
}

.project-card img {
	width: 100%;
	height: 160px;
	object-fit: cover;
	display: block;
}
.project-caption {
	padding: 0.75rem 1rem;
	background: rgba(0, 0, 0, 0.15);
	color: rgba(255, 255, 255, 0.95);
	font-weight: 600;
}

.contact {
	padding-top: 2rem;
}
.contact-form {
	margin-top: 1rem;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}
.form-row {
	display: flex;
	gap: 0.5rem;
}
.form-row input {
	flex: 1;
	padding: 0.6rem;
	border-radius: 6px;
	border: 1px solid rgba(255, 255, 255, 0.06);
	background: transparent;
	color: inherit;
}
.contact-form textarea {
	padding: 0.6rem;
	border-radius: 6px;
	border: 1px solid rgba(255, 255, 255, 0.06);
	background: transparent;
	color: inherit;
}
.form-actions {
	justify-content: flex-start;
}

.site-footer {
	margin-top: 3rem;
	border-top: 1px solid rgba(255, 255, 255, 0.03);
	padding: 1.5rem 0;
}
.footer-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.footer-links a {
	margin-left: 1rem;
}

.accreditation {
	margin-top: 0.75rem;
	display: flex;
	align-items: center;
	gap: 0.5rem;
}
.fensa-badge {
	height: 32px;
	width: auto;
	display: inline-block;
}

@media (max-width: 1000px) {
	/* General container padding reduction on small screens */
	.container {
		padding: 1.25rem;
	}

	/* Stack hero and reduce visual weight */
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

	/* Header: stack brand and nav, make nav easy to tap */
	.header-inner {
		flex-direction: column;
		gap: 0.5rem;
		align-items: stretch;
	}
	/* Make header more compact and usable on small screens */
	.header-inner {
		padding: 0.75rem 1rem;
	}
	.brand {
		width: 100%;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.brand-logo {
		height: 36px;
	}
	.brand h1 {
		margin: 0;
		font-size: 1rem;
	}

	/* Navigation becomes full-width buttons for easier tapping */
	.nav {
		width: 100%;
		display: flex;
		gap: 0.5rem;
		justify-content: space-between;
	}
	.nav a {
		flex: 1;
		text-align: center;
		padding: 0.75rem 0.6rem;
		border-radius: 8px;
		background: rgba(255, 255, 255, 0.02);
		border: 1px solid rgba(255, 255, 255, 0.03);
	}
	.nav a:hover {
		background: rgba(255, 255, 255, 0.03);
	}
	.nav .cta {
		background: var(--brand);
		color: white;
		border-color: transparent;
	}

	/* On very small screens hide the long site title to save space */
	@media (max-width: 420px) {
		.brand h1 {
			display: none;
		}
		.tag {
			font-size: 0.85rem;
		}
	}
	.brand {
		text-align: left;
	}
	.brand-logo {
		height: 32px;
	}
	.nav {
		display: flex;
		justify-content: flex-end;
		gap: 0.5rem;
		flex-wrap: wrap;
	}
	.nav a {
		margin-left: 0;
		padding: 0.5rem 0.6rem;
		border-radius: 6px;
		background: transparent;
	}
	.nav .cta {
		align-self: flex-end;
	}

	/* Layout grids collapse to single column for readability */
	.service-grid,
	.project-grid {
		grid-template-columns: 1fr;
	}

	/* Forms: stack inputs and make actions full-width */
	.form-row {
		flex-direction: column;
	}
	.form-row input,
	.contact-form textarea {
		width: 100%;
	}
	.form-actions {
		display: flex;
		flex-direction: column;
		gap: 0.5rem;
	}
	.btn {
		width: 100%;
		display: inline-block;
		text-align: center;
	}

	/* Accessibility: larger tap targets */
	.btn,
	.nav a {
		padding: 0.75rem 0.9rem;
	}

	/* Slightly larger type for headings on small screens */
	.hero-copy h2 {
		font-size: 1.6rem;
	}

	/* Footer: stack content */
	.footer-inner {
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}

	/* Make accreditation text and badge stack cleanly on small screens */
	.accreditation {
		flex-direction: column;
		align-items: flex-start;
		gap: 0.5rem;
		font-size: 0.98rem;
	}
	.accreditation strong {
		display: inline-block;
	}
	.fensa-badge {
		height: 36px;
	}

	/* align the FENSA badge to the right edge of the column on small screens */
	.accreditation .fensa-link {
		align-self: flex-end;
	}
}
</style>

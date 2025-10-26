<template>
	<footer class="site-footer">
		<div class="container">
			<div class="footer-content">
				<div class="footer-column">
					<div class="footer-brand">
						<h3>Smith & Williamson</h3>
						<p>Windows & Glass Solutions</p>
					</div>
					<p class="footer-tagline">
						Professional glazing services across Norfolk since 2010.
						FENSA registered and fully insured.
					</p>
				</div>

				<div class="footer-column">
					<h4>Quick Links</h4>
					<ul class="footer-links">
						<li><a href="#services">Our Services</a></li>
						<li><a href="#projects">Recent Projects</a></li>
						<li><a href="#contact">Contact Us</a></li>
						<li><a href="tel:01553841175">Call Now</a></li>
					</ul>
				</div>

				<div class="footer-column">
					<h4>Contact</h4>
					<ul class="footer-contact">
						<li>75 Hall Lane, West Winch</li>
						<li>King's Lynn, Norfolk</li>
						<li>PE33 0PJ</li>
						<li><a href="tel:01553841175">01553 841 175</a></li>
					</ul>
				</div>

				<div class="footer-column">
					<h4>Accreditations</h4>
					<div class="footer-badges">
						<span class="badge">FENSA Registered</span>
						<span class="badge">Residence Approved</span>
						<span class="badge">GGFI Warranted</span>
					</div>
				</div>
			</div>

			<div class="footer-bottom">
				<p>
					© {{ new Date().getFullYear() }} Smith & Williamson. All
					rights reserved.
				</p>
				<div class="footer-legal">
					<a href="#">Privacy Policy</a>
					<a href="#">Terms of Service</a>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// presentational
</script>

<style scoped>
/* Modern footer with multi-column layout */
.site-footer {
	background: linear-gradient(
		180deg,
		var(--brand-dark) 0%,
		var(--brand) 100%
	);
	color: rgba(255, 255, 255, 0.95);
	padding: var(--space-xl) 0 var(--space-md);
	margin-top: var(--space-xl);
}

.footer-content {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
	gap: var(--space-lg);
	margin-bottom: var(--space-lg);
	padding-bottom: var(--space-lg);
	border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

.footer-column h3,
.footer-column h4 {
	color: var(--white);
	margin-bottom: var(--space-sm);
	font-size: 1.125rem;
}

.footer-brand h3 {
	font-size: 1.5rem;
	margin-bottom: var(--space-xs);
}

.footer-brand p {
	margin: 0;
	color: var(--accent);
	font-weight: 600;
	font-size: 0.95rem;
}

.footer-tagline {
	margin-top: var(--space-sm);
	line-height: 1.6;
	color: rgba(255, 255, 255, 0.85);
}

.footer-links,
.footer-contact {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

.footer-links a,
.footer-contact a {
	color: rgba(255, 255, 255, 0.85);
	text-decoration: none;
	transition: color var(--transition-fast);
	display: inline-block;
}

.footer-links a:hover,
.footer-contact a:hover {
	color: var(--white);
	transform: translateX(4px);
}

.footer-contact li {
	color: rgba(255, 255, 255, 0.85);
	line-height: 1.6;
}

.footer-badges {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

.badge {
	display: inline-flex;
	align-items: center;
	padding: 0.5rem 0.875rem;
	background: rgba(255, 255, 255, 0.15);
	border: 1px solid rgba(255, 255, 255, 0.2);
	border-radius: var(--radius-md);
	font-size: 0.875rem;
	font-weight: 600;
	color: var(--white);
	backdrop-filter: blur(10px);
}

.footer-bottom {
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: var(--space-md);
	flex-wrap: wrap;
}

.footer-bottom p {
	margin: 0;
	color: rgba(255, 255, 255, 0.75);
	font-size: 0.9rem;
}

.footer-legal {
	display: flex;
	gap: var(--space-md);
}

.footer-legal a {
	color: rgba(255, 255, 255, 0.75);
	text-decoration: none;
	font-size: 0.9rem;
	transition: color var(--transition-fast);
}

.footer-legal a:hover {
	color: var(--white);
}

@media (max-width: 768px) {
	.site-footer {
		padding: var(--space-lg) 0 var(--space-md);
	}

	.footer-content {
		grid-template-columns: 1fr;
		gap: var(--space-md);
	}

	.footer-bottom {
		flex-direction: column;
		align-items: flex-start;
		text-align: left;
	}

	.footer-legal {
		flex-direction: column;
		gap: var(--space-xs);
	}
}
</style>

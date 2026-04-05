<template>
	<footer class="site-footer">
		<div class="footer-main">
			<div class="container">
				<div class="footer-content">
					<div class="footer-column brand-column">
						<div class="footer-logo">
							<img
								src="../assets/logo-horizontal-3pane.svg"
								alt="Smith & Williamson"
								class="logo-img"
							/>
						</div>
						<p class="footer-tagline">
							Professional glazing specialists serving Norfolk for
							over 25 years.
						</p>
						<div class="footer-social">
							<a
								href="https://www.instagram.com/smith_and_williamson"
								target="_blank"
								rel="noopener noreferrer"
								aria-label="Instagram"
							>
								<svg
									width="24"
									height="24"
									viewBox="0 0 24 24"
									fill="currentColor"
								>
									<rect
										x="2"
										y="2"
										width="20"
										height="20"
										rx="5"
										ry="5"
									></rect>
									<path
										d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"
										fill="var(--brand-dark)"
									></path>
									<line
										x1="17.5"
										y1="6.5"
										x2="17.51"
										y2="6.5"
										stroke="var(--brand-dark)"
										stroke-width="2"
									></line>
								</svg>
							</a>
						</div>
					</div>

					<div class="footer-column">
						<h4>Services</h4>
						<ul class="footer-links">
							<li><a href="#services">Windows & Doors</a></li>
							<li><a href="#services">Commercial Glazing</a></li>
							<li><a href="#services">Conservatories</a></li>
							<li><a href="#projects">Portfolio</a></li>
						</ul>
					</div>

					<div class="footer-column">
						<h4>Contact</h4>
						<ul class="footer-contact">
							<li class="contact-item">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
									></path>
								</svg>
								<a href="tel:01553841175">01553 841 175</a>
							</li>
							<li class="contact-item">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path>
									<polyline
										points="22,6 12,13 2,6"
									></polyline>
								</svg>
								<a href="mailto:info@smithandwilliamson.co.uk"
									>info@smithandwilliamson.co.uk</a
								>
							</li>
							<li class="contact-item">
								<svg
									width="18"
									height="18"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
									></path>
									<circle cx="12" cy="10" r="3"></circle>
								</svg>
								<div>King's Lynn, Norfolk</div>
							</li>
						</ul>
					</div>
				</div>

				<div class="footer-badges">
					<div class="badge-item">
						<img
							src="../assets/fensa-badge-better.svg"
							alt="FENSA Registered"
						/>
					</div>
					<div class="badge-item">
						<img
							src="../assets/ggfi-warranted.svg"
							alt="GGFI Warranted"
						/>
					</div>
					<div class="badge-text">
						<span>Residence Collection Approved</span>
					</div>
				</div>
			</div>
		</div>

		<div class="footer-bottom">
			<div class="container">
				<div class="footer-bottom-content">
					<p>
						© {{ new Date().getFullYear() }} Smith & Williamson. All
						rights reserved.
					</p>
					<div class="footer-legal">
						<a href="#">Privacy Policy</a>
						<span class="divider">|</span>
						<a href="#">Terms & Conditions</a>
					</div>
				</div>
			</div>
		</div>
	</footer>
</template>

<script setup lang="ts">
// presentational
</script>

<style scoped>
/* Footer - Eastern Frames style multi-column layout */
.site-footer {
	background: var(--brand-dark);
	color: rgba(255, 255, 255, 0.9);
}

.footer-main {
	padding: 4rem 0 2rem;
}

.footer-content {
	display: grid;
	grid-template-columns: 2fr 1fr 1fr;
	gap: 3rem;
	margin-bottom: 3rem;
}

.footer-column h4 {
	color: var(--white);
	margin: 0 0 1.5rem;
	font-size: 1.125rem;
	font-weight: 700;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Brand column */
.brand-column {
	padding-right: 2rem;
}

.footer-logo {
	margin-bottom: 1.5rem;
}

.logo-img {
	height: 60px;
	width: auto;
}

.footer-tagline {
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.7;
	margin: 0 0 1.5rem;
	font-size: 0.95rem;
}

.footer-social {
	display: flex;
	gap: 1rem;
}

.footer-social a {
	display: flex;
	align-items: center;
	justify-content: center;
	width: 40px;
	height: 40px;
	background: rgba(255, 255, 255, 0.1);
	border-radius: 50%;
	color: var(--white);
	transition: all var(--transition-base);
}

.footer-social a:hover {
	background: var(--accent-warm);
	transform: translateY(-2px);
}

/* Links */
.footer-links,
.footer-contact {
	list-style: none;
	padding: 0;
	margin: 0;
	display: flex;
	flex-direction: column;
	gap: 0.75rem;
}

.footer-links a {
	color: rgba(255, 255, 255, 0.8);
	text-decoration: none;
	transition: all var(--transition-fast);
	display: inline-block;
}

.footer-links a:hover {
	color: var(--white);
	transform: translateX(4px);
}

/* Contact items */
.contact-item {
	display: flex;
	gap: 0.75rem;
	align-items: flex-start;
	color: rgba(255, 255, 255, 0.8);
	line-height: 1.6;
}

.contact-item svg {
	flex-shrink: 0;
	margin-top: 2px;
}

.contact-item a {
	color: rgba(255, 255, 255, 0.8);
	text-decoration: none;
	transition: color var(--transition-fast);
}

.contact-item a:hover {
	color: var(--white);
}

/* Accreditation badges */
.footer-badges {
	display: flex;
	align-items: center;
	gap: 2rem;
	flex-wrap: wrap;
	padding: 2rem 0;
	border-top: 1px solid rgba(255, 255, 255, 0.1);
}

.badge-item img {
	height: 50px;
	width: auto;
	opacity: 1;
}

.badge-text {
	padding: 0.5rem 1rem;
	background: rgba(255, 255, 255, 0.1);
	border-radius: var(--radius-sm);
	color: var(--white);
	font-weight: 600;
	font-size: 0.9rem;
}

/* Footer bottom */
.footer-bottom {
	background: rgba(0, 0, 0, 0.2);
	padding: 1.5rem 0;
}

.footer-bottom-content {
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
	gap: 1rem;
}

.footer-bottom p {
	margin: 0;
	color: rgba(255, 255, 255, 0.7);
	font-size: 0.9rem;
}

.footer-legal {
	display: flex;
	align-items: center;
	gap: 1rem;
}

.footer-legal a {
	color: rgba(255, 255, 255, 0.7);
	text-decoration: none;
	font-size: 0.9rem;
	transition: color var(--transition-fast);
}

.footer-legal a:hover {
	color: var(--white);
}

.footer-legal .divider {
	color: rgba(255, 255, 255, 0.3);
}

@media (max-width: 1024px) {
	.footer-content {
		grid-template-columns: 1fr 1fr;
		gap: 2rem;
	}

	.brand-column {
		grid-column: 1 / -1;
		padding-right: 0;
	}
}

@media (max-width: 768px) {
	.footer-main {
		padding: 3rem 0 1.5rem;
	}

	.footer-content {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.footer-badges {
		justify-content: center;
		gap: 1.5rem;
	}

	.footer-bottom-content {
		flex-direction: column;
		text-align: center;
	}
}
</style>

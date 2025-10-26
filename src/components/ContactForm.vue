<template>
	<section id="contact" class="contact">
		<div class="container">
			<div class="contact-header">
				<h2>Contact us</h2>
				<p class="lead">
					Get in touch for a free quote or consultation
				</p>
			</div>

			<div class="contact-wrapper">
				<div class="contact-info">
					<div class="info-card">
						<div class="info-icon">
							<svg
								width="24"
								height="24"
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
						</div>
						<div>
							<h4>Our Location</h4>
							<p>
								75 Hall Lane, West Winch<br />King's Lynn,
								Norfolk, PE33 0PJ
							</p>
						</div>
					</div>

					<div class="info-card">
						<div class="info-icon">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
								></path>
							</svg>
						</div>
						<div>
							<h4>Phone</h4>
							<p>
								<a href="tel:01553841175">01553 841 175</a>
							</p>
						</div>
					</div>

					<div class="info-card">
						<div class="info-icon">
							<svg
								width="24"
								height="24"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<circle cx="12" cy="12" r="10"></circle>
								<polyline points="12 6 12 12 16 14"></polyline>
							</svg>
						</div>
						<div>
							<h4>Response Time</h4>
							<p>
								We respond to all enquiries within one business
								day
							</p>
						</div>
					</div>
				</div>

				<form class="contact-form" @submit.prevent="submitContact">
					<div class="form-group">
						<label for="name">Your name *</label>
						<input
							id="name"
							v-model="name"
							type="text"
							placeholder="John Smith"
							required
						/>
					</div>
					<div class="form-group">
						<label for="email">Email address *</label>
						<input
							id="email"
							v-model="email"
							type="email"
							placeholder="john@example.com"
							required
						/>
					</div>
					<div class="form-group">
						<label for="message">How can we help? *</label>
						<textarea
							id="message"
							v-model="message"
							placeholder="Tell us about your project..."
							rows="5"
							required
						></textarea>
					</div>
					<div class="form-actions">
						<button type="submit" class="btn primary">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<line x1="22" y1="2" x2="11" y2="13"></line>
								<polygon
									points="22 2 15 22 11 13 2 9 22 2"
								></polygon>
							</svg>
							Send enquiry
						</button>
						<a class="btn ghost" :href="'tel:01553841175'">
							<svg
								width="20"
								height="20"
								viewBox="0 0 24 24"
								fill="none"
								stroke="currentColor"
								stroke-width="2"
							>
								<path
									d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
								></path>
							</svg>
							Call us now
						</a>
					</div>
				</form>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
const email = ref("");
const message = ref("");

function submitContact() {
	const subject = encodeURIComponent(
		"Website enquiry from " + (name.value || "Website")
	);
	const body = encodeURIComponent(
		`Name: ${name.value}\nEmail: ${email.value}\n\n${message.value}`
	);
	window.location.href = `mailto:info@smithandwilliamson.co.uk?subject=${subject}&body=${body}`;
}
</script>

<style scoped>
/* Modern contact section with split layout */
.contact {
	padding: var(--space-xl) 0;
	background: linear-gradient(
		180deg,
		var(--glass-tint) 0%,
		var(--white) 100%
	);
}

.contact-header {
	text-align: center;
	max-width: 700px;
	margin: 0 auto var(--space-lg);
}

.contact-header h2 {
	color: var(--brand);
	margin-bottom: var(--space-xs);
}

.lead {
	font-size: 1.125rem;
	color: var(--text-secondary);
	margin: 0;
}

.contact-wrapper {
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	gap: var(--space-lg);
	align-items: start;
}

/* Contact info cards */
.contact-info {
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
}

.info-card {
	background: var(--white);
	padding: var(--space-md);
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-sm);
	display: flex;
	gap: var(--space-sm);
	transition: all var(--transition-base);
}

.info-card:hover {
	transform: translateX(4px);
	box-shadow: var(--shadow-md);
	border-color: var(--accent);
}

.info-icon {
	width: 48px;
	height: 48px;
	border-radius: var(--radius-md);
	background: linear-gradient(135deg, var(--accent) 0%, var(--brand) 100%);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white);
	flex-shrink: 0;
}

.info-card h4 {
	margin: 0 0 var(--space-xs);
	color: var(--brand);
	font-size: 1.125rem;
}

.info-card p {
	margin: 0;
	color: var(--text-secondary);
	line-height: 1.6;
}

.info-card a {
	color: var(--accent);
	text-decoration: none;
	font-weight: 600;
	transition: color var(--transition-fast);
}

.info-card a:hover {
	color: var(--brand);
}

/* Contact form */
.contact-form {
	background: var(--white);
	padding: var(--space-lg);
	border-radius: var(--radius-lg);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-md);
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: var(--space-xs);
}

.form-group label {
	color: var(--text);
	font-weight: 600;
	font-size: 0.95rem;
}

.form-group input,
.form-group textarea {
	padding: 0.875rem 1rem;
	border-radius: var(--radius-md);
	border: 2px solid var(--border-weak);
	background: var(--white);
	color: var(--text);
	font-family: var(--font-sans);
	font-size: 1rem;
	transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus {
	outline: none;
	border-color: var(--accent);
	box-shadow: 0 0 0 3px rgba(74, 144, 226, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
	color: var(--muted-text);
}

.form-group textarea {
	resize: vertical;
	min-height: 120px;
}

.form-actions {
	display: flex;
	gap: var(--space-sm);
	margin-top: var(--space-sm);
}

.form-actions .btn {
	flex: 1;
}

@media (max-width: 968px) {
	.contact-wrapper {
		grid-template-columns: 1fr;
		gap: var(--space-md);
	}

	.contact-info {
		order: 2;
	}

	.contact-form {
		order: 1;
		padding: var(--space-md);
	}

	.info-card {
		flex-direction: row;
	}
}

@media (max-width: 640px) {
	.contact {
		padding: var(--space-lg) 0;
	}

	.form-actions {
		flex-direction: column;
		gap: var(--space-xs);
	}

	.form-actions .btn {
		padding: 0.75rem 1rem;
		font-size: 0.9rem;
	}
}
</style>

<template>
	<section id="contact" class="contact section-grey">
		<div class="container">
			<div class="section-header">
				<h2>Get In Touch</h2>
				<p class="lead">
					Request a free, no-obligation quote or speak to our team
					about your project
				</p>
			</div>

			<div class="contact-wrapper">
				<div class="contact-info">
					<h3>Contact Information</h3>
					<div class="info-cards">
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
							<div class="info-content">
								<h4>Address</h4>
								<p>
									75 Hall Lane, West Winch<br />King's Lynn,
									Norfolk<br />PE33 0PJ
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
							<div class="info-content">
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
									<path
										d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
									></path>
									<polyline
										points="22,6 12,13 2,6"
									></polyline>
								</svg>
							</div>
							<div class="info-content">
								<h4>Email</h4>
								<p>
									<a
										href="mailto:info@smithandwilliamson.co.uk"
										>info@smithandwilliamson.co.uk</a
									>
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
									<polyline
										points="12 6 12 12 16 14"
									></polyline>
								</svg>
							</div>
							<div class="info-content">
								<h4>Opening Hours</h4>
								<p>
									Mon-Fri: 8:00 AM - 5:00 PM<br />Sat: 9:00 AM
									- 1:00 PM
								</p>
							</div>
						</div>
					</div>
				</div>

				<div class="form-wrapper">
					<form class="contact-form" @submit.prevent="submitContact">
						<h3>Send Us a Message</h3>
						<div class="form-row">
							<div class="form-group">
								<label for="name">Name *</label>
								<input
									id="name"
									v-model="name"
									type="text"
									placeholder="Your full name"
									required
								/>
							</div>
							<div class="form-group">
								<label for="phone">Phone *</label>
								<input
									id="phone"
									v-model="phone"
									type="tel"
									placeholder="Your phone number"
									required
								/>
							</div>
						</div>
						<div class="form-group">
							<label for="email">Email *</label>
							<input
								id="email"
								v-model="email"
								type="email"
								placeholder="your@email.com"
								required
							/>
						</div>
						<div class="form-group">
							<label for="service">Service Required</label>
							<select id="service" v-model="service">
								<option value="">Please select...</option>
								<option value="windows">Windows</option>
								<option value="doors">Doors</option>
								<option value="commercial">
									Commercial Glazing
								</option>
								<option value="repairs">
									Repairs & Maintenance
								</option>
								<option value="conservatories">
									Conservatories
								</option>
								<option value="other">Other</option>
							</select>
						</div>
						<div class="form-group">
							<label for="message">Message *</label>
							<textarea
								id="message"
								v-model="message"
								placeholder="Tell us about your project or requirements..."
								rows="6"
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
								Send Message
							</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";
const name = ref("");
const phone = ref("");
const email = ref("");
const service = ref("");
const message = ref("");

function submitContact() {
	const subject = encodeURIComponent(
		"Website Enquiry from " + (name.value || "Customer")
	);
	const body = encodeURIComponent(
		`Name: ${name.value}\nPhone: ${phone.value}\nEmail: ${
			email.value
		}\nService Required: ${service.value || "Not specified"}\n\nMessage:\n${
			message.value
		}`
	);
	window.location.href = `mailto:info@smithandwilliamson.co.uk?subject=${subject}&body=${body}`;
}
</script>

<style scoped>
/* Contact section - Eastern Frames inspired */
.contact {
	padding: 5rem 0;
}

.section-header {
	text-align: center;
	max-width: 800px;
	margin: 0 auto 3rem;
}

.section-header h2 {
	font-size: clamp(2rem, 4vw, 2.5rem);
	color: var(--brand);
	margin-bottom: 1rem;
	font-weight: 700;
}

.lead {
	font-size: 1.125rem;
	color: var(--text-secondary);
	line-height: 1.7;
	margin: 0;
}

.contact-wrapper {
	display: grid;
	grid-template-columns: 1fr 1.5fr;
	gap: 3rem;
	align-items: start;
}

/* Contact info section */
.contact-info h3 {
	font-size: 1.5rem;
	color: var(--brand);
	margin: 0 0 1.5rem;
	font-weight: 700;
}

.info-cards {
	display: flex;
	flex-direction: column;
	gap: 1.25rem;
}

.info-card {
	background: var(--white);
	padding: 1.5rem;
	border-radius: var(--radius-md);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-sm);
	display: flex;
	gap: 1rem;
	transition: all var(--transition-base);
}

.info-card:hover {
	transform: translateX(4px);
	box-shadow: var(--shadow-md);
	border-color: var(--brand);
}

.info-icon {
	width: 50px;
	height: 50px;
	border-radius: 50%;
	background: linear-gradient(
		135deg,
		var(--brand) 0%,
		var(--brand-light) 100%
	);
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white);
	flex-shrink: 0;
}

.info-content {
	flex: 1;
}

.info-content h4 {
	margin: 0 0 0.5rem;
	color: var(--brand);
	font-size: 1.125rem;
	font-weight: 700;
}

.info-content p {
	margin: 0;
	color: var(--text-secondary);
	line-height: 1.6;
}

.info-content a {
	color: var(--accent-warm);
	text-decoration: none;
	font-weight: 600;
	transition: color var(--transition-fast);
}

.info-content a:hover {
	color: var(--accent-warm-hover);
}

/* Contact form */
.form-wrapper {
	background: var(--white);
	padding: 2.5rem;
	border-radius: var(--radius-md);
	border: 1px solid var(--border-weak);
	box-shadow: var(--shadow-md);
}

.contact-form h3 {
	font-size: 1.5rem;
	color: var(--brand);
	margin: 0 0 2rem;
	font-weight: 700;
}

.form-row {
	display: grid;
	grid-template-columns: 1fr 1fr;
	gap: 1.25rem;
}

.form-group {
	display: flex;
	flex-direction: column;
	gap: 0.5rem;
	margin-bottom: 1.25rem;
}

.form-group label {
	color: var(--text);
	font-weight: 600;
	font-size: 0.95rem;
}

.form-group input,
.form-group textarea,
.form-group select {
	padding: 0.875rem 1rem;
	border-radius: var(--radius-sm);
	border: 2px solid var(--border-weak);
	background: var(--white);
	color: var(--text);
	font-family: var(--font-sans);
	font-size: 1rem;
	transition: all var(--transition-fast);
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
	outline: none;
	border-color: var(--brand);
	box-shadow: 0 0 0 3px rgba(0, 51, 102, 0.1);
}

.form-group input::placeholder,
.form-group textarea::placeholder {
	color: var(--muted);
}

.form-group textarea {
	resize: vertical;
	min-height: 120px;
}

.form-actions {
	margin-top: 1rem;
}

.form-actions .btn {
	width: 100%;
	justify-content: center;
}

@media (max-width: 968px) {
	.contact-wrapper {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.form-row {
		grid-template-columns: 1fr;
	}

	.form-wrapper {
		padding: 2rem;
	}
}

@media (max-width: 768px) {
	.contact {
		padding: 3rem 0;
	}

	.form-wrapper {
		padding: 1.5rem;
	}
}
</style>

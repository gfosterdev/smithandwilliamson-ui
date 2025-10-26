<template>
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
			<strong>07799 620 883</strong>, or use the form below and we'll get
			back within one business day.
		</p>
		<form class="contact-form" @submit.prevent="submitContact">
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
				<button type="submit" class="btn primary">Send enquiry</button>
				<a class="btn" :href="'tel:01553841175'">Call us</a>
			</div>
		</form>
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
/* Contact form layout and responsive behavior */
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

@media (max-width: 1000px) {
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
}
</style>

<template>
	<header class="site-header">
		<div class="container header-inner">
			<div class="brand">
				<img
					src="../assets/logo.png"
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
</template>

<script setup lang="ts">
// purely presentational header
</script>

<style scoped>
/* Header styles moved from App.vue for encapsulation */
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

@media (max-width: 1000px) {
	.header-inner {
		flex-direction: column;
		gap: 0.5rem;
		align-items: stretch;
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
	.nav .cta {
		background: var(--brand);
		color: white;
	}

	@media (max-width: 420px) {
		.brand h1 {
			display: none;
		}
		.tag {
			font-size: 0.85rem;
		}
	}
}
</style>

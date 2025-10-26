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
	background: var(--surface);
	border-bottom: 1px solid var(--border-weak);
}
.header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
}
.brand h1 {
	margin: 0;
	font-size: 1.1rem;
	color: var(--brand);
}
.brand {
	display: flex;
	align-items: center;
	gap: 0.75rem;
}
.brand-logo {
	height: 44px;
	width: auto;
}
.brand-logo {
	background: var(--surface-2);
	padding: 6px 8px;
	border-radius: 6px;
	box-shadow: 0 6px 18px var(--shadow-md);
}
.tag {
	margin: 0;
	font-size: 0.9rem;
	color: var(--muted-text);
}
.nav a {
	margin-left: 1rem;
	color: var(--muted-text);
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
		background: var(--surface-muted);
		border: 1px solid var(--border-weak);
	}
	.nav .cta {
		background: var(--brand-dark);
		color: var(--white);
	}
}
</style>

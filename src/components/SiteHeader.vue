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
/* Modern header with glass effect and sticky behavior */
.site-header {
	background: rgba(255, 255, 255, 0.95);
	backdrop-filter: blur(12px);
	-webkit-backdrop-filter: blur(12px);
	border-bottom: 1px solid var(--border-weak);
	position: sticky;
	top: 0;
	z-index: 100;
	transition: all var(--transition-base);
}

.header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
	gap: var(--space-md);
}

.brand {
	display: flex;
	align-items: center;
	gap: 0.875rem;
}

.brand-logo {
	height: 48px;
	width: auto;
	background: var(--surface-2);
	padding: 8px 10px;
	border-radius: var(--radius-md);
	box-shadow: var(--shadow-sm);
	transition: all var(--transition-base);
}

.brand-logo:hover {
	box-shadow: var(--shadow-md);
	transform: translateY(-1px);
}

.brand h1 {
	margin: 0;
	font-size: 1.25rem;
	color: var(--brand);
	font-weight: 700;
}

.tag {
	margin: 0;
	font-size: 0.875rem;
	color: var(--text-secondary);
	font-weight: 500;
}

.nav {
	display: flex;
	align-items: center;
	gap: var(--space-sm);
}

.nav a {
	color: var(--text-secondary);
	text-decoration: none;
	font-weight: 600;
	padding: 0.5rem 0.875rem;
	border-radius: var(--radius-sm);
	transition: all var(--transition-fast);
	position: relative;
}

.nav a:not(.cta):hover {
	color: var(--brand);
	background: var(--surface-2);
}

.nav a.cta {
	padding: 0.625rem 1.25rem;
	background: var(--accent-warm);
	color: white;
	border-radius: var(--radius-md);
	box-shadow: 0 2px 8px rgba(255, 107, 53, 0.25);
}

.nav a.cta:hover {
	background: var(--accent-warm-hover);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(255, 107, 53, 0.35);
}

@media (max-width: 768px) {
	.header-inner {
		flex-direction: column;
		gap: var(--space-sm);
		align-items: stretch;
		padding: 0.875rem 0;
	}

	.brand {
		width: 100%;
		justify-content: space-between;
	}

	.brand-logo {
		height: 40px;
	}

	.brand h1 {
		font-size: 1.125rem;
	}

	.tag {
		font-size: 0.8rem;
	}

	.nav {
		width: 100%;
		justify-content: space-between;
		gap: 0.5rem;
	}

	.nav a {
		flex: 1;
		text-align: center;
		font-size: 0.875rem;
		padding: 0.625rem 0.5rem;
	}

	.nav a.cta {
		padding: 0.625rem 0.5rem;
	}
}
</style>

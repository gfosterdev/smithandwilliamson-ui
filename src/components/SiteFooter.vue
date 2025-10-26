<template>
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
</template>

<script setup lang="ts">
// presentational
</script>

<style scoped>
/* Footer spacing and stacking for small screens */
.site-footer {
	margin-top: 3rem;
	border-top: 1px solid var(--border-weak);
	padding: 1.5rem 0;
}
.footer-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
}
.footer-links a {
	margin-left: 1rem;
	color: var(--muted-text);
}

@media (max-width: 1000px) {
	.footer-inner {
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}
}
</style>

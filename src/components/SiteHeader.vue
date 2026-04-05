<template>
	<div class="header-wrapper">
		<!-- Top info bar matching Eastern Frames style -->
		<div class="top-bar">
			<div class="container top-bar-inner">
				<div class="top-bar-left">
					<a href="tel:01553123456" class="contact-link">
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"
							></path>
						</svg>
						Tel: 01553 123456
					</a>
					<a
						href="mailto:info@smithandwilliamson.co.uk"
						class="contact-link"
					>
						<svg
							width="16"
							height="16"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
						>
							<path
								d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"
							></path>
							<polyline points="22,6 12,13 2,6"></polyline>
						</svg>
						Email: info@smithandwilliamson.co.uk
					</a>
				</div>
				<div class="top-bar-right">
					<a
						href="https://www.instagram.com/smith_and_williamson"
						target="_blank"
						rel="noopener noreferrer"
						class="social-link"
						aria-label="Follow us on Instagram"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							width="18"
							height="18"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							stroke-width="2"
							stroke-linecap="round"
							stroke-linejoin="round"
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
							></path>
							<line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
						</svg>
					</a>
				</div>
			</div>
		</div>

		<!-- Main header with logo and navigation -->
		<header class="site-header">
			<div class="container header-inner">
				<div class="brand" @click="scrollToTop" style="cursor: pointer">
					<img
						src="../assets/logo-horizontal-3pane.svg"
						alt="Smith &amp; Williamson logo"
						class="brand-logo"
					/>
				</div>
				<nav class="nav">
					<a
						href="#services"
						@click.prevent="scrollToSection('services')"
						:class="{ active: activeSection === 'services' }"
						>Services</a
					>
					<a
						href="#projects"
						@click.prevent="scrollToSection('projects')"
						:class="{ active: activeSection === 'projects' }"
						>Portfolio</a
					>
					<a
						href="#about"
						@click.prevent="scrollToSection('about')"
						:class="{ active: activeSection === 'about' }"
						>About</a
					>
					<a
						href="#contact"
						@click.prevent="scrollToSection('contact')"
						class="cta"
						:class="{ active: activeSection === 'contact' }"
						>Get a Quote</a
					>
				</nav>
			</div>
		</header>
	</div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from "vue";

const activeSection = ref<string>("");

const scrollToTop = () => {
	window.scrollTo({
		top: 0,
		behavior: "smooth",
	});
};

const scrollToSection = (sectionId: string) => {
	const element = document.getElementById(sectionId);
	if (element) {
		const headerOffset = 80; // Account for sticky header height
		const elementPosition = element.getBoundingClientRect().top;
		const offsetPosition = elementPosition + window.scrollY - headerOffset;

		window.scrollTo({
			top: offsetPosition,
			behavior: "smooth",
		});
	}
};

// Intersection Observer to track active section
let observer: IntersectionObserver | null = null;

const handleScroll = () => {
	// Clear active state when at the top (Hero section)
	if (window.scrollY <= 100) {
		activeSection.value = "";
	}
};

onMounted(() => {
	const sections = ["services", "projects", "about", "contact"];
	const intersectingMap = new Map<string, boolean>();

	observer = new IntersectionObserver(
		(entries) => {
			entries.forEach((entry) => {
				intersectingMap.set(entry.target.id, entry.isIntersecting);
			});

			// Find the first intersecting section in order
			const intersecting = sections.find((id) => intersectingMap.get(id));

			// Only set active section if we've scrolled past the top
			// (when window.scrollY > 100, we're past the hero)
			if (window.scrollY > 100 && intersecting) {
				activeSection.value = intersecting;
			}
		},
		{
			rootMargin: "-100px 0px -60% 0px",
			threshold: 0,
		}
	);

	// Observe all sections
	sections.forEach((sectionId) => {
		const element = document.getElementById(sectionId);
		if (element) {
			observer?.observe(element);
		}
	});

	// Add scroll listener to clear state when at Hero
	window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
	if (observer) {
		observer.disconnect();
	}
	window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
/* Header wrapper for sticky positioning */
.header-wrapper {
	position: sticky;
	top: 0;
	z-index: 100;
	box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
}

/* Top info bar - Eastern Frames style */
.top-bar {
	background: var(--brand-dark);
	color: var(--white);
	padding: 0.5rem 0;
	font-size: 0.875rem;
}

.top-bar-inner {
	display: flex;
	justify-content: space-between;
	align-items: center;
}

.top-bar-left {
	display: flex;
	gap: 2rem;
	align-items: center;
}

.top-bar-right {
	display: flex;
	gap: 1rem;
	align-items: center;
}

.contact-link {
	display: flex;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);
	text-decoration: none;
	transition: opacity var(--transition-fast);
}

.contact-link:hover {
	opacity: 0.8;
	color: var(--white);
}

.social-link {
	display: flex;
	align-items: center;
	justify-content: center;
	color: var(--white);
	transition: opacity var(--transition-fast);
}

.social-link:hover {
	opacity: 0.8;
}

/* Main header with clean white background */
.site-header {
	background: var(--white);
	border-bottom: 1px solid var(--border-weak);
}

.header-inner {
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 1rem 0;
}

.brand {
	display: flex;
	align-items: center;
}

.brand-logo {
	height: 70px;
	width: auto;
	transition: all var(--transition-base);
}

.brand-logo:hover {
	opacity: 0.9;
}

.nav {
	display: flex;
	align-items: center;
	gap: 2rem;
}

.nav a {
	color: var(--text);
	text-decoration: none;
	font-weight: 600;
	padding: 0.5rem 0;
	border-radius: var(--radius-sm);
	transition: all var(--transition-fast);
	position: relative;
	text-transform: uppercase;
	font-size: 0.875rem;
	letter-spacing: 0.5px;
}

.nav a:not(.cta):hover {
	color: var(--brand);
}

.nav a:not(.cta)::after {
	content: "";
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	height: 2px;
	background: var(--brand);
	transform: scaleX(0);
	transition: transform var(--transition-base);
}

.nav a:not(.cta):hover::after,
.nav a:not(.cta).active::after {
	transform: scaleX(1);
}

.nav a:not(.cta).active {
	color: var(--brand);
}

.nav a.cta {
	padding: 0.75rem 1.5rem;
	background: var(--accent-warm);
	color: white;
	border-radius: var(--radius-sm);
	box-shadow: 0 2px 8px rgba(255, 102, 0, 0.25);
}

.nav a.cta:hover {
	background: var(--accent-warm-hover);
	transform: translateY(-2px);
	box-shadow: 0 4px 12px rgba(255, 102, 0, 0.35);
}

@media (max-width: 768px) {
	.top-bar-inner {
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.top-bar-left {
		flex-direction: column;
		gap: 0.5rem;
		align-items: flex-start;
	}

	.header-inner {
		flex-direction: column;
		gap: 1rem;
		align-items: stretch;
		padding: 1rem 0;
	}

	.brand {
		width: 100%;
		justify-content: center;
	}

	.brand-logo {
		height: 60px;
	}

	.nav {
		width: 100%;
		flex-direction: column;
		gap: 0.5rem;
	}

	.nav a {
		text-align: center;
		padding: 0.75rem 1rem;
		width: 100%;
	}

	.nav a.cta {
		padding: 0.875rem 1rem;
	}
}
</style>

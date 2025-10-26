<template>
	<section id="projects" class="projects">
		<div class="container">
			<div class="projects-header">
				<h2>Recent projects</h2>
				<p class="lead">
					Take a look at our portfolio of completed installations
				</p>
			</div>
			<div class="project-grid">
				<div
					class="project-card fade-in-up"
					v-for="(p, i) in projects"
					:key="i"
					:style="{ '--delay': `${i * 60}ms` }"
					role="button"
					tabindex="0"
					@click="openModal(i)"
					@keydown.enter="openModal(i)"
				>
					<div class="project-image-wrapper">
						<img :src="p.img" :alt="p.title" />
						<div class="project-overlay">
							<div class="overlay-content">
								<svg
									width="32"
									height="32"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
									></path>
								</svg>
								<span>View Project</span>
							</div>
						</div>
					</div>
					<div class="project-caption">{{ p.title }}</div>
				</div>
			</div>

			<div
				v-if="showModal"
				class="modal-backdrop"
				@click.self="closeModal"
			>
				<div class="modal-content" role="dialog" aria-modal="true">
					<button
						class="modal-close"
						@click="closeModal"
						aria-label="Close"
					>
						×
					</button>
					<img
						:src="projects[modalIndex]?.img"
						:alt="projects[modalIndex]?.title"
					/>
					<div class="modal-caption">
						{{ projects[modalIndex]?.title }}
					</div>
				</div>
			</div>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref } from "vue";

// @ts-ignore - Vite import.meta.glob types
const imageModules = import.meta.glob("../assets/portfolio/*", {
	eager: true,
	as: "url",
}) as Record<string, string>;

function niceTitleFromFilename(path: string) {
	const parts = path.split("/").pop()?.split(".")?.[0] || path;
	const cleaned = parts.replace(/\d+/g, "").replace(/[-_]+/g, " ").trim();
	return cleaned
		.split(" ")
		.filter(Boolean)
		.map((w) => {
			const s = String(w || "");
			if (!s) return "";
			return s.charAt(0).toUpperCase() + s.slice(1).toLowerCase();
		})
		.join(" ");
}

const projects = Object.keys(imageModules).map((p) => ({
	title: niceTitleFromFilename(p),
	img: imageModules[p],
}));

const showModal = ref(false);
const modalIndex = ref(0);
function openModal(i: number) {
	modalIndex.value = i;
	showModal.value = true;
}
function closeModal() {
	showModal.value = false;
}
</script>

<style scoped>
/* Modern projects gallery with hover effects */
.projects {
	padding: var(--space-xl) 0;
	background: var(--white);
}

.projects-header {
	text-align: center;
	max-width: 700px;
	margin: 0 auto var(--space-lg);
}

.projects-header h2 {
	color: var(--brand);
	margin-bottom: var(--space-xs);
}

.lead {
	font-size: 1.125rem;
	color: var(--text-secondary);
	margin: 0;
}

.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
	gap: var(--space-md);
}

.project-card {
	background: var(--white);
	border-radius: var(--radius-lg);
	overflow: hidden;
	box-shadow: var(--shadow-sm);
	border: 1px solid var(--border-weak);
	cursor: pointer;
	transition: all var(--transition-base);
}

.project-card:hover {
	transform: translateY(-6px);
	box-shadow: var(--shadow-lg);
	border-color: var(--accent);
}

.project-card:focus {
	outline: 2px solid var(--accent);
	outline-offset: 2px;
}

.project-image-wrapper {
	position: relative;
	overflow: hidden;
	aspect-ratio: 4 / 3;
}

.project-image-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transition: transform var(--transition-slow);
}

.project-card:hover .project-image-wrapper img {
	transform: scale(1.08);
}

.project-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(
		180deg,
		transparent 0%,
		rgba(30, 58, 95, 0.7) 100%
	);
	display: flex;
	align-items: center;
	justify-content: center;
	opacity: 0;
	transition: opacity var(--transition-base);
}

.project-card:hover .project-overlay {
	opacity: 1;
}

.overlay-content {
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 0.5rem;
	color: var(--white);
	transform: translateY(10px);
	transition: transform var(--transition-base);
}

.project-card:hover .overlay-content {
	transform: translateY(0);
}

.overlay-content svg {
	filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2));
}

.overlay-content span {
	font-weight: 600;
	font-size: 0.95rem;
	text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
}

.project-caption {
	padding: var(--space-sm) var(--space-md);
	color: var(--text);
	font-weight: 600;
	font-size: 1rem;
	background: var(--white);
}

/* Modal lightbox */
.modal-backdrop {
	position: fixed;
	inset: 0;
	background: var(--overlay-backdrop);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	padding: var(--space-md);
	backdrop-filter: blur(8px);
	animation: fadeIn 0.2s ease;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

.modal-content {
	max-width: 1000px;
	width: 100%;
	background: var(--white);
	border-radius: var(--radius-lg);
	padding: var(--space-md);
	position: relative;
	box-shadow: var(--shadow-xl);
	animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
}

@keyframes scaleIn {
	from {
		transform: scale(0.95);
		opacity: 0;
	}
	to {
		transform: scale(1);
		opacity: 1;
	}
}

.modal-content img {
	width: 100%;
	height: auto;
	max-height: 70vh;
	object-fit: contain;
	display: block;
	border-radius: var(--radius-md);
}

.modal-caption {
	margin-top: var(--space-sm);
	color: var(--text);
	font-weight: 600;
	font-size: 1.125rem;
	text-align: center;
}

.modal-close {
	position: absolute;
	right: var(--space-sm);
	top: var(--space-sm);
	width: 40px;
	height: 40px;
	background: var(--white);
	border: none;
	border-radius: 50%;
	color: var(--text);
	font-size: 28px;
	line-height: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: var(--shadow-md);
	transition: all var(--transition-base);
	z-index: 1;
}

.modal-close:hover {
	background: var(--accent);
	color: var(--white);
	transform: rotate(90deg);
}

@media (max-width: 768px) {
	.projects {
		padding: var(--space-lg) 0;
	}

	.project-grid {
		grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
		gap: var(--space-sm);
	}

	.projects-header h2 {
		font-size: 1.75rem;
	}

	.lead {
		font-size: 1rem;
	}

	.modal-backdrop {
		padding: var(--space-sm);
	}

	.modal-content {
		padding: var(--space-sm);
	}

	.modal-close {
		width: 36px;
		height: 36px;
		font-size: 24px;
	}
}
</style>

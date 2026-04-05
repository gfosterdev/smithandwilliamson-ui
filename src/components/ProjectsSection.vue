<template>
	<section id="projects" class="projects section-white">
		<div class="container">
			<div class="section-header">
				<h2>Latest Case Studies</h2>
				<p class="lead">
					View our recent installations showcasing quality workmanship
					and attention to detail
				</p>
			</div>
			<div class="project-grid">
				<article
					class="project-card"
					v-for="(p, i) in projects"
					:key="i"
					role="button"
					tabindex="0"
					@click="openModal(i)"
					@keydown.enter="openModal(i)"
				>
					<div class="project-image-wrapper">
						<img :src="p.img" :alt="p.title" loading="lazy" />
						<div class="project-overlay">
							<div class="overlay-content">
								<svg
									width="40"
									height="40"
									viewBox="0 0 24 24"
									fill="none"
									stroke="currentColor"
									stroke-width="2"
								>
									<path
										d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"
									></path>
								</svg>
								<span class="view-text">View Details</span>
							</div>
						</div>
					</div>
					<div class="project-info">
						<h3>{{ p.title }}</h3>
						<p v-if="p.description">{{ p.description }}</p>
					</div>
				</article>
			</div>

			<ProjectModal
				:show="showModal"
				:project="selectedProject"
				@close="closeModal"
			/>
		</div>
	</section>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";
import projectsData from "../data/projects.json";
import ProjectModal from "./ProjectModal.vue";

// Import all images dynamically based on project data
// @ts-ignore - Vite import.meta.glob types
const imageModules = import.meta.glob("../assets/portfolio/*", {
	eager: true,
	as: "url",
}) as Record<string, string>;

// Map projects with their resolved image URLs
const projects = computed(() =>
	projectsData.map((project) => {
		const resolvedImages = project.images
			?.map((imgPath) => imageModules[imgPath])
			.filter((url): url is string => !!url);
		const singleImage = project.image
			? imageModules[project.image]
			: undefined;

		return {
			...project,
			img: singleImage || resolvedImages?.[0],
			images: resolvedImages,
		};
	})
);

const showModal = ref(false);
const modalIndex = ref(0);
const selectedProject = computed(
	() => projects.value?.[modalIndex.value] ?? null
);
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

<style scoped>
/* Projects section - Eastern Frames case studies style */
.projects {
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

.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
	gap: 2.5rem;
	margin-bottom: 3rem;
}

.project-card {
	background: var(--white);
	border-radius: var(--radius-md);
	overflow: hidden;
	box-shadow: var(--shadow-md);
	border: 1px solid var(--border-weak);
	cursor: pointer;
	transition: all var(--transition-base);
}

.project-card:hover {
	transform: translateY(-6px);
	box-shadow: var(--shadow-xl);
	border-color: var(--brand);
}

.project-card:focus {
	outline: 2px solid var(--brand);
	outline-offset: 2px;
}

.project-image-wrapper {
	position: relative;
	overflow: hidden;
	aspect-ratio: 4 / 3;
	background: var(--surface-2);
}

.project-image-wrapper img {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transition: transform var(--transition-slow);
}

.project-card:hover .project-image-wrapper img {
	transform: scale(1.1);
}

.project-overlay {
	position: absolute;
	inset: 0;
	background: linear-gradient(
		180deg,
		rgba(0, 51, 102, 0.1) 0%,
		rgba(0, 51, 102, 0.85) 100%
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
	gap: 0.75rem;
	color: var(--white);
	transform: translateY(15px);
	transition: transform var(--transition-base);
}

.project-card:hover .overlay-content {
	transform: translateY(0);
}

.overlay-content svg {
	filter: drop-shadow(0 2px 6px rgba(0, 0, 0, 0.3));
}

.view-text {
	font-weight: 700;
	font-size: 1.05rem;
	text-shadow: 0 2px 6px rgba(0, 0, 0, 0.4);
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

.project-info {
	padding: 1.5rem;
	background: var(--white);
}

.project-info h3 {
	color: var(--brand);
	font-size: 1.25rem;
	margin: 0 0 0.5rem;
	font-weight: 700;
}

.project-info p {
	color: var(--text-secondary);
	font-size: 0.95rem;
	line-height: 1.6;
	margin: 0;
}

@media (max-width: 768px) {
	.projects {
		padding: 3rem 0;
	}

	.project-grid {
		grid-template-columns: 1fr;
		gap: 2rem;
	}

	.project-info {
		padding: 1.25rem;
	}
}
</style>

<template>
	<section id="projects" class="container projects">
		<h3>Recent projects</h3>
		<div class="project-grid">
			<div
				class="project-card"
				v-for="(p, i) in projects"
				:key="i"
				role="button"
				tabindex="0"
				@click="openModal(i)"
				@keydown.enter="openModal(i)"
			>
				<img :src="p.img" :alt="p.title" />
				<div class="overlay" aria-hidden>
					<div class="overlay-title">{{ p.title }}</div>
				</div>
				<div class="project-caption">{{ p.title }}</div>
			</div>
		</div>

		<div v-if="showModal" class="modal-backdrop" @click.self="closeModal">
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
/* Projects grid, overlay and modal scoped to this component */
.projects {
	padding-top: 2rem;
}
.project-grid {
	display: grid;
	grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
	gap: 1rem;
	margin-top: 1rem;
}
.project-card {
	background: linear-gradient(
		180deg,
		rgba(255, 255, 255, 0.02),
		rgba(255, 255, 255, 0.01)
	);
	padding: 0;
	border-radius: 8px;
	overflow: hidden;
	min-height: 120px;
	position: relative;
	cursor: pointer;
}
.project-card img {
	width: 100%;
	height: 160px;
	object-fit: cover;
	display: block;
}
.project-caption {
	padding: 0.75rem 1rem;
	background: rgba(0, 0, 0, 0.15);
	color: rgba(255, 255, 255, 0.95);
	font-weight: 600;
}

/* Overlay title shown on hover (desktop) */
.overlay {
	position: absolute;
	inset: 0;
	display: flex;
	align-items: center;
	justify-content: center;
	pointer-events: none;
}
.overlay-title {
	background: rgba(0, 0, 0, 0.45);
	color: #fff;
	padding: 0.5rem 0.75rem;
	border-radius: 6px;
	opacity: 0;
	transform: translateY(6px);
	transition: opacity 0.18s, transform 0.18s;
}
@media (hover: hover) {
	.project-card:hover .overlay-title {
		opacity: 1;
		transform: translateY(0);
	}
}

/* Modal lightbox */
.modal-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.6);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
}
.modal-content {
	max-width: 920px;
	width: calc(100% - 40px);
	background: #111;
	border-radius: 8px;
	padding: 1rem;
	position: relative;
}
.modal-content img {
	width: 100%;
	height: auto;
	display: block;
	border-radius: 6px;
}
.modal-caption {
	margin-top: 0.5rem;
	color: #fff;
	font-weight: 600;
}
.modal-close {
	position: absolute;
	right: 8px;
	top: 6px;
	background: transparent;
	border: none;
	color: #fff;
	font-size: 22px;
	cursor: pointer;
}

@media (max-width: 1000px) {
	.project-grid {
		grid-template-columns: 1fr;
	}
}
</style>

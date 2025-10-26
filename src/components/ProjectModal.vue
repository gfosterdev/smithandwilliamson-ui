<template>
	<div v-if="show" class="modal-backdrop" @click.self="close">
		<div class="modal-content" role="dialog" aria-modal="true">
			<button class="modal-close" @click="close" aria-label="Close">
				×
			</button>

			<div class="modal-header">
				<h2 class="modal-title">{{ project?.title }}</h2>
				<span v-if="project?.category" class="modal-category">{{
					formatCategory(project.category)
				}}</span>
			</div>

			<div class="modal-body">
				<!-- Image Carousel -->
				<div class="carousel-container">
					<div class="carousel-wrapper">
						<img
							:src="currentImage"
							:alt="`${project?.title} - Image ${
								currentImageIndex + 1
							}`"
							class="carousel-image"
						/>
					</div>

					<!-- Carousel Navigation -->
					<button
						v-if="images.length > 1"
						class="carousel-nav carousel-prev"
						@click="previousImage"
						aria-label="Previous image"
					>
						‹
					</button>
					<button
						v-if="images.length > 1"
						class="carousel-nav carousel-next"
						@click="nextImage"
						aria-label="Next image"
					>
						›
					</button>

					<!-- Carousel Indicators -->
					<div v-if="images.length > 1" class="carousel-indicators">
						<button
							v-for="(_, index) in images"
							:key="index"
							:class="[
								'indicator',
								{ active: index === currentImageIndex },
							]"
							@click="goToImage(index)"
							:aria-label="`Go to image ${index + 1}`"
						></button>
					</div>
				</div>

				<!-- Project Description -->
				<div class="modal-description">
					<h3>Project Details</h3>
					<p>
						{{
							project?.description ||
							"Professional craftsmanship and attention to detail in every aspect of this project."
						}}
					</p>

					<div v-if="project?.specs" class="project-specs">
						<div
							v-for="(value, key) in project.specs"
							:key="key"
							class="spec-item"
						>
							<strong>{{ formatSpecKey(key) }}:</strong>
							{{ value }}
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, computed, ref } from "vue";

interface Project {
	img?: string;
	title?: string;
	description?: string;
	category?: string;
	images?: string[];
	specs?: Record<string, string>;
}

const props = defineProps<{
	show: boolean;
	project: Project | null;
}>();

const emit = defineEmits<{
	(e: "close"): void;
}>();

const currentImageIndex = ref(0);

// Compute images array (support both single image and multiple images)
const images = computed(() => {
	if (!props.project) return [];
	if (props.project.images && props.project.images.length > 0) {
		return props.project.images;
	}
	if (props.project.img) {
		return [props.project.img];
	}
	return [];
});

const currentImage = computed(() => {
	return images.value[currentImageIndex.value] || "";
});

function close() {
	currentImageIndex.value = 0;
	emit("close");
}

function nextImage() {
	if (currentImageIndex.value < images.value.length - 1) {
		currentImageIndex.value++;
	} else {
		currentImageIndex.value = 0;
	}
}

function previousImage() {
	if (currentImageIndex.value > 0) {
		currentImageIndex.value--;
	} else {
		currentImageIndex.value = images.value.length - 1;
	}
}

function goToImage(index: number) {
	currentImageIndex.value = index;
}

function formatCategory(category: string): string {
	return category.charAt(0).toUpperCase() + category.slice(1);
}

function formatSpecKey(key: string): string {
	return key
		.replace(/([A-Z])/g, " $1")
		.replace(/^./, (str) => str.toUpperCase());
}
</script>

<style scoped>
/* Modal Backdrop */
.modal-backdrop {
	position: fixed;
	inset: 0;
	background: rgba(0, 0, 0, 0.85);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 9999;
	padding: var(--space-md);
	backdrop-filter: blur(8px);
	animation: fadeIn 0.3s ease;
	overflow-y: auto;
}

@keyframes fadeIn {
	from {
		opacity: 0;
	}
	to {
		opacity: 1;
	}
}

/* Modal Content */
.modal-content {
	max-width: 1200px;
	width: 100%;
	background: var(--white);
	border-radius: 16px;
	position: relative;
	box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.25);
	animation: scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1);
	overflow: hidden;
	margin: auto;
}

@keyframes scaleIn {
	from {
		transform: scale(0.95) translateY(20px);
		opacity: 0;
	}
	to {
		transform: scale(1) translateY(0);
		opacity: 1;
	}
}

/* Modal Header */
.modal-header {
	padding: var(--space-lg) var(--space-xl);
	border-bottom: 1px solid #e5e7eb;
	background: linear-gradient(to bottom, #ffffff, #f9fafb);
}

.modal-title {
	font-size: 2rem;
	font-weight: 700;
	color: var(--text);
	margin: 0 0 0.5rem 0;
	line-height: 1.2;
}

.modal-category {
	display: inline-block;
	padding: 0.375rem 0.875rem;
	background: var(--accent);
	color: var(--white);
	border-radius: 20px;
	font-size: 0.875rem;
	font-weight: 600;
	text-transform: uppercase;
	letter-spacing: 0.5px;
}

/* Modal Body */
.modal-body {
	display: grid;
	grid-template-columns: 2fr 1fr;
	gap: var(--space-xl);
	padding: var(--space-xl);
}

/* Carousel Container */
.carousel-container {
	position: relative;
	background: #f3f4f6;
	border-radius: 12px;
	overflow: hidden;
	aspect-ratio: 16/10;
}

.carousel-wrapper {
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
}

.carousel-image {
	width: 100%;
	height: 100%;
	object-fit: cover;
	display: block;
	transition: opacity 0.3s ease;
}

/* Carousel Navigation */
.carousel-nav {
	position: absolute;
	top: 50%;
	transform: translateY(-50%);
	width: 48px;
	height: 48px;
	background: rgba(255, 255, 255, 0.95);
	border: none;
	border-radius: 50%;
	color: var(--text);
	font-size: 32px;
	line-height: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	z-index: 2;
	opacity: 0;
}

.carousel-container:hover .carousel-nav {
	opacity: 1;
}

.carousel-prev {
	left: var(--space-md);
}

.carousel-next {
	right: var(--space-md);
}

.carousel-nav:hover {
	background: var(--accent);
	color: var(--white);
	transform: translateY(-50%) scale(1.1);
	box-shadow: 0 6px 12px rgba(0, 0, 0, 0.15);
}

/* Carousel Indicators */
.carousel-indicators {
	position: absolute;
	bottom: var(--space-md);
	left: 50%;
	transform: translateX(-50%);
	display: flex;
	gap: 8px;
	z-index: 2;
}

.indicator {
	width: 10px;
	height: 10px;
	border-radius: 50%;
	border: 2px solid var(--white);
	background: rgba(255, 255, 255, 0.5);
	cursor: pointer;
	transition: all 0.3s ease;
	padding: 0;
}

.indicator:hover {
	background: rgba(255, 255, 255, 0.8);
	transform: scale(1.2);
}

.indicator.active {
	background: var(--white);
	width: 32px;
	border-radius: 5px;
}

/* Project Description */
.modal-description {
	display: flex;
	flex-direction: column;
	gap: var(--space-md);
}

.modal-description h3 {
	font-size: 1.5rem;
	font-weight: 700;
	color: var(--text);
	margin: 0;
	padding-bottom: var(--space-sm);
	border-bottom: 3px solid var(--accent);
}

.modal-description p {
	font-size: 1rem;
	line-height: 1.7;
	color: #4b5563;
	margin: 0;
}

/* Project Specs */
.project-specs {
	display: flex;
	flex-direction: column;
	gap: var(--space-sm);
	padding: var(--space-md);
	background: #f9fafb;
	border-radius: 8px;
	border-left: 4px solid var(--accent);
}

.spec-item {
	font-size: 0.9375rem;
	color: #374151;
	line-height: 1.6;
}

.spec-item strong {
	color: var(--text);
	font-weight: 600;
}

/* Close Button */
.modal-close {
	position: absolute;
	right: var(--space-md);
	top: var(--space-md);
	width: 44px;
	height: 44px;
	background: var(--white);
	border: 2px solid #e5e7eb;
	border-radius: 50%;
	color: var(--text);
	font-size: 28px;
	line-height: 1;
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
	transition: all 0.3s ease;
	z-index: 10;
}

.modal-close:hover {
	background: #dc2626;
	border-color: #dc2626;
	color: var(--white);
	transform: rotate(90deg) scale(1.1);
	box-shadow: 0 6px 12px rgba(220, 38, 38, 0.3);
}

/* Responsive Design */
@media (max-width: 1024px) {
	.modal-body {
		grid-template-columns: 1fr;
		gap: var(--space-lg);
	}

	.modal-header {
		padding: var(--space-md) var(--space-lg);
	}

	.modal-title {
		font-size: 1.75rem;
	}
}

@media (max-width: 768px) {
	.modal-backdrop {
		padding: var(--space-sm);
	}

	.modal-content {
		margin: var(--space-sm) 0;
	}

	.modal-header {
		padding: var(--space-md);
	}

	.modal-title {
		font-size: 1.5rem;
		margin-bottom: 0.75rem;
	}

	.modal-body {
		padding: var(--space-md);
		gap: var(--space-md);
	}

	.carousel-container {
		aspect-ratio: 4/3;
	}

	.carousel-nav {
		width: 40px;
		height: 40px;
		font-size: 28px;
	}

	.carousel-prev {
		left: var(--space-sm);
	}

	.carousel-next {
		right: var(--space-sm);
	}

	.modal-close {
		width: 36px;
		height: 36px;
		font-size: 24px;
		right: var(--space-sm);
		top: var(--space-sm);
	}

	.modal-description h3 {
		font-size: 1.25rem;
	}

	.project-specs {
		padding: var(--space-sm);
	}
}

@media (max-width: 480px) {
	.modal-title {
		font-size: 1.25rem;
	}

	.modal-category {
		font-size: 0.75rem;
		padding: 0.25rem 0.625rem;
	}

	.carousel-container {
		aspect-ratio: 1;
	}

	.carousel-indicators {
		bottom: var(--space-sm);
	}

	.indicator {
		width: 8px;
		height: 8px;
	}

	.indicator.active {
		width: 24px;
	}
}
</style>

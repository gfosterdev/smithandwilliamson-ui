<template>
	<div v-if="show" class="modal-backdrop" @click.self="close">
		<div class="modal-content" role="dialog" aria-modal="true">
			<button class="modal-close" @click="close" aria-label="Close">
				×
			</button>
			<img :src="project?.img" :alt="project?.title" />
			<div class="modal-caption">{{ project?.title }}</div>
		</div>
	</div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from "vue";

defineProps<{
	show: boolean;
	project: { img?: string; title?: string } | null;
}>();
const emit = defineEmits<{
	(e: "close"): void;
}>();

function close() {
	emit("close");
}
</script>

<style scoped>
/* Modal lightbox (moved from ProjectsSection) */
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

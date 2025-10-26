# Smith & Williamson UI

A modern, responsive portfolio website for Smith & Williamson, showcasing construction and home improvement services including doors, windows, fascia, roofing, and residential projects.

## Features

-   **Hero Section**: Eye-catching introduction with company branding
-   **Services Overview**: Detailed presentation of construction and renovation services
-   **Portfolio Gallery**: Interactive project showcase with modal views
-   **Contact Form**: Easy customer inquiry submission
-   **Responsive Design**: Optimized for all device sizes

## Tech Stack

-   **Vue 3** - Progressive JavaScript framework with Composition API
-   **TypeScript** - Type-safe development
-   **Vite** - Fast build tool and dev server
-   **Component-based Architecture** - Modular, maintainable code structure

## Project Structure

```
src/
├── components/          # Vue components
│   ├── SiteHeader.vue
│   ├── Hero.vue
│   ├── ServicesSection.vue
│   ├── ProjectsSection.vue
│   ├── ProjectModal.vue
│   ├── ContactForm.vue
│   └── SiteFooter.vue
├── data/               # Project data
│   └── projects.json
├── assets/             # Images and media
│   ├── portfolio/
│   └── residence/
├── App.vue
└── main.ts
```

## Development

### Prerequisites

-   Node.js (v16 or higher)
-   npm or yarn

### Setup

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

### Image Optimization

```bash
# Optimize portfolio images
node scripts/optimize-images.js
```

## License

Private - All rights reserved

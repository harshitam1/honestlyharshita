# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is "honestly, harshita" - a personal blog website for Harshita Madhan, a UC Riverside biology student. The site serves as a digital journal for sharing personal reflections, life lessons, and stories about growing up and pursuing healthcare.

## Technology Stack

- **Astro 5.12.8** - Static site generator with React integration
- **TypeScript** - Strict configuration
- **Tailwind CSS 3.4.17** - Utility-first styling
- **React 4.3.0** - Component library integration

## Development Commands

```bash
# Start development server (runs on localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Access Astro CLI
npm run astro
```

## Project Architecture

### Core Structure
- `/src/pages/` - File-based routing (Astro convention)
  - `index.astro` - Homepage with hero + latest posts
  - `journal/index.astro` - Blog listing with category filtering
  - `journal/[id].astro` - Dynamic blog post pages
  - `about.astro`, `categories.astro`, `contact.astro` - Static pages
- `/src/components/` - Reusable Astro components
- `/src/layouts/Layout.astro` - Base layout template
- `/src/data/blogData.ts` - Static blog post data
- `/src/types/blog.ts` - TypeScript interfaces

### Blog System
Blog posts are managed through static data in `src/data/blogData.ts`. Each post has:
```typescript
interface BlogPost {
  id: string;
  title: string;
  content: string; // Rich HTML content
  excerpt: string;
  date: string;
  categories: string[];
  readTime: number;
  pinned?: boolean;
}
```

### Design System
- **Colors**: Navy primary (#2d3373), cream backgrounds (#fefcf3), sage accents
- **Typography**: Playfair Display (headers), Crimson Text (body), Inter (UI), Caveat (handwritten)
- **Animations**: Custom keyframes for float, bounce, wiggle effects
- **Styling**: Organic border radius, paper textures, fade-in animations

## Configuration

### Astro Config
- Development server runs on port 3000 with `host: true`
- Integrations: Tailwind CSS, React
- TypeScript strict mode enabled

### Tailwind Config
- Custom color palette matching design system
- Custom font families
- Custom animations and keyframes
- Extended border radius values

## Key Patterns

### Page Structure
All pages use the base `Layout.astro` which includes:
- Navigation component
- SEO meta tags
- Global styles
- Consistent page wrapper

### Content Management
- Blog posts are statically defined in `src/data/blogData.ts`
- Categories are derived from post data
- Featured/pinned posts supported
- Read time estimation included

### Styling Approach
- Utility-first with Tailwind
- Component-scoped styles in Astro files
- Consistent spacing and typography scale
- Mobile-first responsive design

## Development Notes

- This is a static site with no backend/CMS
- Content updates require editing `src/data/blogData.ts`
- All routes are pre-rendered at build time
- Images should be placed in `/public/` directory
- The site prioritizes performance and SEO through static generation
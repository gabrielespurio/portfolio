# Portfolio - Gabriel Espurio

## Overview

This is a personal portfolio website for Gabriel Espurio, a Web & Mobile Developer. The application showcases professional services, skills, projects, and provides contact functionality through an interactive chatbot assistant. Built as a modern single-page application with a focus on visual design, animations, and user experience.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Routing**: Wouter for lightweight client-side routing
- **Styling**: Tailwind CSS v4 with custom theme configuration
- **UI Components**: shadcn/ui component library (New York style) built on Radix UI primitives
- **Animations**: Framer Motion for smooth transitions and scroll animations
- **State Management**: TanStack Query (React Query) for server state management
- **Code Splitting**: React.lazy() with Suspense for lazy-loading page sections

### Backend Architecture
- **Runtime**: Node.js with Express.js
- **Language**: TypeScript with ES modules
- **Build Tool**: Custom build script using esbuild for server bundling
- **Development**: Vite dev server with HMR proxy configuration
- **Static Serving**: Express static middleware for production builds

### Data Storage
- **ORM**: Drizzle ORM configured for PostgreSQL
- **Schema Location**: `shared/schema.ts` with user table definition
- **Current Storage**: In-memory storage implementation (`MemStorage` class)
- **Database Ready**: Drizzle config set up for PostgreSQL via `@neondatabase/serverless`

### Project Structure
```
├── client/           # Frontend React application
│   ├── src/
│   │   ├── components/   # UI and feature components
│   │   ├── pages/        # Route page components
│   │   ├── hooks/        # Custom React hooks
│   │   └── lib/          # Utilities and query client
├── server/           # Express backend
│   ├── index.ts      # Server entry point
│   ├── routes.ts     # API route definitions
│   ├── storage.ts    # Data storage interface
│   └── vite.ts       # Vite dev server integration
├── shared/           # Shared code between client/server
│   └── schema.ts     # Drizzle database schema
└── migrations/       # Database migrations output
```

### Key Design Patterns
- **Interface-based Storage**: `IStorage` interface allows swapping between in-memory and database implementations
- **Lazy Loading Sections**: Portfolio sections (Services, Skills, Projects, Contact) load on-demand using React.lazy/Suspense for faster initial page load
- **Component Library**: Pre-built, customizable UI components via shadcn/ui
- **Path Aliases**: TypeScript path mapping (`@/`, `@shared/`, `@assets/`) for clean imports

### Performance Optimizations
- **Code Splitting**: Lazy-loaded sections reduce initial bundle size
- **Image Lazy Loading**: All non-hero images use `loading="lazy"` and `decoding="async"`
- **Reduced GPU Effects**: Blur effects optimized (blur-2xl instead of blur-3xl/blur-[100px])
- **Simplified Animations**: Removed animate-pulse and heavy backdrop-blur effects
- **CSS-based Interactions**: Skills section uses CSS transitions instead of framer-motion

## External Dependencies

### Database
- **PostgreSQL**: Primary database (via Neon serverless driver)
- **Connection**: Requires `DATABASE_URL` environment variable
- **ORM**: Drizzle with drizzle-zod for schema validation

### Frontend Libraries
- **Radix UI**: Accessible component primitives (dialogs, popovers, accordions, etc.)
- **Framer Motion**: Animation library for React
- **TanStack Query**: Async state management
- **react-icons**: Icon library (used for social media icons)
- **embla-carousel-react**: Carousel component
- **react-day-picker**: Date picker component
- **vaul**: Drawer component

### Build & Development
- **Vite**: Frontend build tool with React plugin
- **esbuild**: Server bundling for production
- **Tailwind CSS v4**: Utility-first CSS with @tailwindcss/vite plugin
- **TypeScript**: Full type safety across the stack

### Deployment
- **Vercel**: Configured via `vercel.json` for static frontend deployment
- **Replit**: Custom Vite plugins for Replit-specific features (error modal, dev banner)

### Fonts
- **Google Fonts**: Inter (body) and Plus Jakarta Sans (display headings)
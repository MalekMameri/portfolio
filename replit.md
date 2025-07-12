# Electrical Engineering Portfolio Website

## Overview

This is a professional portfolio website for Malek Mameri, an electrical engineering professional. The application is built as a full-stack web application using React for the frontend and Express.js for the backend, with a focus on showcasing professional experience, education, and skills in electrical engineering.

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

The application follows a modern full-stack architecture with clear separation between frontend and backend concerns:

- **Frontend**: React-based single-page application with TypeScript
- **Backend**: Express.js REST API server with TypeScript
- **Database**: PostgreSQL with Drizzle ORM (configured but not fully implemented)
- **Styling**: Tailwind CSS with shadcn/ui component library
- **Build System**: Vite for frontend bundling and development
- **Deployment**: Production-ready build configuration

## Key Components

### Frontend Architecture
- **React SPA**: Single-page application using Wouter for routing
- **Component Structure**: Modular component design with reusable UI components
- **State Management**: React Query for server state management
- **Styling**: Tailwind CSS with custom design system and shadcn/ui components
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Express.js API**: RESTful API with TypeScript
- **Route Organization**: Centralized route registration system
- **Error Handling**: Global error middleware with proper HTTP status codes
- **Database Layer**: Drizzle ORM with PostgreSQL (schema defined but not fully connected)
- **Development Setup**: Vite integration for development mode with HMR

### UI Component System
- **Design System**: shadcn/ui components with consistent theming
- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Accessibility**: ARIA-compliant components from Radix UI
- **Animations**: Smooth scroll animations and transitions

## Data Flow

1. **Contact Form Submission**: 
   - Frontend form validation using Zod schemas
   - API POST request to `/api/contact` endpoint
   - Server-side validation and response handling
   - Success/error feedback via toast notifications

2. **CV Download**:
   - API GET request to `/api/download-cv` endpoint
   - Placeholder implementation for file serving

3. **Portfolio Content**:
   - Static content managed through constants file
   - Dynamic rendering of work experience, education, and skills
   - Responsive layout with scroll-triggered animations

## External Dependencies

### Frontend Dependencies
- **React Ecosystem**: React 18+ with TypeScript support
- **UI Components**: Radix UI primitives with shadcn/ui styling
- **Styling**: Tailwind CSS with custom configuration
- **Forms**: React Hook Form with Hookform Resolvers
- **HTTP Client**: Fetch API with React Query for caching
- **Icons**: Lucide React icon library

### Backend Dependencies
- **Server**: Express.js with TypeScript
- **Database**: Drizzle ORM with PostgreSQL support via Neon
- **Validation**: Zod for schema validation
- **Session Management**: connect-pg-simple for PostgreSQL sessions
- **Development**: tsx for TypeScript execution

### Development Tools
- **Build**: Vite with React plugin and custom configuration
- **TypeScript**: Strict type checking with path mapping
- **Linting**: ESLint configuration (implicit)
- **Development**: Hot module replacement and error overlay

## Deployment Strategy

The application is configured for production deployment with:

1. **Build Process**:
   - Frontend: Vite builds optimized React bundle to `dist/public`
   - Backend: esbuild compiles TypeScript server to `dist/index.js`
   - Static assets served from build directory

2. **Environment Configuration**:
   - Database URL required via `DATABASE_URL` environment variable
   - Development/production mode switching via `NODE_ENV`
   - Replit-specific optimizations and plugins

3. **Server Setup**:
   - Express serves both API routes and static frontend files
   - Middleware for JSON parsing and CORS handling
   - Request logging with performance metrics

4. **Database Migration**:
   - Drizzle Kit configured for PostgreSQL migrations
   - Schema definitions ready for database setup
   - Contact form data structure defined but not implemented

The application is structured to be easily deployable on platforms like Replit, Vercel, or traditional hosting services with minimal configuration changes.
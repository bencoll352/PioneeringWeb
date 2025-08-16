# Pioneering Recruitment - Builders Merchant Recruitment Website

## Overview

This is a modern full-stack web application for Pioneering Recruitment, a UK-based recruitment agency specializing in the builders merchant industry. The application serves as a professional company website showcasing services, displaying job listings, collecting client testimonials, and managing contact inquiries.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized production builds
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query (React Query) for server state management
- **Styling**: 
  - Tailwind CSS for utility-first styling
  - shadcn/ui component library for consistent UI components
  - Custom CSS variables for brand theming (orange primary color)
- **Forms**: React Hook Form with Zod validation for type-safe form handling

### Backend Architecture
- **Runtime**: Node.js with TypeScript
- **Framework**: Express.js for REST API server
- **Database ORM**: Drizzle ORM with PostgreSQL
- **Database Provider**: Neon Database (serverless PostgreSQL)
- **Development**: tsx for TypeScript execution in development
- **Production Build**: esbuild for server-side bundling

### Monorepo Structure
The application uses a monorepo structure with shared schemas:
- `client/` - React frontend application
- `server/` - Express.js backend API
- `shared/` - Shared TypeScript schemas and types
- Database migrations managed through Drizzle Kit

## Key Components

### Database Schema (PostgreSQL)
Three main entities managed through Drizzle ORM:

1. **Jobs Table**
   - Job listings with title, company, location, salary, type
   - Rich content fields for description, requirements, benefits
   - Active status and posting timestamps

2. **Contact Inquiries Table**
   - Lead capture from website contact forms
   - Client/candidate type classification
   - Company and contact information storage

3. **Testimonials Table**
   - Client testimonials with ratings
   - Company and role information
   - Active status for content management

### API Endpoints
RESTful API design:
- `GET /api/jobs` - Retrieve active job listings
- `GET /api/jobs/:id` - Get specific job details
- `GET /api/testimonials` - Fetch active testimonials
- `POST /api/contact` - Submit contact inquiries with validation

### Frontend Components
Modular component architecture:
- **Navigation** - Responsive navigation with smooth scrolling
- **Hero** - Landing section with company branding
- **Services** - Six specialized recruitment service categories
- **Jobs** - Dynamic job listings from API
- **Testimonials** - Client feedback display
- **Contact** - Lead capture form with validation
- **UI Components** - Comprehensive shadcn/ui component library

## Data Flow

1. **Static Content**: Hero, services, and about sections render static content
2. **Dynamic Content**: Jobs and testimonials fetch data via TanStack Query
3. **Form Submissions**: Contact form validates with Zod schema and submits via React Query mutations
4. **Database Operations**: Drizzle ORM handles all database interactions with type safety
5. **Error Handling**: Comprehensive error boundaries and API error handling

## External Dependencies

### UI and Styling
- **shadcn/ui**: Complete component library with Radix UI primitives
- **Tailwind CSS**: Utility-first CSS framework
- **Lucide React**: Icon library
- **Class Variance Authority**: Component variant management

### Forms and Validation
- **React Hook Form**: Performant form library
- **Zod**: Runtime type validation
- **@hookform/resolvers**: Form validation resolvers

### Data Management
- **TanStack Query**: Server state management and caching
- **Drizzle ORM**: Type-safe database ORM
- **Drizzle Zod**: Integration between Drizzle and Zod

### Development Tools
- **TypeScript**: Type safety across the stack
- **Vite**: Fast build tool and dev server
- **tsx**: TypeScript execution for development
- **esbuild**: Production bundling

## Deployment Strategy

### Replit Configuration
- **Runtime**: Node.js 20 with PostgreSQL 16
- **Development**: `npm run dev` starts concurrent frontend and backend
- **Production Build**: 
  - Frontend: Vite builds to `dist/public`
  - Backend: esbuild bundles to `dist/index.js`
- **Deployment**: Autoscale deployment target on port 80

### Environment Setup
- Database connection via `DATABASE_URL` environment variable
- Development and production environment detection
- Static file serving in production mode

### Build Process
The application uses a two-phase build:
1. **Frontend Build**: Vite processes React application with TypeScript compilation
2. **Backend Build**: esbuild bundles Express server with external package handling

## Changelog
```
Changelog:
- January 21, 2025: Enhanced branding and positioning to better reflect expertise as builders merchant specialists
  - Added company logo to navigation and footer (updated to new horizontal logo)
  - Strengthened messaging to emphasize industry insider knowledge
  - Added new Values section highlighting what makes them the UK's premier builders merchant headhunters
  - Updated all copy to position as experts rather than generic recruiters
  - Enhanced About section to tell the story of former industry professionals
  - Converted all spelling to proper UK English (specialise, etc.)
  - Replaced all stock imagery with authentic UK builders merchant photos showing real yard operations
  - Enhanced UK focus throughout all content and messaging
  - Added comprehensive new sections: Core Services, Training & Coaching, Market Intelligence, Partnership, and Money Back Guarantee
  - Removed testimonials and jobs sections per user request
  - Fixed asset serving to properly display logo and authentic builders merchant photos
  - MAJOR UPDATE: Transformed messaging from "recruitment" to "headhunting" throughout entire site
    - Updated hero tagline to "We find talent others can't" emphasizing exclusive headhunting capability
    - Changed Core Services to "Executive Headhunting & Selection" and "Sales & Commercial Headhunting"  
    - Enhanced Market Intelligence with "strategic headhunting decisions" and "target candidate mapping"
    - Updated all service titles and descriptions to emphasize proactive headhunting approach
    - Enhanced contact form and guarantee sections with headhunter positioning
    - Integrated new authentic builders merchant imagery showing real professionals at work
    - Updated image alt tags to reinforce "the type of talent we headhunt" messaging
- June 24, 2025. Initial setup
```

## User Preferences
```
Preferred communication style: Simple, everyday language.
Branding requirements: Emphasize position as UK's premier builders merchant headhunters and industry experts, not generic recruiters.
Company positioning: Former builders merchant professionals who became recruitment specialists - industry insiders with 15+ years exclusive focus.
```
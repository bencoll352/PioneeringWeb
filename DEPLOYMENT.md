# Pioneering Recruitment Website - Deployment Guide

## Quick Start Commands

After cloning the repository locally, run these commands:

```bash
git add .
git commit -m "Initial commit: Pioneering Recruitment builders merchant headhunting website

- Complete React/TypeScript frontend with modern UI components
- Express.js backend with PostgreSQL database integration  
- Comprehensive headhunting services showcase
- Authentic builders merchant imagery throughout
- UK-focused messaging emphasizing headhunting expertise
- Core sections: Services, Training, Market Intelligence, Partnership, Guarantee
- Professional contact forms and lead capture
- Responsive design optimized for builders merchant industry"

git push origin main
```

## Project Structure

```
PioneeringWeb/
├── client/                     # React frontend
│   ├── src/
│   │   ├── components/         # UI components
│   │   ├── pages/             # Page components
│   │   ├── lib/               # Utilities
│   │   └── hooks/             # Custom hooks
│   └── index.html
├── server/                     # Express.js backend
│   ├── index.ts               # Main server file
│   ├── routes.ts              # API routes
│   ├── storage.ts             # Database operations
│   └── vite.ts                # Vite integration
├── shared/                     # Shared TypeScript schemas
├── attached_assets/            # Authentic builders merchant imagery
├── package.json               # Dependencies and scripts
├── vite.config.ts             # Vite configuration
├── tailwind.config.ts         # Tailwind CSS config
├── replit.md                  # Project documentation
└── DEPLOYMENT.md              # This file
```

## Key Features

- **Headhunting Focus**: Positioned as UK's premier builders merchant headhunters
- **Authentic Imagery**: Real builders merchant professionals and operations
- **Industry Expertise**: Former merchant professionals turned headhunting specialists
- **Comprehensive Services**: Executive headhunting, training, market intelligence
- **Professional Design**: Modern UI with industry-specific branding
- **Lead Capture**: Contact forms and testimonials system
- **UK Market Focus**: Spelling, terminology, and market positioning

## Development Setup

1. Install dependencies: `npm install`
2. Set up environment variables for database
3. Run development server: `npm run dev`
4. Access at: `http://localhost:5000`

## Production Deployment

- Frontend builds to `dist/public`
- Backend bundles to `dist/index.js`
- Serves static files in production mode
- Ready for deployment on any Node.js hosting platform

## Authentication Note

Remember to use your GitHub Personal Access Token when pushing:
- Username: bencoll352
- Password: [your-personal-access-token]
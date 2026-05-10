<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Project Guidelines & Rules

## Build & Development Commands
- **Install dependencies**: `npm install`
- **Run local development server**: `npm run dev`
- **Create production build**: `npm run build`
- **Lint the codebase**: `npm run lint`

## Technology Stack
- **Core Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4 & custom utilities (in `globals.css`)
- **Icons**: Lucide React

## Coding Standards & Aesthetics
- All new components must align with the premium dark-mode aesthetic (e.g., `bg-slate-950`).
- Use Tailwind utility classes primarily. Any custom animations or glassmorphism effects should use the predefined CSS classes (`animate-fade-in`, `glass-card`, `text-gradient`).
- Keep code fully typed with TypeScript.
- Optimize components for responsiveness and accessibility.
- Maintain the SDET/Automation focus on the portfolio. Do not re-add backend developer references.

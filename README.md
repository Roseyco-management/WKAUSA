# WKA USA Demo Site

A modern, production-ready demo website for the World Kickboxing Association USA, built with Next.js 14 and Tailwind CSS.

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Language**: TypeScript

## Features

- Fully responsive design
- Mobile-first approach
- Modern, clean UI
- Static demo pages (no backend required)
- Component-based architecture

## Pages

- **Home** - Hero, upcoming events, disciplines, featured fighters
- **About** - WKA history, formation, growth, representative info
- **Sports** - All 6 WKA disciplines with detailed rules
- **Events** - Filterable event listing with sanctioning info
- **Results** - Historical fight results by year
- **Suspensions** - Current suspension list
- **Rankings** - Athletes directory with filtering
- **Championships** - Current champions and title history
- **Shop** - Store placeholder
- **Contact** - Contact form and registration info
- **Links** - Partner organizations and resources

## Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, or pnpm

### Installation

```bash
# Navigate to demo-site directory
cd demo-site

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build for Production

```bash
npm run build
npm start
```

## Deployment

This site is ready to deploy to:

- **Vercel** (recommended): Connect repo and deploy
- **Netlify**: Build command: `npm run build`, publish directory: `.next`

## Project Structure

```
demo-site/
├── app/
│   ├── (pages)/           # All page routes
│   ├── layout.tsx         # Root layout
│   ├── page.tsx           # Home page
│   └── globals.css        # Global styles
├── components/
│   ├── layout/            # Header, Footer
│   ├── sections/          # Page sections
│   └── cards/             # Card components
├── lib/
│   └── utils.ts           # Utility functions
└── public/                # Static assets
```

## Customization

### Colors

WKA brand colors are defined in `tailwind.config.ts`:

```js
colors: {
  wka: {
    red: "#DC2626",
    "red-dark": "#B91C1C",
    black: "#111111",
  }
}
```

### Components

All components use Tailwind CSS utility classes and follow consistent patterns:
- `.card` - Standard card styling
- `.btn-primary` - Primary button
- `.btn-secondary` - Secondary button
- `.heading-1` through `.heading-4` - Typography
- `.badge-*` - Status badges

## Notes

This is a **static demo site**. For the full production version:

1. Connect Supabase for database
2. Add authentication
3. Implement dynamic data fetching
4. Add admin dashboard
5. Enable form submissions

## License

Copyright WKA USA. All rights reserved.

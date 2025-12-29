# Aryahs World Venture Website

Production-level static website for Aryahs World Venture built with Vite + React.

## Project Structure

```
src/
├── components/          # Shared/layout components
│   ├── Header.jsx
│   └── Footer.jsx
├── data/               # Static data files
│   ├── company.js
│   ├── services.js
│   ├── projects.js
│   ├── leadership.js
│   └── awards.js
├── pages/              # Page-based components
│   ├── Home/
│   │   └── Home.jsx
│   ├── Projects/
│   │   └── Projects.jsx
│   ├── ProjectDetail/
│   │   └── ProjectDetail.jsx
│   ├── About/
│   │   └── About.jsx
│   └── Contact/
│       └── Contact.jsx
├── routes/
│   └── App.jsx         # Router setup
├── styles/
│   └── index.css       # Global styles with Tailwind
└── main.jsx            # Entry point
```

## Features

- ✅ Responsive design with Tailwind CSS
- ✅ Dynamic routing with React Router
- ✅ Semantic HTML in project detail pages
- ✅ Static data management
- ✅ Category filtering on projects page
- ✅ Contact form with validation
- ✅ Production-ready code structure
- ✅ SEO-friendly meta tags

## Tech Stack

- **Framework:** React 18
- **Build Tool:** Vite 5
- **Styling:** Tailwind CSS
- **Routing:** React Router v6
- **Animations:** Framer Motion (optional)

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The application will open at `http://localhost:3000`

### Build for Production

```bash
npm run build
```

This generates optimized production files in the `dist/` directory.

### Preview Production Build

```bash
npm run preview
```

## Pages

### Home
- Hero section with call-to-action
- Services showcase
- Featured projects grid
- Company statistics

### Projects
- Complete project portfolio
- Category filtering
- Project cards with metadata
- Links to detailed case studies

### Project Detail
- Semantic HTML article structure
- Project overview with rich description
- Metrics and KPIs
- Technologies used
- Related projects carousel

### About
- Company overview and mission
- Core values
- Leadership team profiles
- Awards and recognition

### Contact
- Contact form with validation
- Company contact information
- Social media links
- What to expect guide

## Data Files

All company information is managed in static data files:

- `company.js` - Company metadata
- `services.js` - Service offerings
- `projects.js` - Project portfolio with detailed case studies
- `leadership.js` - Team leadership information
- `awards.js` - Awards and recognitions

## Styling

The project uses Tailwind CSS utility classes inline only. No separate CSS files per component.

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2025 Aryahs World Venture. All rights reserved.

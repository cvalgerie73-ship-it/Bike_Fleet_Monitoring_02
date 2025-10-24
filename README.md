# Bike Fleet Monitoring Dashboard

A Digital and AI-empowered solution for monitoring bike fleets in real-time. This dashboard provides comprehensive insights into fleet operations, relying on powerful vibration measurement devices and data processing to extract technical information (maintenance, failures, etc.) and hidden insights like ride status, itineraries, and biker behaviors.

## Features

- **Real-time Fleet Monitoring** - Track 3,247+ bikes across multiple city zones
- **Live Ride Updates** - Monitor active rides with automatic 5-second refresh
- **Vibration Analytics** - Detect high-vibration alerts and maintenance needs
- **Zone Performance** - Track ride quality and alerts by geographic zone
- **24-Hour Trends** - Visualize hourly ride patterns and vibration levels
- **Fleet Status Distribution** - Monitor active, idle, and maintenance bikes

## Tech Stack

- **React 18.3** - Latest React with concurrent features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool with SWC
- **Tailwind CSS** - Utility-first CSS framework
- **Recharts** - Composable charting library
- **Zustand** - Lightweight state management (ready to use)
- **React Router** - Client-side routing with code splitting

## Architecture

This project follows a modern **feature-based architecture** optimized for React 18+:

```
src/
├── app/                    # Application core (providers, router, main entry)
├── features/               # Feature modules (dashboard, fleet, analytics, etc.)
│   └── dashboard/          # Dashboard feature
│       ├── components/     # Feature-specific components
│       ├── hooks/          # Custom hooks
│       ├── services/       # Data services
│       └── types/          # TypeScript types
├── shared/                 # Shared resources
│   ├── components/         # Reusable UI components
│   ├── hooks/              # Shared hooks
│   ├── utils/              # Utility functions
│   └── types/              # Global types
└── styles/                 # Global styles
```

## Getting Started

### Prerequisites

- Node.js 18+ or 20+
- npm or yarn or pnpm

### Installation

1. **Clone the repository**

```bash
git clone https://github.com/cvalgerie73-ship-it/Bike_Fleet_Monitoring_02.git
cd Bike_Fleet_Monitoring_02
```

2. **Install dependencies**

```bash
npm install
```

3. **Start the development server**

```bash
npm run dev
```

The application will open automatically at `http://localhost:3000`

### Available Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
npm run format   # Format code with Prettier
```

## Performance Optimizations

This dashboard leverages React 18+ features for optimal performance:

- ✅ **Code Splitting** - Lazy-loaded routes and components
- ✅ **React.memo** - Memoized components to prevent unnecessary re-renders
- ✅ **useMemo** - Memoized expensive calculations
- ✅ **Suspense** - Progressive loading with fallbacks
- ✅ **Error Boundaries** - Graceful error handling
- ✅ **Virtual Scrolling** - Ready for large lists (via @tanstack/react-virtual)

## Development Guide

### Adding a New Feature

1. Create a new folder in `src/features/your-feature/`
2. Add components, hooks, services, and types
3. Export the main component from `index.ts`
4. Add route in `src/app/router/routes.tsx`

### Component Guidelines

- Use `React.memo` for list items and frequently re-rendered components
- Use `useMemo` for expensive calculations
- Use `useCallback` for callbacks passed to child components
- Keep components small and focused
- Co-locate related files in feature folders

### Type Safety

All data structures are fully typed. See:
- `src/shared/types/index.ts` - Global types
- `src/features/dashboard/types/` - Feature-specific types

## Mock Data

Currently using mock data generators in `src/features/dashboard/services/mockDataService.ts`.

To connect to a real API:
1. Update `VITE_API_BASE_URL` in `.env.local`
2. Replace mock services with API calls
3. Configure TanStack Query in providers (already set up)

## Deployment

### Build for Production

```bash
npm run build
```

The optimized build will be in the `dist/` folder.

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm run build
# Drag and drop the dist/ folder to Netlify
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

1. Create a feature branch (`git checkout -b feature/amazing-feature`)
2. Commit your changes (`git commit -m 'Add amazing feature'`)
3. Push to the branch (`git push origin feature/amazing-feature`)
4. Open a Pull Request

## License

This project is proprietary software.

## Contact

For questions or support, please open an issue on GitHub.

---

**Built with React 18+ and optimized for performance** ⚡

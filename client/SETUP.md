# ReviAI Frontend Setup Guide

## Quick Start

```bash
cd client
npm install
npm run dev
```

Visit http://localhost:3000

## Environment Setup

Create `.env.local`:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Project Structure

```
client/
├── app/
│   ├── page.tsx              # Landing page with hero
│   ├── layout.tsx            # Root layout with navbar
│   ├── providers.tsx         # React Query provider
│   ├── globals.css           # Global styles with CSS variables
│   ├── upload/
│   │   └── page.tsx          # Resume upload page
│   ├── editor/
│   │   └── page.tsx          # Main editor (2-column layout)
│   └── preview/
│       └── page.tsx          # Full preview with export
├── components/
│   ├── Navbar.tsx            # Top nav with theme toggle
│   ├── UploadCard.tsx        # Drag-drop file upload
│   ├── CommandInput.tsx      # AI command input field
│   ├── EditorPanel.tsx       # Left panel with history
│   └── ResumePreview.tsx     # Resume renderer
└── lib/
    ├── api.ts                # Axios API client
    ├── store.ts              # Zustand state management
    ├── types.ts              # TypeScript interfaces
    └── utils.ts              # Helper functions
```

## Key Features Implemented

### 1. Upload Page (`/upload`)
- Drag-and-drop file upload
- Supports PDF and JSON
- Progress indicator
- Auto-redirect to editor on success

### 2. Editor Page (`/editor`)
- Two-column responsive layout
- Left: AI command input + edit history
- Right: Live resume preview
- Mock data included for development
- Real-time updates

### 3. Preview Page (`/preview`)
- Full-screen resume view
- Print functionality
- PDF export (browser print dialog)
- Clean, professional layout

### 4. Theme System
- Light/Dark mode toggle
- CSS variables for easy customization
- Persists across navigation
- Smooth transitions

### 5. State Management
- Zustand store for resume data
- Edit history tracking
- Theme persistence
- Type-safe state updates

## API Integration

The frontend expects these backend endpoints:

### POST `/api/upload`
```typescript
// Request: FormData with 'resume' file
// Response: { success: boolean, data: Resume, message?: string }
```

### POST `/api/edit`
```typescript
// Request: { resumeId: string, command: string }
// Response: { success: boolean, data: Resume, message?: string }
```

### GET `/api/render/:id`
```typescript
// Response: { success: boolean, data: Resume, message?: string }
```

## Mock Data

The editor loads mock resume data automatically for development. Remove this in production:

```typescript
// In app/editor/page.tsx
useEffect(() => {
  if (!resume) {
    // Remove this mock data block in production
    const mockResume = { ... };
    useResumeStore.getState().setResume(mockResume);
  }
}, [resume]);
```

## Styling

### Color Palette
```css
--background: #F9FAFB
--foreground: #111827
--primary: #2563EB (Blue)
--accent: #10B981 (Green)
--card: #FFFFFF
--border: #E5E7EB
--muted: #6B7280
```

### Dark Mode
Colors automatically adjust via CSS variables when `data-theme="dark"` is set on `<html>`.

## Dependencies

### Core
- Next.js 16 (App Router)
- React 19
- TypeScript 5

### UI & Styling
- Tailwind CSS 4
- Framer Motion (animations)
- Lucide React (icons)

### State & Data
- Zustand (state management)
- React Query (data fetching)
- Axios (HTTP client)

### Utilities
- React Hot Toast (notifications)
- clsx (className utilities)

## Development Tips

1. **Hot Reload**: Changes auto-refresh in dev mode
2. **Type Safety**: All components are fully typed
3. **Mock Data**: Editor has sample resume for testing
4. **API Errors**: Toast notifications show all errors
5. **Responsive**: Mobile-first design, works on all screens

## Build & Deploy

```bash
# Development
npm run dev

# Production build
npm run build
npm start

# Type check
npx tsc --noEmit

# Lint
npm run lint
```

## Next Steps

1. Connect to your Express backend
2. Remove mock data from editor
3. Implement actual PDF generation (consider @react-pdf/renderer)
4. Add authentication if needed
5. Deploy to Vercel/Netlify

## Troubleshooting

### Build Errors
- Ensure `"type": "commonjs"` is removed from package.json
- Check all imports use correct paths with `@/` alias

### API Connection
- Verify NEXT_PUBLIC_API_URL in .env.local
- Check CORS settings on backend
- Ensure backend is running on correct port

### Styling Issues
- Clear .next folder: `rm -rf .next`
- Rebuild: `npm run build`
- Check Tailwind config is correct

## Support

For issues or questions, check:
- Next.js docs: https://nextjs.org/docs
- Tailwind CSS: https://tailwindcss.com/docs
- React Query: https://tanstack.com/query/latest

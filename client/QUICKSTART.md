# 🚀 ReviAI Quick Start Guide

## Installation & Setup (2 minutes)

```bash
cd client
npm install
npm run dev
```

Visit: http://localhost:3000

## Environment Configuration

Create `.env.local` (already created):
```env
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

## Project Overview

**ReviAI** is a modern AI-powered resume editor with a beautiful Next.js frontend.

### Tech Stack
- Next.js 14 (App Router) + TypeScript
- Tailwind CSS 4 (styling)
- Zustand (state management)
- React Query (data fetching)
- Framer Motion (animations)
- Axios (API client)

## File Structure

```
client/
├── app/                    # Next.js pages
│   ├── page.tsx           # Landing page
│   ├── layout.tsx         # Root layout
│   ├── upload/            # Upload page
│   ├── editor/            # Main editor
│   └── preview/           # Preview & export
├── components/            # React components
│   ├── Navbar.tsx
│   ├── UploadCard.tsx
│   ├── CommandInput.tsx
│   ├── EditorPanel.tsx
│   └── ResumePreview.tsx
└── lib/                   # Utilities
    ├── api.ts            # API client
    ├── store.ts          # Zustand store
    ├── types.ts          # TypeScript types
    └── utils.ts          # Helper functions
```

## Pages & Routes

| Route | Description |
|-------|-------------|
| `/` | Landing page with hero |
| `/upload` | Drag-drop resume upload |
| `/editor` | AI command editor (2-column) |
| `/preview` | Full preview + PDF export |

## Key Features

✅ Drag-and-drop file upload
✅ AI command input with suggestions
✅ Live resume preview
✅ Edit history tracking
✅ Dark mode toggle
✅ PDF export
✅ Fully responsive
✅ Beautiful animations
✅ Toast notifications

## Development Workflow

### 1. Start Dev Server
```bash
npm run dev
```

### 2. Test Pages
- Visit http://localhost:3000
- Click "Get Started" → Upload page
- Upload a file (or use mock data in editor)
- Try AI commands in editor
- View preview and export

### 3. Build for Production
```bash
npm run build
npm start
```

## API Integration

The frontend expects these backend endpoints:

### Upload Resume
```typescript
POST /api/upload
Content-Type: multipart/form-data
Body: FormData with 'resume' file

Response: {
  success: boolean
  data: Resume
  message?: string
}
```

### Edit Resume
```typescript
POST /api/edit
Content-Type: application/json
Body: {
  resumeId: string
  command: string
}

Response: {
  success: boolean
  data: Resume
  message?: string
}
```

### Get Resume
```typescript
GET /api/render/:id

Response: {
  success: boolean
  data: Resume
  message?: string
}
```

## Mock Data

The editor includes mock resume data for development. Find it in:
```typescript
// app/editor/page.tsx
useEffect(() => {
  if (!resume) {
    const mockResume = { ... }; // Remove in production
  }
}, [resume]);
```

## Customization

### Colors
Edit `app/globals.css`:
```css
:root {
  --primary: #2563EB;    /* Change primary color */
  --accent: #10B981;     /* Change accent color */
  --background: #F9FAFB; /* Change background */
}
```

### API URL
Edit `.env.local`:
```env
NEXT_PUBLIC_API_URL=https://your-backend.com/api
```

### Theme
Toggle dark mode via navbar button. Theme persists across sessions.

## Common Tasks

### Add a New Component
```bash
# Create file
touch components/MyComponent.tsx

# Import in page
import MyComponent from '@/components/MyComponent';
```

### Add a New Page
```bash
# Create folder and file
mkdir app/mypage
touch app/mypage/page.tsx
```

### Update Resume Type
Edit `lib/types.ts` and add new fields to `Resume` interface.

## Troubleshooting

### Build Errors
```bash
# Clear cache
rm -rf .next
npm run build
```

### API Not Connecting
- Check `.env.local` has correct URL
- Verify backend is running
- Check CORS settings on backend
- Open browser console for errors

### Styling Issues
- Ensure Tailwind classes are correct
- Check `globals.css` for CSS variables
- Verify dark mode is working

## Scripts

```bash
npm run dev      # Start development server
npm run build    # Build for production
npm start        # Start production server
npm run lint     # Run ESLint
```

## Deployment

### Vercel (Recommended)
```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms
1. Build: `npm run build`
2. Upload `.next`, `public`, `package.json`
3. Run: `npm start`

## Environment Variables

For production, set:
```env
NEXT_PUBLIC_API_URL=https://api.yourapp.com/api
```

## Performance

- Static pages pre-rendered
- Code splitting automatic
- Images optimized
- Fast page transitions
- Minimal bundle size

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## What's Included

✅ 4 complete pages
✅ 5 reusable components
✅ API client with error handling
✅ State management with Zustand
✅ Dark mode support
✅ Responsive design
✅ Animations
✅ Toast notifications
✅ TypeScript types
✅ Mock data for testing

## Next Steps

1. ✅ Install dependencies
2. ✅ Start dev server
3. ⬜ Test all pages
4. ⬜ Connect to backend
5. ⬜ Remove mock data
6. ⬜ Deploy to production

## Support

- Next.js Docs: https://nextjs.org/docs
- Tailwind Docs: https://tailwindcss.com/docs
- React Query: https://tanstack.com/query/latest

---

**You're all set!** 🎉

Run `npm run dev` and start building your AI resume editor.

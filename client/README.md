# ReviAI - AI-Powered Resume Editor

A modern Next.js frontend for editing resumes with AI commands.

## Features

- 🎨 Clean, professional UI with Tailwind CSS
- 🌓 Dark mode support
- 🤖 AI-powered resume editing
- 📱 Fully responsive design
- 🎯 Real-time preview
- 📄 PDF export functionality
- ⚡ Fast and optimized with React Query

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4
- **State Management**: Zustand
- **API Client**: Axios
- **Data Fetching**: React Query
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Notifications**: React Hot Toast

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Set up environment variables:
Create a `.env.local` file with:
```
NEXT_PUBLIC_API_URL=http://localhost:5000/api
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
client/
├── app/
│   ├── upload/          # Resume upload page
│   ├── editor/          # Main editor with AI commands
│   ├── preview/         # Full-screen preview & export
│   ├── layout.tsx       # Root layout with navbar
│   ├── page.tsx         # Landing page
│   └── providers.tsx    # React Query provider
├── components/
│   ├── CommandInput.tsx    # AI command input
│   ├── EditorPanel.tsx     # Left panel with commands
│   ├── ResumePreview.tsx   # Resume renderer
│   ├── UploadCard.tsx      # File upload component
│   └── Navbar.tsx          # Navigation with theme toggle
└── lib/
    ├── api.ts           # API client functions
    ├── store.ts         # Zustand state management
    ├── types.ts         # TypeScript interfaces
    └── utils.ts         # Helper functions
```

## Pages

### `/` - Landing Page
Beautiful hero section with feature highlights

### `/upload` - Upload Resume
Drag-and-drop interface for PDF/JSON resume upload

### `/editor` - Main Editor
- Left panel: AI command input and edit history
- Right panel: Live resume preview
- Mock data included for development

### `/preview` - Full Preview
Full-screen resume view with print and PDF export

## API Integration

The app expects these backend endpoints:

- `POST /api/upload` - Upload resume file
- `POST /api/edit` - Apply AI edit command
- `GET /api/render/:id` - Get resume data

## Development Notes

- Mock resume data is loaded in `/editor` for development
- All API calls are ready to connect to your Express backend
- Theme persists across page navigation
- Edit history is maintained in Zustand store

## Color Palette

- Background: `#F9FAFB`
- Primary: `#2563EB` (Blue)
- Accent: `#10B981` (Green)
- Card: `#FFFFFF`
- Border: `#E5E7EB`

## Build for Production

```bash
npm run build
npm start
```

## License

MIT

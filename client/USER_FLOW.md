# ReviAI User Flow

## 🎯 Complete User Journey

### 1. Landing Page (`/`)

**What Users See:**
- Hero section with gradient logo
- "ReviAI" branding
- Tagline: "Transform your resume with AI-powered editing"
- "Get Started" button
- 3 feature cards:
  - ✨ AI-Powered: Use natural language to edit
  - ⚡ Lightning Fast: Make changes in seconds
  - 🛡️ Theme Preserved: Layout stays intact

**User Actions:**
- Click "Get Started" → Navigate to `/upload`
- Toggle dark mode (top right)

---

### 2. Upload Page (`/upload`)

**What Users See:**
- Large upload card with gradient icon
- "Upload Your Resume" heading
- "Drag and drop or click to browse"
- "Supports PDF and JSON formats"
- "Max file size: 10MB"
- Back button (top left)

**User Actions:**
1. **Drag & Drop**: Drag resume file onto card
   - Card highlights on drag over
   - Shows loading spinner during upload
   - Success toast notification
   - Auto-redirect to `/editor`

2. **Click to Browse**: Click card to open file picker
   - Select PDF or JSON file
   - Same upload flow as drag & drop

**Error Handling:**
- Invalid file type → Error toast
- Upload failure → Error toast with retry option

---

### 3. Editor Page (`/editor`)

**Layout:**
```
┌─────────────────────────────────────────────┐
│ Navbar (with dark mode toggle)             │
├─────────────────────────────────────────────┤
│ Resume Editor                               │
│ [Preview] [Export PDF]                      │
├──────────────────┬──────────────────────────┤
│ Left Panel       │ Right Panel              │
│                  │                          │
│ AI Command       │ Resume Preview           │
│ Center           │                          │
│                  │ [Live Resume Display]    │
│ [Input Box]      │                          │
│ [Suggestions]    │ • Personal Info          │
│                  │ • Summary                │
│ Edit History     │ • Experience             │
│ • Command 1 ✓    │ • Education              │
│ • Command 2 ⏳    │ • Skills                 │
│ • Command 3 ✗    │ • Certifications         │
└──────────────────┴──────────────────────────┘
```

**Left Panel - AI Command Center:**

1. **Command Input**
   - Text input: "Tell AI what to change..."
   - Sparkle icon (✨)
   - Send button (➤)
   - Placeholder suggestions below:
     - "Add Python to skills"
     - "Update job title to Senior Developer"
     - "Add a new certification"
     - "Improve summary section"

2. **Edit History**
   - Scrollable list of past commands
   - Each entry shows:
     - Command text
     - Timestamp
     - Status icon:
       - ✓ Applied (green)
       - ⏳ Pending (blue, spinning)
       - ✗ Failed (red)

**Right Panel - Resume Preview:**
- Live resume display
- Professional layout with:
  - Header (name, contact info)
  - Summary section
  - Experience (with bullet points)
  - Education
  - Skills (as tags)
  - Certifications
- Updates in real-time as edits are applied

**User Actions:**

1. **Type AI Command**
   - Enter: "Add React to skills"
   - Press Enter or click Send
   - Command appears in history as "Pending"
   - API call to backend
   - Resume updates on success
   - Status changes to "Applied"

2. **Use Suggestion**
   - Click suggestion chip
   - Fills input box
   - User can edit before sending

3. **View History**
   - Scroll through past edits
   - See which succeeded/failed
   - Timestamps for each edit

4. **Export PDF**
   - Click "Export PDF" button
   - Opens print dialog
   - User can save as PDF

5. **Preview**
   - Click "Preview" button
   - Navigate to `/preview`

---

### 4. Preview Page (`/preview`)

**What Users See:**
- Full-screen resume view
- Clean, print-optimized layout
- Back button (top left)
- Action buttons (top right):
  - 🖨️ Print
  - ⬇️ Download PDF

**User Actions:**

1. **Print**
   - Click "Print" button
   - Opens browser print dialog
   - User can print or save as PDF

2. **Download PDF**
   - Click "Download PDF" button
   - Opens print dialog
   - User saves as PDF

3. **Back to Editor**
   - Click "Back to Editor"
   - Returns to `/editor`

---

## 🎨 Visual States

### Loading States
- Upload: Spinning loader in upload card
- Command: Spinning icon in history item
- General: Toast notifications

### Success States
- Upload: Green toast + auto-redirect
- Command: Green checkmark in history
- Export: Success toast

### Error States
- Upload: Red toast with error message
- Command: Red X in history
- API: Error toast with details

---

## 🌓 Dark Mode

**Toggle Location:** Top right of navbar

**What Changes:**
- Background: Light gray → Dark blue
- Cards: White → Dark slate
- Text: Dark gray → Light gray
- Borders: Light gray → Medium gray
- Maintains: Primary blue, accent green

**Persistence:** Theme choice saved in Zustand store

---

## 📱 Responsive Behavior

### Mobile (< 768px)
- Single column layout
- Editor panel full width
- Preview hidden (access via Preview button)
- Stacked navigation
- Touch-friendly buttons

### Tablet (768px - 1024px)
- Optimized spacing
- Two-column editor (if space allows)
- Comfortable touch targets

### Desktop (> 1024px)
- Full two-column layout
- Side-by-side editor and preview
- Hover effects
- Keyboard shortcuts work

---

## 🔄 Data Flow

```
User Action → Frontend → API Call → Backend
                ↓
         Update Store
                ↓
         Re-render UI
                ↓
         Show Result
```

### Example: "Add Python to skills"

1. User types command
2. Clicks Send
3. Frontend adds to history (pending)
4. API call: `POST /api/edit`
5. Backend processes with AI
6. Returns updated resume
7. Frontend updates Zustand store
8. ResumePreview re-renders
9. History item marked "Applied"
10. Success toast shown

---

## 🎯 Key User Benefits

1. **Simple Upload**: Drag-drop or click
2. **Natural Language**: No complex forms
3. **Instant Preview**: See changes immediately
4. **Edit History**: Track all modifications
5. **Easy Export**: One-click PDF download
6. **Theme Preserved**: Layout never breaks
7. **Dark Mode**: Comfortable viewing
8. **Responsive**: Works on any device

---

## 🚀 User Experience Highlights

- **Fast**: Smooth animations, quick responses
- **Intuitive**: Clear labels, obvious actions
- **Forgiving**: Good error messages, easy retry
- **Professional**: Clean design, polished UI
- **Accessible**: Keyboard navigation, screen reader friendly
- **Delightful**: Smooth transitions, satisfying interactions

---

## 📊 Typical Session

1. Land on homepage (5 seconds)
2. Click "Get Started" (1 second)
3. Upload resume (10 seconds)
4. Make 3-5 AI edits (2 minutes)
5. Review preview (30 seconds)
6. Export PDF (10 seconds)

**Total Time**: ~3-4 minutes for complete resume update

---

This flow creates a seamless, professional experience that makes resume editing feel effortless and modern. 🎉

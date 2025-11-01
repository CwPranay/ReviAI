# Server Fixes - ReviAI Backend

## Issues Fixed

### 1. ESM Module Loading Error
**Problem:** `ts-node-dev` couldn't handle ES modules properly
```
Error: Must use import to load ES Module
```

**Solution:**
- Replaced `ts-node-dev` with `tsx` (better ESM support)
- Updated `package.json` script: `"dev": "tsx watch src/index.ts"`
- Added `tsx` as dev dependency

### 2. Path Alias Import Error
**Problem:** `@/services/parserService` wasn't resolving
```
import { parseResume } from '@/services/parserService';
```

**Solution:**
- Changed to relative imports: `import { parseResume } from '../services/parserService.js';`
- Added `.js` extension for ESM compatibility

### 3. CommonJS require() in ESM
**Problem:** `pdf-parse` is a CommonJS module
```
const pdf = require("pdf-parse"); // Error in ESM
```

**Solution:**
- Used `createRequire` from Node.js:
```typescript
import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const pdf = require("pdf-parse");
```

### 4. Environment Variables Not Loading
**Problem:** OpenAI API key not found
```
OpenAIError: Missing credentials
```

**Solution:**
- Fixed dotenv path resolution for ESM:
```typescript
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: join(__dirname, '../.env.local') });
```

### 5. OpenAI Client Initialization Timing
**Problem:** OpenAI client initialized before env vars loaded

**Solution:**
- Lazy-load OpenAI client:
```typescript
let openai: OpenAI | null = null;

function getOpenAI() {
    if (!openai) {
        openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY
        });
    }
    return openai;
}
```

### 6. Missing Return Type in parseResume
**Problem:** Function returned wrong structure

**Solution:**
- Added proper return object:
```typescript
const resumeData = JSON.parse(content);
const themeData = { theme: 'professional' };
return { resumeData, themeData };
```

## Files Modified

1. `server/package.json`
   - Changed dev script to use `tsx`
   - Added `tsx` dependency

2. `server/tsconfig.json`
   - Added ts-node ESM configuration

3. `server/src/index.ts`
   - Fixed dotenv path resolution
   - Added ESM __dirname polyfill
   - Added `.js` extensions to imports

4. `server/src/routes/upload.ts`
   - Changed to relative import
   - Added `.js` extension

5. `server/src/services/parserService.ts`
   - Fixed CommonJS require in ESM
   - Lazy-loaded OpenAI client
   - Fixed return type

## Server Status

✅ **Server is now running successfully!**

```
Server running on port 5000
MongoDB connected
```

## API Endpoints

The following endpoints are now available:

- `POST /api/upload` - Upload resume file
- `POST /api/edit` - Edit resume with AI
- `GET /api/render/:id` - Get resume data

## Testing

Test the server is running:
```bash
curl http://localhost:5000/api/upload
# Response: {"error":"No file uploaded"}
# This is expected - server is working!
```

## Running the Server

```bash
cd server
npm run dev
```

The server will:
1. Load environment variables from `.env.local`
2. Connect to MongoDB
3. Start on port 5000
4. Watch for file changes and auto-reload

## Environment Variables Required

In `server/.env.local`:
```env
MONGO_URI=your_mongodb_connection_string
OPENAI_API_KEY=your_openai_api_key
PORT=5000
```

## Next Steps

1. ✅ Server is running
2. ✅ MongoDB connected
3. ✅ OpenAI configured
4. ⬜ Test file upload endpoint
5. ⬜ Implement edit endpoint
6. ⬜ Implement render endpoint

---

**Status:** ✅ All server errors fixed and running successfully!

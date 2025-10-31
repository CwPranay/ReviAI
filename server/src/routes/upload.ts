
import { parseResume } from '@/services/parserService';
import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// Your routes
router.post('/', upload.single('file'), async (req, res) => {
    try { 
        const file =req.file;
        if (!file) return res.status(400).json({error:"No file uploaded"});
        const {resumeData,themeData} =await parseResume(file);
        res.json({resumeData,themeData});
    }
    catch (err: any) {
        console.error(err);
        res.status(500).json({ error: err.message });
    }

});

// Make sure to export the router
export default router;
import { Router } from 'express';
import multer from 'multer';

const router = Router();
const upload = multer({ dest: 'uploads/' });

// Your routes
router.post('/', upload.single('file'), (req, res) => {
  // Handle file upload
  res.json({ message: 'File uploaded successfully' });
});

// Make sure to export the router
export default router;
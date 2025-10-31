import { Router } from 'express';
import multer from 'multer';

const router = Router();
const render = multer({ dest: 'render/' });

// Your routes
router.post('/', render.single('file'), (req, res) => {
  // Handle file upload
  res.json({ message: 'File uploaded successfully' });
});

// Make sure to export the router
export default router;
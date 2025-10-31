import { Router } from 'express';
import multer from 'multer';

const router = Router();
const edit = multer({ dest: 'edit/' });

// Your routes
router.post('/', edit.single('file'), (req, res) => {
  // Handle file upload
  res.json({ message: 'File uploaded successfully' });
});

// Make sure to export the router
export default router;
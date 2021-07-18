import express from 'express';
import { router as search } from './search';
import { router as upload } from './upload'

///const router = Router();

const router = express.Router();

router.use('/', search);
router.use('/upload', upload);
export { router };
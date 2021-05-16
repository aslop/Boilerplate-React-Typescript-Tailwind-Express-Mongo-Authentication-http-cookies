import { Router } from 'express';
const router: Router = Router();
import auth from './auth/index';

router.use('/api/auth', auth);

export default router;

import express from 'express';
import { addJobs, getJobs, updateJob, deleteJob } from '../controllers/jobController.js';

const router = express.Router();

router.route('/').get(getJobs).post(addJobs);
router.route('/:id').put(updateJob).delete(deleteJob);

export default router;
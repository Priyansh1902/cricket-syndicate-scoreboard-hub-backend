import express from 'express';
import * as teamController from '../controllers/teamController.js';

const router = express.Router();

router.get('/', teamController.fetchAllTeams);

export { router as teamRouter };
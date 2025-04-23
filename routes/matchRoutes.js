import express from 'express';
import * as matchController from '../controllers/matchController.js';

const router = express.Router();

router.get('/', matchController.fetchAllMatches);

export { router as matchRouter };
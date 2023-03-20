import express from 'express'
const  router = express.Router()

import { addDoctor, addChannelling, viewChannelling, viewChannellingById, getAllDoctors } from "../controllers/hospitalStaff.controller.js";

router.post('/addDoctor', addDoctor);
router.post('/addChannelling', addChannelling);
router.get('/viewChannellings', viewChannelling);
router.get('/viewChannelById', viewChannellingById);
router.get('/allDoctors', getAllDoctors);

export default router;
import express from 'express'
const  router = express.Router()

import { makeAppointment, searchChannellingByDoctor, searchChannellingBySpecialization } from "../controllers/patient.controller.js";

router.post('/makeAppointment', makeAppointment);
router.get('/viewChannelByDoctor/:doctor', searchChannellingByDoctor);
router.get('/viewChannelBySpec/:spec', searchChannellingBySpecialization);

export default router;
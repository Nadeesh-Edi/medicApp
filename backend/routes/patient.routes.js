import express from 'express'
const  router = express.Router()

import { makeAppointment, searchChannellingByDoctor, searchChannellingBySpecialization, deleteAppointment, deleteAptment } from "../controllers/patient.controller.js";

router.post('/makeAppointment', makeAppointment);
router.get('/viewChannelByDoctor/:doctor', searchChannellingByDoctor);
router.get('/viewChannelBySpec/:spec', searchChannellingBySpecialization);
router.post('/deleteAppointment', deleteAppointment)
router.put('/deleteApptment', deleteAptment);

export default router;
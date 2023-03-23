import express from 'express'
const  router = express.Router()

import { makeAppointment, searchChannellingByDoctor, searchChannellingBySpecialization, deleteAptment, editAppointment, getAppointmentById } from "../controllers/patient.controller.js";

router.post('/makeAppointment', makeAppointment);
router.get('/viewChannelByDoctor/:doctor', searchChannellingByDoctor);
router.get('/viewChannelBySpec/:spec', searchChannellingBySpecialization);
router.put('/deleteApptment', deleteAptment);
router.put('/editAppointment', editAppointment);
router.get('/getAppointmentById/:aptNo', getAppointmentById);

export default router;
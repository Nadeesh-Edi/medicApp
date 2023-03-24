import express from 'express'
const router = express.Router()

import { addNewDoctor, getAllDoctors, editDoctorDetails, getDoctorDetById, deleteDoctorDetails } from "../controllers/doctorsControllers.js";

router.post('/addDoctor', addNewDoctor);
router.get('/allDoctors', getAllDoctors);
router.get('/getDoctorById/:docID', getDoctorDetById);
router.put('/editDoctor', editDoctorDetails);
router.put('/deleteDoctor', deleteDoctorDetails);

export default router;
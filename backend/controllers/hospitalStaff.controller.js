import asyncHandler from "express-async-handler";
import Channelling from "../models/channelling.model.js";
import Doctors from "../models/doctor.model.js";

// Add doctor to the hospital channeling database
const addDoctor = asyncHandler(async (req, res) => {
    const { name, specialization } = req.body;

    const doctor = new Doctors({
        name,
        specialization
    })

    try {
        doctor.save().then(() => {
            res.status(201).json(doctor);
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
    } catch {
        res.status(400);
    }
})


// Create Channelling by staff
const addChannelling = asyncHandler(async (req, res) => {
    const { doctor, date, startingTime, endingTime, durationPerAppointment } = req.body;

    const channeling = new Channelling({
        doctor,
        date,
        startingTime,
        endingTime,
        durationPerAppointment
    })

    try {
        channeling.save().then(() => {
            res.status(201).json(channeling);
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
    } catch {
        res.status(400);
    }
})

// Get all doctors
const getAllDoctors = asyncHandler(async (req, res) => {
    const doctors = await Doctors.find({});
    res.json(doctors);
})

// View full Channelling details
const viewChannelling = asyncHandler(async (req, res) => {
    const channellings = await Channelling.find({});
    res.json(channellings);
})

// View Channelling by Id
const viewChannellingById = asyncHandler(async (req, res) => {
    const id = req.params.id
    const channelling = await Channelling.findById(id);
    res.json(channelling);
})


export { addDoctor, addChannelling, viewChannelling, viewChannellingById, getAllDoctors }
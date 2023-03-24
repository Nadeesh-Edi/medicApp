import asyncHandler from "express-async-handler";
import Doctors from "../models/doctor.model.js";

const addNewDoctor = asyncHandler(async (req, res) => {
    const { name, specialization, contactNo} = req.body;

    const doctor = new Doctors({
        name,
        specialization,
        contactNo 
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
});

// Get all doctors
const getAllDoctors = asyncHandler(async (req, res) => {
    const doctors = await Doctors.find();
    res.json(doctors);
});

// Edit Doctor
const editDoctorDetails = asyncHandler(async (req, res) => {
    const { docID, name, specialization, contactNo } = req.body;

    const chanellId = "63185e8347042222e7df9d10";

    Doctors.updateOne({ _id: docID}, 
    { $set: { 
        'name': name,
        'specialization': specialization,
        'contactNo': contactNo,
    } }).then(() => {
        res.status(200).json({
            data: 'success'
        });
    }).catch((err) => {
        console.log(err);
        res.status(400).json(err)
    })
})

// Delete Doctor
const deleteDoctorDetails = asyncHandler(async (req, res) => {
    const { docID } = req.body;
   // const id = "63185e8347042222e7df9d10";

    try {
        console.log("Doctor del :" + docID);
        Doctors.findByIdAndDelete(docID)
            .then(() => {
                console.log('success');
                res.status(200).json({
                    data: 'success'
                });
            }).catch(err => {
                res.status(400);
                console.log(err)
            })
    } catch {
        console.error();
        res.status(400);
    }
});

// Get appointment by Id
const getDoctorDetById = asyncHandler(async (req, res) => {
    const docID = req.params.docID;
    console.log(docID);

    const doctors = await Doctors.findById( docID )
    .catch(err => {
        res.status(400).json({
            data: 'No record'
        })
    })
    
   console.log(doctors);

    if(doctors) {
        res.status(200).json(doctors);
    }else {
        res.status(400).json({
            data: 'No record'
        })
    }

});

export { addNewDoctor, getAllDoctors, editDoctorDetails, getDoctorDetById, deleteDoctorDetails }
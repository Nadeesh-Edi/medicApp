import asyncHandler from "express-async-handler";
import sgMail from "@sendgrid/mail";

import Appointment from "../models/appointment.model.js";
import Channelling from "../models/channelling.model.js";

// Make appointment
const makeAppointment = asyncHandler(async (req, res) => {
    const { appointmentNo, doctor, patient } = req.body;

    const appointmentTime = {
        hrs: 12,
        mins: 45
    };
    const chanellId = "63185e8347042222e7df9d10";

    const appointment = new Appointment({
        appointmentNo,
        doctor,
        patient,
        appointmentTime
    })

    try {
        appointment.save().then(() => {
            Channelling.findByIdAndUpdate({ _id: chanellId }, { $push: { appointmentList: appointment } })
                .then(() => {
                    sendEmail(patient.email, appointmentNo, appointmentTime)
                    res.status(201).json(appointment);
                }).catch(err => {
                    res.status(400);
                    console.log(err)
                })
        }).catch(err => {
            res.status(400);
            console.log(err);
        })
    } catch {
        res.status(400);
    }
})

const sendEmail = (email, appointmentNo, appointmentTime) => {
    sgMail.setApiKey(process.env.EMAIL_KEY);
    const text = 
        `Your appointment is successful\n\nAppointment number -${appointmentNo}\nAppointment time - ${appointmentTime.hrs}.${appointmentTime.mins}`;

    const msg = {
        to: email, // Change to your recipient
        from: 'nadeeshedi@gmail.com', // Change to your verified sender
        subject: 'Appointment confirmation',
        text: text
      }
    
    sgMail
      .send(msg)
      .then(() => {
        console.log('Email sent')
      })
      .catch((error) => {
        console.error(error)
      })
}

// Search channellings by doctor name
const searchChannellingByDoctor = asyncHandler(async (req, res) => {
    const doctorName = req.params.doctor;
    const channel = await Channelling.findOne({ "doctor.name" : doctorName })
    res.json(channel);
})


// Search channelling by doctor specialization
const searchChannellingBySpecialization = asyncHandler(async (req, res) => {
    const specialization = req.params.spec;
    const channel = await Channelling.findOne({ "doctor.specialization" : specialization })
    res.json(channel);
})


export { makeAppointment, searchChannellingByDoctor, searchChannellingBySpecialization }
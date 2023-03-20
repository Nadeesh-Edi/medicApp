import mongoose from "mongoose";
import Appointment from "./appointment.model.js";
import Doctors from "./doctor.model.js";

const channellingSchema = mongoose.Schema({
    doctor: {
        type: Doctors.schema,
        required: true
    },
    date: {
        type: String,
        required: true
    },
    startingTime: {
        hrs: {
            type: Number,
            required: true
        },
        mins: {
            type: Number,
            required: true
        }
    },
    endingTime: {
        type: String,
        required: true
    },
    durationPerAppointment: {
        type: Number,
        required: true
    },
    appointmentList: {
        type: [Appointment.schema]
    }
    
}, {
    timestamps: true,
})

const Channelling = mongoose.model('Channelling', channellingSchema);

export default Channelling;
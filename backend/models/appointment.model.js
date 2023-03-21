import mongoose from "mongoose";
import Channelling from "./channelling.model.js";
import Doctors from "./doctor.model.js";

const appointmentSchema = mongoose.Schema({
    appointmentNo: {
        type: Number,
        required: true
    },
    doctor: {
        type: Doctors.schema,
        required: true
    },
    patient: {
        name: {
            type: String,
            required: true
        },
        age: {
            type: Number,
            required: true
        },
        contactNo : {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        }
    },
    appointmentTime: {
        hrs: {
            type: Number,
            required: true
        },
        mins: {
            type: Number,
            required: true
        }
    },
    status: {
        type: Boolean,
        required: false,
        default: true
    }
}, {
    timestamps: true,
})

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment;
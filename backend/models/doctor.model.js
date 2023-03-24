import mongoose from "mongoose";

const doctorSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    specialization: {
        type: String,
        required: true
    },
    contactNo :{
        type: String,
        required: false 
    }
}, {
    timestamps: true,
})

const Doctors = mongoose.model('Doctors', doctorSchema);

export default Doctors;
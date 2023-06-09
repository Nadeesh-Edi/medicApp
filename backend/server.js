import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import connectDB from './config/db.js'
import cors from 'cors'
import path from "path"

// Routes
import HospitalStaffRoutes from './routes/hospitalStaff.routes.js';
import PatientRoutes from './routes/patient.routes.js'
import DoctorRoutes from './routes/doctorRoutes.js';

dotenv.config()

//connect database
connectDB()

const app = express()

app.use(cors())
app.use(express.json())

// Calling routes
app.use("/hospitalStaff", HospitalStaffRoutes);
app.use("/patientRoutes", PatientRoutes);
app.use("/doctorroutes", DoctorRoutes);

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'))
}

//create port
const PORT = process.env.PORT || 9000

app.listen(
  PORT,
  console.log(
    `server running in ${process.env.NODE_ENV} port ${PORT}`
  )
)

require("dotenv").config();

const express = require("express");
const app = express();


app.use(express.json());

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-Width, Content-Type, Accept, Authorization"
    );

    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});

const login = require('./api/employee/emp.router')
const DoctorMaster = require('./api/doctor_master/doctor_master.router')
const patientRegistration = require('./api/patient_registration/patient_reg.router')
const Billing = require('./api/billing/billing.router')
const settingMaster = require('./api/setting_master/setting_master.router')

app.use('/api/login', login)
app.use('/api/DoctorMaster', DoctorMaster)
app.use('/api/patientRegistration', patientRegistration)
app.use('/api/Billing', Billing)
app.use('/api/settingMaster', settingMaster)


app.listen(process.env.APP_PORT, (val) => {
    console.log(`Server Up and Running ${process.env.APP_PORT}`)
})
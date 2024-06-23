const router = require("express").Router();
const { pateintInsert, patientUpdate, patientgeting, PatientIdget, DocGettingBySpeciality, getDoctortokenDetail,
    getDoctorFeeDetail, visitMasterInsert, PatientDetailsGtting, lastVisitingDate, lastInsertVistForPrint

} = require("../patient_registration/patient_reg.controller");

router.post("/", pateintInsert);
router.patch("/", patientUpdate);
router.get("/", patientgeting);
router.get("/PatientIdget", PatientIdget);
router.get("/DocGettingBySpeciality/:id", DocGettingBySpeciality)
router.get("/getDoctortokenDetail/:id", getDoctortokenDetail)
router.get("/getDoctorFeeDetail/:id", getDoctorFeeDetail)

router.post("/visitMasterInsert", visitMasterInsert);
router.get("/PatientDetailsGtting/:id", PatientDetailsGtting)
router.post("/lastVisitingDate", lastVisitingDate)

router.get("/lastInsertVistForPrint/:id", lastInsertVistForPrint)
module.exports = router;
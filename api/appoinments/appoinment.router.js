const router = require("express").Router();
const { getAppoinmentsfmVisitMast, getDoctrTokenStartEnd, DoctListWithSpecality, visitMasterAppoinmentInsert,
    updateAppoinmentSave, updateCancelAppoinment

} = require("../appoinments/appoinment.controller");

router.post("/getAppoinmentsfmVisitMast", getAppoinmentsfmVisitMast)
router.get("/getDoctrTokenStartEnd/:id", getDoctrTokenStartEnd)
router.get("/DoctListWithSpecality", DoctListWithSpecality);
router.post("/visitMasterAppoinmentInsert", visitMasterAppoinmentInsert);
router.patch("/updateAppoinmentSave", updateAppoinmentSave);
router.patch("/updateCancelAppoinment", updateCancelAppoinment);
module.exports = router;
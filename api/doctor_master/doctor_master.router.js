const router = require("express").Router();
const { docmasterInsert, docMasterUpdate, DocMasterGet, getSpecialities } = require("../doctor_master/doctor_master.controller");

router.post("/", docmasterInsert);

router.patch("/", docMasterUpdate);

router.get("/", DocMasterGet);

router.get("/getSpecialities", getSpecialities);

module.exports = router;
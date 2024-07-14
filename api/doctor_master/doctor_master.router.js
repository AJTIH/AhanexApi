const router = require("express").Router();
const { docmasterInsert, docMasterUpdate, DocMasterGet, getSpecialities, searchDctrName

} = require("../doctor_master/doctor_master.controller");

router.post("/", docmasterInsert);
router.patch("/", docMasterUpdate);
router.get("/", DocMasterGet);
router.get("/getSpecialities", getSpecialities);

router.post("/searchDctrName", searchDctrName)


module.exports = router;
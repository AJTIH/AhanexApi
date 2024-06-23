const router = require("express").Router();
const { getProcedureList } = require("../billing/billing.controller");

// router.post("/", docmasterInsert);

// router.patch("/", docMasterUpdate);

// router.get("/", DocMasterGet);

router.get("/getProcedureList", getProcedureList);

module.exports = router;
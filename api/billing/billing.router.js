const router = require("express").Router();
const { getProcedureList, getProcedureNameRate, insert, BillDetailsInsert, getBillDetailForPrint,
    getProcedureBsedOnCode
} = require("../billing/billing.controller");

router.get("/getProcedureList", getProcedureList);
router.get("/getProcedureNameRate/:id", getProcedureNameRate)
router.post("/insert", insert);
router.post("/BillDetailsInsert", BillDetailsInsert);

router.get("/getBillDetailForPrint/:id", getBillDetailForPrint)

router.get("/getProcedureBsedOnCode/:id", getProcedureBsedOnCode)

module.exports = router;
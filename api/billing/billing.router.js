const router = require("express").Router();
const { getProcedureList, getProcedureNameRate, insert, BillDetailsInsert, getBillDetailForPrint } = require("../billing/billing.controller");

router.get("/getProcedureList", getProcedureList);
router.get("/getProcedureNameRate/:id", getProcedureNameRate)
router.post("/insert", insert);
router.post("/BillDetailsInsert", BillDetailsInsert);

router.get("/getBillDetailForPrint/:id", getBillDetailForPrint)



module.exports = router;
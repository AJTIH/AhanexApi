const router = require("express").Router();
const { procdreCatmasterInsert, procdreCatMasterUpdate, procdreCatMasterGet, getProcedureCatgryList
} = require("../procedure__category_mast/procedure_categry.controller");

router.post("/", procdreCatmasterInsert);
router.patch("/", procdreCatMasterUpdate);
router.get("/", procdreCatMasterGet);
router.get("/getProcedureCatgryList", getProcedureCatgryList);

module.exports = router;
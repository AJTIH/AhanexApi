const { procdreCatmasterInsert, procdreCatMasterUpdate, procdreCatMasterGet,
    checkInsertVal, getProcedureCatgryList
} = require("../procedure__category_mast/procedure_categry.service");

module.exports = {
    procdreCatmasterInsert: (req, res) => {
        const body = req.body;
        checkInsertVal(body, (err, results) => {
            const value = JSON.parse(JSON.stringify(results))
            if (Object.keys(value).length === 0) {
                procdreCatmasterInsert(body, (err, results) => {
                    if (err) {
                        return res.status(200).json({
                            success: 0,
                            message: err
                        });
                    }
                    return res.status(200).json({
                        success: 1,
                        message: "Procedure Created"
                    });
                })
            } else {
                return res.status(200).json({
                    success: 3,
                    message: "Procedure Name already exist"
                });
            }
        })
    },

    procdreCatMasterUpdate: (req, res) => {
        const body = req.body;
        procdreCatMasterUpdate(body, (err, results) => {
            if (err) {
                res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (!results) {
                return res.status(200).json({
                    success: 2,
                    message: "No Data to Update"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results,
                message: " Procedure Updated Successfully ..."
            });
        })
    },
    procdreCatMasterGet: (req, res) => {
        procdreCatMasterGet((err, results) => {
            if (err) {
                logger.logwindow(err)
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (results.length === 0) {
                logger.infologwindow("No Results Found")
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
    getProcedureCatgryList: (req, res) => {
        getProcedureCatgryList((err, results) => {
            if (err) {
                logger.logwindow(err)
                return res.status(200).json({
                    success: 2,
                    message: err
                });
            }
            if (results.length === 0) {
                logger.infologwindow("No Results Found")
                return res.status(200).json({
                    success: 0,
                    message: "No Results Found"
                });
            }
            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}
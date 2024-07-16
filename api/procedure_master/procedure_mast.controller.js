const { procdremasterInsert, procdreMasterUpdate, procdreMasterGet, searchprocedureName
} = require("../procedure_master/procedure_mast.service");

module.exports = {
    procdremasterInsert: (req, res) => {
        const body = req.body;
        procdremasterInsert(body, (err, results) => {
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
    },
    procdreMasterUpdate: (req, res) => {
        const body = req.body;
        procdreMasterUpdate(body, (err, results) => {
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
    procdreMasterGet: (req, res) => {
        procdreMasterGet((err, results) => {
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

    searchprocedureName: (req, res) => {
        const body = req.body
        searchprocedureName(body, (err, results) => {
            if (err) {
                logger.logwindow(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            if (results.length == 0) {
                return res.status(200).json({
                    success: 0,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        })
    },

}
const { getProcedureList } = require("../billing/billing.service");

module.exports = {
    // docmasterInsert: (req, res) => {
    //     const body = req.body;
    //     docmasterInsert(body, (err, results) => {
    //         if (err) {
    //             return res.status(400).json({
    //                 success: 0,
    //                 message: err
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             message: "Doctor Created"
    //         });
    //     })
    // },
    // docMasterUpdate: (req, res) => {
    //     const body = req.body;
    //     docMasterUpdate(body, (err, results) => {
    //         if (err) {
    //             res.status(400).json({
    //                 success: 0,
    //                 message: err
    //             });
    //         }
    //         if (!results) {
    //             return res.status(400).json({
    //                 success: 2,
    //                 message: "No Data to Update"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             data: results,
    //             message: " Updated Successfully ..."
    //         });
    //     })
    // },
    // DocMasterGet: (req, res) => {
    //     DocMasterGet((err, results) => {
    //         if (err) {
    //             logger.logwindow(err)
    //             return res.status(200).json({
    //                 success: 2,
    //                 message: err
    //             });
    //         }
    //         if (results.length === 0) {
    //             logger.infologwindow("No Results Found")
    //             return res.status(200).json({
    //                 success: 0,
    //                 message: "No Results Found"
    //             });
    //         }
    //         return res.status(200).json({
    //             success: 1,
    //             data: results
    //         });
    //     });
    // },

    getProcedureList: (req, res) => {
        getProcedureList((err, results) => {
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
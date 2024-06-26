const { getProcedureList, getProcedureNameRate, insert, BillDetailsInsert, getBillDetailForPrint } = require("../billing/billing.service");

module.exports = {
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

    getProcedureNameRate: (req, res) => {
        const id = req.params.id;
        getProcedureNameRate(id, (err, results) => {
            if (err) {
                logger.logwindow(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },

    insert: (req, res) => {
        const body = req.body;
        //validate diet master insertion function

        insert(body, (err, results) => {
            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }

            return res.status(200).json({
                success: 1,
                message: "Request Registred Successfully",
                insetid: results.insertId
            });
        });
    },

    BillDetailsInsert: (req, res) => {
        const body = req.body;
        var a1 = body.map((value, index) => {
            return [value.bill_slno, value.procedure_slno, value.procedure_rate, value.bill_proc_slno
            ]
        })
        BillDetailsInsert(a1, (err, results) => {

            if (err) {
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            return res.status(200).json({
                success: 1,
                message: "Bill saved Successfully",
            });
        });
    },
    getBillDetailForPrint: (req, res) => {
        const id = req.params.id;
        getBillDetailForPrint(id, (err, results) => {
            if (err) {
                logger.logwindow(err)
                return res.status(200).json({
                    success: 0,
                    message: err
                });
            }
            if (results.length === 0) {
                return res.status(200).json({
                    success: 2,
                    message: "No Record Found"
                });
            }

            return res.status(200).json({
                success: 1,
                data: results
            });
        });
    },
}
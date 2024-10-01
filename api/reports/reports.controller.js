const { getCashCollectBilling, getCashCollectvisting, getCashCollectNewRegstration, getBillDetails,
    getBillPateintDetails
} = require("../reports/reports.service");

module.exports = {

    getCashCollectBilling: (req, res) => {
        const id = req.params.id;
        getCashCollectBilling(id, (err, results) => {
            if (err) {
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
    getCashCollectvisting: (req, res) => {
        const id = req.params.id;
        getCashCollectvisting(id, (err, results) => {
            if (err) {
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

    getCashCollectNewRegstration: (req, res) => {
        const id = req.params.id;
        getCashCollectNewRegstration(id, (err, results) => {
            if (err) {
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
    getBillDetails: (req, res) => {
        const id = req.params.id;
        getBillDetails(id, (err, results) => {
            if (err) {
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
    getBillPateintDetails: (req, res) => {
        const id = req.params.id;
        getBillPateintDetails(id, (err, results) => {
            if (err) {
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
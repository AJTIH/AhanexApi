const { pool } = require('../../config/config')
module.exports = {
    searchpatientName: (data, callback) => {
        pool.query(
            `select  patient_id, visit_date, doctor_slno, token_no, fee, status
            from visit_master
            where visit_date=? and doctor_slno=?`,
            [
                data.visit_date,
                data.doctor_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

}
const { pool } = require('../../config/config')
module.exports = {
    getProcedureList: (callback) => {
        pool.query(
            `SELECT procedure_slno,procedure_name   ,procedure_rate      
            FROM procedure_master where procedure_status=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },

    getProcedureNameRate: (id, callBack) => {
        pool.query(
            `SELECT procedure_slno,procedure_name   ,procedure_rate      
            FROM procedure_master where procedure_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    insert: (data, callback) => {
        pool.query(
            `INSERT INTO bill_mast (
                patient_id,
                bill_date,
                bill_amount
               )
                VALUES(?,?,?)`,
            [
                data.patient_id,
                data.bill_date,
                data.bill_amount
            ],
            (error, results, fields) => {

                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    BillDetailsInsert: (data, callback) => {
        pool.query(
            `INSERT INTO bill_detail (
                bill_slno,
                procedure_slno,procedure_rate,bill_proc_slno
               )
               values ?`,
            [
                data
            ],
            (error, results, fields) => {

                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    getBillDetailForPrint: (id, callBack) => {
        pool.query(
            `select bill_proc_slno,bill_detail.procedure_rate,procedure_name
from bill_detail
left join procedure_master on procedure_master.procedure_slno=bill_detail.procedure_slno
where bill_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
}
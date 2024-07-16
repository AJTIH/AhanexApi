const { pool } = require('../../config/config')
module.exports = {
    procdremasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO procedure_master(
             procedure_name, procedure_rate, procedure_status)
                VALUES(?,?,?)`,
            [
                data.procedure_name,
                data.procedure_rate,
                data.procedure_status
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    procdreMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE procedure_master 
            SET procedure_name=?,
            procedure_rate=?,
            procedure_status=?
            WHERE procedure_slno=? `,
            [
                data.procedure_name,
                data.procedure_rate,
                data.procedure_status,
                data.procedure_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    procdreMasterGet: (callback) => {
        pool.query(
            `select procedure_slno, procedure_name, procedure_rate, procedure_status,
            if(procedure_status = 1 ,'Yes','No') status1
            from procedure_master`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    searchprocedureName: (data, callback) => {
        pool.query(
            `select procedure_slno, procedure_name, procedure_rate, procedure_status,
            if(procedure_status = 1 ,'Yes','No') status1
            from procedure_master
            where procedure_name like ?`,
            [
                '%' + data.procedure_name + '%'

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
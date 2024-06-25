const { pool } = require('../../config/config')
module.exports = {
    settingMasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO setting_master(
             clinic_name, clinic_address, clinic_mobile, reg_renewaldays
                )
                VALUES(?,?,?,?)`,
            [
                data.clinic_name,
                data.clinic_address,
                data.clinic_mobile,
                data.reg_renewaldays
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },

    settingMasterUpdate: (data, callback) => {
        pool.query(
            `UPDATE setting_master 
            SET clinic_name=?,
            clinic_address=?,
            clinic_mobile=?,
            reg_renewaldays=?
            WHERE master_slno=? `,
            [
                data.clinic_name,
                data.clinic_address,
                data.clinic_mobile,
                data.reg_renewaldays,
                data.master_slno
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    SettingMasterGet: (callback) => {
        pool.query(
            `SELECT clinic_name, clinic_address, clinic_mobile, reg_renewaldays,master_slno
            FROM setting_master
           `,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },


}
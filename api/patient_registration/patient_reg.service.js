const { pool } = require('../../config/config')
module.exports = {
    pateintInsert: (data, callback) => {
        pool.query(
            `INSERT INTO patient_registration(
            patient_id, salutation, patient_name, patient_address, patient_place, patient_pincode, patient_district, patient_mobile,
              patient_dob, patient_age,patient_month,patient_day )
                VALUES(?,?,?,?,?,?,?,?,?,?,?,?)`,
            [
                data.patient_id,
                data.salutation,
                data.patient_name,
                data.patient_address,
                data.patient_place,
                data.patient_pincode,
                data.patient_district,
                data.patient_mobile,
                data.patient_dob,
                data.patient_age,
                data.patient_month,
                data.patient_day
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    patientIdUpdate: (data, callback) => {
        pool.query(
            `UPDATE serial_no 
            SET patient_no=?                      
            WHERE serial_slno=1`,
            [
                data.patient_no

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    patientUpdate: (data, callback) => {
        pool.query(
            `UPDATE patient_registration 
            SET salutation=?,
            patient_name=?,
            patient_address=?,
            patient_place=?,
            patient_pincode=?,
            patient_district=?,
            patient_mobile=?,
            patient_dob=?,
            patient_age=?,
            patient_month=?,
            patient_day=?
            WHERE patient_slno=? `,
            [
                data.salutation,
                data.patient_name,
                data.patient_address,
                data.patient_place,
                data.patient_pincode,
                data.patient_district,
                data.patient_mobile,
                data.patient_dob,
                data.patient_age,
                data.patient_month,
                data.patient_day,
                data.patient_slno

            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    patientgeting: (callback) => {
        pool.query(
            `SELECT doctor_slno,
            doctor_name, doctor_spectiality,doctor_status,
            doctor_fee,doctor_token_start,doctor_token_end,
            doctor_renewal_day,
             if(doctor_status = 1 ,'Yes','No') status1,
             speciality_master.speciality_name
            FROM patient_registration
            left join speciality_master on speciality_master.speciality_slno=doctor_master.doctor_spectiality`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    PatientIdget: (callback) => {
        pool.query(
            `SELECT patient_no
            FROM serial_no
            where serial_slno=1`,
            [],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }
        );
    },
    DocGettingBySpeciality: (id, callBack) => {
        pool.query(
            `SELECT doctor_slno,doctor_name,doctor_fee       
            FROM doctor_master
            WHERE doctor_spectiality=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getDoctortokenDetail: (id, callBack) => {
        pool.query(
            `select max(token_no) as lasttoken_no
                  from visit_master
                 where doctor_slno=? and visit_date=current_date()
           `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getDoctorFeeDetail: (id, callBack) => {
        pool.query(
            `select 
        doctor_name, doctor_spectiality, doctor_status, doctor_fee, doctor_token_start, doctor_token_end, doctor_renewal_day
        from doctor_master

        where doctor_master.doctor_slno=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    visitMasterInsert: (data, callback) => {
        pool.query(
            `INSERT INTO visit_master( patient_id, visit_date, doctor_slno, token_no,fee )
                VALUES(?,?,?,?,?)`,
            [
                data.patient_id,
                data.visit_date,
                data.doctor_slno,
                data.token_no,
                data.fee
            ],
            (error, results, fields) => {
                if (error) {
                    return callback(error);
                }
                return callback(null, results);
            }

        );
    },
    PatientDetailsGtting: (id, callBack) => {
        pool.query(
            `select patient_slno, patient_id, salutation, patient_name, patient_address, patient_place,
 patient_pincode, patient_district, patient_mobile, patient_dob, patient_age, patient_month,
 patient_day
 from patient_registration
 where patient_id=?`,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    lastVisitingDate: (data, callback) => {
        pool.query(
            `select max(visit_date) as visit_date
from visit_master
where patient_id=? and doctor_slno=?`,
            [
                data.patient_id,
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
    lastInsertVistForPrint: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,visit_master.patient_id, visit_date,  token_no, fee,
  salutation, patient_name, patient_address, patient_place, patient_pincode, patient_district,
 patient_mobile, patient_dob, patient_age, patient_month, patient_day,doctor_name
from visit_master
left join patient_registration on patient_registration.patient_id=visit_master.patient_id
left join doctor_master on doctor_master.doctor_slno=visit_master.doctor_slno
 where visit_mast_slno=?`,
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
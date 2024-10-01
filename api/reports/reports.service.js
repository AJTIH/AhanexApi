const { pool } = require('../../config/config')
module.exports = {
    getCashCollectBilling: (id, callBack) => {
        pool.query(
            `select bill_mast_slno, patient_registration.patient_id, bill_date, bill_amount,patient_name,uhid,
                        patient_address,patient_place,patient_mobile
                        from bill_mast
                        left join patient_registration on patient_registration.patient_id=bill_mast.patient_id
                        where date(bill_date)= ? `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getCashCollectvisting: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,  visit_date, 
                 token_no, fee,  status, cancel_status, cancel_reason, registration_fee,
                patient_registration.patient_id, patient_name,uhid,
                patient_address,patient_place,patient_mobile,doctor_master.doctor_name
                from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            left join doctor_master on doctor_master.doctor_slno=visit_master.doctor_slno
            where visit_date=? and fee!=0 and status=1 `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getCashCollectNewRegstration: (id, callBack) => {
        pool.query(
            `select visit_mast_slno,  visit_date, 
                doctor_slno, token_no, fee,  status, cancel_status, cancel_reason, registration_fee,
                patient_registration.patient_id, patient_name,uhid,
                patient_address,patient_place,patient_mobile
                from visit_master
            left join patient_registration on patient_registration.patient_id=visit_master.patient_id
            where visit_date=? and registration_fee=1 `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },

    getBillDetails: (id, callBack) => {
        pool.query(
            `select bill_detail_slno, bill_slno, bill_proc_slno, bill_detail.procedure_slno, bill_detail.procedure_rate,
procedure_name,procedure_code,procedure_catgry_name
from bill_detail
left join procedure_master on procedure_master.procedure_slno=bill_detail.procedure_slno
left join procedure_catgry_mast on procedure_catgry_mast.procedure_catgry_slno=procedure_master.procedure_catgry_slno
where bill_slno=? `,
            [id],
            (error, results, fields) => {
                if (error) {
                    callBack(error)
                }
                return callBack(null, results)
            }
        );
    },
    getBillPateintDetails: (id, callBack) => {
        pool.query(
            `select bill_mast_slno, bill_mast.patient_id, bill_date, bill_amount,
 salutation, patient_name, patient_address, patient_place,
 patient_pincode, patient_district, patient_mobile, patient_dob,
 patient_age, patient_month, patient_day,  uhid, old_uhid
from bill_mast
left join patient_registration on patient_registration.patient_id=bill_mast.patient_id
where bill_mast_slno=? `,
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
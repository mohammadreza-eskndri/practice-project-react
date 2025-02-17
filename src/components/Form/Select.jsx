import {ErrorMessage, FastField} from "formik";
import FormikError from "./FormikError.jsx";

const Select = ({options,name,label,className}) => {
    return (
        <div className={`col-12 ${className}`}>
            <div className='input-group mb-3 dir_ltr'>
                <FastField as={'select'} name={name} className={`form-control`}>
                    {options.map((o)=>(
                        <option key={o.id} value={o.value}>{o.value}</option>
                    ))}
                </FastField>
                <span className='input-group-text w_6rem justify-content-center'>{label}</span>

            </div>
            <ErrorMessage name={name} className={'alert alert-danger'} component={FormikError}/>
        </div>
    )
}
export default Select;
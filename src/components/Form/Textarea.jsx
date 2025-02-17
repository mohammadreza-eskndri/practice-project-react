import {ErrorMessage, FastField} from "formik";
import FormikError from "./FormikError.jsx";

const Textarea = ({type, name, label, className, placeholder}) => {
    return (
        <div className={`col-12 ${className}`}>
            <div className='input-group mb-3 dir_ltr'>
                <FastField as={'textarea'} name={name} className={`form-control`} placeholder={placeholder}/>
                <span className='input-group-text w_6rem justify-content-center'>{label}</span>
            </div>
            <ErrorMessage name={name} className={'alert alert-danger'} component={FormikError}/>
        </div>
    )
}
export default Textarea;
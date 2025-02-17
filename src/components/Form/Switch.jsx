import {FastField} from "formik";

const Switch = ({name, label}) => {
    return (
        <div className='form-check form-switch'>
            <FastField
                className={'form-check-input'}
                name={name}
                type="checkbox"
            />
            <label className='form-check-label'>{label}</label>
        </div>
    )
}
export default Switch;
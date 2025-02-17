import {ErrorMessage, FastField} from "formik";

const Input = ({formik, type, name, icon, label, ...rest}) => {
    return (
        <div
            className={`wrap-input100 validate-input`}
            data-validate={formik.errors[name]}>
            <FastField
                className="input100"
                name={name}
                type={type}
                placeholder={label}
                {...rest}
            />
            <span className="focus-input100"></span>
            <span className="symbol-input100">
                <i className={icon}></i>
            </span>
            <ErrorMessage name={name} component={type} className={'alert alert-danger'} />
        </div>
    );
};

export default Input;

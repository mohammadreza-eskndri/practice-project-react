import Spinner from "./Spinner.jsx";

const SubmitButton = ({formik}) => {
    return (
        <button type="submit" className="btn btn-primary" disabled={formik.isSubmitting}>
            ذخیره
            {formik.isSubmitting && <Spinner />}
        </button>
    );
};

export default SubmitButton;

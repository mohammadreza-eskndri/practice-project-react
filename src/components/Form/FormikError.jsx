const FormikError = ({children}) => {
    return (
        <>
            <small className='d-block text-danger mb-4 alert alert-danger'>{children}</small>
        </>
    )
}
export default FormikError;


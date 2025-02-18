import {ModalsContainer} from "../../components/ModalsContainer.jsx";
import {Form, Formik} from "formik";
import FormikControl from "../../components/Form/FormikControl.jsx";
import * as Yup from "yup";
import axios from "axios";
import {Alert} from "../../utils/Alert.jsx";
import SubmitButton from "../../components/Form/SubmitButton.jsx";

const initialValues = {
    title: '',
}
const validationSchema = Yup.object({
    title: Yup.string().required('عنوان محصول الزامی است'),
})
const onSubmit = async (values, action, setForceRender) => {
    try {
        await axios.post('http://localhost:8000/products/cat/list-create/', values, {
            headers: {'Content-Type': 'multipart/form-data'}
        });
        setForceRender(last => last + 1)
        Alert('اوکی', "با موفقیت محصول افزوده شد!", 'success');
    } catch (error) {
        console.error(error);
        Alert('مشکلی در افزودن محصول پیش آمد', error.message, 'error');
    }
};

const AddCategory = ({setForceRender}) => {
    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_product_category_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن دسته محصولات</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <Formik
                                            initialValues={initialValues}
                                            onSubmit={(values, action) => onSubmit(values, action, setForceRender)}
                                            validationSchema={validationSchema}
                                        >
                                            {(formik) => (
                                                <Form>
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        className="col-md-6 col-lg-8"
                                                        name="title"
                                                        formik={formik}
                                                        label="عنوان دسته"
                                                        placeholder='عنوان دسته'
                                                    />
                                                    <SubmitButton formik={formik}/>
                                                </Form>
                                            )}
                                        </Formik>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalsContainer>
        </>
    )
}
export default AddCategory


import {Form, Formik, useFormik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import {ModalsContainer} from "../../components/ModalsContainer.jsx";
import FormikControl from "../../components/Form/FormikControl.jsx";
import {Alert} from "../../utils/Alert.jsx";

const initialValues = {
    title: '',
    price: '',
    description: '',
    discount: '',
    image: null,
    category: '',
}
const validationSchema = Yup.object({
    title: Yup.string().required('عنوان محصول الزامی است'),
    price: Yup.number().required('قیمت محصول الزامی است').positive('قیمت باید مثبت باشد'),
    description: Yup.string(),
    discount: Yup.number().min(0, 'حداقل مقدار تخفیف 0 است').max(100, 'حداکثر مقدار تخفیف 100 است'),
    // category: Yup.string().required('انتخاب دسته‌بندی الزامی است'),
})
const onSubmit = async (values) => {
    console.log(values);
    try {
        const formData = new FormData();

        formData.append('title', values.title);
        formData.append('price', Number(values.price));  // تبدیل به عدد
        formData.append('description', values.description);
        formData.append('discount', Number(values.discount));  // تبدیل به عدد
        // formData.append('category', values.category);  // اضافه کردن دسته‌بندی
        if (values.image) {
            formData.append('image', values.image);
        }

        await axios.post('http://localhost:8000/products/create/', formData, {
            headers: {'Content-Type': 'multipart/form-data'}
        });

        Alert('اوکی', "با موفقیت محصول افزوده شد!", 'success');
    } catch (error) {
        console.error(error);
        Alert('مشکلی در افزودن محصول پیش آمد', error.message, 'error');
    }
};

const AddProduct = () => {

    const parents = [
        {id: 1, value: 'test'},
        {id: 2, value: 'test2'},
    ]


    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_product_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن محصول جدید</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close">
                                </button>
                            </div>

                            <Formik
                                initialValues={initialValues}
                                onSubmit={onSubmit}
                                validationSchema={validationSchema}
                            >
                                {(formik) => (
                                    <div className="modal-body">
                                        <Form>
                                            <div className="container">
                                                <div className="row justify-content-center">
                                                    <FormikControl
                                                        control="select"
                                                        className="col-md-6 col-lg-8"
                                                        name="category"
                                                        formik={formik}
                                                        options={parents}
                                                        label="دسته محصول"
                                                    />
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        className="col-md-6 col-lg-8"
                                                        name="title"
                                                        formik={formik}
                                                        label="عنوان"
                                                        placeholder='عنوان'
                                                    />
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        className="col-md-6 col-lg-8"
                                                        name="price"
                                                        formik={formik}
                                                        label="قیمت"
                                                        placeholder='قیمت'
                                                    />
                                                    {/*<FormikControl*/}
                                                    {/*    control="input"*/}
                                                    {/*    type="text"*/}
                                                    {/*    className="col-md-6 col-lg-8"*/}
                                                    {/*    name="brand"*/}
                                                    {/*    formik={formik}*/}
                                                    {/*    label="برند"*/}
                                                    {/*    placeholder='برند'*/}
                                                    {/*/>*/}
                                                    {/*<FormikControl*/}
                                                    {/*    control="input"*/}
                                                    {/*    type="text"*/}
                                                    {/*    className="col-md-6 col-lg-8"*/}
                                                    {/*    name="color"*/}
                                                    {/*    formik={formik}*/}
                                                    {/*    label="رنگ"*/}
                                                    {/*    placeholder='رنگ'*/}
                                                    {/*/>*/}
                                                    <FormikControl
                                                        control="input"
                                                        type="text"
                                                        className="col-md-6 col-lg-8"
                                                        name="discount"
                                                        formik={formik}
                                                        label="تخفیف"
                                                        placeholder='تخفیف'
                                                    />
                                                    <FormikControl
                                                        control="textarea"
                                                        type="textarea"
                                                        className="col-md-6 col-lg-8"
                                                        name="description"
                                                        formik={formik}
                                                        label="توضیحات"
                                                        placeholder='توضیحات'
                                                    />
                                                    <FormikControl
                                                        control="file"
                                                        type="file"
                                                        className="col-md-6 col-lg-8"
                                                        name="image"
                                                        formik={formik}
                                                        label="تصویر"
                                                        placeholder='تصویر'
                                                    />
                                                    {/*<div*/}
                                                    {/*    className="col-12 col-md-6 col-lg-8 row justify-content-center">*/}
                                                    {/*    <div className="col-12 col-md-4 col-lg-3 mx-lg-5">*/}
                                                    {/*        <FormikControl*/}
                                                    {/*            control="switch"*/}
                                                    {/*            name="is_active"*/}
                                                    {/*            formik={formik}*/}
                                                    {/*            label="وضعیت فعال"*/}
                                                    {/*        />*/}
                                                    {/*    </div>*/}
                                                    {/*</div>*/}
                                                    <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                                        <button className="btn btn-primary ">ذخیره</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                )}
                            </Formik>
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
export default AddProduct;
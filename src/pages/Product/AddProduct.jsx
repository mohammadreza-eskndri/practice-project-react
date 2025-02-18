import {Form, Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import FormikControl from "../../components/Form/FormikControl.jsx";
import {Alert} from "../../utils/Alert.jsx";
import {useState} from "react";

const AddProduct = ({setForceRender}) => {
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
    const [fetchedData, setFetchData] = useState(initialValues);
    const onSubmit = async (values, action, setForceRender) => {
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

            await axios.post('http://localhost:8000/products/list-create/', formData, {
                headers: {'Content-Type': 'multipart/form-data'}
            });
            Alert('اوکی', "با موفقیت محصول افزوده شد!", 'success');
            action.resetForm()
            setForceRender(last=>last+1)
        } catch (error) {
            console.error(error);
            Alert('مشکلی در افزودن محصول پیش آمد', error.message, 'error');
        }
    };
    const parents = [
        {id: 1, value: 'test'},
        {id: 2, value: 'test2'},
    ]

    return (
        <>
            <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن محصول جدید</h5>
            <Formik
                initialValues={initialValues}
                onSubmit={(values, action) => onSubmit(values, action, setForceRender)}
                validationSchema={validationSchema}
            >
                {(formik) => (
                    <div className="">
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
                                    <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                        <button type={'submit'} className="btn btn-primary ">ذخیره</button>
                                    </div>
                                </div>
                            </div>
                        </Form>
                    </div>
                )}
            </Formik>
        </>
    )
}
export default AddProduct;
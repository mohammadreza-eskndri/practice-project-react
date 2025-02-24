import {useEffect, useState} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {Formik, Form, ErrorMessage, FastField} from "formik";
import * as Yup from "yup";
import {Alert} from "../../utils/Alert";

const EditCategory = () => {
    const {id} = useParams(); // دریافت شناسه محصول از URL
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        title: ""
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // دریافت اطلاعات دسته از سرور
    useEffect(() => {
        axios.get(`http://localhost:8000/products/cat/detail/${id}/`)
            .then(response => {
                setInitialValues(response.data);
            })
            .catch(() => {
                setError("محصول یافت نشد!");
            }).finally(() => setLoading(false))
    }, [id]);

    // اعتبارسنجی فرم با Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("عنوان الزامی است")
    });

    // ارسال داده‌های ویرایش‌شده به سرور
    const handleSubmit = (values, {setSubmitting}) => {
        axios.put(`http://localhost:8000/products/cat/detail/${id}/`, values)
            .then(() => {
                Alert("دسته بندی با موفقیت ویرایش شد!", "ایول", "success");
                navigate("/cat"); // بازگشت به لیست محصولات
            })
            .catch(() => {
                Alert("خطا در ویرایش دسته بندی!", "نشد که بشه!", "error");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    if (loading) return <p>در حال بارگیری...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2 className="my-4">ویرایش دسته</h2>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({isSubmitting}) => (
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">عنوان</label>
                            <FastField type="text" name="title" className="form-control"/>
                            <ErrorMessage name="title" component="div" className="text-danger"/>
                        </div>
                        <button type="submit" className="btn btn-primary" disabled={isSubmitting}>
                            {isSubmitting ? "در حال ذخیره..." : "ذخیره تغییرات"}
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default EditCategory;

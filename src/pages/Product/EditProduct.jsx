import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, ErrorMessage, FastField } from "formik";
import * as Yup from "yup";
import { Alert } from "../../utils/Alert";

const EditProduct = () => {
    const { id } = useParams(); // دریافت شناسه محصول از URL
    const navigate = useNavigate();
    const [initialValues, setInitialValues] = useState({
        title: "",
        price: "",
        description: "",
        image: null,
        category: "",
        discount: "",
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    // دریافت اطلاعات محصول از سرور
    useEffect(() => {
        axios.get(`http://localhost:8000/products/detail/${id}/`)
            .then(response => {
                setInitialValues(response.data);
                setLoading(false);
            })
            .catch(() => {
                setError("محصول یافت نشد!");
                setLoading(false);
            });
    }, [id]);

    // اعتبارسنجی فرم با Yup
    const validationSchema = Yup.object({
        title: Yup.string().required("عنوان الزامی است"),
        price: Yup.number().required("قیمت الزامی است").positive("قیمت باید مثبت باشد"),
        description: Yup.string().required("توضیحات الزامی است"),
    });

    // ارسال داده‌های ویرایش‌شده به سرور
    const handleSubmit = (values, { setSubmitting }) => {
        const formData = new FormData();
        formData.append("title", values.title);
        formData.append("price", values.price);
        formData.append("description", values.description);
        formData.append("category", values.category);
        formData.append("discount", values.discount);

        // بررسی اینکه تصویر جدید انتخاب شده باشد
        if (values.image instanceof File) {
            formData.append("image", values.image);
        }

        axios.put(`http://localhost:8000/products/detail/${id}/`, formData, {
            headers: { "Content-Type": "multipart/form-data" }
        })
            .then(() => {
                Alert("محصول با موفقیت ویرایش شد!", "ایول", "success");
                navigate("/products"); // بازگشت به لیست محصولات
            })
            .catch(() => {
                Alert("خطا در ویرایش محصول!", "نشد که بشه!", "error");
            })
            .finally(() => {
                setSubmitting(false);
            });
    };

    if (loading) return <p>در حال بارگیری...</p>;
    if (error) return <p>{error}</p>;

    return (
        <div className="container">
            <h2 className="my-4">ویرایش محصول</h2>
            <Formik
                initialValues={initialValues}
                enableReinitialize
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
            >
                {({ setFieldValue, isSubmitting }) => (
                    <Form>
                        <div className="mb-3">
                            <label className="form-label">عنوان</label>
                            <FastField type="text" name="title" className="form-control" />
                            <ErrorMessage name="title" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">قیمت</label>
                            <FastField type="number" name="price" className="form-control" />
                            <ErrorMessage name="price" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">توضیحات</label>
                            <FastField as="textarea" name="description" className="form-control" />
                            <ErrorMessage name="description" component="div" className="text-danger" />
                        </div>
                        <div className="mb-3">
                            <label className="form-label">تصویر فعلی</label><br />
                            {initialValues.image && (
                                <img src={initialValues.image} alt="محصول" style={{ width: "100px", height: "100px" }} />
                            )}
                        </div>
                        <div className="mb-3">
                            <label className="form-label">انتخاب تصویر جدید</label>
                            <input
                                type="file"
                                name="image"
                                className="form-control"
                                onChange={(event) => {
                                    const file = event.currentTarget.files[0];
                                    setFieldValue("image", file);
                                }}
                            />
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

export default EditProduct;

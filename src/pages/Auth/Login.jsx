import {useState} from "react";
import {Formik, Form} from "formik";
import * as Yup from "yup";
import axios from "axios";
import AuthFormikControl from "../../components/AuthFormikControl.jsx";
import {useNavigate} from "react-router-dom";

const Login = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const initialValues = {
        username: "",
        password: "",
    };

    const validationSchema = Yup.object({
        username: Yup.string().required("نام کاربری الزامی است"),
        password: Yup.string().min(3, "رمز عبور حداقل 3 کاراکتر باشد").required("رمز عبور الزامی است"),
    });

    const onSubmit = async (values) => {
        setError(null);
        try {
            const {data} = await axios.post("http://localhost:8000/api/token/", values);
            const {access, refresh} = data
            localStorage.setItem("access_token", access);
            localStorage.setItem("refresh_token", refresh);
            navigate("/dashboard");
            window.location.href = "/dashboard";
        } catch (err) {
            setError(err + "خطا در ورود");
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-black">
            <div className="bg-gray-900 p-10 rounded-2xl shadow-xl w-96 text-center border border-red-600">
                <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
                    {(formik) => (
                        <>
                            <h2 className="text-3xl font-extrabold mb-6 text-red-500">ورود به حساب</h2>
                            {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                            <Form className="space-y-5">
                                <div>
                                    <label className="block text-gray-300 font-medium mb-1">نام کاربری</label>
                                    <AuthFormikControl
                                        control="input"
                                        type="text"
                                        className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        name="username"
                                        icon="fas fa-envelope"
                                        formik={formik}
                                    />
                                </div>
                                <div>
                                    <label className="block text-gray-300 font-medium mb-1">رمز عبور</label>
                                    <AuthFormikControl
                                        control="input"
                                        type="password"
                                        className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                                        name="password"
                                        icon="fas fa-lock"
                                        formik={formik}
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="w-full bg-red-600 text-black-50 py-2 rounded-lg hover:bg-red-700 transition-all font-bold shadow-md"
                                >
                                    ورود
                                </button>

                            </Form>
                        </>
                    )}
                </Formik>
            </div>
        </div>
    );
};

export default Login;

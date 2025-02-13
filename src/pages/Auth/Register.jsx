import {useState} from 'react';
import {Formik, Form} from 'formik';
import axios from 'axios';
import * as Yup from 'yup';
import AuthFormikControl from "../../components/AuthFormikControl.jsx";
import {Alert} from "../../utils/Alert.jsx";
import {useNavigate} from "react-router-dom";

const Register = () => {
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    // مدل داده‌های فرم
    const initialValues = {
        username: '',
        email: '',
        password: '',
        last_name: '',
        first_name: '',
    };

    const validationSchema = Yup.object({
        username: Yup.string()
            .min(3, 'Username should be at least 3 characters')
            .max(20, 'Username should not exceed 20 characters')
            .required('Username is required'),

        first_name: Yup.string()
            .required('First name is required'),

        last_name: Yup.string()
            .required('Last name is required'),

        email: Yup.string()
            .email('Invalid email format')
            .required('Email is required'),

        password: Yup.string()
            .min(6, 'Password should be at least 6 characters')
            .required('Password is required'),
    });

    const onSubmit = async (values) => {
        setError(null);
        try {
            const response = await axios.post('http://localhost:8000/admin-react/api/user/create/', values);
            localStorage.setItem('access_token', response.data.access_token);
            localStorage.setItem('refresh_token', response.data.refresh_token);
            Alert('سلام دوست من', 'ثبت نام شما تکمیل شد!', 'success');
            navigate("/");
        } catch (error) {
            setError(error.message || "خطا در ورود");
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            {(formik) => (
                <Form>
                    <h2 className="text-3xl font-extrabold mb-6 text-red-500">ثبت نام</h2>
                    {error && <p className="text-red-400 text-sm mb-3">{error}</p>}
                    <div>
                        <AuthFormikControl
                            control="input"
                            type="text"
                            className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            name="username"
                            icon="fas fa-envelope"
                            formik={formik}
                            label="نام کاربری"
                        />
                        <AuthFormikControl
                            control="input"
                            type="password"
                            className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            name="password"
                            icon="fas fa-lock"
                            formik={formik}
                            label="رمز عبور"
                        />
                        <AuthFormikControl
                            control="input"
                            type="text"
                            className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            name="first_name"
                            icon="fas fa-user"
                            formik={formik}
                            label="نام"
                        />
                        <AuthFormikControl
                            control="input"
                            type="text"
                            className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            name="last_name"
                            icon="fas fa-user"
                            formik={formik}
                            label="نام خانوادگی"
                        />
                        <AuthFormikControl
                            control="input"
                            type="email"
                            className="w-full px-4 py-2 bg-gray-800 border border-red-500 text-black-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                            name="email"
                            icon="fas fa-envelope"
                            formik={formik}
                            label="ایمیل"
                        />
                        <button
                            type="submit"
                            className="w-full py-3 mt-4 bg-red-500 text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-red-500"
                        >
                            ثبت نام
                        </button>
                    </div>
                </Form>
            )}
        </Formik>
    );
};

export default Register;

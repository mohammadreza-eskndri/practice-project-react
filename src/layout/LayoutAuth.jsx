import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/AuthHook.jsx";

const LayoutAuth = () => {
    const { isAuthenticated, loading } = useAuth(); // مقدار loading اضافه شده

    if (loading) {
        return <p>در حال بررسی وضعیت احراز هویت...</p>; // جلوگیری از رندر اشتباه
    }

    return (
        !isAuthenticated ? (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-96">
                    <Outlet /> {/* اینجا تمام صفحات زیرمجموعه‌ی LayoutAuth رندر می‌شن */}
                </div>
            </div>
        ) : (
            <Navigate to="/" replace />
        )
    );
};

export default LayoutAuth;

import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../hook/AuthHook.jsx";

const LayoutAuth = () => {
    const { isAuthenticated, loading } = useAuth(); // مقدار loading اضافه شده

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="bg-white p-6 rounded-lg shadow-md w-96 text-center">
                    <p className="text-gray-600">در حال بررسی وضعیت احراز هویت...</p>
                    <div className="mt-4 animate-spin rounded-full h-6 w-6 border-t-2 border-blue-500"></div>
                </div>
            </div>
        );
    }

    if (isAuthenticated) {
        return <Navigate to="/" replace />;
    }

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white p-6 rounded-lg shadow-md w-96">
                <Outlet /> {/* اینجا تمام صفحات زیرمجموعه‌ی LayoutAuth رندر می‌شن */}
            </div>
        </div>
    );
};

export default LayoutAuth;

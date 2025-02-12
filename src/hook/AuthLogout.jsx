import axios from "axios";
import { useNavigate } from "react-router-dom";

const useLogout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        const refreshToken = localStorage.getItem("refresh_token");
        const accessToken = localStorage.getItem("access_token");

        if (!refreshToken) {
            console.warn("کاربر لاگین نیست.");
            navigate("/auth/login");
            return;
        }

        try {
            await axios.post(
                "http://localhost:8000/todo/api/logout/",
                { refresh_token: refreshToken },
                { headers: { Authorization: `Bearer ${accessToken}` } }
            );

            // حذف توکن‌ها
            localStorage.removeItem("access_token");
            localStorage.removeItem("refresh_token");

            // هدایت کاربر به صفحه لاگین
            navigate("/auth/login", { replace: true });
        } catch (error) {
            console.error("خطا در خروج:", error);
        }
    };

    return logout;
};

export default useLogout;

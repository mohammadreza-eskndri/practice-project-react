import axios from "axios";

const logout = async () => {
    const refreshToken = localStorage.getItem("refresh_token");
    const accessToken = localStorage.getItem("access_token");

    if (refreshToken) {
        try {
            await axios.post("http://localhost:8000/todo/api/logout/",  // روش بهتر: `POST` استفاده شود
                {'refresh_token': refreshToken},
                {headers: {Authorization: `Bearer ${accessToken}`}}
            );
        } catch (error) {
            console.error("خطا در خروج:", error);
        }
    }

    // localStorage.removeItem("access");
    // localStorage.removeItem("refresh");
    // window.location.href = "/auth/login";  // هدایت به صفحه لاگین
};

export default logout;

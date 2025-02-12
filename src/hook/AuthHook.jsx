import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const checkLoginStatus = async () => {
            const token = localStorage.getItem("access_token");

            if (!token) {
                setUser(null);
                setIsAuthenticated(false);
                setLoading(false);
                return;
            }

            try {
                const response = await axios.get("http://localhost:8000/todo/api/auth-status/", {
                    headers: { Authorization: `Bearer ${token}` },
                });

                if (response.status === 200) {
                    setUser(response.data);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("خطا در اعتبارسنجی توکن:", error);
                localStorage.removeItem("access_token");
                setUser(null);
                setIsAuthenticated(false);
                navigate('/auth/login'); // وقتی توکن نامعتبره، هدایت به لاگین
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus();
    }, [navigate]);

    return { isAuthenticated, user, loading }; // مقدار loading رو برگردون
};

export default useAuth;

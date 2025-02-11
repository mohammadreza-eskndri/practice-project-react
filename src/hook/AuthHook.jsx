import { useState, useEffect } from "react";
import axios from "axios";

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true);

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
                const response = await axios.get("http://localhost:8000/todo/api/user/", {
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
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus();
    }, []);

    return { user, isAuthenticated, loading };
};

export default useAuth; // حتماً `export default` باشد

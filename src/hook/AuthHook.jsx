import {useState, useEffect} from "react";
import axios from "axios";
import {useNavigate} from "react-router-dom";

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
                return navigate('/auth/login');
            }

            try {
                const response = await axios.get("http://localhost:8000/api/token/", {
                    headers: {Authorization: `Bearer ${token}`},
                });
                console.log(response)
                if (response.status === 200) {
                    // setUser(response.data);
                    setIsAuthenticated(true);
                }
            } catch (error) {
                console.error("خطا در اعتبارسنجی توکن:", error);
                // localStorage.removeItem("access_token");
                setUser(null);
                setIsAuthenticated(false);
            } finally {
                setLoading(false);
            }
        };

        checkLoginStatus();
    }, []);

    return [user, isAuthenticated, loading]
};

export default useAuth

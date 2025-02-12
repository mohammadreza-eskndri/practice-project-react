import Header from "./header/Header.jsx";
import Navbar from "./navbar/Navbar.jsx";
import AdminContextContainer from "../Context/adminLayoutContext.jsx";
import Content from "../pages/Content.jsx";
import useAuth from "../hook/AuthHook.jsx";
import {Navigate} from "react-router-dom";

const Layout = () => {
    const { isAuthenticated, loading } = useAuth(); // مقدار صحیح دریافت شده

    if (loading) {
        return <p>در حال بررسی وضعیت احراز هویت...</p>; // جلوگیری از رندر اشتباه
    }

    return (
        <>
            <AdminContextContainer>
                {isAuthenticated ? (
                    <div>
                        <Header/>
                        <Navbar/>
                        <Content/>
                    </div>
                ) : (
                    <Navigate to={'/auth/login'} replace />
                )}
            </AdminContextContainer>
        </>
    );
}

export default Layout;

import Header from "./header/Header.jsx";
import Navbar from "./navbar/Navbar.jsx";
import AdminContextContainer from "../Context/adminLayoutContext.jsx";
import Content from "../pages/Content.jsx";
import useAuth from "../hook/AuthHook.jsx";
import {Navigate} from "react-router-dom";

const Layout = () => {
    const {isAuthenticated, loading} = useAuth();

    return (
        <>
            <AdminContextContainer>
                {
                    loading ? (
                        <p>لطفا صبر کنید...</p>
                    ): isAuthenticated ? (
                        <div>
                            <Header/>
                            <Navbar/>
                            <Content/>
                        </div>
                    ):(
                        <Navigate to={'/auth/login'}/>
                    )
                }

            </AdminContextContainer>
        </>
    )
}

export default Layout

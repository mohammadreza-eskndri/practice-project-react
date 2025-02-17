import Header from "./header/Header.jsx";
import Navbar from "./navbar/Navbar.jsx";
import AdminContextContainer, {AdminContext} from "../Context/adminLayoutContext.jsx";
import useAuth from "../hook/AuthHook.jsx";
import {Navigate, Outlet} from "react-router-dom";
import {useContext} from "react";

const Layout = () => {
    const { showSidebar } = useContext(AdminContext);
    const {isAuthenticated, loading} = useAuth(); // مقدار صحیح دریافت شده

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
                        {/*<Content/>*/}
                        <div>
                            <section id="content_section"
                                     className={`bg-light py-2 px-3 ${showSidebar ? 'with_sidebar' : null}`}>
                                <Outlet/>
                            </section>
                        </div>
                    </div>
                ) : (
                    <Navigate to={'/auth/login'} replace/>
                )}
            </AdminContextContainer>
        </>
    );
}

export default Layout;

import Header from "./header/Header.jsx";
import Navbar from "./navbar/Navbar.jsx";
import AdminContextContainer from "../Context/adminLayoutContext.jsx";
import Content from "../pages/Content.jsx";

const Layout = () => {
    return (
        <>
            <AdminContextContainer>
                <div>
                    <Header/>
                    <Navbar/>
                    <Content/>
                </div>
            </AdminContextContainer>
        </>
    )
}

export default Layout

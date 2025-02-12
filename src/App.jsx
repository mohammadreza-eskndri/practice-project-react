import LayoutAuth from "./layout/LayoutAuth.jsx";
import {Navigate, useLocation} from "react-router-dom";
import Layout from "./layout/Layout.jsx";
import useAuth from "./hook/AuthHook.jsx";

function App() {
    const location = useLocation();
    const { isAuthenticated, loading } = useAuth();

    return (
        <>
            {location.pathname.includes('/auth/') ? (
                <LayoutAuth/>
            ) : isAuthenticated && !loading ?(
                <Layout/>
            ):(
                <Navigate to={'/auth/login/'}/>
            )
            }
        </>
    )
}

export default App

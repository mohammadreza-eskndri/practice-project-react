import {Navigate, Route, Routes} from "react-router-dom";
import useAuth from "../hook/AuthHook.jsx";
import Login from "../pages/Auth/Login.jsx";

const LayoutAuth = () => {
    const {isAuthenticated, loading} = useAuth();

    return (
        <>
            {
                loading ? (
                    <p>لطفا صبر کنید...</p>
                ) : !isAuthenticated ? (
                    <div className="flex items-center justify-center min-h-screen bg-gray-100">
                        <div className="bg-white p-6 rounded-lg shadow-md w-96">
                            <Routes>
                                <Route path="/auth/login" element={<Login/>}/>
                            </Routes>
                        </div>
                    </div>
                ) : (
                    <Navigate to={'/'}/>
                )
            }
        </>
    )

}

export default LayoutAuth;

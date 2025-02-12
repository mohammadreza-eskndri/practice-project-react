import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import LayoutAuth from "./layout/LayoutAuth.jsx";
import Layout from "./layout/Layout.jsx";
import Logout from "./pages/Auth/Logout.jsx";

const App = () => {
    return (
            <Routes>
                <Route path="/auth" element={<LayoutAuth />}>
                    <Route index element={<Navigate to="login" replace />} /> {/* هدایت `/auth` به `/auth/login` */}
                    <Route path="login" element={<Login />} />
                    <Route path="logout" element={<Logout />} />
                </Route>
                <Route path="/" element={<Layout />} />
            </Routes>
    );
};

export default App;

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./pages/Auth/Login";
import LayoutAuth from "./layout/LayoutAuth.jsx";
import Layout from "./layout/Layout.jsx";

const App = () => {
    return (
            <Routes>
                <Route path="/auth" element={<LayoutAuth />}>
                    <Route path="login" element={<Login />} />
                </Route>
                <Route path="/" element={<Layout />} />
            </Routes>
    );
};

export default App;

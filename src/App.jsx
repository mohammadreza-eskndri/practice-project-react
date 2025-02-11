import LayoutAuth from "./layout/LayoutAuth.jsx";
import {useLocation} from "react-router-dom";
import Layout from "./layout/Layout.jsx";

function App() {
    const location = useLocation();
    return (
        <>
            {location.pathname.includes()}
            <Layout/>
            <LayoutAuth/>
        </>
    )
}

export default App

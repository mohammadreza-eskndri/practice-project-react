import Layout from "./layout/Layout.jsx";
import {BrowserRouter} from "react-router-dom";

function App() {
    return (
        <>
            <BrowserRouter>
                <Layout/>
            </BrowserRouter>
        </>
    )
}

export default App

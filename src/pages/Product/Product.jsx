import AddProduct from "./AddProduct.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Pagination from "../../components/Pagination.jsx";
import {Spinner} from "react-bootstrap";


const Product = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [forceRender, setForceRender] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)
        axios.get("http://localhost:8000/products/list-create/")
            .then(response => {
                const fetchedData = response.data.results;
                setData(fetchedData);

                // اگر داده‌ای دریافت شده باشد، کلیدهای اولین آیتم را استخراج کن
                if (fetchedData.length > 0) {
                    setColumns(Object.keys(fetchedData[0]));
                }
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            }).finally(
            setLoading(false)
        )
    }, [forceRender]);
    return (
        <>
            <div id="manage_product_section" className="manage_product_section main_section">
                <h4 className="text-center my-3">مدیریت محصولات</h4>
                {loading ? <Spinner/> : null}
                <Pagination data={data} columns={columns}/>
            </div>

            <AddProduct setForceRender={setForceRender}/>
        </>
    )
}
export default Product


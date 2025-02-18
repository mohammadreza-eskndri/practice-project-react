import AddCategory from "./AddCategory.jsx";
import Pagination from "../../components/Pagination.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../components/Form/Spinner.jsx";

const Category = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [forceRender, setForceRender] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8000/products/cat/list-create/")
            .then(response => {
                const fetchedData = response.data.results;
                setData(fetchedData);

                // اگر داده‌ای دریافت شده باشد، کلیدهای اولین آیتم را استخراج کن
                if (fetchedData.length > 0) {
                    setColumns(Object.keys(fetchedData[0]));
                }
                // console.log("Data: ", fetchedData);
                // console.log("Columns: ", Object.keys(fetchedData[0] || {}));
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            }).finally(
            setLoading(false)
        )
    }, [forceRender]);
    return (
        <>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                {loading ? <Spinner/> : null}
                <Pagination data={data} columns={columns}/>
            </div>

            <AddCategory setForceRender={setForceRender}/>

        </>
    )
}
export default Category


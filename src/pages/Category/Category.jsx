import AddCategory from "./AddCategory.jsx";
import {useEffect, useState} from "react";
import axios from "axios";
import Spinner from "../../components/Form/Spinner.jsx";
import TableComponent from "../../components/TableComponent.jsx";

const Category = () => {
    const [data, setData] = useState([]);
    const [columns, setColumns] = useState([]);
    const [forceRender, setForceRender] = useState(0);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        axios.get("http://localhost:8000/products/cat/")
            .then(response => {
                const fetchedData = response.data.results;

                if (fetchedData.length > 0) {
                    // استخراج کلیدهای اولین آبجکت و تبدیل به فرمت مناسب
                    const dynamicColumns = Object.keys(fetchedData[0]).map(key => ({
                        key: key,
                        label: key === "id" ? "شناسه" :
                            key === "title" ? "عنوان" :
                                key === "attributes" ? "ویژگی‌ها" :
                                    key
                    }));
                    setColumns(dynamicColumns);
                }

                setData(fetchedData);
            })
            .catch(error => {
                console.error("Error fetching data: ", error);
            }).finally(() => setLoading(false));
    }, [forceRender]);

    return (
        <>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                {loading ? <Spinner/> : null}
                <TableComponent
                    data={data}
                    columns={columns}
                />
            </div>
        </>
    );
}

export default Category;

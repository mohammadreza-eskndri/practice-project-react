import AddCategory from "./AddCategory.jsx";
import Pagination from "../../components/Pagination.jsx";
import {useEffect, useState} from "react";
import axios from "axios";

const Category = () => {
    // const data = [{
    //     id: 1,
    //     title: 'بهداشتی'
    // }, {
    //     id: 2,
    //     title: 'پوشاک'
    // }, {
    //     id: 3,
    //     title: 'غذایی'
    // }, {
    //     id: 4,
    //     title: 'شوینده'
    // }, {
    //     id: 5,
    //     title: 'خوراک'
    // }]
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/todo/generic/')
            .then(response =>{
            setData(response.data.results);
        })
            .catch(error => {
                console.error('Error fetching data: ', error);
            });
    }, []);
    return (
        <>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>
                {/*<pre>{JSON.stringify(data, null, 2)}</pre>*/}
                <Pagination data={data}/>
            </div>

            <AddCategory/>

        </>
    )
}
export default Category


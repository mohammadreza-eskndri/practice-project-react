import AddCategory from "./AddCategory.jsx";
import Pagination from "../../components/Pagination.jsx";

const Category = () => {
    const data = [{
        id: 1,
        title: 'بهداشتی'
    },{
        id: 2,
        title: 'پوشاک'
    }, {
        id: 3,
        title: 'غذایی'
    }, {
        id: 4,
        title: 'شوینده'
    }, {
        id: 5,
        title: 'خوراک'
    }]
    return (
        <>
            <div id="manage_product_category" className="manage_product_category main_section">
                <h4 className="text-center my-3">مدیریت دسته بندی محصولات</h4>


                <Pagination data={data}/>
            </div>

            <AddCategory/>

        </>
    )
}
export default Category


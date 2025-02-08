import {useEffect, useState} from "react";

let numOfPages = 2;
const Pagination = ({data}) => {
    const [pageCount, setPageCount] = useState(1);
    const [page, setPage] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [InitData, setInitData] = useState(data);
    const [SearchChar, setSearchChar] = useState("");
    useEffect(() => {
        let pCount = Math.ceil(InitData.length / numOfPages);
        setPageCount(pCount);
        let pArr = []
        for (let i = 1; i <= pCount; i++) pArr = [...pArr, i];
        setPage(pArr)
    }, [InitData])
    useEffect(() => {
        let start = (currentPage * numOfPages) - numOfPages
        let end = currentPage * numOfPages
        setTableData(InitData.slice(start, end))
    }, [currentPage, InitData])

    useEffect(() => {
        setInitData(data.filter(d => d.title.includes(SearchChar)))
        setCurrentPage(1)
    }, [SearchChar]);
    return (
        <>
            <div className="row justify-content-between">
                <div className="col-10 col-md-6 col-lg-4">
                    <div className="input-group mb-3 dir_ltr">
                        <input
                            type="text"
                            className="form-control"
                            placeholder="قسمتی از عنوان را وارد کنید"
                            onChange={(e) => setSearchChar(e.target.value)}
                        />
                        <span className="input-group-text">جستجو</span>
                    </div>
                </div>
                <div className="col-2 col-md-6 col-lg-4 d-flex flex-column align-items-end">
                    <button className="btn btn-success d-flex justify-content-center align-items-center"
                            data-bs-toggle="modal" data-bs-target="#add_product_category_modal">
                        <i className="fas fa-plus text-light"></i>
                    </button>
                </div>
            </div>
            <table className="table table-responsive text-center table-hover table-bordered">
                <thead className="table-secondary">
                <tr>
                    <th>#</th>
                    <th>عنوان</th>
                    <th>وضعیت</th>
                    <th>عملیات</th>
                </tr>
                </thead>
                <tbody>
                {tableData.map((item) => (
                    <tr key={item.id}>
                        <td>{item.id}</td>
                        <td>{item.title}</td>
                        <td>فعال</td>
                        <td>
                            <i className="fas fa-project-diagram text-info mx-1 hoverable_text pointer has_tooltip"
                               title="زیرمجموعه" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                            <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                               title="ویرایش دسته" data-bs-toggle="modal" data-bs-placement="top"
                               data-bs-target="#add_product_category_modal"></i>
                            <i className="fas fa-plus text-success mx-1 hoverable_text pointer has_tooltip"
                               title="افزودن ویژگی" data-bs-toggle="modal"
                               data-bs-target="#add_product_category_attr_modal"></i>
                            <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                               title="حذف دسته" data-bs-toggle="tooltip" data-bs-placement="top"></i>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
            {/*{*/}
            {/*    page.length > 1 ? (*/}
            {/*        */}
            {/*    ) : null*/}
            {/*}*/}
            <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                <ul className="pagination dir_ltr">
                    <li className="page-item">
                        <a className={`page-link pointer ${currentPage === 1 ? 'disabled' : ''}`}
                           aria-label="Previous">
                                    <span aria-hidden="true"
                                          onClick={() => setCurrentPage(currentPage - 1)}>&raquo;</span>
                        </a>
                    </li>
                    {
                        page.map((item) => (
                        <li className="page-item" key={item}>
                            <span className={`page-link pointer ${currentPage === item ? 'alert-success' : ''}`}
                                  onClick={() => setCurrentPage(item)}>{item}</span>
                        </li>
                    ))
                    }
                    <li className="page-item">
                        <a className={`page-link pointer ${currentPage === pageCount ? 'disabled' : ''}`}
                           aria-label="Next">
                                    <span aria-hidden="true"
                                          onClick={() => setCurrentPage(currentPage + 1)}>&laquo;</span>
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}
export default Pagination


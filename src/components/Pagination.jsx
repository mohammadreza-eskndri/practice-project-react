import {useEffect, useState, useMemo} from "react";

const numOfPages = 20;
const Pagination = ({data, columns}) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [searchChar, setSearchChar] = useState("");

    // جلوگیری از تغییر بی‌مورد `filteredData`
    const filteredData = useMemo(
        () => data.filter((d) => d.title && d.title.includes(searchChar)), // اضافه کردن بررسی وجود `d.title`
        [data, searchChar]
    );

    // محاسبه تعداد صفحات
    const pageCount = Math.ceil(filteredData.length / numOfPages);
    const pages = Array.from({length: pageCount}, (_, i) => i + 1);

    // مقداردهی داده‌های جدول بر اساس صفحه جاری
    useEffect(() => {
        const start = (currentPage - 1) * numOfPages;
        const end = start + numOfPages;
        setTableData(filteredData.slice(start, end));
    }, [currentPage, filteredData, data]);

    const toPersianColumns = (columns) => {
        const translations = {
            "id": "شناسه",
            "title": "عنوان",
            "price": "قیمت",
            "date": "تاریخ",
            "category": 'دسته',
            'description':'توضیحات',
            'discount':'تخفیف',
            'image':'تصویر',

        };
        return columns.map(col => translations[col] || col);
    };

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
                    {toPersianColumns(columns).map((c, index) => (
                        <th key={index}>
                            {c}
                        </th>

                    ))}

                </tr>
                </thead>
                <tbody>
                {tableData.length === 0 ? (
                    <tr>
                        <td colSpan="4">داده‌ای یافت نشد</td>
                    </tr>
                ) : (

                    tableData.map((item, index) => (
                        <tr key={index}>
                            {columns.map((col) => (
                                <td key={col}>
                                    {col === 'image' ? (  // فرض می‌کنیم ستون تصویر نامش 'image' هست
                                        <img
                                            src={`${item[col]}`}
                                            alt="تصویر"
                                            style={{ width: "50px", height: "50px" }}
                                        />
                                    ) : (
                                        item[col]  // برای سایر ستون‌ها، مقدار متن نمایش داده میشه
                                    )}
                                </td>
                            ))}
                            <td>
                                <i className="fas fa-edit text-warning mx-1 hoverable_text pointer has_tooltip"
                                   title="ویرایش دسته"></i>
                                <i className="fas fa-times text-danger mx-1 hoverable_text pointer has_tooltip"
                                   title="حذف دسته"></i>
                            </td>
                        </tr>
                    ))

                )}
                </tbody>
            </table>

            {/* Pagination */}
            {pageCount > 1 && (
                <nav aria-label="Page navigation example" className="d-flex justify-content-center">
                    <ul className="pagination dir_ltr">
                        <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                            <span className="page-link pointer" onClick={() => setCurrentPage(currentPage - 1)}>
                                &laquo;
                            </span>
                        </li>
                        {pages.map((item) => (
                            <li className="page-item" key={item}>
                                <span className={`page-link pointer ${currentPage === item ? "alert-success" : ""}`}
                                      onClick={() => setCurrentPage(item)}>
                                    {item}
                                </span>
                            </li>
                        ))}
                        <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
                            <span className="page-link pointer" onClick={() => setCurrentPage(currentPage + 1)}>
                                &raquo;
                            </span>
                        </li>
                    </ul>
                </nav>
            )}
        </>
    );
};
export default Pagination;

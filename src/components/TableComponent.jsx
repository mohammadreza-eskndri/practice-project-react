import {useEffect, useState, useMemo} from "react";
import {Link} from "react-router-dom";

const numOfPages = 20;

const TableComponent = ({
                            data = [], columns = [], titleKey = "title",
                        }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [tableData, setTableData] = useState([]);
    const [searchChar, setSearchChar] = useState("");

    // بررسی اینکه داده یک آرایه معتبر از آبجکت‌ها است
    const validData = Array.isArray(data) && data.every((item) => typeof item === "object") ? data : [];

    // فیلتر کردن داده‌ها براساس جستجو
    const filteredData = useMemo(() => validData.filter((d) => d[titleKey]?.includes(searchChar)), [validData, searchChar]);

    const pageCount = Math.ceil(filteredData.length / numOfPages);
    const pages = Array.from({length: pageCount}, (_, i) => i + 1);

    // تقسیم داده‌ها به صفحات
    useEffect(() => {
        const start = (currentPage - 1) * numOfPages;
        const end = start + numOfPages;
        setTableData(filteredData.slice(start, end));
    }, [currentPage, filteredData]);

    return (<>
        <div className="row justify-content-between">
            <div className="col-10 col-md-6 col-lg-4">
                <div className="input-group mb-3">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="جستجو..."
                        onChange={(e) => setSearchChar(e.target.value)}
                    />
                    <span className="input-group-text">جستجو</span>
                </div>
            </div>
        </div>

        <table className="table table-responsive text-center table-hover table-bordered">
            <thead className="table-secondary">
            <tr>
                {columns.map((col, index) => (<th key={index}>{col.label}</th>))}
                <th>عملیات</th>
            </tr>
            </thead>
            <tbody>
            {tableData.length === 0 ? (<tr>
                <td colSpan={columns.length + 1}>داده‌ای یافت نشد</td>
            </tr>) : (tableData.map((item, index) => (<tr key={index}>
                {columns.map(({key}) => (<td key={key}>
                    {key === "image" ? (<img
                        src={item[key]}
                        alt="تصویر"
                        style={{width: "50px", height: "50px"}}
                    />
                    ) : Array.isArray(item[key]) ? (item[key].map((subItem, i) => (
                        <span key={i} className="badge bg-primary mx-1">
                          {subItem.title || subItem}
                        </span>))
                    ) : typeof item[key] === "object" ? (item[key]?.title || JSON.stringify(item[key]) // اگر آبجکت بود، `title` را بگیر، در غیر این صورت رشته‌ای نمایش بده
                    ) : (item[key])}
                </td>
                ))}
                <td>
                    <Link to={`view/${item.id}`}>
                        <i className="fas fa-calendar-times text-info mx-1 pointer" title="زیر مجموعه"></i>
                    </Link>
                    <Link to={`edit/${item.id}`}>
                        <i className="fas fa-edit text-warning mx-1 pointer" title="ویرایش"></i>
                    </Link>
                    <Link to={`delete/${item.id}`}>
                        <i className="fas fa-times text-danger mx-1 pointer" title="حذف"></i>
                    </Link>
                </td>
            </tr>)))}
            </tbody>
        </table>

        {pageCount > 1 && (<nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
              <span className="page-link pointer" onClick={() => setCurrentPage(currentPage - 1)}>
                &laquo;
              </span>
                </li>
                {pages.map((item) => (<li className="page-item" key={item}>
                <span
                    className={`page-link pointer ${currentPage === item ? "alert-success" : ""}`}
                    onClick={() => setCurrentPage(item)}
                >
                  {item}
                </span>
                </li>))}
                <li className={`page-item ${currentPage === pageCount ? "disabled" : ""}`}>
              <span className="page-link pointer" onClick={() => setCurrentPage(currentPage + 1)}>
                &raquo;
              </span>
                </li>
            </ul>
        </nav>)}
    </>);
};

export default TableComponent;

import {useLocation} from "react-router-dom";
import {useEffect} from "react";

const Attributes = () => {
    const location = useLocation()
    useEffect(() => {
        console.log(location)
    }, []);
    return (
            <div tabIndex="-1" aria-hidden="true">
                <div className="modal-dialog modal-fullscreen">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن ویژگی به دسته
                                بندی</h5>
                        </div>
                        <div className="modal-body">
                            <div className="container">
                                <div className="row justify-content-center">
                                    <div className="row my-3">
                                        <div className="col-12 col-md-6 col-lg-4 my-1">
                                            <input type="text" className="form-control"
                                                   placeholder="عنوان ویژگی جدید"/>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-4 my-1">
                                            <input type="text" className="form-control"
                                                   placeholder="واحد ویژگی جدید"/>
                                        </div>
                                        <div className="col-8 col-lg-2 my-1">
                                            <div
                                                className="form-check form-switch d-flex justify-content-center align-items-center p-0 h-100">
                                                <label className="form-check-label pointer"
                                                       htmlFor="flexSwitchCheckDefault">نمایش در فیلتر</label>
                                                <input className="form-check-input pointer mx-3" type="checkbox"
                                                       id="flexSwitchCheckDefault"/>
                                            </div>
                                        </div>
                                        <div
                                            className="col-4 col-lg-2 d-flex justify-content-center align-items-center my-1">
                                            <i className="fas fa-check text-light bg-success rounded-circle p-2 mx-1 hoverable_text hoverable pointer has_tooltip hoverable_text"
                                               title="ثبت ویژگی" data-bs-toggle="tooltip"
                                               data-bs-placement="top"></i>
                                        </div>
                                    </div>
                                    <hr/>
                                    {/*<Pagination/>*/}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}
export default Attributes;

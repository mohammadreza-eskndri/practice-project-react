import {ModalsContainer} from "../../components/ModalsContainer.jsx";

const AddRoles = () => {
    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_role_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن نقش</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <input type="text" className="form-control" placeholder=""/>
                                                <span className="input-group-text w_8rem justify-content-center">عنوان نقش</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <input type="text" className="form-control" placeholder=""/>
                                                <span className="input-group-text w_8rem justify-content-center">توضیحات نقش</span>
                                            </div>
                                        </div>
                                        <div className="col-12 my-1 mb-3">
                                            <div className="input-group my-2 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="قسمتی از مجوز مورد نظر را وارد کنید"
                                                       list="permissionsList"/>
                                                <span className="input-group-text w_8rem justify-content-center">دسترسی ها</span>
                                                <datalist id="permissionsList">
                                                    <option value="مجوز شماره 1"/>
                                                    <option value="مجوز شماره 2"/>
                                                    <option value="مجوز شماره 3"/>
                                                </datalist>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-8">
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    مجوز 1
                                </span>
                                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    مجوز 2
                                </span>
                                            </div>
                                        </div>

                                        <div className="col-12 my-2">
                                            <div className="form-check form-switch col-5 col-md-4">
                                                <input className="form-check-input pointer" type="checkbox"
                                                       id="flexSwitchCheckDefault" checked/>
                                                <label className="form-check-label pointer"
                                                       htmlFor="flexSwitchCheckDefault">وضعیت : فعال</label>
                                            </div>
                                        </div>


                                        <div className="btn_box text-center col-12 col-md-6 col-lg-8 mt-4">
                                            <button className="btn btn-primary ">ذخیره</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">انصراف
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </ModalsContainer>
        </>
    )
}
export default AddRoles


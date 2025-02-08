import {ModalsContainer} from "../../components/ModalsContainer.jsx";

const AddBrands = () => {
    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_brand_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن برند</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="کیبرد را در حالت لاتین قرار دهید"/>
                                                <span className="input-group-text w_8rem justify-content-center">عنوان لاتیتن برند</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="کیبرد را در حالت فارسی قرار دهید"/>
                                                <span className="input-group-text w_8rem justify-content-center">عنوان فارسی برند</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="متن کوتاه در مورد برند"/>
                                                <span className="input-group-text w_8rem justify-content-center">توضیحات برند</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group mb-3 dir_ltr">
                                                <input type="file" className="form-control" placeholder="تصویر"/>
                                                <span
                                                    className="input-group-text w_6rem justify-content-center">تصویر</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group mb-3 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="یک کلمه در مورد تصویر"/>
                                                <span
                                                    className="input-group-text w_6rem justify-content-center">توضیح تصویر</span>
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
export default AddBrands


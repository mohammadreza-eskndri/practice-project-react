import {ModalsContainer} from "../../components/ModalsContainer.jsx";

const AddComments = () => {
    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_comment_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن نظر برای محصول</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12">
                                            <div className="input-group my-3 dir_ltr">
                                                <textarea rows="5" className="form-control"></textarea>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">متن نظر</span>
                                            </div>
                                        </div>
                                        <div className="col-12">
                                            <div className="input-group my-2 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="قسمتی از نام محصول مورد نظر را وارد کنید"
                                                       list="productList"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">برای</span>
                                                <datalist id="productList">
                                                    <option value="محصول شماره 1"/>
                                                    <option value="محصول شماره 2"/>
                                                    <option value="محصول شماره 3"/>
                                                </datalist>
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
export default AddComments


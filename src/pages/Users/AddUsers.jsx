import {ModalsContainer} from "../../components/ModalsContainer.jsx";

const AddUsers = () => {
    return (
        <>
            <ModalsContainer>
                <div className="modal fade" id="add_user_modal" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-fullscreen">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title flex-fill" id="exampleModalLabel">افزودن کاربر</h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal"
                                        aria-label="Close"></button>
                            </div>
                            <div className="modal-body">
                                <div className="container">
                                    <div className="row justify-content-center">
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="فقط از حروف استفاده شود"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">نام</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="فقط از حروف استفاده شود"/>
                                                <span className="input-group-text w_8rem justify-content-center">نام خانوادگی</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="number" className="form-control"
                                                       placeholder="فقط از عدد استفاده شود"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">کد ملی</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="number" className="form-control"
                                                       placeholder="فقط از عدد استفاده شود"/>
                                                <span className="input-group-text w_8rem justify-content-center">شماره موبایل</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="فقط فرمت ایمیل (email@yourhost.com)"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">ایمیل</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                <span className="input-group-text justify-content-center pointer">
                                    <i className="fas fa-eye"></i>
                                </span>
                                                <input type="password" className="form-control"
                                                       placeholder="حد اقل 8 کارکتر"/>
                                                <span className="input-group-text w_8rem justify-content-center">رمز عبور</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8 row px-0 my-3">
                                            <label>تاریخ تولد:</label>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1"/>
                                                        <option value="2"/>
                                                        <option value="3"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">روز</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1"/>
                                                        <option value="2"/>
                                                        <option value="3"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">ماه</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1368"/>
                                                        <option value="1300"/>
                                                        <option value="1301"/>
                                                        <option value="1302"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">سال</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-8 row px-0 my-3">
                                            <label>تاریخ ثبت موبایل:</label>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1"/>
                                                        <option value="2"/>
                                                        <option value="3"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">روز</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1"/>
                                                        <option value="2"/>
                                                        <option value="3"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">ماه</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <select className="form-control">
                                                        <option value="انتخاب کنید"/>
                                                        <option value="1400"/>
                                                        <option value="1399"/>
                                                        <option value="1398"/>
                                                        <option value="1397"/>
                                                    </select>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">سال</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <select className="form-control">
                                                    <option value="مرد"/>
                                                    <option value="زن"/>
                                                    <option value="نامشخص"/>
                                                </select>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">جنسیت</span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-8 row px-0 mt-3">
                                            <label>آدرس:</label>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <input type="text" className="form-control" placeholder=""/>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">کشور</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <input type="text" className="form-control" placeholder=""/>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">استان</span>
                                                </div>
                                            </div>
                                            <div className="col-12 col-md-4">
                                                <div className="input-group my-1 dir_ltr">
                                                    <input type="text" className="form-control" placeholder=""/>
                                                    <span
                                                        className="input-group-text w_8rem justify-content-center">شهر</span>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8 mb-3">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="خیابان - کوچه و ..."/>
                                                <span className="input-group-text w_8rem justify-content-center">ادامه آدرس</span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control" placeholder="مثلا @qasem"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">اینستاگرام</span>
                                            </div>
                                        </div>

                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="text" className="form-control" placeholder="مثلا @qasem"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">تلگرام</span>
                                            </div>
                                        </div>
                                        <div className="col-12 col-md-6 col-lg-8">
                                            <div className="input-group my-1 dir_ltr">
                                                <input type="file" className="form-control" placeholder="تصویر"/>
                                                <span className="input-group-text justify-content-center">تصویر</span>
                                            </div>
                                        </div>


                                        <div className="col-12 col-md-6 col-lg-8 col-md-6 col-lg-8 my-1">
                                            <div className="input-group mb-2 dir_ltr">
                                                <input type="text" className="form-control"
                                                       placeholder="قسمتی از نقش مورد نظر را وارد کنید"
                                                       list="roleLists"/>
                                                <span
                                                    className="input-group-text w_8rem justify-content-center">نقش ها</span>
                                                <datalist id="roleLists">
                                                    <option value="نقش شماره 1"/>
                                                    <option value="نقش شماره 2"/>
                                                    <option value="نقش شماره 3"/>
                                                </datalist>
                                            </div>
                                            <div className="col-12 col-md-6 col-lg-8">
                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    نقش 1
                                </span>
                                                <span className="chips_elem">
                                    <i className="fas fa-times text-danger"></i>
                                    نقش 2
                                </span>
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
export default AddUsers


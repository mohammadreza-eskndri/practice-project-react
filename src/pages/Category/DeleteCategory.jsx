import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import axios from "axios";
import {Alert} from "../../utils/Alert";

const DeleteCategory = () => {
    const {id} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteCategory = async () => {
            try {
                await axios.delete(`http://localhost:8000/products/cat/detail/${id}/`);
                Alert("محصول با موفقیت حذف شد!", "ایول", "success");
                navigate("/categories"); // بازگشت به لیست محصولات
            } catch (error) {
                Alert("خطا در حذف محصول!", "نشد که بشه!", "error");
                console.error("Message error ====", error.message);
            }
        };

        deleteCategory();
    }, [id, navigate]);

    return null; // نیازی به رندر کردن چیزی نیست
};

export default DeleteCategory;

import { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Alert } from "../../utils/Alert";

const DeleteProduct = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const deleteProduct = async () => {
            try {
                await axios.delete(`http://localhost:8000/products/detail/${id}/`);
                Alert("محصول با موفقیت حذف شد!", "ایول", "success");
                navigate("/products"); // بازگشت به لیست محصولات
            } catch (error) {
                Alert("خطا در حذف محصول!", "نشد که بشه!", "error");
                console.error("Message error ====", error.message);
            }
        };

        deleteProduct();
    }, [id, navigate]);

    return null; // نیازی به رندر کردن چیزی نیست
};

export default DeleteProduct;

import Product from "./Product/Product.jsx";
import {useContext} from "react";
import {AdminContext} from "../Context/adminLayoutContext.jsx";
import Category from "./Category/Category.jsx";
import {Route, Routes} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard.jsx";
import Guaranties from "./guaranties/Guaranties.jsx";
import Brands from "./Brand/Brands.jsx";
import Carts from "./Carts/Carts.jsx";
import Colors from "./Colors/Colors.jsx";
import Comments from "./Comments/Comments.jsx";
import Deliveries from "./Deliveries/Deliveries.jsx";
import Discount from "./Discount/Discount.jsx";
import Order from "./Orders/Order.jsx";
import Permission from "./Permission/Permission.jsx";
import Question from "./Questions/Question.jsx";
import Roles from "./Roles/Roles.jsx";
import User from "./Users/User.jsx";
import Logout from "./Auth/Logout.jsx";
import Login from "./Auth/Login.jsx";

const Content = () => {
    const { showSidebar } = useContext(AdminContext);
    return (
        <>
            <div>
                <section id="content_section"
                         className={`bg-light py-2 px-3 ${showSidebar ? 'with_sidebar' : null}`}>
                    <Routes>
                        <Route path={'/'} element={<Dashboard/>}/>
                        <Route path={'/categories'} element={<Category/>}/>
                        <Route path={'/products'} element={<Product/>}/>
                        <Route path={'/guaranties'} element={<Guaranties/>}/>
                        <Route path={'/brand'} element={<Brands/>}/>
                        <Route path={'/cart'} element={<Carts/>}/>
                        <Route path={'/color'} element={<Colors/>}/>
                        <Route path={'/comment'} element={<Comments/>}/>
                        <Route path={'/deliver'} element={<Deliveries/>}/>
                        <Route path={'/discount'} element={<Discount/>}/>
                        <Route path={'/order'} element={<Order/>}/>
                        <Route path={'/permission'} element={<Permission/>}/>
                        <Route path={'/question'} element={<Question/>}/>
                        <Route path={'/role'} element={<Roles/>}/>
                        <Route path={'/user'} element={<User/>}/>
                        <Route path={'/logout'} element={<Logout/>}/>

                        <Route path={'*'} element={<Dashboard/>}/>
                    </Routes>
                </section>
            </div>
        </>
    )
}
export default Content


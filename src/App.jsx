import {Navigate, Route, Routes} from "react-router-dom";
import Login from "./pages/Auth/Login";
import LayoutAuth from "./layout/LayoutAuth.jsx";
import Layout from "./layout/Layout.jsx";
import Logout from "./pages/Auth/Logout.jsx";
import Register from "./pages/Auth/Register.jsx";
import Dashboard from "./pages/Dashboard/Dashboard.jsx";
import Category from "./pages/Category/Category.jsx";
import Product from "./pages/Product/Product.jsx";
import Guaranties from "./pages/guaranties/Guaranties.jsx";
import Brands from "./pages/Brand/Brands.jsx";
import Carts from "./pages/Carts/Carts.jsx";
import Colors from "./pages/Colors/Colors.jsx";
import Comments from "./pages/Comments/Comments.jsx";
import Deliveries from "./pages/Deliveries/Deliveries.jsx";
import Discount from "./pages/Discount/Discount.jsx";
import Order from "./pages/Orders/Order.jsx";
import Permission from "./pages/Permission/Permission.jsx";
import Question from "./pages/Questions/Question.jsx";
import Roles from "./pages/Roles/Roles.jsx";
import User from "./pages/Users/User.jsx";

const App = () => {
    return (
        <Routes>
            <Route path="/auth" element={<LayoutAuth/>}>
                <Route index element={<Navigate to="login" replace/>}/> {/* هدایت `/auth` به `/auth/login` */}
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="logout" element={<Logout/>}/>
            </Route>
           <Route path={'/'} element={<Layout/>}>
               <Route path={'/dashboard'} element={<Dashboard/>}/>
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
           </Route>
        </Routes>
    );
};

export default App;

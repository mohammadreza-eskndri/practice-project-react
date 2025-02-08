import {useContext} from "react";
import {AdminContext} from "../../Context/adminLayoutContext.jsx";
import NavbarItem from "./NavbarItem.jsx";
import NavbarGroupItem from "./NavbarGroupItem.jsx";
import Avatar from "./Avatar.jsx";

const Navbar = () => {
    // const {ShowSidebar} = useContext(AdminContext);
    return (
        <section id="sidebar_section">
            <div className={`mini_sidebar collapsed bg-dark h-100`}>
                <ul className="p-0 m-0">
                    <Avatar title={'محمدرضا اسکندری'} path={'/assets/images/avatar/mmd.jpg'}/>
                    <NavbarItem targetPath={'/'} title={'داشبورد'} icon={'fas fa-tachometer-alt'}/>
                    <NavbarGroupItem title={'فروشگاه'}/>
                    <NavbarItem targetPath={'/categories'} title={'مدیریت گروه محصول'} icon={'fas fa-stream'}/>
                    <NavbarItem targetPath={'/products'} title={'مدیریت محصول'} icon={"fas fa-cube"}/>
                    <NavbarItem targetPath={'/brand'} title={'مدیریت برند ها'} icon={"fas fa-copyright"}/>
                    <NavbarItem targetPath={'/guaranties'} title={'مدیریت گارانتی ها'} icon={"fas fa-pagelines"}/>
                    <NavbarItem targetPath={'/color'} title={'مدیریت رنگ ها'} icon={"fas fa-palette"}/>
                    <NavbarItem targetPath={'/discount'} title={'مدیریت تخفیف ها'} icon={"fas fa-percentage"}/>
                    <NavbarGroupItem title={'سفارشات و سبد'} />
                    <NavbarItem targetPath={'/order'} title={'مدیریت سبد ها'} icon={"fas fa-shopping-basket"}/>
                    <NavbarItem targetPath={'/cart'} title={'مدیریت سفارشات'} icon={"fas fa-luggage-cart"}/>
                    <NavbarItem targetPath={'/deliver'} title={'مدیریت نحوه ارسال'} icon={"fas fa-truck-loading"}/>
                    <NavbarGroupItem title={'کاربران و همکاران'} />
                    <NavbarItem targetPath={'/user'} title={'مشاهده کاربران'} icon={"fas fa-users"}/>
                    <NavbarItem targetPath={'/role'} title={'نقش ها'} icon={"fas fa-user-tag"}/>
                    <NavbarItem targetPath={'/permission'} title={'مجوز ها'} icon={"fas fa-shield-alt"}/>
                    <NavbarGroupItem title={'ارتباطات'}/>
                    <NavbarItem targetPath={'/question'} title={'سوال ها'} icon={"fas fa-question-circle"}/>
                    <NavbarItem targetPath={'/comment'} title={'نظرات'} icon={"fas fa-comment"}/>
                </ul>
            </div>
        </section>
    )
}

export default Navbar

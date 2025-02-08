import {NavLink} from "react-router-dom";

const NavbarItem = ({title,icon,targetPath}) => {
    return (
        <NavLink to={targetPath} className="py-1 text-start pe-4 sidebar_menu_item"
            data-section-id="dashboard_section">
            <i className={`ms-3 icon ${icon} text-light`}></i>
            <span className="hiddenable no_wrap font_08">{title}</span>
        </NavLink>
    )
}
export default NavbarItem
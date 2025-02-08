import {createContext, useState} from "react";

export const AdminContext = createContext({
    ShowSidebar: false,
    setShowSidebar: () => {},
})
const AdminContextContainer = ({children}) => {
    const [ShowSidebar, setShowSidebar] = useState(false);
    return (
        <AdminContext.Provider value={{
            ShowSidebar,
            setShowSidebar
        }}>
            {children}
        </AdminContext.Provider>
    )
}
export default AdminContextContainer
import {createPortal} from "react-dom";

export const ModalsContainer = ({children}) => {
    return createPortal(
        <>
            {children}
        </>,document.getElementById('modals-root')
    )
}

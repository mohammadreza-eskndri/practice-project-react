import { useEffect } from "react";
import useLogout from "../../hook/AuthLogout.jsx";
import {Alert} from "../../utils/Alert.jsx";

const Logout = () => {
    const logout = useLogout();

    useEffect(() => {
        logout();
    }, []);

    return Alert('خداحافظ','خداحافظ نازنین پهلوان','success')
};

export default Logout;

import Input from "./Input.jsx";
import File from "./File.jsx";
import Select from "./Select.jsx";
import Textarea from "./Textarea.jsx";
import Switch from "./Switch.jsx";

const FormikControl = (props) => {
    switch (props.control) {
        case "input":
            return (<Input {...props} />)
        case "file":
            return (<File {...props} />)
        case "select":
            return (<Select {...props} />)
        case "textarea":
            return (<Textarea {...props} />)
        case "switch":
            return (<Switch {...props} />)
        default:
            return null
    }
}
export default FormikControl


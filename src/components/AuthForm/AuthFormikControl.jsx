import Input from "./Input.jsx";

const AuthFormikControl = (props) => {
    switch (props.control){
        case "input":
            return (<Input {...props} />)
        default:
            return null
    }
}
export default AuthFormikControl

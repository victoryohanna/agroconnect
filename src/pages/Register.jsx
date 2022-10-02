
import LoginForm from "../components/elements/LoginForm";
import RegistrationForm from "../components/elements/RegistertrationForm";

const Register = (props)=>{
    const form = props.form.name;
    return(
        
        form === "LoginForm" ? <LoginForm/> : <RegistrationForm/>   
    )
}

export default Register;
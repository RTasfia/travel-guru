import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FormContext } from '../UserStatus/UserStatus';

const SignIn = (props) => {
    const [formValidation, setFormValidation] = useContext(FormContext);

    return (
        <div >
            <form className="login-form" action="" > 
                <p>Username or Email</p>
                <input onBlur={props.handleBlur} type="text" name="email" required/>
                {
                    !formValidation.isEmailValid &&
                    <small style={{color: "red"}}>Invalid Email!</small>
                }
                <p>Password</p>
                <input onBlur={props.handleBlur} type="password" name="password" id="" required/>
                {
                    !formValidation.isPasswordValid&&
                    <small style={{color: "red"}}>Password should contain atleast six characters!</small>
                }
                <br/> <br/>
                <input style={{height: "12px", width: "12px"}} type="checkbox" name="" id="remember"/> <label for ="remember">Remember me</label>
                <Button style = {{color: "#F9A51A", backgroundColor: "white", border: "none"}}>Forgot password</Button>
                <input style={{backgroundColor:"#F9A51A"}} onClick={props.handleFormSignin} type="submit" value="Login" />
                <p>Dont' have an account? <Button style = {{color: "#F9A51A", backgroundColor: "white", border: "none"}} onClick = {props.toggle}>Create account</Button> </p>

            </form>
            
        </div>
    );
};

export default SignIn;
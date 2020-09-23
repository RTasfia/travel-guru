import React, { useContext } from 'react';
import { Button } from 'react-bootstrap';
import { FormContext } from '../UserStatus/UserStatus';

const SignUp = (props) => {
    const [formValidation, setFormValidation] = useContext(FormContext);
    return (
        <div>
            <form action="" className = "login-form" >
                <h3>Create an Accont</h3>
                <p>First Name</p>
                <input onBlur = {props.handleBlur} name="name" type="text" required/>
                <p>Last Name</p>
                <input type="text" required/>
                <p>Username or Email</p>
                <input onBlur={props.handleBlur} type="text" name="email" required/>
                {
                    !formValidation.isEmailValid &&
                    <small style={{color: "red"}}>Invalid Email!</small>
                }
                <p>Password</p>
                <input onBlur={props.handleBlur} type="password" name="password" id="password1" required/>
                {
                    !formValidation.isPasswordValid&&
                    <small style={{color: "red"}}>Password should contain atleast five characters!</small>
                }
                <p>Confirm Password</p>
                <input onBlur={props.handleBlur} type="password" name="confirmPassword" id="password2" required/>
                {
                    !formValidation.isConfirmPasswordValid&&
                    <small style={{color: "red"}}>Confirmation mismatched!</small>
                }
                <br/>
                <br/>
                <input style={{backgroundColor:"#F9A51A"}} onClick={props.handleFormSignup} type="submit" value="Create account" />

                <br/>
                <br/>
                <p>Already have an account <Button style = {{color: "#F9A51A", backgroundColor: "white", border: "none"}} onClick = {props.toggle}>Login</Button> </p>
                
                </form>

            
        </div>
    );
};

export default SignUp;
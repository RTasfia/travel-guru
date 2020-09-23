import React, { createContext, useContext, useState } from 'react';
import { Button } from 'react-bootstrap';
import { UserContext } from '../../App';
import * as firebase from "firebase/app";
import "firebase/auth";
import NavAfter from '../NavAfter/NavAfter';
import SignIn from '../SignIn/SignIn';
import SignUp from '../SignUp/SignUp';
import './UserStatus.css';
import firebaseConfig from './firebaseConfig';
import { useHistory, useLocation } from 'react-router-dom/cjs/react-router-dom.min';


export const FormContext = createContext();

const UserStatus = () => {
  const [password, setPassword] = useState("");
  const [formValidation, setFormValidation] = useState({
    isEmailValid: true,
    isPasswordValid: true,
    isConfirmPasswordValid: true
  })
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [user, setUser] = useState(loggedInUser);


  const history = useHistory()
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };


  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig)
  }

  // form signup
  const handleFormSignup = (e) => {
    if (user.email && user.password) {
      firebase.auth().createUserWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const currentUser = { ...loggedInUser };
          currentUser.name = user.name;
          currentUser.email = user.email;
          setLoggedInUser(currentUser);
          history.replace(from);
        })
        .catch(function (error) {
          var errorMessage = error.message;
        });
      e.preventDefault();
    }
  }

  // form signin
  const handleFormSignin = (e) => {
    if (user.email && user.password) {
      firebase.auth().signInWithEmailAndPassword(user.email, user.password)
        .then(res => {
          const currentUser = { ...loggedInUser };
          currentUser.name = res.user.email;
          currentUser.email = res.user.email;
          setLoggedInUser(currentUser);
          history.replace(from);
        })
        .catch(function (error) {
          var errorMessage = error.message;
        });
      e.preventDefault();
    }
  }
  const handleBlur = (event) => {
    let isSubmitValid = true;
    if (event.target.name === "email") {
      isSubmitValid = /\S+@\S+\.\S+/.test(event.target.value);
      if(isSubmitValid === true){
        const validation = {...formValidation};
        validation.isEmailValid = true;
        setFormValidation(validation);
      }
      else{
        const validation = {...formValidation};
        validation.isEmailValid = false;
        setFormValidation(validation);
      }
    }
    if (event.target.name === "password") {
      isSubmitValid = event.target.value.length >= 5
      if(isSubmitValid === true){
        const validation = {...formValidation};
        validation.isPasswordValid = true;
        setFormValidation(validation);
      }
      else{
        const validation = {...formValidation};
        validation.isPasswordValid = false;
        setFormValidation(validation);
      }
      setPassword(event.target.value);
    }
    if (event.target.name === "confirmPassword") {
      if(event.target.value === password){
        const validation = {...formValidation};
        validation.isConfirmPasswordValid = true;
        setFormValidation(validation);
        console.log("correct");
      }
      else{
        const validation = {...formValidation};
        validation.isConfirmPasswordValid = false;
        setFormValidation(validation);
        console.log("incorrect");
      }
    }
    if (isSubmitValid) {
      const userInfo = { ...user };
      userInfo[event.target.name] = event.target.value;
      setUser(userInfo);
    }
  }

  // form toggle
  const toggle = () => {
    setIsLoggedIn(!isLoggedIn);

  }

  // google signin
  const handleGoogelSignin = () => {
    const googleProvider = new firebase.auth.GoogleAuthProvider();
    firebase.auth().signInWithPopup(googleProvider)
      .then(res => {
        const userInfo = { ...loggedInUser };
        userInfo.name = res.user.displayName;
        userInfo.email = res.user.email;
        setLoggedInUser(userInfo);
        history.replace(from);
      }).catch(function (error) {
        var errorMessage = error.message;
      });
  }

  // facebook signin
  const handleFacebookSignin = () => {
    var fbProvider = new firebase.auth.FacebookAuthProvider();
    firebase.auth().signInWithPopup(fbProvider)
      .then(res => {
        const userInfo = { ...loggedInUser };
        userInfo.name = res.user.displayName;
        userInfo.email = res.user.email;
        setLoggedInUser(userInfo);
        history.replace(from);
      }).catch(function (error) {
        var errorMessage = error.message;
      });
  }
  return (
    <div>

      <NavAfter></NavAfter>
      <FormContext.Provider value={[formValidation, setFormValidation]}>
        {
          isLoggedIn ? <SignIn toggle={toggle} handleBlur={handleBlur} handleFormSignin={handleFormSignin}></SignIn> : <SignUp toggle={toggle} handleBlur={handleBlur} handleFormSignup={handleFormSignup} ></SignUp>
        }
        <br /> <br />
      </FormContext.Provider>
      <Button onClick={handleFacebookSignin} className="signin-button" style={{ display: "flex", width: "30%",backgroundColor:"white", color: "black",border: "1px solid black", borderRadius: "5px" }}> <img style={{height: "30px", width: "30px"}}src={require('../../Icon/fb.png')}/> Continue with Facebook </Button>
      <br />
      <Button onClick={handleGoogelSignin} className="signin-button" style={{ display: "flex", width: "30%",backgroundColor:"white", color: "black", border: "1px solid black", borderRadius: "5px" }}> <img style={{height: "30px", width: "30px"}} src={require('../../Icon/google.png')}/>  Continue with Google</Button>
    </div>




  );
};

export default UserStatus;
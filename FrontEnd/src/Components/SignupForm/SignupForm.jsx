import React, { useState } from "react";
import "./SignupForm.css";
import { ImageHolder } from "../../utils/utils";
import axios from "axios";
import { POSTDATA } from "../../utils/APICalls";

export default function SignupForm() {
  const [Email, setEmail] = useState();
  const [UserName, setUserName] = useState();
  const [Password, setPassword] = useState();
  const [ConfirmPassword, setConfirmPassword] = useState();
  const [Error, setError] = useState();

  const handleSignUp = () => {
    setError("");
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!UserName) {
      setError("Username is required.");
      return;
    }
    
    if (UserName.length < 6) {
      setError("Username must be longer than 6 characters.");
      return;
    }
    
    if (!/^[a-zA-Z0-9!@#$%^&*(),.?":{}|<>]*$/.test(UserName)) {
      setError("Username must be alphanumeric (symbols allowed).");
      return;
    }
    
    if (!Email) {
      setError("Email is required.");
      return;
    }
    
    if (!emailRegex.test(Email)) {
      setError("Invalid Email Format");
      return;
    }
    
    if (!Password) {
      setError("Password is required.");
      return;
    }
    
    if (Password.length <= 8) {
      setError("Password must be longer than 8 characters.");
      return;
    }
   
    
    if (Password !== ConfirmPassword) {
      setError("Passwords don't match.");
      return;
    }
    

    const userData = {
      Email: Email,
      UserName: UserName,
      Password: Password,
    };
    const datasubmit = async () => {
      const response = await POSTDATA("auth/signup",userData)
      
      
      if(response.ok){
        window.location.href="/Login"

      }else{
        const data=await response.json()
       
        setError(data.message)
      }
    };

    datasubmit();
  };

  return (
    <div className="SignupFormContainer">
      <h1>Welcome To StudyMate Create An Account Now!!</h1>
     
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => setEmail(e.target.value)}
      />
       <input
        type="text"
        placeholder="UserName"
        onChange={(e) => setUserName(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        onChange={(e) => setPassword(e.target.value)}
      />
      <input
        type="password"
        placeholder="Confirm Password"
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button className="ConfirmButton" onClick={handleSignUp}>
        Sign Up
      </button>
      {Error && (
        <div className="ErrorContainer">
          <h1>{Error}</h1>
        </div>
      )}
      <div className="LoginPrompt">
        <h1>
          Already have an account with us?
          <button
            className="LoginPromptButton"
            onClick={() => {
              window.location.href = `/Login`;
            }}
          >
            {" "}
            Login Instead
          </button>
        </h1>
      </div>
    </div>
  );
}

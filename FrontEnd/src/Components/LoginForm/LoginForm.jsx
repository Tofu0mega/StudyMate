import React, { useState, useEffect } from "react";
import "./LoginForm.css";
import axios from "axios";
import { GETDATA, POSTDATA } from "../../utils/APICalls";

export default function LoginForm() {
  const [Email, setEmail] = useState();
  const [Password, setPassword] = useState();
  const [Error, setError] = useState(``);

  const handleSubmit = () => {
    setError('')
    const userdata = {
      Email: Email,
      Password: Password,
    };
    const loginredirect= ()=>{
     
      const datafetch=async ()=>{
        const userid=localStorage.getItem("UserId")
        const response= await GETDATA(`users/${userid}`)
        const data= await response.json()
        
        if(data.IsFirstLogin){
          window.location.href='/AdditionalInformationForm'

        }else{
          window.location.href='/Home'

        }

        
      }
      datafetch()


    }

    const datasubmit = async () => {
      const response = await POSTDATA("auth/signin",userdata)

      if(response.ok){
        const data=await response.json()
        const {_id}=data
        
        localStorage.setItem("UserId",_id)
        loginredirect();

      }else{
        const data=await response.json()
      
        setError(data.message)
      }
    };
    datasubmit();

  };
  return (
    <div className="LoginForm">
      <h1>Welcome Back!!</h1>
      <br />
      <h1>Please Enter Your Credentials</h1>
      <input
        type="text"
        placeholder="Email"
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        className="Username"
      />
      <input
        type="password"
        className="Password"
        placeholder="Password"
        onChange={(e) => {
          setPassword(e.target.value);
        }}
      />

      <button className="Submitbutton" onClick={handleSubmit}>
        Login
      </button>
      {Error && (
        <>
          <div className="ErrorMessageContainer">
            <h1 className="ErrorText">{Error}</h1>
          </div>
        </>
      )}
      <div className="SignupContainer">
        <h1>New to StudyMate?</h1>
        <button
          className="SignupPrompt"
          onClick={() => {
            window.location.href = "Signup";
          }}
        >
          {" "}
          Signup Instead
        </button>
      </div>
    </div>
  );
}

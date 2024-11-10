import React, { useState, useEffect } from "react";
import "./NavBar.css";
import { ImageHolder } from "../../utils/utils";
import { GETDATA } from "../../utils/APICalls";

export default function NavBar() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);
  const [UserId, setUserId] = useState();
  const [UserName, setUserName] = useState();
  const [ProfilePictureUrl, setProfilePictureUrl] = useState();

  useEffect(()=>{
    const Id=localStorage.getItem("UserId")
    const getuserdata=async()=>{

      const response= await GETDATA(`users/${Id}`)
      const data=await response.json()
      setUserName(data.Username)
      setProfilePictureUrl(data.ProfilePicture)


    }
    getuserdata()
    
    if(Id){
      setUserId(Id)
      setIsLoggedIn(true)
    }else{
      setUserId('')
      setIsLoggedIn(false)
    }

  },[])
  const handleLogout=()=>{

    setUserId('')
    setIsLoggedIn(false)
    localStorage.removeItem("UserId")
    window.location.href='/Login'
  }
  

  return (
    <div className="NavbarContainer">
      <nav className="NavBar">
        <div className="leftelements">
          <button
            className="Home"
            onClick={() => {
              window.location.href = "/Home";
            }}
          >
            Home
          </button>
        </div>
        <div className="rightelements">
          {!IsLoggedIn && (
            <>
              <button
                className="login"
                onClick={() => {
                  window.location.href = "/Login";
                }}
              >
                Login
              </button>
            </>
          )}
          {IsLoggedIn && (
            <>
              <button
                className="logout"
                onClick={handleLogout}
              >
                Logout
              </button>
              <img
                src={ProfilePictureUrl}
                alt="ProfileImage"
                className="ProfileImage"
              />
              <button
                className="profile"
                onClick={() => {
                  window.location.href = "/Profile";
                }}
              >
                {UserName}
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import "./NavBar.css";

export default function NavBar() {
  const [IsLoggedIn, setIsLoggedIn] = useState(false);

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
                onClick={() => {
                  window.location.href = "/Logout";
                }}
              >
                Logout
              </button>
              <img
                src="https://placehold.co/300x300"
                alt="ProfileImage"
                className="ProfileImage"
              />
              <button
                className="profile"
                onClick={() => {
                  window.location.href = "/Profile";
                }}
              >
                Profile
              </button>
            </>
          )}
        </div>
      </nav>
    </div>
  );
}

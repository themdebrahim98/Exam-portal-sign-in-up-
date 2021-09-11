import React, { useState, useEffect } from "react";
import './Card.css'
import SignUp from "../SignUp/SignUp.js";
import LogIn from "../LogIn/LogIn";
export default function Cards() {
  const [activebutton, setActivebutton] = useState("register");
 
  let color;

  const toRegister = () => {
    setActivebutton("register");
  };

  const toLogin = () => {
    setActivebutton("login");
  };

  

  return (
    <>
      <div className="wrap">
        <div className="row">
          {activebutton == "login" ? (
            <LogIn
              activebutton={activebutton}
              toRegister={toRegister}
              toLogin={toLogin}
              
            />
          ) : (
            <SignUp
             
              toLogin={toLogin}
              toRegister={toRegister}
              activebutton={activebutton}
             
            />
          )}
        </div>
      </div>
    </>
  );
}

import React, { useState, useEffect } from "react";

import repl_logo from "../SignUp/image/repl-logo.png";
import signinlogo from "../SignUp/image/signin2.svg";

export default function LogIn(props) {
  let logincolor;
  let registercolor;
  let backgroundColor
let cursor
  const [isdisabled, setIsdisabled] = useState(true);
  const [loginDatas, setLoginDatas] = useState({
    Email: "",
    Password: "",
  });

  useEffect(() => {
  
    if (loginDatas.Email.trim() == '' || loginDatas.Password.trim() == '') {
      console.log("button disabled");

      setIsdisabled(true);
    }else{
      console.log("butoon enabled")
      setIsdisabled(false);

    }
  }, [loginDatas])
 

  backgroundColor = isdisabled ? "#c6e2e2" : null;
  cursor = isdisabled ? 'not-allowed':null


  if (props.activebutton == "login") {
    registercolor = "transparent";
    logincolor = "#00b3b3";
  } else {
    registercolor = "transparent";
    logincolor = "#00b3b3";
  }

  const handler = (e) => {
    e.preventDefault();
    console.log(loginDatas);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginDatas({
      ...loginDatas,
      [name]: value,
    });
  };

  return (
    <>
      <div className="signinleft">
        <div className="logo">
          <img src={repl_logo} alt="" />
        </div>

        <div className="innerText">
          <h1>Lorem ipsum dolor sit amet.</h1>
          <h2>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa,
            magni.
          </h2>
        </div>
        <div className="left_img">
          <img src={signinlogo} alt="img" />
        </div>
      </div>

      <div className="signin-right">
       
          <div className="register">
            <div class="btn-grp">
              <div
                onClick={props.toLogin}
                style={{ backgroundColor: logincolor, color: "white" }}
              >
                signin
              </div>
              <div
                onClick={props.toRegister}
                style={{
                  backgroundColor: registercolor,
                  color: "black",
                }}
              >
                signup
              </div>
            </div>

            <form onSubmit={handler} className="form" action="">
              <div className="form_inputs">
                <label htmlFor="Email">Email</label>

                <input
                  required="required"
                  type="email"
                  name="Email"
                  id="Email"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <div className="form_inputs">
                <label htmlFor="password">Confirm Password</label>

                <input
                  required="required"
                  type="password"
                  name="Password"
                  id="password"
                  onChange={handleChange}
                  autoComplete="off"
                />
              </div>

              <button
                disabled={isdisabled}
                onClick={handler}
                className="submit"
                style = {{backgroundColor:backgroundColor,cursor:cursor}}
              
              >
                Let's Go!
              </button>
              <ul class="prerequisite">
                <li>Password at least 6 character</li>
              </ul>
            </form>
          </div>
        
      </div>
    </>
  );
}

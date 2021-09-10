import React, { useState } from "react";
import "./SignUp.css";
import repl_logo from "./image/repl-logo.png";
import signinlogo from "./image/signin2.svg";

export default function SignUp(props) {

  let logincolor;
  let registercolor;
  let backgroundColor;
  let cursor ;

  const [allInputsIsFull, setAllInputsIsFull] = useState(false);
  const [isdisabled, setIsdisabled] = useState(true);
  const [inputdatas, setInputdatas] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Password: "",
    CPassword: "",
  });


  if (props.activebutton == "signin") {
    registercolor = "#00b3b3";
    logincolor = "transparent";
  } else {
    logincolor = "transparent";
    registercolor = "#00b3b3";
  }


  const handlechange = (e) => {
    const { name, value } = e.target;

    setInputdatas({
      ...inputdatas,
      [name]: value,
    });
  };


  const handlesubmit = (e) => {
    e.preventDefault();
    console.log(inputdatas);
  };

  let arr = [];
  for (let key in inputdatas) {
    arr.push(inputdatas[key]);
  }
  let isfull = arr.every((value) => value !== "");
  console.log('isfull',isfull);
 
  backgroundColor = !isfull ? "#c6e2e2" : null;
  cursor = isfull ? null:'not-allowed'


  

  return (
    <>
      <div className="left">
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

      <div className="signin">
        <div className="right">
          <div className="register">
            <div class="btn-grp">
              <div
                onClick={props.toLogin}
                style={{ backgroundColor: logincolor, color: "black" }}
              >
                signin
              </div>
              <div
                onClick={props.toRegister}
                style={{
                  backgroundColor: registercolor,
                  color: "white",
                }}
              >
                signup
              </div>
            </div>

            <form onSubmit={handlesubmit} className="form" action="">
              <div className="pair_inputs">
                <div className="form_inputs">
                  <label htmlFor="FirstName">First Name</label>

                  <input
                    required="required"
                    type="text"
                    name="FirstName"
                    id="FirstName"
                    onChange={handlechange}
                    autoComplete="none"
                  />
                </div>

                <div className="form_inputs">
                  <label htmlFor="Lastname">Last Name</label>
                  <input
                    required="required"
                    type="text"
                    name="LastName"
                    id="LastName"
                    onChange={handlechange}
                    autoComplete="off"
                  />
                </div>
              </div>

              <div className="form_inputs">
                <label htmlFor="Email">Email</label>

                <input
                  required
                  type="email"
                  name="Email"
                  id="Email"
                  onChange={handlechange}
                  autoComplete="off"
                />
              </div>

              <div className="form_inputs">
                <label htmlFor="Password">Password</label>

                <input
                  required
                  type="password"
                  name="Password"
                  id="Password"
                  onChange={handlechange}
                  autoComplete="false"
                />
               
              </div>

              <div className="form_inputs">
                <label htmlFor="Confirm">Confirm Password</label>

                <input
                  required
                  type="password"
                  name="CPassword"
                  id="Confirm"
                  onChange={handlechange}
                  autoComplete="off"
                />
              </div>

              <button
                style={{ backgroundColor: backgroundColor,cursor:cursor  }}
                onClick={handlesubmit}
                className="submit"
                disabled={!isfull}
              >
                Let's Go!
              </button>
              <ul class="prerequisite">
                <li>Password at least 6 character</li>
              </ul>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login({ setUser, setCompany }) {
  const navigate = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [userType, setUserType] = useState("");

  const [errors, setErrors] = useState([]);

  const signUpFunctionality = (e) => {
    e.preventDefault();
    let formData = {
      email_address: emailAddress,
      password: password,
      user_type: userType,
    };
    // console.log(formData);
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    }).then((response) => {
      if (response.ok) {
        response.json().then((data) => {
          console.log(data);
          if (userType == "Employer") {
            setCompany(data);
            navigate("/company/jobs");
            console.log(data);
          } else if (userType == "Jobseeker") {
            navigate("/jobseeker");
            localStorage.setItem("jobseekerId", JSON.stringify(data.id));
            setUser(data);
          } else {
            navigate("/admin-dashboard");
            localStorage.setItem("adminId", JSON.stringify(data.id));
            console.log(data);
          }
        });
      } else {
        response.json().then((err) => setErrors(err.errors));
      }
    });
  };

  return (
    <div className="container p-3">
      <div className="container">
        <div className="row no-gutter">
          <div className="col-md-7 d-none d-md-block bg-image me-2">
            <img className="login" src={"images/login.png"} alt="" />
          </div>

          <div className="col-md-4 bg-light bg-image">
            <div className="login py-5">
              <div className="col-lg-12 col-xl-10 mx-auto">
                <h4 className="display-6">WELCOME BACK TO WERA</h4>
                <p className="text-muted mb-4">Log into your account</p>
                <form onSubmit={signUpFunctionality} novalidate>
                  <div className="mb-3">
                    <input
                      id="inputEmail"
                      onChange={(e) => setEmailAddress(e.target.value)}
                      type="email"
                      placeholder="Email Address"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="mb-3">
                    <input
                      id="inputPassword"
                      onChange={(e) => setPassword(e.target.value)}
                      type="password"
                      placeholder="Password"
                      className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
                      required
                    />
                  </div>
                  <div className="form-group col-12">
                    <label
                      htmlFor="usertype"
                      className="text-start text-primary"
                    >
                      Who are you?
                    </label>
                    <select
                      id="users"
                      name="users"
                      className="form-control rounded-pill border-0 shadow-sm px-4"
                      onChange={(e) => setUserType(e.target.value)}
                    >
                      <option selected>Select</option>
                      <option>Jobseeker</option>
                      <option>Employer</option>
                      <option>Admin</option>
                    </select>
                  </div>
                  <div className="d-grid gap-2 mt-2">
                    <br />

                    <button
                      type="submit"
                      className="btn btn-primary btn-block text-uppercase mb-2 rounded-pill shadow-sm"
                    >
                      Log In
                    </button>
                    <ul>
                      {errors.length > 0
                        ? errors.map((err) => (
                            <li key={err} className="text-danger">
                              {err}
                            </li>
                          ))
                        : null}
                    </ul>
                    <span>
                      Not yet registered?
                      <span
                        onClick={() => {
                          navigate(`/sign-up`);
                        }}
                        className="ms-3 text-primary"
                        style={{ cursor: "pointer" }}
                      >
                        Sign Up
                      </span>
                    </span>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
  //   return (
  //     <div className="container maincontainer">
  //       <div className="container-fluid">
  //         <div className="row no-gutter">
  //           <div className="col-md-6 d-none d-md-flex bg-image">
  //             <img
  //               className="img-fluid mx-auto d-block max-height-100vh"
  //               src={LoginImg}
  //               alt=""
  //             />
  //           </div>

  //           <div className="col-md-6 bg-light d-flex align-items-center justify-content-center">
  //             <div className="container">
  //               <div className="row">
  //                 <div className="col-lg-10 col-xl-7">
  //                   <h4 className="display-6">WELCOME BACK TO WERA</h4>
  //                   <p className="text-muted mb-4">Login your account</p>
  //                   <form>
  //                     <div className="mb-3">
  //                       <input
  //                         id="inputEmail"
  //                         type="email"
  //                         placeholder="Email Address"
  //                         required=""
  //                         className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>
  //                     <div className="mb-3">
  //                       <input
  //                         id="inputPassword"
  //                         type="password"
  //                         placeholder="Password"
  //                         required=""
  //                         className="form-control rounded-pill border-0 shadow-sm px-4 text-primary"
  //                       />
  //                     </div>

  //                     <div className="flex flex-col text-black-900 py-1 form-control rounded-pill border-0 shadow-sm px-4 text-primary">
  //                       <label htmlfor="users">Who are you?</label>
  //                       <select id="users" name="users" className="form-control">
  //                         <option value="1">Admin</option>
  //                         <option value="2">Recruiter</option>
  //                         <option value="3">Job Seeker</option>
  //                       </select>
  //                     </div>
  //                     <div className="d-grid gap-2 mt-2">
  //                       <br />

  //                       <button
  //                         type="submit"
  //                         className="btn btn-primary btn-sm  text-uppercase mb-3 rounded-pill shadow-sm custom button"
  //                       >
  //                         Sign in
  //                       </button>
  //                       <h7>
  //                         Not yet registered?{" "}
  //                         <a href="http://localhost:4000/register">
  //                           <button type="button" className="btn-primary">
  //                             SIGN UP
  //                           </button>
  //                         </a>
  //                       </h7>
  //                     </div>
  //                   </form>
  //                 </div>
  //               </div>
  //             </div>
  //           </div>
  //         </div>
  //       </div>
  //     </div>
  //   );
}

export default Login;

// import React from 'react'

// const UserLogin = () => {
//   return (
//     <div>UserLogin</div>
//   )
// }

// export default UserLogin

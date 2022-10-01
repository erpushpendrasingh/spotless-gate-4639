import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";
const Login = () => {
     return (
          <div className="container-one">
               <div className="block1">
                    <div className="space"></div>
                    <div className="signin">
                         <div className="blk1_cont">
                              <div className="logo">
                                   <img src="https://app.pluralsight.com/id/img/login-logo.png" />
                              </div>

                              <form onsubmit="" className="signInForm">
                                   <div>
                                        <label className="inp_label">
                                             Email or Username
                                        </label>
                                        <input
                                             className="signinInp"
                                             type="text"
                                             value=""
                                        />
                                   </div>
                                   <div>
                                        <label className="inp_label">
                                             Password
                                        </label>
                                        <input
                                             className="signinInp"
                                             type="password"
                                             value=""
                                        />
                                   </div>
                                   <button type="submit" className="signin_btn">
                                        Sign in
                                   </button>
                              </form>
                              <div className="links">
                                   <div>Forgot password?</div>
                                   <div>
                                        <Link className="signin_link">
                                             Sign in with company or school
                                        </Link>
                                   </div>
                              </div>
                              <hr className="bar" />
                              <div className="new_Acc"></div>
                              <Link className="create-account-link">
                                   Create an account
                              </Link>
                              <footer className="footer">
                                   Copyright © 2004 - 2021 Pluralsight LLC. All
                                   rights reserved.
                                   <div>
                                        <div>Terms of Use</div>
                                        <div>&nbsp;&nbsp;</div>|
                                        <div>&nbsp;&nbsp;</div>{" "}
                                        <div>Privacy Policy</div>
                                   </div>
                              </footer>
                         </div>
                    </div>
               </div>
               <div className="block2">
                    <div className="blk2_cont">
                         <div>
                              <div className="build_skills_img">
                                   <img src="https://www.pluralsight.com/content/dam/pluralsight2/login/login-h1.png" />
                              </div>
                              <Link className="try_free">Try for free</Link>
                              <div className="built_btr">
                                   <img
                                        src="https://www.pluralsight.com/content/dam/pluralsight2/logos/logo-build-better.png"
                                        className="better_img"
                                   />
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Login;

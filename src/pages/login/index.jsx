import "./login.css";
import React, { useState } from "react";
import image from "../../assets/Logo.png";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [error, setError] = useState("");
  const currentLocation = window.location.href;
  const URL = `${currentLocation}api/v1/auth/google-login?redirect_to=${currentLocation}"onebox/list"`;

  const navigate = useNavigate();

  const currentHref = window.location.href;
  console.log(currentHref);

  async function login() {
    try {
      const response = await fetch(URL, {
        method: "get",
        mode: "no-cors",
        credentials: "include",
      });
      if (response) {
        console.log(response);
        navigate("onebox/list");
        // window.open(
        //   `http://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to=${currentHref}onebox/list`,
        //   "_self"
        // );
        // navigate(
        //   `http://hiring.reachinbox.xyz/api/v1/auth/google-login?redirect_to={currentHref}onebox/list`
        // );
      }
    } catch (err) {
      err.message ? setError(err.message) : setError(err);
    }
  }

  return (
    <div className="body">
      <div className="headerStyle">
        <img
          src={image}
          alt="Image_Not_Found"
          width={"156.77px"}
          height={"24px"}
        />
      </div>
      <div className="bodyStyle flex flex-col">
        <div className="contentBox flex flex-col gap-16">
          <div className="flex flex-col gap-4">
            <span className="title flex justify-center">
              Create a new account
            </span>
            <span className="flex justify-center">
              <button
                className="btn p-2 w-11/12 flex gap-2 justify-center"
                type="button"
                onClick={() => {
                  login();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="16"
                  height="16"
                  viewBox="0 0 48 48"
                >
                  <path
                    fill="#FFC107"
                    d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                  <path
                    fill="#FF3D00"
                    d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
                  ></path>
                  <path
                    fill="#4CAF50"
                    d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
                  ></path>
                  <path
                    fill="#1976D2"
                    d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
                  ></path>
                </svg>
                Sign up with Google
              </button>
            </span>
          </div>
          <div className="flex flex-col gap-4">
            <span className="flex justify-center">
              <button
                type="button"
                className="btn w-1/2 p-4 flex justify-center rounded-lg grdBtn"
                onClick={() => {
                  navigate("onebox/list");
                }}
              >
                Create an Account
              </button>
            </span>

            <span className="flex justify-center">
              Already have an account?
              <a href="https://www.google.com">Sign in</a>
            </span>
          </div>
        </div>

        {error ? <div className="error pt-2"> {error} </div> : null}
      </div>
      <div className="footerStyle">
        <div>© 2024 Reachinbox. All rights reserved.</div>
      </div>
    </div>
  );
}

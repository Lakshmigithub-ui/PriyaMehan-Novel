import { Link } from "react-router-dom";
import React from "react";
import "./Login.css";
import "bootstrap/dist/css/bootstrap.min.css";

function Login() {
  return (
    <div className="flex flex-col container-fluid rounded w-full justify-items-center login ">
      <div className="md:w-50 p-5 shadow-lg ">
        <h1 className="font-bold mb-4">Login</h1>
        <div className="row">
          <div className="col-md-12 "></div>
        </div>

        <form>
          <div className="row ">
            <div className="col-md-12 ">
              <div className="form-group mb-4">
                <label>Email :</label>
                <input type="text" name="post_id" value="" />

                <input
                  type="text"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Email"
                />
              </div>
            </div>
            <div className="col-md-12">
              <div className="form-group mb-4 ">
                <label>Password :</label>
                <input
                  type="password"
                  className="form-control w-full border rounded p-2 outline-none focus:shadow-outline"
                  placeholder="Enter Password"
                />
              </div>
            </div>
            <div className="col-md-12 text-center mb-4">
              <button className="btn text-white btn-success font-bold">
                Login
              </button>
            </div>
            <a
              // href="https://priyamehannovels.com/forget-password"
              className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
            >
              Forgot password?
            </a>

            <div className="col-md-12  w-full flex p-0 justify-between items-center">
              Don't have account?
              <div className="btn btn-primary text-white cursor-pointer ">
                <Link to="/register">
                  <strong className="text-white">Register Here</strong>
                </Link>
              </div>
            </div>
          </div>
        </form>

        <div className="flex items-center justify-center mt-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            // className="w-1/5 md:w-2/5"
            className="w-9 md:w-17"
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

          <a className="anchor" href="https://priyamehannovels.com/auth/google">
            <strong>Login with Google</strong>
          </a>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="100"
            height="100"
            viewBox="0 0 48 48"
            className="w-12 md:w-23"

          >
            <path
              fill="#039be5"
              d="M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
            ></path>
            <path
              fill="#fff"
              d="M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
            ></path>
          </svg>

          <a
            className="anchor"
            href="https://priyamehannovels.com/auth/facebook"
          >
            <strong>Login with Facebook</strong>
          </a>
        </div>
      </div>
    </div>
  );
}
export default Login;

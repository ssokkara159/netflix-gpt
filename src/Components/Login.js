import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [signIn, setSignIn] = useState("true");
  const isSignIn = (e) => {
    setSignIn(!signIn);
  };
  return (
    <>
      <div>
        <Header />
      </div>
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/2e07bc25-8b8f-4531-8e1f-7e5e33938793/e4b3c14a-684b-4fc4-b14f-2b486a4e9f4e/IN-en-20240219-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="Bg"
        />
      </div>
      <div className="w-56 h-56 bg-black px-4 p-12 relative z-10 mx-auto left-0 right-0">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          {!signIn && (
            <input
              type="text"
              placeholder="Enter Name"
              className="p-2 m-1 rounded-md"
            />
          )}

          <input
            type="email"
            placeholder="Enter Your Email"
            className="p-2 m-1 rounded-md"
          />
          <input
            type="Password"
            placeholder="Enter Password"
            className="p-2 m-1 rounded-md"
          />
          <button className="bg-red-600 text-white rounded-md p-2 m-2">
            {!signIn ? "Sign Up" : "Sign In"}
          </button>

          <span
            onClick={isSignIn}
            className=" text-red-600 text-sm cursor-pointer"
          >
            {signIn ? "Not Registered? Sign Up" : "Already Registered Sign In"}
          </span>
        </form>
      </div>
    </>
  );
};

export default Login;

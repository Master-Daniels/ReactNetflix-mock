import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const SignUp = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const { signUp } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await signUp(email, password);
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div className="w-full h-screen">
        <img
          className="hidden sm:block absolute w-full h-full object-cover"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/f841d4c7-10e1-40af-bcae-07a3f8dc141a/f6d7434e-d6de-4185-a6d4-c77a2d08737b/US-en-20220502-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
          alt="/"
        />
        <div className=" bg-black/60 top-0 left-0 h-screen fixed " />
        <div className=" w-full px-4 py-24 z-50 fixed ">
          <div className="mx-auto max-w-[450px] bg-black/75 text-white">
            <div className="max-w-[320px] mx-auto py-16 ">
              <h1 className="text-3xl font-bold "> Sign Up</h1>
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4 "
              >
                <input
                  className="placeholder:text-bold p-3 my-2 bg-gray-200 text-black text-md text-bold focus:outline-none rounded"
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
                <input
                  className="placeholder:text-bold p-3 my-2 bg-gray-200 text-black text-md text-bold focus:outline-none rounded"
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button className="bg-red-600 py-3 my-6 rounded font-bold w-1/2 mx-auto hover:bg-red-400 ">
                  Sign Up
                </button>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="py-8 flex items-center justify-start gap-4 ">
                  <span className="text-gray-300">
                    Already Subscibed to Netflix?
                  </span>
                  <Link
                    className="py-2 px-4 rounded hover:bg-gray-300 hover:text-white "
                    to="/login"
                  >
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;

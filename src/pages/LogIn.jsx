import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";

const LogIn = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [error, setError] = React.useState("");

  const { logIn } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await logIn(email, password);
      navigate("/");
      setError(" ");
    } catch (error) {
      setError(error.message);
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
              <h1 className="text-3xl font-bold "> Sign In</h1>
              {error ? (
                <p className="p-3 bg-red-400 my-2">
                  {error.replace("Firebase:", "")}
                </p>
              ) : null}
              <form
                onSubmit={handleSubmit}
                className="w-full flex flex-col py-4"
              >
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="p-3 my-2 bg-gray-200 rounded text-black font-bold focus:outline-none "
                  type="email"
                  placeholder="Email"
                  autoComplete="email"
                />
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="p-3 my-2 bg-gray-200 rounded text-black font-bold focus:outline-none "
                  type="password"
                  placeholder="Password"
                  autoComplete="current-password"
                />
                <button className="bg-red-600 mx-auto py-3 my-6 rounded font-bold hover:bg-red-400 w-1/2 ">
                  Sign In
                </button>
                <div className="flex items-center justify-between text-sm text-gray-300">
                  <p>
                    <input type="checkbox" className="mr-2" /> Remember me
                  </p>
                  <p>Need Help?</p>
                </div>
                <p className="flex justify-start gap-3 items-center py-8">
                  <span className="text-gray-300">New to Netflix?</span>
                  <Link
                    className="py-2 px-4 rounded hover:bg-gray-600 hover:text-white "
                    to="/signup"
                  >
                    Sign Up
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

export default LogIn;

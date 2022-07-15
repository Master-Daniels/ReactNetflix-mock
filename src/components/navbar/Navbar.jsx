import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";

const Navbar = () => {
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  const handleLogOut = async () => {
    try {
      await logOut();
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="flex items-center justify-between p-4 w-full z-[100] absolute">
      <Link to="/">
        <h1 className="text-red-600 text-2xl md:text-4xl font-extrabold cursor-pointer">
          NETFLIX
        </h1>
      </Link>
      {user?.email ? (
        <div>
          <Link to="/account">
            <button className="text-white px-6 py-2 rounded hover:bg-slate-400 hover:text-black mr-4">
              Account
            </button>
          </Link>
          <button
            onClick={handleLogOut}
            className="bg-red-600 px-6 py-2 rounded cursor-pointer hover:bg-red-400 hover:text-white "
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className="flex flex-wrap item-center justify-center ">
          <Link to="/login">
            <button className="text-white mr-4 md:px-6 md:py-2 px-4 py-1 rounded hover:bg-slate-400 hover:text-black ">
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button className="bg-red-600 px-4 py-1 md:px-6 md:py-2 rounded cursor-pointer hover:bg-red-400 hover:text-white">
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;

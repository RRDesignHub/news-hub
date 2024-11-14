import { NavLink, Link } from "react-router-dom";
import profileIcon from "../assets/user.png";
export const Navbar = () => {
  return (
    <>
      <div className="flex max-sm:flex-col gap-y-3 justify-between items-center">
        <div></div>
        <div className="flex gap-4 text-lg text-gray-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <div>
          <img src={profileIcon} alt="" />
          </div>
          <Link className="text-white text-xl font-semibold bg-gray-1 px-5 py-2 rounded-md" to="/login">
            Login
          </Link>
        </div>
      </div>
    </>
  );
};

import { NavLink, Link } from "react-router-dom";
import profileIcon from "../assets/user.png";
import { useContext } from "react";
import { AuthContext } from "../provider/AuthProvider";
export const Navbar = () => {
  const {user, logOut} = useContext(AuthContext); 
  return (
    <>
      <div className="font-nunito flex max-sm:flex-col gap-y-3 justify-between items-center">
        <div>
          {user && <h3 className="btn btn-ghost bg-gray-2 text-gray-1">{user?.email}</h3>}
        </div>
        <div className="flex gap-4 text-lg text-gray-2">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/career">Career</NavLink>
          <NavLink to="/about">About</NavLink>
        </div>
        <div className="flex items-center gap-3">
          <div>
            {
              user?.photoURL ? 
              <><img className="rounded-full" src={user?.photoURL} alt="" /></> :
              <img src={profileIcon} alt="" />
            }
            
          </div>
          {
            user ? <>
              <Link to='/auth/login' onClick={logOut} className="text-white text-xl font-semibold bg-gray-1 px-5 py-2 rounded-md">
              Logout
              </Link>
            </> : <>
              <Link to='/auth/login'  className="text-white text-xl font-semibold bg-gray-1 px-5 py-2 rounded-md">
                Login
              </Link>
            </>
          }
          
        </div>
      </div>
    </>
  );
};

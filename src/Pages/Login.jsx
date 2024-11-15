import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";



export const Login = () => {
  const {userLogin, setUser} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const location = useLocation();
  const navigate = useNavigate();

  const handleOnSubmit = (event)=>{
    event.preventDefault()
    const form = new FormData(event.target);
    const email = form.get("email");
    const password = form.get("password");
    userLogin(email, password)
      .then(result=>{
        setUser(result.user);
        navigate(location.state ? `${location.state}` : '/')
      })
      .catch((error) => {
        console.log(error)
        setError(error.code);
      });
  }
  
  return (
    <>
      <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 max-sm:py-5 md:p-10">
        <h2 className="text-4xl font-bold text-center text-gray-1">Login your account</h2>
       
        <form onSubmit={handleOnSubmit} className="card-body">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold text-gray-1">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input input-bordered"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold text-gray-1">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered"
              required
            />
            <label className="label">
              <p className="text-sm text-red-500">{error}</p>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn bg-gray-1 text-white hover:text-gray-1">Login</button>
          </div>
        </form>
        <p className="text-center font-semibold">Dont’t Have An Account ? <Link to='/auth/register' className="text-red-500">Register</Link></p>
      </div>
    </>
  );
};

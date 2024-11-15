import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";

export const Register = () => {
  const {authRegister, setUser} = useContext(AuthContext);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const handleOnSubmit = (event)=>{
    event.preventDefault()
    const form = new FormData(event.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if(name.length == 0){
      setError("Name must needed.")
      return;
    }
    if(password.length < 6){
      setError("Password must be in 6 character")
      return;
    }
    authRegister(email, password)
      .then(result=>{
        setUser(result.user);
        navigate('/')
      })
      .catch((error) => {
        setError(error.code);
      });
  }
  return (
    <div className="card bg-base-100 w-full max-w-lg mx-auto shrink-0 max-sm:py-5 md:p-10">
      <h2 className="text-4xl font-bold text-center text-gray-1">
        Register your account
      </h2>

      <form onSubmit={handleOnSubmit} className="card-body">
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-gray-1">
              Your Name
            </span>
          </label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-gray-1">
              Photo URL
            </span>
          </label>
          <input
            type="text"
            name="photo"
            placeholder="Enter your photo url"
            className="input input-bordered"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl font-semibold text-gray-1">
              Email
            </span>
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
            <span className="label-text text-xl font-semibold text-gray-1">
              Password
            </span>
          </label>
          <input
            type="password"
            name="password"
            placeholder="Enter your password"
            className="input input-bordered"
            required
          />
          
        </div>
        <label className="label">
            <p className="text-xs text-red-500">{error}</p>
          </label>
        <div className="form-control mt-6">
          <button className="btn bg-gray-1 text-white  hover:bg-gray-1">
            Register
          </button>
        </div>
      </form>
      <p className="text-center font-semibold">
        Already Have An Account ?{" "}
        <Link to="/auth/login" className="text-red-500">
          Login
        </Link>
      </p>
    </div>
  );
};

import { useContext } from "react"
import { AuthContext } from "../provider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import { Loader } from "../components/Loader";


export const PrivateRoute = ({children}) => {
  const {user, loader} = useContext(AuthContext);
  const location = useLocation();
  
  if(loader){
    return <Loader></Loader>
  }
  if(user && user.email){
    return children;
  }
  return (
    <Navigate state={location.pathname} to='/auth/login'></Navigate>
  )
}

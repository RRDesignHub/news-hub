import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../Firebase/firebase.init";
export const AuthContext = createContext();
export const AuthProvider = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState(null);
  const [loader, setLoader] = useState(true);

  const authRegister = (email, password) => {
    setLoader(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const userLogin = (email, password)=>{
    setLoader(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const logOut = ()=>{
    setLoader(true);
    return signOut(auth)
  }

  useEffect(() => {
    const currentSubscriber = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoader(false);
    });
    return () => {
      currentSubscriber();
    };
  }, []);

  const authInfo = {
    user,
    setUser,
    authRegister,
    userLogin,
    logOut,
    loader
  };
  
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

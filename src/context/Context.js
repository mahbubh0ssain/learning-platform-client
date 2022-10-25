import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
} from "firebase/auth";
export const AuthContext = createContext("");

const auth = getAuth(app);

const Context = ({ children }) => {
  const [user, setUser] = useState("");

  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const info = { userSignUp };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Context;

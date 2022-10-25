import React, { createContext } from "react";
import app from "../firebase/firebase.config";
import { getAuth } from "firebase/auth";
export const AuthContext = createContext("");

const Context = ({ children }) => {
  const auth = getAuth(app);

  const info = {};
  
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Context;

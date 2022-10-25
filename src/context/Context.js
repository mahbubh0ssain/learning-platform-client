import React, { createContext, useEffect, useState } from "react";
import app from "../firebase/firebase.config";
import {
  createUserWithEmailAndPassword,
  getAuth,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  GithubAuthProvider,
  signInWithPopup,
  updateProfile,
} from "firebase/auth";
export const AuthContext = createContext("");

const Context = ({ children }) => {
  const auth = getAuth(app);
  const [user, setUser] = useState("");
  const googleProvider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();
  const userSignUp = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };
  const userSignIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const updateUserProfile = (profile) => {
    return updateProfile(auth.currentUser, {
      displayName: profile.displayName,
      photoURL: profile.photoURL,
    });
  };

  const userLogOut = () => {
    return signOut(auth);
  };
  const googleSignIn = () => {
    return signInWithPopup(auth, googleProvider);
  };
  const githubSignIn = () => {
    return signInWithPopup(auth, githubProvider);
  };

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return () => unSubscribe();
  }, []);

  const info = {
    user,
    userSignUp,
    userSignIn,
    updateUserProfile,
    googleSignIn,
    githubSignIn,
    userLogOut,
  };
  return <AuthContext.Provider value={info}>{children}</AuthContext.Provider>;
};

export default Context;

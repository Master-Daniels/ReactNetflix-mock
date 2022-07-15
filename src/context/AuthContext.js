import { createContext, useContext, useEffect, useState } from "react";
import { auth, db } from "../firebase.config";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

import { doc, setDoc } from "firebase/firestore";

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState({});
  const [savedMovies, setSavedMovies] = useState(false);

  const signUp = async (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    await setDoc(doc(db, "users", `${email}`), {
      savedMovies: [],
      dateRegistered: new Date(),
    });
    console.log("document created");
  };

  const logIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };
  useEffect(() => {
    let unsubscribe;
    if (user) {
      unsubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
      });
    }

    return () => unsubscribe();
  });
  return (
    <AuthContext.Provider
      value={{ signUp, user, logOut, logIn, savedMovies, setSavedMovies }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const UserAuth = () => {
  return useContext(AuthContext);
};

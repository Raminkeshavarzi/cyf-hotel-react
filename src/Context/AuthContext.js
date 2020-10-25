import React, { useState, useEffect, useContext } from "react";

// Auth Modul
import { auth } from "../Container/firebase/firebase";

const AuthContext = React.createContext();

export const useAuth = () => useContext(AuthContext); // To allow the app to use the Context

export const AuthProvider = ({ children }) => {
  // State
  const [setCurrentUser, setCurrentUserState] = useState();
  const [setLoading, setLoadingState] = useState(true);

  // useEffect
  useEffect(() => {
    const unsbscribe = auth.onAuthStateChanged(user => {
      setCurrentUserState(user);
      setLoadingState(false);
    });
    return unsbscribe;
  }, []);

  // Handler for Sign Up
  function signup(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  }
  // Handler for Sign In
  function signin(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  }

  // Handler for Log out
  function logout() {
    return auth.signOut();
  }

  // Handler for Reset Passowrd
  function resetPassword(email) {
    return auth.sendPasswordResetEmail(email);
  }

  // Handler for Update Password
  function updatePassword(password) {
    return setCurrentUser.updatePassword(password);
  }
  // Handler for Update Email
  function updateEmail(email) {
    return setCurrentUser.updateEmail(email);
  }

  // Obj of Auth
  const value = {
    setCurrentUser,
    setLoading,
    signup,
    signin,
    logout,
    resetPassword,
    updatePassword,
    updateEmail
  };
  return (
    <AuthContext.Provider value={value}>
      {!setLoading && children}
    </AuthContext.Provider>
  );
};

import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../firebase/firebase.init';

export const AuthContext = createContext();

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const provider = new GoogleAuthProvider();

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const logOut = () => {
    return signOut(auth);
  }

  const updateNamePhoto = (displayName, photoURL) => {
    return updateProfile(auth.currentUser, {
      displayName: displayName,
      photoURL: photoURL
    })
  }

  const signIn = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  }

  const signInWithGoogle = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
    return () => {
      unsubscribed();
    }
  }, [])

  const authData = {
    user,
    setUser,
    createUser,
    logOut,
    signIn,
    loading,
    setLoading,
    signInWithGoogle,
    updateNamePhoto
  }
  return <AuthContext value={authData}>
    {children}
  </AuthContext>
};

export default AuthProvider;
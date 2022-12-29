import React, { createContext, useEffect, useState } from 'react';
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile} from 'firebase/auth'
import app from '../../firebase/firebase.config';

export const AuthContext = createContext()
const auth = getAuth(app)

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({displayName : 'Nasir Ullah'})
    const [loading, setLoading] = useState(true)


    // google login 
    const googleLogin = (provider) => {
        setLoading(true)
        return signInWithPopup(auth, provider)
    }

    // create user with name email and password 
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // log in with email and password 
    const logIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // update user and get user name 
    const updateUser = (userInfo) => {
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }

    // log out 
    const logOut = () => {
        return signOut(auth);
    }


    // observer 
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
          setUser(currentUser)
          console.log(currentUser)
          setLoading(false)
        });
        return () => {
          return unsubscribe();
        }
      },[])


    const authInfo = {
        user,
        createUser,
        logOut,
        logIn,
        googleLogin,
        updateUser,
        loading
    }


    return (
        <div>
            <AuthContext.Provider value={authInfo}>
            {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;
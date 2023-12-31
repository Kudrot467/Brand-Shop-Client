import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import auth from "../firebase/firebase.config";
import PropTypes from 'prop-types';
 export const AuthContext=createContext(null);
const AuthProvider = ({children}) => {
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true);
    const googleProvider=new GoogleAuthProvider();

    const setProfilePicture = (image_url) => {
        return updateProfile(auth.currentUser, {
          photoURL: image_url,
        });
      };

    const googleSignIn=()=>{
        return signInWithPopup(auth,googleProvider);
    }
    const createUser=(email,password)=>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const signIn=(email,password)=>{
        setLoading(true);
        return signInWithEmailAndPassword(auth,email,password);
    }

    const logOut=()=>{
        setLoading(true);
        return signOut(auth);
    }

    useEffect(()=>{
        const unsubscribe= onAuthStateChanged(auth,currentUser=>{
                // console.log(currentUser);
                setUser(currentUser);
                setLoading(false);
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    const authInfo={
        user,
        loading,
        setProfilePicture,
        googleSignIn,
        createUser,
        signIn,
        logOut
    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );

    

};
AuthProvider.propTypes={
    children:PropTypes.node
}


export default AuthProvider;
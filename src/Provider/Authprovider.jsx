
import { createContext, useEffect, useState } from "react";
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import app from "../Firebase/firebase.config";


import axios from "axios";


export const AuthContext = createContext(null)
const auth = getAuth(app);
const AuthProvider = ({ children }) => {
    const gogoolProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   



    const creaetUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }


    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)

    }


    const createGogoolUser = () => {
        setLoading(true)
        return signInWithPopup(auth, gogoolProvider)
    }


    const creteGithubUser = () => {
        setLoading(true)
        return signInWithPopup(auth, githubProvider)
    }



    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            if (currentUser) {
             axios.post('https://creative-hero-surver.vercel.app/jwt',{email:currentUser?.email})
             .then(data=>{
               
                localStorage.setItem('access-token',data.data.token)
                setLoading(false);
             })
            }else{
                localStorage.removeItem('access-token')
            }


           
            
        });
        return () => {
            return unsubscribe();
        }
    }, [])



    const forgetPassword = (email) => {
        setLoading(true)
        return sendPasswordResetEmail(auth, email)


    }

    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }



    const updateUserProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
        });
    }

    const authInfo = {
        user,
        loading,
        setLoading,
        creaetUser,
        loginUser,
        createGogoolUser,
        creteGithubUser,
        forgetPassword,
        updateUserProfile ,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider >
    );
};

export default AuthProvider;
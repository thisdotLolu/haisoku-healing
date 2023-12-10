'use client'

import { useEffect, useState } from "react";
import { createContext, useReducer } from "react";
import {auth} from '../firebase';
import { onAuthStateChanged } from "firebase/auth";


export const AuthContext:any = createContext(null);


export const AuthContextProvider =({children}:any)=>{
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(false)
    const [progress, setProgress] = useState(0)

    useEffect(()=>{
        const listen = onAuthStateChanged(auth, (authUser:any)=>{
            if(authUser){          
                setUser(authUser)
                
            }else{
                setUser(null)
            }
        })
    
        return ()=>{
            listen()
        }
    
    },[])

    return (
        <AuthContext.Provider
        value={{user,setUser,loading,setLoading,progress, setProgress}}
        >
        {children}
        </AuthContext.Provider>
    )
}
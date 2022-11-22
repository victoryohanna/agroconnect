import { createContext, useEffect, useReducer } from "react";
import AuthReducer from "./AuthReducer"; 

const INITIAL_STATE = {
    isLoggin: JSON.parse(localStorage.getItem('user')) || null,
}

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({children})=>{
    const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE );

    useEffect(()=>{
        localStorage.setItem("user", JSON.stringify(state.isLoggin))
    },[state.isLoggin]);

    return(
        <AuthContext.Provider value={{isLoggin : state.isLoggin, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}
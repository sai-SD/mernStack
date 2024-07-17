import { createContext, useState } from "react";

export const AuthContext = createContext();

export default function AuthContextProvider({children}){
    const [isLogin,setIsLogin] = useState(false)

    function toggleLogin(){
        setIsLogin(!isLogin)
    }
    return(
        <AuthContext.Provider value={{isLogin, toggleLogin}}>{children}</AuthContext.Provider>
    )
}
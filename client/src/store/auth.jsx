import { createContext, useContext } from "react";

export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
export const AuthProvider = ({ children }) => {

    //function to stored the token in local storage
    const storeTokenInLS = (serverToken) => {
       
        return localStorage.setItem("token", serverToken);
    }; 
    
    // let isLoggedIn = !!token;
    // console.log("token", token);
    // console.log("isLoggedin ", isLoggedIn);

    // //   to check whether is loggedIn or not
    // const LogoutUser = () => {
    //     setToken("");
    //     return localStorage.removeItem("token");
    // };


    return (
        <AuthContext.Provider value={{ storeTokenInLS }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const authContextValue = useContext(AuthContext);
    if (!authContextValue) {
        throw new Error("useAuth used outside of the Provider");
    }
    return authContextValue;
};
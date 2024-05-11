import PropTypes from "prop-types";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../Firebase/Firebase.config";
import { createContext, useState } from "react";

const auth= getAuth(app)
export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {
  const [user,setUser] = useState(null)
  const [loading,setLoading]= useState(true)

    const createUser = (email,password)=>{
        setLoading(false)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const loginUser = (email,password)=>{
        setLoading(false)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const userInfo = {
        user,createUser,loading,loginUser
    }
    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
AuthProvider.propTypes={
    children:PropTypes.node
}
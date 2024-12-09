import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebaseinit/firebase.init";

export const authContext=createContext(null);
const AuthProvider = ({children}) => {
    const [loader,setLoaders]=useState(true);
    const [user,setUser]=useState(null);
    const createUser=(email,password)=>{
        setLoaders(true);
        return createUserWithEmailAndPassword(auth,email,password);
    }
    const logInUser=(email,password)=>{
        setLoaders(true);
        return signInWithEmailAndPassword(auth,email,password);
    }
    const SignOut=()=>{
        setLoaders(true);
       return signOut(auth)
    }
    useEffect(()=>{
        const UnSubsCribe=onAuthStateChanged(auth,current=>{
            setUser(current);
            setLoaders(false);
            console.log('the current value is',current);
        });
        return ()=>{
            UnSubsCribe();
        }
    },[])
    const authInfo={
        user,
        createUser,
        logInUser,
        SignOut,
        loader
    }

    return (
        <authContext.Provider value={authInfo}>
            {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
// import { createContext, useState } from "react";
// import auth from "../firebaseinit/firebase.init";
// import { createUserWithEmailAndPassword } from "firebase/auth";

// // Use PascalCase for context name
// export const AuthContext = createContext(null);

// const AuthProvider = ({ children }) => {
//     const [user, setUser] = useState(null);

//     const createUser = (email, password) => {
//         return createUserWithEmailAndPassword(auth, email, password); // Removed unnecessary `auth` parameter
//     };

//     const authInfo = {
//         user,
//         createUser
//     };

//     return (
//         <AuthContext.Provider value={authInfo}>
//             {children}
//         </AuthContext.Provider>
//     );
// };

// export default AuthProvider;

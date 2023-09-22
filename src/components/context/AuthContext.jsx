import { createContext,useContext,useEffect,useState } from "react"
import {auth} from './firebase.js'
import {
createUserWithEmailAndPassword,
signInWithEmailAndPassword,
signOut,
onAuthStateChanged,
} from 'firebase/auth'


export const AuthContext = createContext()

export const AuthContextProvider = ({ children }) => {
const [user, setUser] = useState(null);

function signUp(email, password){
    return createUserWithEmailAndPassword(auth,email,password);
}
function logIn(email, password){
   return signInWithEmailAndPassword(auth,email,password)
}

function logOut(){
    return signOut(auth)
}

useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentuser)=>{
        setUser(currentuser);
    } );
    return () => {
        unsubscribe();
    };
});
    return (
        <AuthContext.Provider value={{signUp,logIn,logOut, user}}>
            {children}
        </AuthContext.Provider>
    );
}

export function UserAuth()  {
    return useContext(AuthContext);
}
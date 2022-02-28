import { useEffect, useState } from "react"
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider, signOut, updateProfile, signInWithEmailAndPassword  } from "firebase/auth";
import FirebaseInit from "./../Firebase/Firebase.init";

FirebaseInit();
const useFirebase=()=>{
    const [user, setUser] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");


    const googleProvider = new GoogleAuthProvider();


    const auth = getAuth();
    useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
                
                setUser(user)
                console.log("user from inside , ",user);
                // ...
            } else {
                // User is signed out
                // ...
            }
            });
    },[]);

    const updateProfileInfo=()=>{
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(()=>{
            console.log("profile updated");
            console.log("from update , ",auth.currentUser)
            setUser({});
            setError("");
        })
        .catch(error=>{
            setError(error);
        })
    }

    const createNewUser=()=>{
       return createUserWithEmailAndPassword(auth, email, password)    
    }

    const signInWithGoogle=()=>{
        signInWithPopup(auth, googleProvider)
        .then(result=>{
            setUser(result.user);
            console.log("user is created , ", result.user);
            setError("");
        })
        .catch(error=>{
            setError(error.message);
        })
    }

    const signInWithEmail=()=>{
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut=()=>{
        signOut(auth)
        .then(()=>{
            console.log("signout successfully!");
            setUser({});
        })
    }

    return {
        user, 
        setUser,
        name, 
        setName,
        email,
        setEmail,
        password,
        setPassword,
        error, 
        setError,
        createNewUser,
        updateProfileInfo,
        signInWithGoogle,
        signInWithEmail,
        logOut,
    }
}

export default useFirebase;
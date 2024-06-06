import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { toast } from "react-toastify";
import { auth, githubprovider, provider } from "../firebase/config";



export const signInWithGoogle = async () => {
    try {
        const data = await signInWithPopup(auth, provider)
        toast.success("Google Signin successful")
        return {
            uid: data.user?.uid,
            email: data.user.email,
            token: await data.user?.getIdToken()
        }
    } catch (error) {
        console.log(error)
        toast.error("Google Signin failed")
    }
}

export const signinWithGithub = async () => {
    try {
        const data = await signInWithPopup(auth, githubprovider)
        toast.success("Github Signin successful")
        return {
            uid: data.user?.uid,
            email: data.user.email,
            token: await data.user?.getIdToken()
        }
    } catch (error) {
        console.log(error)
        toast.error("Github Signin failed")
    }
}

export const siginWithEmailPassword = async (email: string, password: string) => {
    try {
        const data = await signInWithEmailAndPassword(auth, email, password)
        toast.success("Signin successful")
        return {
            uid: data.user?.uid,
            email: data.user.email,
            token: await data.user?.getIdToken()
        }
    } catch (error) {
        console.log(error)
        toast.error("Signin failed")
    }
}


export const signupWithEmailPassword = async (email: string, password: string) => {
    try {
        const data = await createUserWithEmailAndPassword(auth, email, password)
        toast.success("Signup successful")
        return {
            uid: data.user?.uid,
            email: data.user.email,
            token: await data.user?.getIdToken()
        }
    } catch (error) {
        console.log(error)
        toast.error("Signup failed")
    }
}


export const signOut = async () => {
    try {
        await auth.signOut()
        toast.success("Signout successful")
    } catch (error) {
        console.log(error)
        toast.error("Signout failed")
    }
}
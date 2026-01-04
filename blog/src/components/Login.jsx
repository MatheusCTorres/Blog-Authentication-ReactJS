import { auth, provider } from "../firebase";
import { signInWithPopup } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";

export default function Login({ setIsAuth }) {
    let navigate = useNavigate();

    const signInWithGoogle = () => {
        signInWithPopup(auth, provider).then((result) => {
            localStorage.setItem("isAuth", true);
            setIsAuth(true);
            navigate("/");
        });
    };

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="loginPage"
        >
            <h1 className="titleLogin">Hello, welcome to my Blog.</h1>
            <p className="subtitle">Sign in with google to continue.</p>

            <button className="login-with-google-btn" onClick={signInWithGoogle}>
                Sign in with google
            </button>
        </motion.div>
    );
}
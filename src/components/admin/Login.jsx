import {
    getAuth,
    signInWithEmailAndPassword,
} from "firebase/auth";

import { useState } from "react";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const auth = getAuth();

    function login() {
        event.preventDefault();
        console.log(email, password);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                const user = userCredential.user;
                console.log(user);
            })
            .catch((error) => {
                const errorMessage = error.message;
                console.log(errorMessage);
            });
    }
    
    return (
        <>
        <div className="h-screen w-screen flex justify-center items-center">
            <div className="flex flex-col gap-6 w-96">
                <h1 className="text-4xl font-bold text-center">Login</h1>
                <form className="flex flex-col gap-6 w-96" onSubmit={login}>
                    <input type="email" placeholder="Email" required className="bg-gray-900 px-4 py-3" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" placeholder="Password" required className="bg-gray-900 px-4 py-3" onChange={(event) => setPassword(event.target.value)} />
                    <button type="submit" className="w-full py-3 bg-blue-800 hover:bg-blue-950" >Login</button>
                </form>
            </div>
        </div>
        </>
    );
}
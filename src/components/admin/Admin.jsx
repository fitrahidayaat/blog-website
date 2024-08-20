import Login from "./Login";
import Panel from "./Panel";
import { app, auth } from "./firebase-app.js";
import { onAuthStateChanged } from "firebase/auth";
import { useState, useEffect } from "react";

export default function Admin({blogs}) {
    console.log(app);
    const [authenticated, setAuthenticated] = useState(false);
    const [loading, setLoading] = useState(true); // Initial loading state

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                setAuthenticated(true);
            } else {
                setAuthenticated(false);
            }
            setLoading(false); // Set loading to false once authentication state is determined
        });

        // Clean up the listener on component unmount
        return () => unsubscribe();
    }, []);

    if (loading) {
        return (
            <div className="flex justify-center items-center text-4xl">
                Loading...
            </div>
        ); // Show loading indicator while checking authentication state
    }

    return <>{authenticated ? <Panel blogs={blogs} /> : <Login />}</>;
}

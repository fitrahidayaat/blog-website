import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

import "firebase/database";


const firebaseConfig = {
    apiKey: "AIzaSyCyTWRCXe0sQtwGsC2bYnx3T1RAQdcR-eo",
    authDomain: "blog-website-486d7.firebaseapp.com",
    projectId: "blog-website-486d7",
    storageBucket: "blog-website-486d7.appspot.com",
    messagingSenderId: "297499615713",
    appId: "1:297499615713:web:8c9b84530043dfae89f2a0",
    measurementId: "G-ESHW7XMTY1",
};

const app = initializeApp(firebaseConfig);
const db = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

export {app, auth, db, storage};
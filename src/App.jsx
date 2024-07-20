import Home from "./components/home/Home";
import Blog from "./components/blog/Blog";
import About from "./components/about/About";
import Post from "./components/blog/Post";
import Admin from "./components/admin/Admin";
import CreatePost from "./components/admin/CreatePost";
import { db } from "./components/admin/firebase-app.js";
import { ref as refDatabase, onValue } from "firebase/database";    
import { useEffect, useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import EditPost from "./components/admin/EditPost.jsx";

export default function App() {
    const [BLOGS, setBLOGS] = useState([]); // Initialize BLOGS as a state variable
    console.log("hayo");
    useEffect(() => {
        const starCountRef = refDatabase(db, 'blogs/');
        onValue(starCountRef, (snapshot) => {
            const data = snapshot.val();

            // get images from storage firebase
            if (data) {
                // Convert data into an array and sort by date descending
                const sortedBlogs = Object.values(data).sort((a, b) => b.date - a.date);
                setBLOGS(sortedBlogs); // Update BLOGS state with sorted data
            }
        });
    }, []);
    
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/blog" element={<Blog blogs={BLOGS} />} />
                <Route path="/about" element={<About />} />
                <Route path="/post" element={<Post blogs={BLOGS} />} />
                <Route path="/admin" element={<Admin blogs={BLOGS} />} />
                <Route path="/admin/create" element={<CreatePost />} />
                <Route path="/admin/edit" element={<EditPost blogs={BLOGS} />} />
            </Routes>
        </Router>
    );
}

import { signOut, getAuth } from "firebase/auth";
import Post from "./Post";

export default function Panel({blogs}) {
    const auth = getAuth();

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log("User signed out");
            })
            .catch((error) => {
                console.error("Sign-out error", error);
            });
    };

    return (
        <>
            <div className="flex flex-col items-center mt-24 px-8 2xl:px-96">
                <h1 className="text-7xl font-bold">Blogs Panel</h1>
                <div className="flex justify-end items-end w-full mt-10">
                    <a href="/admin/create" className="px-4 py-2 bg-green-800 hover:bg-green-900 rounded">
                        Create Post
                    </a>
                </div>
                <div className="flex flex-wrap gap-16 mt-10 max-w-[1200px]">
                    {
                        blogs.map((blog) => (
                            <Post
                                key={blog.id}
                                id={blog.id}
                                title={blog.title}
                                image={blog.img}
                                subtitle={blog.subtitle}
                                author={blog.author}
                                date={blog.date}
                                blogs={blogs}
                            />
                        ))
                    }
                </div>
                <button className="mt-20 px-4 py-2 bg-blue-800 hover:bg-blue-900 rounded" onClick={handleLogout}>Logout</button>
            </div>
        </>
    );
}

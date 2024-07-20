import { useState, useRef, useEffect } from "react";
import { getStorage, ref as refStorage, uploadBytes } from "firebase/storage";
import { db } from "./firebase-app";
import { ref as refDatabase, set } from "firebase/database";
import imageCompression from "browser-image-compression";
import { useSearchParams } from "react-router-dom";

import JoditEditor from "jodit-react";

export default function EditPost({ blogs }) {
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    const editor = useRef(null);

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [content, setContent] = useState("");
    const [image, setImage] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);
    const [imageURL, setImageURL] = useState(""); // State to store image URL

    useEffect(() => {
        const initialBlog = blogs.find((blog) => blog.id === id);
        if (initialBlog) {
            setTitle(initialBlog.title);
            setSubtitle(initialBlog.subtitle);
            setContent(initialBlog.content);
            setImageURL(initialBlog.img); // Set initial image URL
        } else {
            // Handle case where blog with id is not found
            setTitle("");
            setSubtitle("");
            setContent("");
            setImageURL(""); // Clear image URL
        }
    }, [blogs, id]);

    async function upload(e) {
        e.preventDefault();
        const storage = getStorage();
        const uuid = id;
        const storageRef = refStorage(storage, `blogs/${uuid}`);
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1280,
            useWebWorker: true,
        };

        try {
            if (image != null) {
                // Perform image compression
                const compressedFile = await imageCompression(image, options);
                console.log(
                    "compressedFile instanceof Blob",
                    compressedFile instanceof Blob
                ); // true
                console.log(
                    `compressedFile size ${
                        compressedFile.size / 1024 / 1024
                    } MB`
                );

                // Upload compressed file to Firebase Storage
                await uploadBytes(storageRef, compressedFile);
            }

            const blogData = {
                id: uuid,
                title: title,
                subtitle: subtitle,
                content: content,
                date: new Date().getTime(),
                img: `https://firebasestorage.googleapis.com/v0/b/blog-website-486d7.appspot.com/o/blogs%2F${uuid}?alt=media`,
                author: "Admin",
            };

            // Save blog data to Firebase Realtime Database
            await set(refDatabase(db, `blogs/${uuid}`), blogData);

            console.log("Blog uploaded successfully");
            setShowSuccess(true); // Show success message
            setTimeout(() => {
                setShowSuccess(false); // Hide success message after 3 seconds
            }, 3000); // Adjust timeout as needed
        } catch (error) {
            console.error("Error uploading blog:", error);
        }
    }

    const config = {
        useSplitMode: true,
        className: "text-black",
        minHeight: 500,
    };

    return (
        <>
            <div className="flex flex-col items-center mt-20 mb-20 px-6">
                {showSuccess && (
                    <div className="success-message">
                        Blog edited successfully!
                    </div>
                )}
                <h1 className="text-6xl font-bold mb-20">Edit Post</h1>
                <img src={imageURL} alt="" className="max-w-[400px] sm:max-w-[500px] md:max-w-[600px] lg:max-w-[900px]" />
                <div className="flex flex-col gap-2 mt-5">
                    <label
                        htmlFor="img"
                        className="cursor-pointer bg-blue-800 hover:bg-blue-950 px-4 py-2"
                    >
                        Choose File
                    </label>
                    <input
                        id="img"
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(event) => {
                            setImage(event.target.files[0]);
                            setImageURL(
                                URL.createObjectURL(event.target.files[0])
                            );
                        }}
                    />
                </div>
                <form
                    className="max-w-[900px] flex flex-col gap-10"
                    onSubmit={upload}
                >
                    <div className="flex flex-col gap-2">
                        <label htmlFor="title">Title</label>
                        <input
                            id="title"
                            type="text"
                            placeholder="Title"
                            value={title}
                            required
                            className="bg-gray-900 px-4 py-3 w-full"
                            onChange={(event) => setTitle(event.target.value)}
                            maxLength="150"
                        />
                        <p className="text-gray-400">
                            {title.length}/150 characters
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="subtitle">Introduction/Subtitle</label>
                        <textarea
                            id="subtitle"
                            type="text"
                            placeholder="Subtitle"
                            required
                            value={subtitle}
                            maxLength={500}
                            className="bg-gray-900 px-4 py-3 w-full min-h-32"
                            onChange={(event) =>
                                setSubtitle(event.target.value)
                            }
                        />
                        <p className="text-gray-400">
                            {subtitle.length}/500 characters
                        </p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <label htmlFor="content">Content</label>
                        <JoditEditor
                            id="content"
                            ref={editor}
                            value={content}
                            config={config}
                            onBlur={(newContent) => setContent(newContent)}
                        />
                    </div>
                    <button
                        className="px-4 py-4 rounded hover:bg-blue-900 bg-blue-800"
                        type="submit"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    );
}

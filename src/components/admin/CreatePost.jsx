import { useState, useRef } from "react";
import { getStorage, ref as refStorage, uploadBytes } from "firebase/storage";
import { db } from "./firebase-app";
import { ref as refDatabase, set } from "firebase/database";
import { v4 as uuidv4 } from "uuid";
import imageCompression from "browser-image-compression";
import Title from "./Title";

import JoditEditor from "jodit-react";
import Subtitle from "./Subtitle";

export default function CreatePost() {
    const editor = useRef(null);
    const [content, setContent] = useState("");

    const [title, setTitle] = useState("");
    const [subtitle, setSubtitle] = useState("");
    const [image, setImage] = useState(null);
    const [showSuccess, setShowSuccess] = useState(false);

    async function upload(e) {
        e.preventDefault();
        const storage = getStorage();
        const uuid = uuidv4();
        const storageRef = refStorage(storage, `blogs/${uuid}`);
        const options = {
            maxSizeMB: 1,
            maxWidthOrHeight: 1280,
            useWebWorker: true,
        };

        try {
            // Perform image compression
            const compressedFile = await imageCompression(image, options);
            console.log(
                "compressedFile instanceof Blob",
                compressedFile instanceof Blob
            ); // true
            console.log(
                `compressedFile size ${compressedFile.size / 1024 / 1024} MB`
            );

            // Upload compressed file to Firebase Storage
            await uploadBytes(storageRef, compressedFile);

            // Construct the blog data object
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
            <div className="flex flex-col items-center mt-20 mb-20">
                {showSuccess && (
                    <div className="success-message">
                        Blog uploaded successfully!
                    </div>
                )}
                <h1 className="text-6xl font-bold">Create Post</h1>
                <form className="max-w-[900px] px-6 flex flex-col gap-10" onSubmit={upload}>
                    <img src={image ? URL.createObjectURL(image): ""} alt="" className="max-w-[900px]" />
                    <div className="flex flex-col gap-2">
                        <label htmlFor="img">Image</label>
                        <input
                            id="img"
                            type="file"
                            accept="image/*, image/avif, image/webp"
                            required
                            onChange={(event) =>
                                setImage(event.target.files[0])
                            }
                            
                        />
                    </div>
                    
                    <Title title={title} setTitle={setTitle} />
                    
                    <Subtitle subtitle={subtitle} setSubtitle={setSubtitle} />
                    
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

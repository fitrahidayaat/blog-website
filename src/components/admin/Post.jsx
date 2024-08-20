import { db, storage } from "./firebase-app.js";
import { ref as refStorage, deleteObject } from "firebase/storage";
import { ref as refDatabase, remove } from "firebase/database";
import { Link } from "react-router-dom";

export default function Post({ id, title, image, subtitle, author, date }) {
    function handleDelete() {
        console.log(id);

        remove(refDatabase(db, `blogs/${id}`))
        .then(() => {
            console.log("Document successfully deleted!");
        })
        .catch((error) => {
            console.error("Error removing document: ", error);
        });
        const storageRef = refStorage(storage, `blogs/${id}`);

        deleteObject(storageRef)
            .then(() => {
                console.log("Image successfully deleted!");
            })
            .catch((error) => {
                console.error("Error removing image: ", error);
            });
    }

    date = new Date(date).toLocaleDateString("en-ZW", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
        hour: "numeric",
        minute: "numeric",
        second: "numeric",
    });

    return (
        <>
            <div className="overflow-hidden flex flex-wrap lg:flex-nowrap gap-10 w-full">
                <div className="max-h-[200px] max-w-[300px] overflow-hidden">
                    <img
                        src={image}
                        alt="blog-image"
                        className="object-cover overflow-hidden"
                    />
                </div>
                <div className="">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <h2 className="mt-4 text-gray-400">{subtitle}</h2>

                    <div className="mt-4 text-gray-400">
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>

                    <div className="mt-5">
                        <Link to={`/admin/edit?id=${id}`} className="bg-blue-800 hover:bg-blue-950 px-3 py-2 rounded">
                            Edit
                        </Link>
                        <button
                            className="bg-red-800 hover:bg-red-950 px-3 pt-1 pb-2 rounded ml-5"
                            onClick={handleDelete}
                        > Delete
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

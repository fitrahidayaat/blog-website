import Nav from "../Nav";
import { useSearchParams } from "react-router-dom";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Post( {blogs} ) {
    console.log(blogs);
    const [searchParams] = useSearchParams();
    const id = searchParams.get("id");
    console.log(blogs);
    const blog = blogs.find((blog) => blog.id === id);

    const titleDetails = useRef(null);
    const image = useRef(null);
    const content = useRef(null);

    blog.date = new Date(blog.date).toLocaleDateString("en-ZW", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useGSAP(() => {
        gsap.from(titleDetails.current, {
            y: 100,
            opacity: 0,
            duration: 1,
        });

        gsap.from(image.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });

        gsap.from(content.current, {
            y: 300,
            opacity: 0,
            duration: 1,
        });
    });


    return (
        <>
            {blog && (
                <>
                    <Nav />
                    <div className="h-[95px]"></div>
                    <div className="flex flex-col items-center px-[30px] sm:px-[100px] md:px-[200px] lg:px-[300px] xl:px-[400px] 2xl:px-[500px] py-10">
                        <section ref={titleDetails} className="text-center">
                            <h1 className="text-4xl font-bold">{blog.title}</h1>
                            <h2 className="text-lg text-gray-400 my-4">
                                {blog.subtitle}
                            </h2>
                            <p className="text-gray-400">{blog.author}</p>
                            <p className="text-gray-400 mb-10">{blog.date}</p>
                        </section>
                        <img
                            ref={image}
                            src={blog.img}
                            alt="blog-image"
                            className="object-cover"
                        />
                        <section
                            ref={content}
                            id="content"
                            className="mt-10 lg:text-lg leading-6 w-full"
                            dangerouslySetInnerHTML={{ __html: blog.content }}
                        >
                            
                        </section>
                    </div>
                </>
            )}
        </>
    );
}

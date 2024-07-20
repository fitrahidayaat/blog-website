import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import { Link } from "react-router-dom";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function BlogCard({ id, title, image, subtitle, author, date }) {
    const ref = useRef(null);

    title = title.length > 100 ? title.slice(0, 100) + "..." : title;
    subtitle = subtitle.length > 200 ? subtitle.slice(0, 200) + "..." : subtitle;

    // change date format full day name "Saturday, 10 July 2021"
    date = new Date(date).toLocaleDateString("en-ZW", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
    });

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: ref.current,
                start: "top 120%",
                end: "bottom 100%",
                scrub: 1,
            },
        });
        timeline.from(ref.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });
    });

    return (
        <>
            <Link
                ref={ref}
                to={`/post?id=${id}`}
                className="card max-w-[600px] overflow-hidden"
            >
                <div className="max-h-[350px] justify-center flex bg-gray-800 max-w-[600px] overflow-hidden">
                    <img
                        loading="lazy"
                        src={image}
                        alt="blog-image"
                        className="object-cover transition-all hover:scale-105 overflow-hidden"
                    />
                </div>
                <div className="py-6">
                    <h1 className="font-bold text-2xl">{title}</h1>
                    <h2 className="mt-4 text-gray-400 max-h-24 overflow-hidden">
                        {subtitle}
                    </h2>

                    <div className="mt-4 text-gray-400">
                        <p>{author}</p>
                        <p>{date}</p>
                    </div>
                </div>
            </Link>
        </>
    );
}

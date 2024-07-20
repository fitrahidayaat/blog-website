import Nav from "../Nav";
import Footer from "../Footer";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

export default function Home() {
    const header = useRef(null);
    const title = useRef(null);
    const subtitle = useRef(null);
    const ctaButton = useRef(null);
    const introduction = useRef(null);

    useGSAP(() => {
        gsap.from(header.current, {
            y:-100,
            opacity: 0,
            duration: 1,
        });

        gsap.from(title.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });

        gsap.from(subtitle.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });

        gsap.from(ctaButton.current, {
            y: 200,
            // scale: 0,
            opacity: 0,
            duration: 1,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: introduction.current,
                start: "top 100%",
                end: "bottom 110%",
                scrub: 1,
            },
        });
        timeline.from(introduction.current, {
            y: 200,
            opacity: 0,
            duration: 2,
        });
    });

    return (
        <>
            <Nav curPage="Home" />
            <div className="mb-36">
                <header
                    ref={header}
                    className="px-10 bg-home-bg w-full h-screen flex flex-col items-center bg-cover"
                >
                    <h1
                        ref={title}
                        className="text-6xl md:text-8xl font-bold mb-6 mt-72 sm:mt-96 text-center"
                    >
                        Exploring Tech & University Life
                    </h1>
                    <h2 ref={subtitle} className="text-xl md:text-2xl text-center">
                        Insights, Reviews, and Reflections on Technology Trends
                        and Campus Adventures
                    </h2>
                    <div ref={ctaButton}>
                        <button className="mt-6 text-xl md:text-2xl px-8 py-4 bg-white text-black font-bold hover:bg-gray-400 transition-all rounded-full">
                            Read My Latest Posts
                        </button>
                    </div>
                </header>
                <section ref={introduction} className="px-10 sm:px-20 md:px-36 lg:px-48 xl:px-72 h-[400px]">
                    <p className="text-6xl mt-20 mb-6 font-bold">
                        Welcome to my blog
                    </p>
                    <p className="text-lg">
                        Where I share my experiences as a [Your Year/Major]
                        student alongside insights into the latest in
                        technology. Follow along as I navigate the challenges of
                        university life and explore intriguing developments in
                        tech—from new gadgets to industry trends. Whether
                        you&apos;re a fellow student looking for study tips or a
                        tech enthusiast interested in innovation, join me on
                        this journey of learning and discovery.
                    </p>
                    
                </section>
            </div>
            <Footer />
        </>
    );
}

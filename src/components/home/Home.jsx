import Nav from "../Nav";
import Footer from "../Footer";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

import homeBg from "../../assets/home-bg.avif";
import { Link } from "react-router-dom";

export default function Home() {
    const header = useRef(null);
    const title = useRef(null);
    const subtitle = useRef(null);
    const ctaButton = useRef(null);
    const introduction = useRef(null);
    const introduction2 = useRef(null);

    useGSAP(() => {
        gsap.from(header.current, {
            y: -100,
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
            opacity: 0,
            duration: 1,
        });

        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: introduction.current,
                start: "top 120%",
                end: "bottom 75%",
                scrub: 1,
            },
        });
        timeline.from(introduction.current, {
            y: 200,
            opacity: 0,
            duration: 10,
        });

        const timeline2 = gsap.timeline({
            scrollTrigger: {
                trigger: introduction2.current,
                start: "top 120%",
                end: "bottom 75%",
                scrub: 1,
            },
        });

        timeline2.from(introduction2.current, {
            y: 200,
            opacity: 0,
            duration: 10,
        });

    });

    return (
        <>
            <Nav curPage="Home" />
            <div className="mb-72">
                <header
                    ref={header}
                    style={{ backgroundImage: `url(${homeBg})` }}
                    className="px-10 w-full h-screen flex flex-col items-center bg-cover"
                >
                    <h1
                        ref={title}
                        className="text-6xl md:text-8xl font-bold mb-6 mt-72 sm:mt-96 text-center"
                    >
                        Exploring Tech & University Life
                    </h1>
                    <h2
                        ref={subtitle}
                        className="text-xl md:text-2xl text-center mb-16"
                    >
                        Insights, Reviews, and Reflections on Technology Trends
                        and Campus Adventures
                    </h2>
                    <div ref={ctaButton}>
                        <Link
                            to={"/blog"}
                            className="mt-16 text-xl md:text-2xl px-8 py-4 bg-white text-black font-bold hover:bg-gray-400 transition-all rounded-full"
                        >
                            Read My Latest Posts
                        </Link>
                    </div>
                </header>
                <section
                    ref={introduction}
                    className="px-10 sm:px-20 md:px-36 lg:px-48 xl:px-72 mb-36"
                >
                    <p className="text-6xl mt-20 mb-6 font-bold text-center ">
                        Welcome to my Blog!
                    </p>
                    <p className="text-lg text-justify text-gray-200">
                        Embark on a thrilling journey through the life of a
                        passionate Computer Science student and dive deep into
                        the ever-evolving realm of technology. Join me as I
                        conquer the challenges of university life while
                        unraveling the latest tech marvels—from cutting-edge
                        gadgets to groundbreaking industry trends. Whether
                        you&apos;re seeking study hacks or captivated by
                        innovation, this blog is your gateway to a world of
                        learning and exploration.
                    </p>
                </section>

                <section
                    ref={introduction2}
                    className="px-10 sm:px-20 md:px-36 lg:px-48 xl:px-72"
                >
                    <p className="text-6xl mb-6 font-bold text-center ">
                        Step into my World!
                    </p>
                    <p className="text-lg text-justify text-gray-200">
                        Discover the world of a Computer Science student as I
                        navigate the highs and lows of university life and
                        uncover the most exciting developments in technology.
                        From dissecting new gadgets to predicting future
                        industry trends, this blog is your companion in the
                        pursuit of knowledge and innovation. Whether you&apos;re
                        a student seeking study tips or a tech enthusiast hungry
                        for the latest updates, together, let&apos;s embark on
                        this thrilling journey of discovery!
                    </p>
                </section>
            </div>
            <Footer />
        </>
    );
}

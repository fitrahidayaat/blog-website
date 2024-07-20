import Nav from "../Nav";
import aboutImg from "../../assets/about-img.avif";

import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import Footer from "../Footer";

export default function About() {
    const getToKnowMe = useRef(null);
    const myMission = useRef(null);
    const myVision = useRef(null);
    const myImage = useRef(null);

    useGSAP(() => {
        gsap.from(getToKnowMe.current, {
            y: 100,
            opacity: 0,
            duration: 1,
        });

        gsap.from(myMission.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });

        gsap.from(myVision.current, {
            y: 200,
            opacity: 0,
            duration: 1,
        });

        gsap.from(myImage.current, {
            y: 100,
            opacity: 0,
            duration: 1,
        });
    });


    return (
        <>
            <Nav curPage="About" />
            <div className="h-[75px]"></div>
            <div className="mt-36 px-10 sm:px-16 2xl:px-80 mb-36">
                <div className="flex flex-wrap gap-24 justify-between">
                    <div ref={getToKnowMe} className="w-[800px]">
                        <h2 className="text-6xl font-bold mb-10 ">
                            Get to know me
                        </h2>
                        <p className="text-lg">
                            Zivaiclimate is a non-governmental organization
                            dedicated to raising awareness about climate change
                            and providing youth with the knowledge to make
                            informed decisions that contribute to a cleaner
                            Earth. Our mission is to empower young people with
                            the information they need to take positive action
                            for our planet, as it is the only home we have. Take
                            the pledge to make a difference today.
                        </p>
                    </div>
                    <div ref={myImage}>
                        <img src={aboutImg} alt="my picture" />
                    </div>
                </div>

                <div className="flex mt-24 justify-between flex-wrap gap-10">
                    <div ref={myMission} className="w-[600px]">
                        <h2 className="text-6xl font-bold mb-10 ">
                            My mission
                        </h2>
                        <p className="text-lg">
                            &#xFF02;To use digital tools to educate youth on
                            climate change, enabling them to make informed
                            decisions and take positive actions for a cleaner
                            and more sustainable Earth.&#xFF02;
                        </p>
                    </div>
                    <div ref={myVision} className="w-[600px]">
                        <h2 className="text-6xl font-bold mb-10 ">My vision</h2>
                        <p className="text-lg">
                            &#xFF02;Our vision is to ensure that every youth
                            worldwide is equipped with knowledge about climate
                            change.&#xFF02;
                        </p>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}

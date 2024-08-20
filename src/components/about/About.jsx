import Nav from "../Nav";
import aboutImg from "../../assets/about-img.jpg";

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
                        I am a student at Telkom University, majoring in Informatics and pursuing a career in the tech industry. As a lifelong learner with a passion for technology and a competitive spirit, I am always seeking new opportunities to challenge myself and expand my skillset.

As a competitive programmer, I have honed my problem-solving skills and developed a deep understanding of algorithms and computational thinking. These skills have allowed me to tackle complex challenges and deliver high-quality software solutions.
                        </p>
                    </div>
                    <div ref={myImage}>
                        <img src={aboutImg} alt="my picture" className="w-[320px]" />
                    </div>
                </div>

                
            </div>
            <Footer />
        </>
    );
}

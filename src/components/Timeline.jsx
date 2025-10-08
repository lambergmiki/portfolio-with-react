import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import timelineData from "../assets/data.json";

// Register plugin(s) once
gsap.registerPlugin(useGSAP, ScrollTrigger);

const Timeline = () => {
    const container = useRef();

    useGSAP(
        () => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                ScrollTrigger.batch(".timeline-item", {
                    interval: 0.1,
                    batchMax: 3,
                    start: "top 80%",
                    end: "bottom top",
                    onEnter: (batch) =>
                        gsap.to(batch, {
                            autoAlpha: 1,
                            y: 0,
                            stagger: 0.5,
                            overwrite: true,
                        }),
                    onLeave: (batch) =>
                        gsap.to(batch, {
                            autoAlpha: 0,
                            y: -100,
                            overwrite: true,
                        }),
                    onEnterBack: (batch) =>
                        gsap.to(batch, {
                            autoAlpha: 1,
                            y: 0,
                            stagger: 0.1,
                            overwrite: true,
                        }),
                    onLeaveBack: (batch) =>
                        gsap.to(batch, {
                            autoAlpha: 0,
                            y: -100,
                            overwrite: true,
                        }),
                });
            });
        },
        { scope: container }
    );

    return (
        <div
            ref={container}
            className="flex flex-col items-center pt-5 pb-3 mt-44 lg:mt-80 mb-20"
        >
            {/* Render a parent div for each timeline event, containing title, year, description */}
            {timelineData.map((item, i) => (
                <div
                    key={i}
                    className="timeline-item relative text-center max-w-xl p-6"
                >
                    <h2 className="text-3xl mb-2">{item.title}</h2>
                    <p className="text-xl mb-2">{item.year}</p>
                    <p className={`text-xl text-balance`}>{item.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Timeline;

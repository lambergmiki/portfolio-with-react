import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const timelineItems = [
  { year: "2020", title: "Telia", description: "placeholder" },
  { year: "2023", title: "Flyttar till Spanien", description: "placeholder" },
  { year: "2024", title: "Webbprogrammerare @ Linnéuniversitetet", description: "placeholder" },
  { year: "2025", title: "SI-ledare & TA @ Linnéuniversitet", description: "placeholder" },
];

const Timeline = () => {
  const tlContainer = useRef();

  useGSAP(() => {
    // Render timeline items to the DOM and animate them with GSAP & ScrollTrigger
    const tlItem = gsap.utils.toArray(".timeline-item");
    const tl = gsap.timeline(); // Master timeline

    // Items alternate entering from left/right based on index
    tlItem.forEach((item, i) => {
      tl.from(item, {
        xPercent: i % 2 === 0 ? -200 : 200,
        opacity: 0,
      });
    });


    ScrollTrigger.create({
      animation: tl,
      trigger: tlContainer.current,
      start: "top top",
      end: "+=2500",
      scrub: 1,
      pin: true,
      anticipatePin: 1,
      markers: true, // development property
    });
  }, { scope: tlContainer});

  return (
    // Container viewport height is to allow for some scrolling to reveal timeline
    <div
      ref={tlContainer}
      id="tlContainer"
      className="relative min-h-[1150px] overflow-hidden"
    >
      {timelineItems.map((item, i) => (
        <div
          key={i}
          className="timeline-item p-8"
        >
          <h2 className="text-2xl font-bold">{item.title}</h2>
          <p className="text-sm">{item.year}</p>
          <p className="text-md">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Timeline;
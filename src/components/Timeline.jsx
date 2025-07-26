import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Timeline = () => {
  // `scope` is used as a reference for which elements to target
  const scope = useRef()

  // React-specific method, runs when component mounts <- what does that mean
  useGSAP(() => {
    // Initial setup of items
    gsap.set(".timeline-item", {
      y: 200, // Start value is 200px down from top
      opacity: 0 // Start value is invisible
    });

    // Creates a timeline to animate all chosen items
    const tl = gsap.timeline();

      tl.to(".timeline-item", {
        y: 0, // Animate back to original position
        opacity: 1, // Fade in
        duration: 2,
        stagger: 0.7, // Delay each item's start by x after previous item
        scrollTrigger: {
          trigger: "#tl-container",
        }
      })
    }, { scope }); // Affects only `scope`

 const timelineItems = [
    { year: '2020', title: 'Telia', description: 'placeholder' },
    { year: '2023', title: 'Flyttar till Spanien', description: 'placeholder' },
    { year: '2024', title: 'Webbprogrammerare @ Linnéuniversitetet', description: 'placeholder' },

    { year: '2025', title: 'SI-ledare & TA (Teacher Assistant) @ Linnéuniversitet', description: 'placeholder' },
  ];

  return (
    <section id="timeline" className="p-10" ref={scope}>
      <h2 className="text-3xl text-third-white py-6">My Timeline</h2>
      <div id="tl-container" className="relative border-l-2 border-gray-300 pl-6">
        {timelineItems.map((item, index) => (
          <div key={index} className="timeline-item mb-10 text-wrap">
            <div className="text-md text-secondary-white">{item.year}</div>
            <div className="text-xl text-primary-white">{item.title}</div>
            <div className="text-fourth-white">{item.description}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Timeline
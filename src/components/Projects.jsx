import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";

gsap.registerPlugin(useGSAP);

const Projects = () => {
  const projectsWrapper = useRef();
  const cardsRef = useRef([]); // persists across renders

  useGSAP(
    () => {
      cardsRef.current = gsap.utils.toArray(".project-cards");

      gsap.set(cardsRef.current, {
        x: (i) => i * 10,
        yPercent: (i) => i * 30,
        xPercent: (i) => i * 50,
        zIndex: (i) => cardsRef.current.length - i,
      });
    },
    { scope: projectsWrapper }
  );

  // Infinite loop by shifting z-index of each card when called
  const shiftStack = () => {
    const top = cardsRef.current.shift();
    cardsRef.current.push(top);

    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        yPercent: i * 30,
        xPercent: i * 50,
        zIndex: cardsRef.current.length - i,
        duration: 0.5,
      });
    });
  };

  // TODO: Replace placeholders with actual projects and links to GitHub. Perhaps a drag-to-open-link animation?
  return (
    <section id="projects" className="relative px-6 py-10 text-xl">
      <h2 className="text-5xl mb-8 text-center">Projects</h2>

      <div ref={projectsWrapper} className="relative h-[400px] w-full">
        {/* Cards are only clickable if index value is 0 (e.g. top card) */}
        <div
          className="absolute project-cards border bg-white p-6 rounded-lg shadow-md"
          onClick={(e) => {
            if (cardsRef.current[0] === e.currentTarget) shiftStack();
          }}
        >
          Project #1
          <div className="text-content-box border m-4 p-4">Hi</div>
        </div>

        <div
          className="absolute project-cards border bg-white p-6 rounded-lg shadow-md"
          onClick={(e) => {
            if (cardsRef.current[0] === e.currentTarget) shiftStack();
          }}
        >
          Project #2
          <div className="text-content-box border m-4 p-4">there</div>
        </div>

        <div
          className="absolute project-cards border bg-white p-6 rounded-lg shadow-md"
          onClick={(e) => {
            if (cardsRef.current[0] === e.currentTarget) shiftStack();
          }}
        >
          Project #3
          <div className="text-content-box border m-4 p-4">!</div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

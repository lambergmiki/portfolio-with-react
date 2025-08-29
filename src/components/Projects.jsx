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
        yPercent: (i) => i * 15,
        // xPercent: (i) => i * 5,
        zIndex: (i) => cardsRef.current.length - i,
      });
    },
    { scope: projectsWrapper }
  );

  // Infinite loop by shifting z-index of each card when called
  const shiftStack = () => {
    const currentTop = cardsRef.current[0]; // current top card
    const newTop = cardsRef.current[1]; // card replacing the current top card

    // remove first element and insert back into the array, which is now shifted. [1, 2, 3] -> [2, 3, 1]
    const top = cardsRef.current.shift();
    cardsRef.current.push(top);

    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        yPercent: i * 45,
        // xPercent: i * 15,
        zIndex: cardsRef.current.length - i,
        duration: 0.5,
      });
    });
  
  // Grab children (descriptions) of project cards
  const currentDesc = currentTop.querySelector(".description")
  const newDesc = newTop.querySelector(".description")

  // Change opacity and visibility accordingly, creating a fading effect
  if (currentDesc) {
    gsap.to(currentDesc, {
      autoAlpha: 0,
      duration: 0.2,
    })
  }
  if (newDesc) {
    gsap.to(newDesc, {
      autoAlpha: 1,
      duration: 1,
    })
  }
  };

  // TODO: Replace placeholders with actual projects and links to GitHub. Perhaps a drag-to-open-link animation?
  // TODO: BUG - When clicking through cards rapidly they can become stuck and descriptions stay visible (opacity 1) despite not belonging to the top card
  return (
    <section id="projects" className="relative px-6 py-10 text-xl ml-20 mr-40">
      <h2 className="text-5xl mb-8 text-center">Projects</h2>

      <div ref={projectsWrapper} className="relative h-[400px] w-full">
        {/* Cards are only clickable if index value is 0 (e.g. top card) */}
        <div
          className="flex justify-between absolute project-cards bg-white p-4 w-full h-40"
        >
        <h3 className="title border p-2 m-2 w-[400px] rounded-lg"
        onClick={(e) => {
          const parent = e.currentTarget.parentElement;
            if (cardsRef.current[0] === parent) shiftStack();
          }}
          >
            Matgeneratorn.se
            </h3>
        <h3 className="description p-2 m-2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis dolorem est ratione vel ipsam quis velit porro et laudantium! Quia cumque vel facilis nam non laudantium sit ad facere modi.</h3>
        </div>

        <div
          className="flex justify-between absolute project-cards bg-white p-4 w-full h-40"
          
        >
          <h3 className="title border p-2 m-2 w-[400px] rounded-lg"
          onClick={(e) => {
          const parent = e.currentTarget.parentElement;
            if (cardsRef.current[0] === parent) shiftStack();
          }}
          >
            My first IoT project
            </h3>
          <h3 className="description p-2 m-2 opacity-0">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odit voluptates sit iste rerum accusamus pariatur placeat, enim ipsam repudiandae perferendis ad quis doloremque, optio exercitationem dolore porro blanditiis quaerat voluptate.</h3>
        </div>

        <div
          className="flex justify-between absolute project-cards bg-white p-4 w-full h-40"
          onClick={(e) => {
          const parent = e.currentTarget.parentElement;
            if (cardsRef.current[0] === parent) shiftStack();
          }}
        >
          <h3 className="title border p-2 m-2 w-[400px] rounded-lg"
          onClick={(e) => {
          const parent = e.currentTarget.parentElement;
            if (cardsRef.current[0] === parent) shiftStack();
          }}
          >
            Dotfiles
            </h3>
          <h3 className="description p-2 m-2 opacity-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda, laborum nostrum dolorem, repudiandae nam cumque quaerat veniam quos aliquam nesciunt iure id corrupti. Nemo totam voluptatum quis laborum consectetur earum.</h3>
        </div>
      </div>
    </section>
  );
};

export default Projects;

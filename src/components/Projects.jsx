import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { useRef } from "react"

gsap.registerPlugin(useGSAP)

const Projects = () => {
  const projectsWrapper = useRef()
  const cardsRef = useRef([]) // persists across renders

  useGSAP(
    () => {
      cardsRef.current = gsap.utils.toArray(".project-cards")

      gsap.set(cardsRef.current, {
        yPercent: (i) => i * 15,
        zIndex: (i) => cardsRef.current.length - i,
      })
    },
    { scope: projectsWrapper }
  )

  // Infinite loop by shifting z-index of each card when called
  const shiftStack = () => {
    const currentTop = cardsRef.current[0] // current top card
    const newTop = cardsRef.current[1] // card replacing the current top card

    // remove first element and insert back into the array, which is now shifted. [1, 2, 3] -> [2, 3, 1]
    const top = cardsRef.current.shift()
    cardsRef.current.push(top)

    cardsRef.current.forEach((card, i) => {
      gsap.to(card, {
        yPercent: i * 25,
        // xPercent: i * 15,
        zIndex: cardsRef.current.length - i,
        duration: 0.5,
      })
    })

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
  }

  // TODO: Add a pleasant drag-to-open (project) animation, or something similar in contrast to current simple click-link.
  // TODO2: Add description of each project below project card instead of to its right.
  return (
    <section id="projects" className="px-6 py-10 text-xl">
      <h2 className="text-5xl mb-8 text-center">Projects</h2>
      <p className="text-2xl mb-20 text-center">
        Click the title to access the project, or the card itself to see the next project.
      </p>

      <div ref={projectsWrapper} className="relative h-[400px] w-full">
        {/* Cards are only clickable if index value is 0 (e.g. top card) */}

        <div className="flex justify-between absolute project-cards bg-white h-40">
          <h3
            className="title border p-2 min-w-96 rounded-lg bg-slate-500 text-3xl text-center"
            onClick={(e) => {
              const parent = e.currentTarget.parentElement
              if (cardsRef.current[0] === parent) shiftStack()
            }}
          >
            <a href="https://github.com/lambergmiki/matgeneratorn" target="_blank">
              Matgeneratorn.se
            </a>
          </h3>
          <h3 className="description p-2 ml-20">
            My first large project with JavaScript. Possibly also my first "development request", as
            my wife requested this application. Want to see the live app? You can find it at{" "}
            <a href="www.matgeneratorn.se" target="_blank">
              matgeneratorn.se
            </a>
          </h3>
        </div>

        <div className="flex justify-between absolute project-cards bg-white h-40">
          <h3
            className="title border p-2 min-w-96 rounded-lg bg-slate-500 text-3xl text-center"
            onClick={(e) => {
              const parent = e.currentTarget.parentElement
              if (cardsRef.current[0] === parent) shiftStack()
            }}
          >
            <a href="https://github.com/lambergmiki/IoT-Summer-2025" target="_blank">
              My first IoT project
            </a>
          </h3>
          <h3 className="description p-2 opacity-0 ml-20">
            Solving one of the most non-important, important things: taking care of pizza dough. It
            was a great pleasure learning how hardware and software can work together.
          </h3>
        </div>

        <div className="flex justify-between absolute project-cards bg-white h-40">
          <h3
            className="title border p-2 min-w-96 rounded-lg bg-slate-500 text-3xl text-center"
            onClick={(e) => {
              const parent = e.currentTarget.parentElement
              if (cardsRef.current[0] === parent) shiftStack()
            }}
          >
            <a href="https://github.com/lambergmiki/dotfiles" target="_blank">
              Dotfiles
            </a>
          </h3>
          <h3 className="description p-2 opacity-0 ml-20">
            After manually reinstalling software and setting up configuration files on new/formatted
            laptops and desktops, I finally learned about backing up dotfiles and how a shell
            scripts can simplify your life.
          </h3>
        </div>

        <div className="flex justify-between absolute project-cards bg-white h-40">
          <h3
            className="title border p-2 min-w-96 rounded-lg bg-slate-500 text-3xl text-center"
            onClick={(e) => {
              const parent = e.currentTarget.parentElement
              if (cardsRef.current[0] === parent) shiftStack()
            }}
          >
            <a href="https://github.com/lambergmiki/Alien-Invasion" target="_blank">
              Alien Invasion
            </a>
          </h3>
          <h3 className="description p-2 opacity-0 ml-20 text-balance">
            My very first hands-on experience programming happened to be in Python. I highly
            recommend
            <a href="https://nostarch.com/python-crash-course-3rd-edition" target="_blank">
              <p className="underline decoration-double text-balance">
                Python Crash Course by Eric Matthes
              </p>
            </a>
            to those curious about programming with little to no experience beforehand. The project
            is untouched since then, just so I can see where it all started.
            <em> The repo doesn't even have a README, hehe.</em>
          </h3>
        </div>
      </div>
    </section>
  )
}

export default Projects

import { useRef } from "react"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import timelineData from "../assets/data.json"

// Register plugins once
gsap.registerPlugin(ScrollTrigger)

const Timeline = () => {
  const container = useRef()

  useGSAP(
    () => {
      const mm = gsap.matchMedia()

      // Animatate only for large screens
      mm.add("(min-width: 1024px)", () => {
        // Set initial state to hidden with y-offset so they animate properly when they enter the viewport
        gsap.set(".timeline-item", { autoAlpha: 0, y: 100 })

        ScrollTrigger.batch(".timeline-item", {
          interval: 0.1,
          batchMax: 1,
          start: "top 80%",
          end: "bottom top",
          onEnter: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.3,
              duration: 0.9,
              ease: "power2.out",
              overwrite: true,
            }),
          onLeave: (batch) => gsap.to(batch, { autoAlpha: 0, y: -100, overwrite: true }),
          onEnterBack: (batch) =>
            gsap.to(batch, {
              autoAlpha: 1,
              y: 0,
              stagger: 0.1,
              duration: 0.5,
              ease: "power2.out",
              overwrite: true,
            }),
          onLeaveBack: (batch) => gsap.to(batch, { autoAlpha: 0, y: -100, overwrite: true }),
        })
      })

      // Show all items, static elements on mobile screens
      mm.add("(max-width: 1023px)", () => {
        gsap.set(".timeline-item", { autoAlpha: 1, y: -150 })
      })
    },
    { scope: container }
  )

  return (
    <div ref={container} className="flex flex-col items-center pt-5 pb-3 mt-44 lg:mt-80 mb-20">
      {timelineData.map((item, i) => (
        <div key={i} className="timeline-item relative text-center max-w-xl p-6 opacity-0">
          <h2 className="text-3xl mb-2 text-secondary-white">{item.title}</h2>
          <p className="text-xl mb-2">{item.year}</p>
          <p className="text-xl text-balance">{item.description}</p>
        </div>
      ))}
    </div>
  )
}

export default Timeline

import { gsap } from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { useRef } from "react"

gsap.registerPlugin(useGSAP, ScrollTrigger)

const timelineItems = [
  {
    year: "2020 okt - 2023 sep",
    title: "Telia",
    description:
      "3 år på Telia - 1,5 år i rollen som IT-support mot B2B-kunder och 1,5 år som produktspecialist med produktportföljen 'Mobil som tjänst'.",
  },
  {
    year: "2023 sep",
    title: "Flyttar till Spanien",
    description:
      "Tillsammans med fru och dotter bär det av till Spanien - här njuter vi av föräldraledigheten med ambitionen att stanna kvar även efter föräldraledigheten.",
  },
  {
    year: "2024 aug",
    title: "Webbprogrammerare på Linnéuniversitetet",
    description:
      "Efter ett år av föräldraledighet och många år av sälj & marknadsföring påbörjar jag äntligen resan för att bli en utvecklare.",
  },
  {
    year: "2025 aug",
    title: "SI-ledare på Linnéuniversitet",
    description:
      "Jag får förtroendet att vara SI-ledare och därmed möjligheten att stötta nya studenter i deras inledande kurser.",
  },
  {
    year: "2026",
    title: "Sverige?",
    description:
      "Vår ambition är att flytta hem igen. Kanske redan 2026, beroende på vad arbetsmöjligheter!",
  },
]

const Timeline = () => {
  const tlContainer = useRef()

  useGSAP(
    () => {
      // Render timeline items to the DOM and animate them with GSAP & ScrollTrigger
      const tlItem = gsap.utils.toArray(".timeline-item")
      const tl = gsap.timeline() // Master timeline

      // Items alternate entering from left/right based on index
      tlItem.forEach((item, i) => {
        tl.from(item, {
          xPercent: i % 2 === 0 ? 200 : -200,
          opacity: 0,
          duration: 1,
          ease: "expo.out",
        })
      })

      // TODO: disable scrolling and freeze timeline after it's been scrolled through once?
      ScrollTrigger.create({
        animation: tl,
        trigger: tlContainer.current,
        start: "top top",
        end: "+=3150",
        scrub: 1,
        pin: true,
        anticipatePin: 1,
        markers: true, // development property
      })
    },
    { scope: tlContainer }
  )

  return (
    // Container viewport height is to allow for some scrolling to reveal timeline
    <div ref={tlContainer} id="tlContainer" className="relative min-h-[1150px] overflow-hidden">
      {/* Vertical line down the middle */}
      <div className="absolute left-1/2 top-0 h-full w-1 bg-slate-200"></div>

      {timelineItems.map((item, i) => (
        <div
          key={i}
          className={`timeline-item relative w-1/2 p-6 ${
            i % 2 === 0
              ? "pr-20 mr-auto text-right" // left-side card: pushed left, text aligned right...
              : "pl-20 ml-auto text-left" // ... and reverse
          }`}
        >
          <h2 className="text-2xl mb-2 font-bold">{item.title}</h2>
          <p className="text-md mb-2">{item.year}</p>
          <p
            className={`text-xl max-w-[400px] text-balance ${i % 2 === 0 ? "ml-auto" : "mr-auto"}`}
          >
            {item.description}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Timeline

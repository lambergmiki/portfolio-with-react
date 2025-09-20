import Food_truck from "../../public/Food_truck";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Hero = () => {

  return (
    <section id="hero" className="flex p-10 h-[500px]">
        {/* Give headliner 1/3 of Hero container and 2/3 to 3d object */}
        <div id="headliner" className="relative text-primary-white text-2xl basis-1/3 p-10 pl-6">Hej! Denna webbsida renoveras just nu. Säg gärna hej på GitHub eller LinkedIn!
        <div className="icons-container flex">
          <a href="https://www.github.com/lambergmiki/" target="_blank">
        <img src={'/icons/github50.png'} alt="GitHub logo" className="flex flex-col" /></a>

        <a href="https://www.linkedin.com/in/lambergmiki/" target="_blank">
        <img src={'/icons/linkedin48.png'} alt="LinkedIn logo" className="flex flex-col" /></a>
        </div></div>

        {/* 3D Canvas 2/3 */}
      <div className="hidden lg:flex basis-2/3 p-10 pl-6 border">
        <Canvas className="h-full w-full">
          <ambientLight />
          <OrbitControls />
          <Suspense fallback={null}>
            <Food_truck />
          </Suspense>
        </Canvas>
      </div>
    </section>
  )
}

export default Hero
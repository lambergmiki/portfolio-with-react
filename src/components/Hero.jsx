import Food_truck from "../../public/Food_truck";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

const Hero = () => {
    return (
        <section className="flex flex-row p-10 h-[500px]">
            {/* Give headliner 1/3 of Hero container and 2/3 to 3d object */}

            <div className="">
                <img
                    className="size-36 rounded-full lg:size-96 lg:mt-40"
                    src="../../public/images/profilbild.jpg"
                    alt="Profile picture"
                ></img>
                <div className="flex flex-row">
                    <p className="text-xl text-secondary-white animate-pulse mt-10 lg:text-4xl">
                        Full stack web developer loading...
                    </p>
                </div>
            </div>

            {/* 3D Canvas 1/3, currently disabled because I'm looking for alternative ideas for 3D models */}
            {/* <div className="hidden lg:flex basis-1/3 p-10 pl-6 border">
                <Canvas className="h-full w-full">
                    <ambientLight />
                    <OrbitControls />
                    <Suspense fallback={null}>
                        <Food_truck />
                    </Suspense>
                </Canvas>
            </div> */}
        </section>
    );
};

export default Hero;

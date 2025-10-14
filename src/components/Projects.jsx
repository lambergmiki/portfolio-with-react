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
                yPercent: (i) => i * 10,
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
                yPercent: i * 15,
                zIndex: cardsRef.current.length - i,
                duration: 0.5,
            });
        });

        // Grab children (descriptions) of project cards
        const currentDesc = currentTop.querySelector(".description");
        const newDesc = newTop.querySelector(".description");

        // Change opacity and visibility accordingly, creating a fading effect
        if (currentDesc) {
            gsap.to(currentDesc, {
                autoAlpha: 0,
                duration: 0.2,
                overwrite: true, // overwrrites previous effect, preventing text mismatch
            });
        }
        if (newDesc) {
            gsap.to(newDesc, {
                autoAlpha: 1,
                duration: 1,
                overwrite: true,
            });
        }
    };

    return (
        <section id="projects" className="px-6 py-10 text-xl">
            <h2 className="text-5xl mb-8 text-center">Projekt</h2>
            <p className="mb-10 text-2xl xl:mb-20 text-center">
                Klicka på titeln för att kika på projektet
                <span className="hidden md:inline">
                    , eller på själva kortet för att bläddra till nästa projekt.
                </span>
            </p>

            {/* Desktop */}
            <div
                ref={projectsWrapper}
                className="hidden md:block relative h-[400px] w-full"
            >
                {/* Cards are only clickable if index value is 0 (e.g. top card) */}

                <div className="flex justify-between absolute project-cards bg-white h-40">
                    <h3
                        className="title skew-x-12 border-8 p-2 min-w-[396px] border-double bg-stone-900 text-3xl text-center"
                        onClick={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (cardsRef.current[0] === parent) shiftStack();
                        }}
                    >
                        <a
                            href="https://github.com/lambergmiki/matgeneratorn"
                            target="_blank"
                        >
                            Matgeneratorn.se
                        </a>
                    </h3>
                    <h3 className="description p-2 ml-60 text-balance">
                        Mitt första större projekt med JavaScript. Möjligen
                        också mitt första "utvecklingsuppdrag", eftersom min fru
                        bad mig skapa den här applikationen. Vill du se den
                        live? Du hittar den på{" "}
                        <a
                            className="underline decoration-double text-balance"
                            href="https://www.matgeneratorn.se"
                            target="_blank"
                        >
                            matgeneratorn.se
                        </a>
                    </h3>
                </div>

                <div className="flex justify-between absolute project-cards bg-white h-40">
                    <h3
                        className="title skew-x-12 border-8 p-2 min-w-[396px] border-double bg-stone-900 text-3xl text-center"
                        onClick={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (cardsRef.current[0] === parent) shiftStack();
                        }}
                    >
                        <a
                            href="https://github.com/lambergmiki/IoT-Summer-2025"
                            target="_blank"
                        >
                            My first IoT project
                        </a>
                    </h3>
                    <h3 className="description p-2 opacity-0 ml-60 text-balance">
                        Hur man tar hand om pizzadeg när klimatet inte går att
                        lita på. Jättekul att för första gången se hur hårdvara
                        och mjukvara kan interagera.
                    </h3>
                </div>

                <div className="flex justify-between absolute project-cards bg-white h-40">
                    <h3
                        className="title skew-x-12 border-8 p-2 min-w-[396px] border-double bg-stone-900 text-3xl text-center"
                        onClick={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (cardsRef.current[0] === parent) shiftStack();
                        }}
                    >
                        <a
                            href="https://github.com/lambergmiki/dotfiles"
                            target="_blank"
                        >
                            Dotfiles
                        </a>
                    </h3>
                    <h3 className="description p-2 opacity-0 ml-60 text-balance">
                        Efter att ha ominstallerat mjukvara och diverse
                        konfigurationer i otaliga miljöer hittade jag via en
                        bekant "dotfiles". Konfigurationsfiler säkerhetskopieras
                        och ett shellscript förenklar livet vid nya
                        installationer.
                    </h3>
                </div>

                <div className="flex justify-between absolute project-cards bg-white h-40">
                    <h3
                        className="title skew-x-12 border-8 p-2 min-w-[396px] border-double bg-stone-900 text-3xl text-center"
                        onClick={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (cardsRef.current[0] === parent) shiftStack();
                        }}
                    >
                        <a
                            href="https://github.com/lambergmiki/Alien-Invasion"
                            target="_blank"
                        >
                            Alien Invasion
                        </a>
                    </h3>
                    <h3 className="description p-2 opacity-0 ml-60 text-balance">
                        Min inkörsport till programmering blev Alien Invasion i
                        Python. Jag rekommenderar varmt{" "}
                        <a
                            href="https://nostarch.com/python-crash-course-3rd-edition"
                            target="_blank"
                        >
                            <span className="inline underline decoration-double text-balance">
                                Python Crash Course by Eric Matthes
                            </span>
                        </a>{" "}
                        till alla (med lite eller begränsad erfarenhet) som är
                        nyfikna på programmering. Jag har inte rört repot sedan
                        dess.
                        <em> Det har inte ens en README, hehe.</em>
                    </h3>
                </div>

                <div className="flex justify-between absolute project-cards bg-white h-40">
                    <h3
                        className="title skew-x-12 border-8 p-2 min-w-[396px] border-double bg-stone-900 text-3xl text-center"
                        onClick={(e) => {
                            const parent = e.currentTarget.parentElement;
                            if (cardsRef.current[0] === parent) shiftStack();
                        }}
                    >
                        <a
                            href="https://www.npmjs.com/package/rss2html"
                            target="_blank"
                        >
                            rss2html
                        </a>
                    </h3>
                    <h3 className="description p-2 opacity-0 ml-60 text-balance">
                        Jag var intresserad av att ta del av nyheter utan bruset
                        runtomkring (annonser, exponering mot annat material
                        etc.) och tog tillfället i akt under en
                        "bygg-en-modul"-kurs för att skapa början av en
                        automatisk RSS-feed-generator-<em>ish</em>.
                    </h3>
                </div>
            </div>

            {/* Mobile */}
            <div className="mobile-container relative flex flex-col  md:hidden">
                <div className="bg-white min-h-40 relative border-2 mb-6">
                    <h3 className="title p-2 min-w-max border-b-2 text-2xl text-center underline decoration-double">
                        <a
                            href="https://github.com/lambergmiki/matgeneratorn"
                            target="_blank"
                        >
                            Matgeneratorn.se
                        </a>
                    </h3>
                    <h3 className="description p-2">
                        Mitt första större projekt med JavaScript. Möjligen
                        också mitt första "utvecklingsuppdrag", eftersom min fru
                        bad mig skapa den här applikationen. Vill du se den
                        live? Du hittar den på{" "}
                        <a
                            className="underline decoration-double"
                            href="https://www.matgeneratorn.se"
                            target="_blank"
                        >
                            matgeneratorn.se
                        </a>
                        .
                    </h3>
                </div>

                <div className="bg-white min-h-40 relative">
                    <div className="bg-white min-h-40 relative border mb-6">
                        <h3 className="title p-2 min-w-max border-b-2 text-2xl text-center underline decoration-double">
                            <a
                                href="https://github.com/lambergmiki/IoT-Summer-2025"
                                target="_blank"
                            >
                                My first IoT project
                            </a>
                        </h3>
                        <h3 className="description p-2">
                            Hur man tar hand om pizzadeg när klimatet inte går
                            att lita på. Jättekul att för första gången se hur
                            hårdvara och mjukvara kan interagera.
                        </h3>
                    </div>
                </div>

                <div className="bg-white min-h-40 relative border mb-6">
                    <h3 className="title p-2 min-w-max border-b-2 text-2xl text-center underline decoration-double">
                        <a
                            href="https://github.com/lambergmiki/dotfiles"
                            target="_blank"
                        >
                            Dotfiles
                        </a>
                    </h3>
                    <h3 className="description p-2">
                        {" "}
                        Efter att ha ominstallerat mjukvara och diverse
                        konfigurationer i otaliga miljöer hittade jag via en
                        bekant "dotfiles". Konfigurationsfiler säkerhetskopieras
                        och ett shellscript förenklar livet vid nya
                        installationer.
                    </h3>
                </div>

                <div className="bg-white min-h-40 relative border mb-6">
                    <h3 className="title p-2 min-w-max border-b-2 text-2xl text-center underline decoration-double">
                        <a
                            href="https://github.com/lambergmiki/Alien-Invasion"
                            target="_blank"
                        >
                            Alien Invasion
                        </a>
                    </h3>
                    <h3 className="description p-2">
                        Min inkörsport till programmering blev Alien Invasion i
                        Python. Jag rekommenderar varmt
                        <a
                            href="https://nostarch.com/python-crash-course-3rd-edition"
                            target="_blank"
                        >
                            <p className="underline decoration-double text-balance">
                                Python Crash Course by Eric Matthes
                            </p>
                        </a>
                        till alla (med lite eller begränsad erfarenhet) som är
                        nyfikna på programmering. Jag har inte rört repot sedan
                        dess.
                        <em> Det har inte ens en README, hehe.</em>
                    </h3>
                </div>

                <div className="bg-white min-h-40 relative border mb-6">
                    <h3 className="title p-2 min-w-max border-b-2 text-2xl text-center underline decoration-double">
                        <a
                            href="https://www.npmjs.com/package/rss2html"
                            target="_blank"
                        >
                            rss2html
                        </a>
                    </h3>
                    <h3 className="description p-2">
                        Jag var intresserad av att ta del av nyheter utan bruset
                        runtomkring (annonser, exponering mot annat material
                        etc.) och tog tillfället i akt under en
                        "bygg-en-modul"-kurs för att skapa början av en
                        automatisk RSS-feed-generator-<em>ish</em>.
                    </h3>
                </div>
            </div>
        </section>
    );
};

export default Projects;

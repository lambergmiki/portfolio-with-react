const About = () => {
    return (
        <section id="about" className="p-10 pl-6 text-xl">
            <p className="text-5xl text-center mb-10">Om mig</p>
            <p className="text-2xl text-center mb-20">
                Miki heter jag och går andra året Webbprogrammerare på
                Linnéuniversitetet.<br></br>
                Jag gillar att lösa problem tillsammans med andra tycker om att
                lära mig ny teknik som är nyttig.
                <br></br>Förutom kod tycker jag väldigt mycket om mat och
                matlagning tillsammans med, helst italiensk, fotboll, och att
                spendera tid med min familj.
            </p>
            <div className="tech-stack-container flex flex-col">
                <p className="flex justify-center text-4xl tracking-wider font-extrabold">
                    FRONTEND
                </p>

                <div className="flex justify-end">
                    <div className="icon-container flex flex-col">
                        <img
                            src={"/icons/icons8-javascript-48.png"}
                            alt="JavaScript logo"
                            className=""
                        />

                        <img
                            src={"/icons/icons8-css-48.png"}
                            alt="CSS logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-html5-48.png"}
                            alt="HTML5 logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-tailwind-css-48.png"}
                            alt="TailwindCSS logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-react-48.png"}
                            alt="React logo"
                            className=""
                        />
                    </div>
                </div>

                <p className="flex justify-center text-4xl tracking-wider font-extrabold">
                    BACKEND
                </p>
                <div className="flex justify-end">
                    <div className="icon-container flex flex-col">
                        <img
                            src={"/icons/icons8-java-48.png"}
                            alt="Java logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-express-js-48.png"}
                            alt="Express.js logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-nodejs-48.png"}
                            alt="Node.js logo"
                            className=""
                        />
                        <img
                            src={"/icons/icons8-mongodb-48.png"}
                            alt="MongoDB logo"
                            className=""
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;

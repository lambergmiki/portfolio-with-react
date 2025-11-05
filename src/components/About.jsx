const About = () => {
  return (
    <section id="about" className="p-10 pl-6 text-xl">
      <p className="text-5xl text-center text-secondary-white mb-10">Om mig</p>
      <p className="text-2xl text-center mb-20">
        Miki heter jag och går andra året Webbprogrammerare på Linnéuniversitetet.<br></br>
        Jag gillar att lösa problem tillsammans med andra och att lära mig ny teknik som är nyttig.
        <br></br>Förutom kod tycker jag väldigt mycket om mat och matlagning tillsammans med (helst
        italiensk) fotboll, och att spendera tid med min familj.
      </p>
      <p className="text-5xl text-center tracking-wider font-extrabold text-secondary-white mb-10">
        Tech Stack
      </p>

      <div className="flex flex-wrap justify-center gap-8">
        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-javascript-48.png"} alt="JavaScript logo" className="" />
          <p className="mt-2 text-lg font-medium">JavaScript</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-css-48.png"} alt="CSS logo" className="" />
          <p className="mt-2 text-lg font-medium">CSS</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-html5-48.png"} alt="HTML5 logo" className="" />
          <p className="mt-2 text-lg font-medium">HTML</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-tailwind-css-48.png"} alt="TailwindCSS logo" className="" />
          <p className="mt-2 text-lg font-medium">Tailwind</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-express-js-48.png"} alt="Express.js logo" className="" />
          <p className="mt-2 text-lg font-medium">Express</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-nodejs-48.png"} alt="Node.js logo" className="" />
          <p className="mt-2 text-lg font-medium">Node</p>
        </div>

        <div className="flex flex-col items-center">
          <img src={"/icons/icons8-mongodb-48.png"} alt="MongoDB logo" className="" />
          <p className="mt-2 text-lg font-medium">MongoDB</p>
        </div>
      </div>
      <div id="learning-tech">
        <p className="text-center text-2xl md:text-4xl font-extrabold mt-20 mb-10">
          Lär mig just nu...
        </p>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex flex-col items-center">
            <img src={"/icons/icons8-react-48.png"} alt="React logo" className="" />
            <p className="mt-2 text-lg font-medium">React</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={"/icons/icons8-typescript-48.png"} alt="TypeScript logo" className="" />
            <p className="mt-2 text-lg font-medium">TypeScript</p>
          </div>

          <div className="flex flex-col items-center">
            <img src={"/icons/icons8-postgresql-48.png"} alt="PostgreSQL logo" className="" />
            <p className="mt-2 text-lg font-medium">PostgreSQL</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

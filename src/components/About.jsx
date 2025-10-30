const About = () => {
  return (
    <section id="about" className="p-10 pl-6 text-xl">
      <p className="text-5xl text-center mb-10">Om mig</p>
      <p className="text-2xl text-center mb-20">
        Miki heter jag och går andra året Webbprogrammerare på Linnéuniversitetet.<br></br>
        Jag gillar att lösa problem tillsammans med andra och att lära mig ny teknik som är nyttig.
        <br></br>Förutom kod tycker jag väldigt mycket om mat och matlagning tillsammans med (helst
        italiensk) fotboll, och att spendera tid med min familj.
      </p>
      <div className="tech-stack-container flex flex-col">
        <p className="text-5xl text-center tracking-wider font-extrabold mb-20">Tech Stack</p>
        <p className="flex justify-center text-2xl md:text-4xl font-extrabold mb-20">
          Comfort zone
        </p>

        <div className="icon-container flex flex-row justify-center mb-10 gap-2">
          <img src={"/icons/icons8-javascript-48.png"} alt="JavaScript logo" className="" />

          <img src={"/icons/icons8-css-48.png"} alt="CSS logo" className="" />
          <img src={"/icons/icons8-html5-48.png"} alt="HTML5 logo" className="" />
          <img src={"/icons/icons8-tailwind-css-48.png"} alt="TailwindCSS logo" className="" />
          <img src={"/icons/icons8-express-js-48.png"} alt="Express.js logo" className="" />
          <img src={"/icons/icons8-nodejs-48.png"} alt="Node.js logo" className="" />
          <img src={"/icons/icons8-mongodb-48.png"} alt="MongoDB logo" className="" />
        </div>
      </div>
      <div>
        <p className="flex justify-center text-2xl md:text-4xl font-extrabold mt-10 mb-10">
          Lär mig just nu...
        </p>
        <div className="icon-container flex flex-row justify-center mb-10 gap-4">
          <img src={"/icons/icons8-react-48.png"} alt="React logo" className="" />
          <img src={"/icons/icons8-typescript-48.png"} alt="TypeScript logo" className="" />
          <img src={"/icons/icons8-postgresql-48.png"} alt="PostgreSQL logo" className="" />
        </div>
      </div>
    </section>
  )
}

export default About

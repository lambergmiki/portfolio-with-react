const Contact = () => {
  return (
    <section id="contact" className="relative p-10 pl-6 mb-20 text-xl">
      <div className="icons-container flex flex-col">
        <h2 className="text-5xl text-center mb-10">Jag söker jobb! </h2>
        <p className="text-center text-balance mb-10 lg:text-2xl">
          Inför stundande flytt tillbaka till Sverige söker jag mitt första jobb som utvecklare.
          Tycker du att min profil verkar intressant? Tveka på inte på att höra av dig. Du hittar
          mig på...
        </p>

        <div className="flex justify-center transition-transform duration-150 hover:rotate-12 ">
          <a href="mailto:miki@mikilamberg.me">
            <img src={"/icons/icons8-email-48.png"} alt="email icon" className="flex" />
          </a>
        </div>

        <div className="flex justify-center transition-transform duration-150 hover:-rotate-12">
          <a href="https://www.github.com/lambergmiki/" target="_blank">
            <img src={"/icons/github50.png"} alt="GitHub logo" className="flex flex-col" />
          </a>
        </div>

        <div className="flex justify-center transition-transform duration-150 hover:rotate-12">
          <a href="https://www.linkedin.com/in/lambergmiki/" target="_blank">
            <img src={"/icons/linkedin48.png"} alt="LinkedIn logo" className="flex flex-col" />
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact

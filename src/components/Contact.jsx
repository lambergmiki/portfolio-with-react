const Contact = () => {
  return (
    <section id="contact" className="relative p-10 pl-6 mb-20 text-xl">
      <div className="icons-container flex flex-col">
        <h2 className="text-5xl text-center text-secondary-white mb-10">Kontakta mig</h2>
        <p className="text-center text-balance mb-10 lg:text-2xl">
          Jag pratar gärna tech! <br></br>Du når mig enklast på mejl eller LinkedIn.
        </p>

        <div className="flex justify-center transition-transform duration-150 hover:rotate-12 ">
          <a href="mailto:miki@mikilamberg.me">
            <img src={"/icons/icons8-email-48.png"} alt="email icon" className="flex" />
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

const Hero = () => {
  return (
    <section className="flex flex-row p-10 h-[500px]">
      <div className="">
        <img
          className="size-36 rounded-full lg:size-96 lg:mt-28"
          src="/images/profilbild.jpg"
          alt="Profile picture"
        ></img>
        <div className="flex flex-row">
          <p className="text-xl animate-pulse mt-10 lg:text-4xl">
            Full stack web developer loading...
            <span className="text-sm"> Looking for my GitHub? Right here -&gt; </span>
          </p>

          <div className="mt-8 ml-2 transition-transform duration-150 hover:-rotate-12">
            <a href="https://www.github.com/lambergmiki/" target="_blank">
              <img src={"/icons/github50.png"} alt="GitHub logo" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero

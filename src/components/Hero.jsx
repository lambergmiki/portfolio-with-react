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
          </p>
          <span className="text-xs ml-4 mt-12 lg:text-lg">
            Psst, looking for my GitHub? Right here -&gt;
          </span>

          <div className="mt-20 ml-2 scale-150 lg:scale-100 lg:mt-8 transition-transform duration-150 hover:-rotate-12">
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

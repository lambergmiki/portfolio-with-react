
const Hero = () => {
  return (
    <section id="hero" className="flex p-10">
        {/* Give headliner 1/3 of Hero container and 2/3 to 3d object */}
        <div id="headliner" className="relative basis-1/3 p-10 pl-6 ">placeholder for headline</div>
        <div id="3dobject" className="relative basis-2/3 p-10 pl-6">placeholder for interactive 3d object</div>
    </section>
  )
}

export default Hero
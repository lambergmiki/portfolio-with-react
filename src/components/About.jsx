const About = () => {
  return (
    <section id="about" className="p-10 pl-6 text-xl">
      <p className="text-7xl text-center mb-20">Tech Stack</p>
      <p className="text-2xl text-center mb-10">
        As a second-year student, I've started doing more coding on the side.
        These are some of the technologies I've learned along the way, some more
        than others.
      </p>
      <div className="tech-stack-container flex flex-col">
        {/* TODO: Add a simple animation to each stack that works across all screens. Possibly size up icons, too. */}
        <p className="flex justify-center text-4xl font-extrabold">FRONTEND</p>
        <div className="flex justify-end">
          <div className="icon-container flex flex-col">
            <img
              src={"/icons/icons8-javascript-48.png"}
              alt="JavaScript logo"
              className=""
            />
            <img src={"/icons/icons8-css-48.png"} alt="CSS logo" className="" />
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

        <p className="flex justify-center text-4xl font-extrabold">BACKEND</p>
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

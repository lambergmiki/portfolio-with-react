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
                    <p className="text-xl text-secondary-white animate-pulse mt-10 lg:text-4xl">
                        Full stack web developer loading...
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Hero;

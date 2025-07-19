import React from "react";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-primary-white text-3xl md:text-4xl lg:text-5xl">
        miki lamberg
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        <a
          className="text-base tracking-wider transition-color hover:bg-primary-white"
          href="#"
        >
          mlamb
        </a>

        <a
          className="text-base tracking-wider transition-color hover:bg-primary-white"
          href="#"
        >
          mlamb
        </a>

        <a
          className="text-base tracking-wider transition-color hover:bg-primary-white"
          href="#"
        >
          mlamb
        </a>

        <a
          className="text-base tracking-wider transition-color hover:bg-primary-white"
          href="#"
        >
          mlamb
        </a>

        <a
          className="text-base tracking-wider transition-color hover:bg-primary-white"
          href="#"
        >
          mlamb
        </a>
      </nav>
    </header>
  );
};

export default Header;

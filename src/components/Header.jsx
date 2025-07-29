import "boxicons/css/boxicons.min.css";

const Header = () => {
  // Simple function to toggle the mobile menu
  const toggleMobileMenu = () => {
    const mobileMenu = document.querySelector("#mobileMenu");

    if (mobileMenu.classList.contains("hidden")) {
      mobileMenu.classList.remove("hidden");
    } else {
      mobileMenu.classList.add("hidden");
    }
  };
  return (
    <header className="relative flex justify-between items-center py-4 px-4 lg:px-20">
      <h1 className="text-primary-white text-3xl md:text-4xl lg:text-5xl">
        miki lamberg
      </h1>

      <nav className="hidden md:flex items-center gap-12">
        {/* -scale-y-100 mirrors element on its y-axis */}
        <a
          className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#about"
        >
          about me
        </a>
        <a
          className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#projects"
        >
          projects
        </a>
        <a
          className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#contact"
        >
          contact
        </a>
      </nav>

      {/* Mobile Menu button, only visible on Mobile.
      The toggle-function is attached to the 'onClick' property of the button element. 
      */}
      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-3xl p-2 z-50"
      >
        <i class="bx bx-menu"></i>
      </button>

      {/* Mobile menu - hidden by default.
    Positioned 64px from the top (top-16), and anchored to all other edges (bottom-0, left-0, right-0). */}
      <div
        id="mobileMenu"
        className="hidden fixed top-16 bottom-0 right-0 left-0 p-5 md:hidden z-40"
      >
        <nav className="flex flex-col gap-6 items-center">
          {/* items-center centers items horizontally inside the parent container */}
          {/* -scale-y-100 mirrors element on its y-axis */}
          <a
            className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
            href="#about"
          >
            about me
          </a>
          <a
            className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
            href="#projects"
          >
            projects
          </a>
          <a
            className="text-base text-primary-white tracking-wider transition-all duration-300 hover:-scale-y-125"
            href="#contact"
          >
            contact
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;

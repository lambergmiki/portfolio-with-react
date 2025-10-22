import "boxicons/css/boxicons.min.css"
import { useState } from "react"

const Header = () => {
  // menuOpen is the state variable (aka flag), setMenuOpen is the function toggling the flag
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <header className="flex justify-between items-center py-4 px-4 lg:px-20">
      <h2 className="text-4xl text-primary-white lg:text-8xl">Miki Lamberg</h2>

      {/* Desktop menu */}

      <nav className="hidden md:flex items-center gap-12">
        {/* -scale-y-100 mirrors element on its y-axis */}

        <a
          className="text-3xl p-2 tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#about"
        >
          om mig
        </a>
        <a
          className="text-3xl p-2 tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#projects"
        >
          projekt
        </a>
        <a
          className="text-3xl p-2 tracking-wider transition-all duration-300 hover:-scale-y-125"
          href="#contact"
        >
          kontakta mig
        </a>
      </nav>

      {/* Mobile Menu (hamburger button)
       */}
      <button
        // When clicked, the state of menuOpen is changed. Starting value is false.
        // A function is passed to setMenuOpen and React provides the current state as previousState.
        onClick={() => setMenuOpen((previousState) => !previousState)}
        className="md:hidden text-4xl mt-2 z-50"
      >
        <i className={`bx ${menuOpen ? "bx-x" : "bx-menu"}`}></i>
      </button>

      {/* Mobile menu (renders only when menuOpen is true)
    Positioned 64px from the top (top-16), and anchored to all other edges except right. */}
      {menuOpen && (
        <div className="absolute top-0 left-0 right-0 p-5 z-40">
          <nav className="flex flex-col gap-6 items-center">
            {/* items-center centers items horizontally inside the parent container */}
            <a onClick={() => setMenuOpen(false)} className="text-xl tracking-wider" href="#about">
              om mig
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="text-xl tracking-wider"
              href="#projects"
            >
              projekt
            </a>
            <a
              onClick={() => setMenuOpen(false)}
              className="text-xl tracking-wider"
              href="#contact"
            >
              kontakta mig
            </a>
          </nav>
        </div>
      )}
    </header>
  )
}

export default Header

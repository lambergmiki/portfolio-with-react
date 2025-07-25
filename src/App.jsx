import Header from "./components/Header";
import Hero from "./components/Hero"
import Timeline from "./components/Timeline";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <img className="absolute -z-60" src="images/gradient-background.png" />
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

import Header from "./components/Header";
import Hero from "./components/Hero"
import Timeline from "./components/Timeline";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";

export default function App() {
  return (
    <main>
      <Header />
      <Hero />
      <Timeline />
      <About />
      <Projects />
      <Contact />
    </main>
  );
}

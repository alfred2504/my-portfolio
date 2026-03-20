import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TechStack from "../components/TechStack";
import Projects from "../components/Projects";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <TechStack />
      <Projects />
    </main>
  );
}
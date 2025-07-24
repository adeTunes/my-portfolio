import About from "./components/about";
import Contact from "./components/contact";
import Footer from "./components/footer";
import Hero from "./components/hero";
import NavBar from "./components/nav-bar";
import Projects from "./components/projects";

export default function Home() {
  return (
    <main className="bg-white">
      <NavBar />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}

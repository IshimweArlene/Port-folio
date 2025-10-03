import Hero from "../components/Hero";
import About from "../components/about";
import Skills from "../components/Skills";
import Projects from "../components/Project";
import Contact from "../components/contact";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
};

export default Index;

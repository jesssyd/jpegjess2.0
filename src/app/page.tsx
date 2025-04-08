import Hero from "../components/Hero";
import About from "../components/About";
import Edu from "../components/Edu";
import Contact from "../components/Contact";
import Carousel from "../components/Carousel";

export default function Home() {
  return (
    <main>
      <Hero />
      <About />
      <Carousel />
      <Edu />
      <Contact />
    </main>
  );
}

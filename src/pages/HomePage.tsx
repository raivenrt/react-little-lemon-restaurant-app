import Hero from "../components/Hero/Hero";
import Highlights from "../components/Highlights/Highlights";
import Testimonials from "../components/Testimonials/Testimonials";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Highlights />
      <Testimonials />
      <section id="about">About Section</section>
    </>
  );
};

export default HomePage;

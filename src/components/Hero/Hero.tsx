import marioAndAdrianJpg from "../../assets/mario_adrian.jpg";

import "./hero.css";

const Hero = () => {
  return (
    <section id="hero">
      <section className="container">
        <figure>
          <img src={marioAndAdrianJpg} alt="chef mario and adrian" className="responsive-img rounded" />
        </figure>
        <section className="content">
          <section className="header">
            <h1 className="subtitle">Little Lemon</h1>
            <h3>Chicago</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam odit, distinctio delectus animi illo
              excepturi porro expedita voluptatibus facere quos.
            </p>
          </section>
          <button className="rounded btn">Reserve a Table</button>
        </section>
      </section>
    </section>
  );
};

export default Hero;

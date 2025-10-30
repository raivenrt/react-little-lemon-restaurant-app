import HighlightCard from "./HighlightCard/HighlightCard";

import greekSaladJpg from "../../assets/greek salad.jpg";
import bruchettaSvg from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

import "./highlights.css";

const Highlights = () => {
  return (
    <section id="highlights">
      <section className="container">
        <header className="highlights__header">
          <h2 className="subtitle">Specials</h2>
          <button className="btn rounded">Online Menu</button>
        </header>
        <section className="grid-layout">
          <HighlightCard
            title="Greek salad"
            imgSrc={greekSaladJpg}
            price={12.99}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dicta laborum enim officia eaque
          voluptate! Praesentium, molestiae similique minima esse ipsam nam."
          />

          <HighlightCard
            title="Bruchetta"
            imgSrc={bruchettaSvg}
            price={5.99}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dicta laborum enim officia eaque
          voluptate! Praesentium, molestiae similique minima esse ipsam nam."
          />

          <HighlightCard
            title="Lemon Dessert"
            imgSrc={lemonDessert}
            price={5.0}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dicta laborum enim officia eaque
          voluptate! Praesentium, molestiae similique minima esse ipsam nam."
          />
        </section>
      </section>
    </section>
  );
};

export default Highlights;

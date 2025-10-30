import HighlightCard from "./HighlightCard/HighlightCard";

import greekSaladJpg from "../../assets/greek salad.jpg";
import bruchettaSvg from "../../assets/bruchetta.svg";
import lemonDessert from "../../assets/lemon dessert.jpg";

import "./highlights.css";
import GridLayout from "../GridLayout/GridLayout";

const DATA = [
  {
    title: "Greek Salad",
    imgSrc: greekSaladJpg,
    price: 12.99,
  },
  {
    title: "Bruchetta",
    imgSrc: bruchettaSvg,
    price: 5.99,
  },
  {
    title: "Lemon Dessert",
    imgSrc: lemonDessert,
    price: 5.0,
  },
];

const Highlights = () => {
  return (
    <section id="highlights">
      <section className="container">
        <header className="highlights__header">
          <h2 className="subtitle">Specials</h2>
          <button className="btn rounded">Online Menu</button>
        </header>
        <GridLayout>
          {DATA.map((highlight) => (
            <HighlightCard
              {...highlight}
              description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dicta laborum enim officia eaque
          voluptate! Praesentium, molestiae similique minima esse ipsam nam."
            />
          ))}
        </GridLayout>
      </section>
    </section>
  );
};

export default Highlights;

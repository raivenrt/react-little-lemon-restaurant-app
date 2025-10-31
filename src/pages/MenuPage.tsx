import GridLayout from "../components/GridLayout/GridLayout";
import HighlightCard from "../components/Highlights/HighlightCard/HighlightCard";

import greekSaladJpg from "../assets/greek salad.jpg";
import bruchettaSvg from "../assets/bruchetta.svg";
import lemonDessert from "../assets/lemon dessert.jpg";

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

function randInt(max: number) {
  return Math.ceil(Math.random() * max);
}

const MenuPage = () => {
  return (
    <section className="container" style={{ padding: "3rem 0" }}>
      <GridLayout>
        {Array.from({ length: randInt(20) }, () => DATA[randInt(DATA.length) - 1]).map((highlight) => (
          <HighlightCard
            {...highlight}
            description="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus dicta laborum enim officia eaque
          voluptate! Praesentium, molestiae similique minima esse ipsam nam."
          />
        ))}
      </GridLayout>
    </section>
  );
};

export default MenuPage;

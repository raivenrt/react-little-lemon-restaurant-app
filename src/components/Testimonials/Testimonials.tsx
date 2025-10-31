import GridLayout from "../GridLayout/GridLayout";
import css from "./testimonials.module.css";

import testimonials1 from "../../assets/testimonials1.jpg";
import testimonials2 from "../../assets/testimonials2.jpg";
import testimonials3 from "../../assets/testimonials3.jpg";
import testimonials4 from "../../assets/testimonials4.jpg";

const DATA = [
  {
    id: 1,
    rating: 4.5,
    userPhoto: testimonials1,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta? Porro tempora natus cupiditate sapiente!",
    name: "Adam Doe",
  },
  {
    id: 2,
    rating: 4.8,
    userPhoto: testimonials2,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta? Porro tempora natus cupiditate sapiente!",
    name: "Maria Doe",
  },
  {
    id: 3,
    rating: 4.3,
    userPhoto: testimonials3,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta? Porro tempora natus cupiditate sapiente!",
    name: "Sophia Doe",
  },
  {
    id: 4,
    rating: 4.1,
    userPhoto: testimonials4,
    review:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt, dicta? Porro tempora natus cupiditate sapiente!",
    name: "Natalia Doe",
  },
];

const Testimonials = () => {
  return (
    <section className={css.testimonials}>
      <section className="container">
        <h2 className={`subtitle ${css["section-title"]}`}>Testimonials</h2>
        <GridLayout>
          {DATA.map((testimonial) => (
            <section key={testimonial.id} className={css.testimonial}>
              <span className={css.testimonial__rating}>{testimonial.rating}</span>
              <section className={css["testimonial__user-info"]}>
                <figure>
                  <img src={testimonial.userPhoto} alt={testimonial.name} className="responsive-img rounded" />
                </figure>
                <span>{testimonial.name}</span>
              </section>
              <p className={css.testimonial__review}>{testimonial.review}</p>
            </section>
          ))}
        </GridLayout>
      </section>
    </section>
  );
};

export default Testimonials;

import BookingForm from "../components/BookingForm/BookingForm";
import juicyBurgerPng from "../assets/juicy-burger.png";
import GridLayout from "../components/GridLayout/GridLayout";

const BookingPage = () => {
  return (
    <>
      <section className="container">
        <GridLayout>
          <BookingForm />
          <figure>
            <img src={juicyBurgerPng} alt="juicy burger png" className="responsive-img" />
          </figure>
        </GridLayout>
      </section>
    </>
  );
};

export default BookingPage;

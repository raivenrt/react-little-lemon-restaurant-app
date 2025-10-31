import css from "./booking-form.module.css";

const BookingForm = () => {
  return (
    <>
      <form className={css.bookingForm}>
        <h2 className="subtitle"> Reserve a Table</h2>
        <section>
          <label htmlFor="res-date">Choose date</label>
          <input type="date" id="res-date" />
        </section>
        <section>
          <label htmlFor="res-time">Choose time</label>
          <select id="res-time ">
            <option>17:00</option>
            <option>18:00</option>
            <option>19:00</option>
            <option>20:00</option>
            <option>21:00</option>
            <option>22:00</option>
          </select>
        </section>
        <section>
          <label htmlFor="guests">Number of guests</label>
          <input type="number" placeholder="1" min="1" max="10" id="guests" />
        </section>
        <section>
          <label htmlFor="occasion">Occasion</label>
          <select id="occasion">
            <option>Birthday</option>
            <option>Anniversary</option>
          </select>
        </section>
        <button type="submit" className="btn rounded">
          Make Your reservation
        </button>
      </form>
    </>
  );
};

export default BookingForm;

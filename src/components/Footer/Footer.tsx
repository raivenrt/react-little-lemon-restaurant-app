import restrantFoodJPG from "../../assets/restauranfood.jpg";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <section className="footer">
          <figure>
            <img src={restrantFoodJPG} alt="Footer Logo" className="responsive-img rounded" />
          </figure>
          <ul>
            <h4>Doormat Navigation</h4>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/menu">Menu</a>
            </li>
            <li>
              <a href="/reservations">Reservations</a>
            </li>
            <li>
              <a href="/order-online">Order Online</a>
            </li>
            <li>
              <a href="/login">Login</a>
            </li>
          </ul>
          <ul>
            <h4>Contact</h4>
            <li>1234 Lemon St.</li>
            <li>City, State, ZIP</li>
            <li>(123) 456-7890</li>
          </ul>
          <ul>
            <h4>Social Media Links</h4>
            <li>
              <a href="https://www.facebook.com">Facebook</a>
            </li>
            <li>
              <a href="https://www.instagram.com">Instagram</a>
            </li>
            <li>
              <a href="https://www.twitter.com">Twitter</a>
            </li>
          </ul>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

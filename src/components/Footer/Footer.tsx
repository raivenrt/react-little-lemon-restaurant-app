import { Link } from "react-router-dom";

import restrantFoodJPG from "../../assets/restauranfood.jpg";
import "./footer.css";
import GridLayout from "../GridLayout/GridLayout";

const Footer = () => {
  return (
    <footer>
      <section className="container">
        <section className="footer">
          <figure>
            <img src={restrantFoodJPG} alt="Footer Logo" className="responsive-img rounded" />
          </figure>
          <section className="info">
            <GridLayout>
              <ul>
                <h4>Doormat Navigation</h4>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
                <li>
                  <Link to="/menu">Menu</Link>
                </li>
                <li>
                  <Link to="/reservations">Reservations</Link>
                </li>
                <li>
                  <Link to="/order-online">Order Online</Link>
                </li>
                <li>
                  <Link to="/login">Login</Link>
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
            </GridLayout>
          </section>
        </section>
      </section>
    </footer>
  );
};

export default Footer;

import { useEffect, useState } from "react";

import Logo from "../../assets/logo.svg";
import HamburgerIcon from "../../assets/svg-icons/hamburger.svg";

import "./header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenuHandler() {
    setIsMenuOpen((prevState) => !prevState);
  }

  return (
    <header>
      <div className="container">
        <section>
          <figure>
            <img src={Logo} alt="Little Lemon Logo" />
          </figure>
          <figure className="icon hidden-md" onClick={toggleMenuHandler}>
            <img src={HamburgerIcon} alt="Menu" className="responsive-img" />
          </figure>
          <nav className={isMenuOpen ? "active" : ""}>
            <ul>
              <li>
                <NavLink to="/" alt="Home">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" alt="About">
                  About
                </NavLink>
              </li>
              <li>
                <NavLink to="/menu" alt="Menu">
                  Menu
                </NavLink>
              </li>
              <li>
                <NavLink to="/reservations" alt="Reservations">
                  Reservations
                </NavLink>
              </li>
              <li>
                <NavLink to="/order-online" alt="Order Online">
                  Order Online
                </NavLink>
              </li>
              <li>
                <NavLink to="/login" alt="Login">
                  Login
                </NavLink>
              </li>
            </ul>
          </nav>
        </section>
      </div>
    </header>
  );
};

export default Header;

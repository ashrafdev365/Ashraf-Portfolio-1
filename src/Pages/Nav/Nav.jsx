import React, { useEffect, useState } from "react";
import "./nav.css";
import { NavLink } from "react-router-dom";

export const Nav = () => {
  const [menu, setmenu] = useState("");

  const handleOpenMenu = () => {
    return setmenu("70%");
  };
  const handleCloseMenu = () => {
    return setmenu("0%");
  };

  useEffect(() => {
    window.innerWidth < 1100 ? setmenu("0%") : setmenu("500px");
  }, []);

  return (
    <>
      <nav>
        <div className="nav_main_div">
          <div className="nav_logo">
            <img src="assetes/Images/Logo.svg" alt="portfolio" />
            <h1>Ashraf Dev</h1>
          </div>

          <div className="menu">
            <img
              src="assetes/Icons/menu.svg"
              alt="icons"
              onClick={handleOpenMenu}
            />
          </div>
          <div className="slide" style={{ width: menu }}>
            <div className="crose" onClick={handleCloseMenu}>
              <img
                src="assetes/Icons/x2.png"
                style={{ width: "50px" }}
                alt="icons"
                className="crose_img"
              />
            </div>
            <ul className="nav_links_div">
              <NavLink exact to="/">
                <div>Home</div>
              </NavLink>
              <NavLink to="/projects">
                <div>Works</div>
              </NavLink>
              <NavLink to="/service">
                <div>Service</div>
              </NavLink>
              <NavLink to="/">
                <div>About Me</div>
              </NavLink>
              <NavLink to="/contact">
                <div className="nav_contact">Contact Us</div>
              </NavLink>
            </ul>
          </div>
          <NavLink to="/contact">
            <button className="talk_btn">Let's Talk</button>
          </NavLink>
        </div>
      </nav>
    </>
  );
};

export const Footer = () => {
  return (
    <>
      <footer>
        <div className="nav_logo">
          <img src="assetes/Images/Logo.svg" alt="portfolio" />
          <h1>Ashraf Dev</h1>
        </div>

        <ul className="footer_links_div">
          <NavLink exact to="/">
            <li>Home</li>
          </NavLink>
          <NavLink exact to="/">
            <li>Works</li>
          </NavLink>
          <NavLink exact to="/">
            <li>Service</li>
          </NavLink>
          <NavLink exact to="/">
            <li>About Me</li>
          </NavLink>
          <NavLink exact to="/">
            <li>Email</li>
          </NavLink>
        </ul>

        <div className="social_icons">
          <a
            href="https://www.facebook.com/ashrafdev.ashraf/"
            target="_blank"
            title="ashraf dev"
          >
            <img src="assetes/Icons/fb.png" alt="ashraf dev" />
          </a>
          <a
            href="https://www.instagram.com/ashrafdev_365/"
            target="_blank"
            title="ashraf dev"
          >
            <img src="assetes/Icons/insta.png" alt="ashraf dev" />
          </a>
          <a
            href="https://twitter.com/Ashraf_365"
            target="_blank"
            title="ashraf dev"
          >
            <img src="assetes/Icons/twitter.png" alt="ashraf dev" />
          </a>
          <a
            href="https://www.linkedin.com/in/ashraf-dev-297301206/"
            target="_blank"
            title="ashraf dev"
          >
            <img src="assetes/Icons/in.png" alt="ashraf dev" />
          </a>
          <a
            href="https://github.com/ashrafdev365"
            target="_blank"
            title="ashraf dev"
          >
            <img src="assetes/Icons/github.png" alt="ashraf dev" />
          </a>
        </div>
      </footer>
    </>
  );
};

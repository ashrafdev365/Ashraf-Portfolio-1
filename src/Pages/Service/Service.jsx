import React, { useEffect } from "react";
import "./service.css";
import { Nav, Footer } from "../Nav/Nav";
const Service = () => {
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  const img = "assetes/Images/";

  return (
    <>
      <Nav />
      <section className="service_contants">
        <h1>Service</h1>
        <div className="service_page">
          <div className="service_divs">
            <img src={`${img}geom-13.png`} alt="Web Design" />
            <h1>Web Design</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
          <div className="service_divs">
            <img src={`${img}code.png`} alt="Front end Dev" />
            <h1>Front end Dev</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
          <div className="service_divs">
            <img src={`${img}back.png`} alt="Backend Dev" />
            <h1>Backend Firebase</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
          <div className="service_divs">
            <img src={`${img}user.png`} alt="User Auth" />
            <h1>User Auth</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
          <div className="service_divs">
            <img src={`${img}icons8-seo-100.png`} alt="On page SEO" />
            <h1>On Page SEO</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
          <div className="service_divs">
            <img src={`${img}icons8-launch.gif`} alt="Deploy" />
            <h1>Deploy</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Service;

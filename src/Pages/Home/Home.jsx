import React from "react";
import "./home.css";
import "./reponsive.css";

import { Nav, Footer } from "../Nav/Nav";
import {
  Button,
  HomeProjects,
  LanguageName,
  Proof,
} from "../Components/Components";

const Home = () => {
  //this is all for firebase real time data base
  const [user, setuser] = React.useState({
    email: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { email } = user;

    if (email) {
      const res = await fetch(
        "https://ashrafdev-ae6c3-default-rtdb.firebaseio.com/email.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
          }),
        }
      );
      if (res) {
        setuser({
          email: "",
        });
        alert("Submit Email");
      }
    } else {
      alert("Plzz Fill all the Data");
    }
  };

  return (
    <>
      <img src="assetes/Images/dots.png" alt="ashraf dev" className="dots" />
      <img
        src="assetes/Images/circle.png"
        alt="ashraf dev"
        className="dinond"
      />
      <Nav />
      {/******************header section start**********************/}
      <header>
        <div className="header_contant">
          <h1>
            <span>Hi,</span> I’m Ashraf Dev
          </h1>
          <p>
            I’m a Self Taught Front-end Web Developer passionate about helping
            creative professionals to increase their worth by improving their
            craft and process.
          </p>
          <Button name="Contect Me" link="contact"></Button>
        </div>

        <div className="hero_images">
          <img
            src="assetes/Images/heroBack.svg"
            alt="ashraf dev"
            className="hero_back"
          />
          <img
            src="assetes/Images/hero2.svg"
            alt="ashraf dev"
            className="hero_back"
            className="hero_img"
          />
        </div>
      </header>
      {/******************header section end**********************/}

      {/******************service section start**********************/}
      <section className="service_section">
        <div className="service_contant">
          <h1>
            My awoesome<span>Services</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            cupiditate dolor. Provident, sit! Sequi in recusandae, inventore
            molestias, voluptates saepe
          </p>
          <Button name="View More" link="service"></Button>
        </div>

        <div className="service_main_div">
          <img
            src="assetes/Images/Polygon.png"
            className="polygon"
            alt="ashraf dev"
          />
          {/*********service box contant start***********/}
          <div className="service_div" id="web_design">
            <img src="assetes/Images/geom-13.png" alt="web design" />
            <h2>Web design</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
            <button>
              Learn More
              <img src="assetes/Icons/right-arrow.png" alt="right arrow" />
            </button>
          </div>

          <div className="service_div" id="front_end">
            <img src="assetes/Images/code.png" alt="Front end Development" />
            <h2>Front end Development</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
            <button>
              Learn More
              <img src="assetes/Icons/right-arrow.png" alt="ashraf dev" />
            </button>
          </div>

          <div className="service_div" id="back_end">
            <img
              src="assetes/Images/back.png"
              className="back_end_img"
              alt="BackEnd Firebase"
            />
            <h2>BackEnd Firebase</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
              cupiditate dolor.
            </p>
            <button>
              Learn More
              <img src="assetes/Icons/right-arrow.png" alt="ashraf dev" />
            </button>
          </div>
          {/*********service box contant emd***********/}
        </div>
      </section>
      {/******************service section end**********************/}

      {/******************Recent section start**********************/}
      <section className="recent_projects">
        <h1>Recent Works</h1>
        <div className="home_projects">
          <HomeProjects img="project10.png" />
          <HomeProjects img="project11.png" />
          <HomeProjects img="project3.png" />
          <HomeProjects img="project12.png" />
          <HomeProjects img="project14.png" />
          <HomeProjects img="project5.png" />
        </div>
        <Button name="View More" link="projects"></Button>
      </section>

      <section className="language_section">
        <div className="language_contant">
          <h1>
            Using Languages<span>For Projects</span>
          </h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
            cupiditate dolor. Provident, sit! Sequi in recusandae, inventore
            molestias, voluptates saepe
          </p>
          <Button name="Contact Me" link="contact"></Button>
        </div>

        <div className="language_image">
          <img
            src="assetes/Images/bro3.svg"
            alt="ashraf dev"
            className="language_main_image"
          />

          <LanguageName img="js.png" name="JavaScript" id="js" />
          <LanguageName img="react.png" name="React.js" id="react" />
          <LanguageName img="css.png" name="CSS" id="css" />
          <LanguageName img="html.png" name="HTML" id="html" />
          <LanguageName img="bootstrap.png" name="Bootstrap" id="boot" />
          <LanguageName img="jquery.png" name="jQuery" id="jquery" />
          <LanguageName img="firebase.png" name="Firebase" id="fire" />
          <LanguageName img="git.png" name="Git" id="git" />
          <LanguageName img="github.png" name="Github" id="github" />
          <LanguageName img="design.png" name="Web Design" id="design" />
        </div>
      </section>

      {/******************Recent section end**********************/}
      {/* <section className="proof_section">
        <h1>Social Proof</h1>
        <Proof />
      </section> */}

      {/******************email section start**********************/}
      <section className="email_section">
        <div className="email_div">
          <h3>Email</h3>
          <div className="email">
            <div className="email_contant">
              <h1>Let’s touch with me </h1>
              <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quis,
                cupiditate dolor.
              </p>
            </div>
            <form method="POST" onSubmit={handleSubmit} className="inputs">
              <input
                type="email"
                onChange={getUserData}
                value={user.email}
                placeholder="Email..."
                required
                name="email"
              />
              <button className="contact_btn">Submit</button>
            </form>
          </div>
        </div>
      </section>
      {/******************email section end**********************/}
      <Footer />
    </>
  );
};

export default Home;

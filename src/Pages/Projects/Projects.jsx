import React from "react";
import "./projects.css";
import { Nav, Footer } from "../Nav/Nav";
import { Images } from "../Data/Data";
const Projects = () => {
  return (
    <>
      <Nav />
      <section className="show_project">
        <h1>Recent Works</h1>
        <div className="home_projects">
          {Images.reverse().map((value) => {
            return (
              <div className="projects" key={value.id}>
                <img src={`assetes/Images/${value.images}`} alt={value.name} />
                <h3>{value.name}</h3>
              </div>
            );
          })}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Projects;

import React, { useState, useEffect } from "react";
import "./contact.css";
import { Nav, Footer } from "../Nav/Nav";

const Contact = () => {
  const [user, setuser] = useState({
    name: "",
    email: "",
    option: "",
    rool: "",
    message: "",
  });
  let name, value;
  const getUserData = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let { name, email, option, message, rool } = user;

    if (name && email && option && message && rool) {
      const res = await fetch(
        "https://ashrafdev-ae6c3-default-rtdb.firebaseio.com/contact.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            name,
            email,
            option,
            message,
            rool,
          }),
        }
      );
      if (res) {
        setuser({
          name: "",
          email: "",
          option: "",
          message: "",
          rool: "",
        });
        alert("Data Send");
      }
    } else {
      alert("Plzz Fill all the Data");
    }
  };
  React.useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <>
      <Nav />

      <section className="contect_section">
        <h1>Contect us</h1>
        <form method="POST" onSubmit={handleSubmit}>
          <input
            type="name"
            onChange={getUserData}
            value={user.name}
            placeholder="Name..."
            required
            name="name"
          />
          <input
            type="email"
            onChange={getUserData}
            value={user.email}
            placeholder="Email..."
            required
            name="email"
          />

          <select
            name="type"
            id="type"
            onChange={getUserData}
            value={user.option}
            name="option"
          >
            <option value="Choose A Option">Choose A Option</option>
            <option value="Freelance">Freelance</option>
            <option value="Project Hire">Project Hire</option>
            <option value="Job Hire">Job Hire</option>
          </select>

          <select
            name="type"
            id="type"
            onChange={getUserData}
            value={user.rool}
            name="rool"
          >
            <option value="Choose A Option">My rool</option>
            <option value="Freelance">Web Design</option>
            <option value="Project Hire">Front End Dev</option>
            <option value="Job Hire">Bug fix</option>
          </select>
{/* <br /> */}
          <textarea
            onChange={getUserData}
            name="message"
            value={user.message}
            placeholder="Write A Message"
          ></textarea>
          <button>Submit</button>
        </form>
      </section>
      <Footer />
    </>
  );
};

export default Contact;

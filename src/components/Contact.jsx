import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import MainPage from "./MainPage";
import Services from "./Services";
import Clients from "./Clients";
import Gallery from "./Gallery";
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:3000/", formData);
      console.log(response.data);
      alert("Thankyou for registering!");

      setMessage("User registered successfully!");

      setFormData({
        name: "",
        email: "",
        contact: "",
      });
    } catch (error) {
      console.error("There was an error!", error);
      setMessage("Error registering user. Please try again.");
    }
  };

  return (
    <>
      <MainPage />
      <Services />
      <Clients />
      <Gallery />
      <div className="logo" id="contact1">
        Veri5D
      </div>
      <form className="contactDiv" onSubmit={handleSubmit}>
        <div className="contactName">Contact Us</div>

        <div className="InputFields">
          <label className="label1">
            Name:
            <input
              type="text"
              className="Name"
              name="name"
              placeholder="Enter Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label2">
            Email:
            <input
              type="email"
              className="Email"
              name="email"
              placeholder="Sample@gmail.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </label>
          <label className="label3">
            Contact:
            <input
              type="text"
              className="Number"
              name="contact"
              placeholder="Enter Contact"
              value={formData.contact}
              onChange={handleChange}
              required
            />
          </label>
          <button className="SubmitButton" type="submit">
            Submit
          </button>
        </div>
      </form>
      {message && <p>{message}</p>}
    </>
  );
};

export default Contact;

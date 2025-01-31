import React, { useState } from "react";
import emailjs from "emailjs-com";
import "./Footer.css";
import { Button } from "@material-tailwind/react";
import resume from "../../../../public/assets/Mern stack resume of Akash Sarker.pdf";
const Footer = () => {
  const [formData, setFormData] = useState({ name: "", message: "" });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_as5jbmg",
        "template_h49ongr",
        {
          to_name: "Akash Sarker",
          from_name: formData.name,
          message: formData.message,
        },
        "p2VvhqCsoglc57wru"
      )
      .then(
        (response) => {
          setStatus("Message sent successfully!");
          setFormData({ name: "", message: "" });
        },
        (error) => {
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <footer className="footer">
      {/* Left Section */}
      <div className="footer-left">
        <img
          src="https://i.ibb.co.com/4JDv05Z/logo.png"
          alt="Logo"
          className="footer-logo"
        />
        <h2 className="text-3xl text-bold">Contact With Me</h2>
        <p className="text-xl">
          <strong>Name:</strong> Akash Sarker
        </p>
        <p className="text-lg">
          <strong>Phone:</strong> +8801984501095
        </p>
        <p>
          <strong>Email:</strong> akash.sarker.coder@gmail.com
        </p>
        <button className="btn bg-blue-900 text-blue-300 px-5 py-3 rounded ">
          {" "}
          <a href={resume} download>
            Download Resume
          </a>
        </button>
        <a
          href="/assets/Mern stack resume of Akash Sarker.pdf"
          download="Mern stack resume of Akash Sarker.pdf"
          className="resume-btn"
        >
          Download Resume
        </a>
      </div>

      {/* Right Section */}
      <div className="footer-right">
        <h2>Send a Message</h2>
        <form className="message-form" onSubmit={handleSubmit}>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            className="form-input lg:w-[750px] h-20 p-2"
            value={formData.name}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="Write your message..."
            className="form-textarea p-2"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Button type="submit" color="amber">
            Send
          </Button>
          {/* <button type="submit" className="form-button btn-ghost">
            Send
          </button> */}
        </form>
        {status && <p className="status-message">{status}</p>}
      </div>
    </footer>
  );
};

export default Footer;

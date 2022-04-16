import React from "react";
import "../css/contact.css";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";

const Contact = () => {
  return (
    <section id="contact">
      <h5>Get In Touch </h5>
      <h2>Contact Me</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__options-item">
            <MdOutlineAlternateEmail />
            <h4>Email</h4>
            <h5>piotr.tratwal@gmail.com</h5>
            <a
              href="mailto:piotr.tratwal@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
          <article className="contact__options-item">
            <BsMessenger />
            <h4>Messenger</h4>
            <h5>@piotr.tratwal</h5>
            <a
              href="https://m.me/piotr.tratwal"
              target="_blank"
              rel="noreferrer"
            >
              Send a message
            </a>
          </article>
        </div>
        <form action="">
          <input type="text" placeholder="Your Name" name="name" required />
          <input type="email" name="email" placeholder="Your Email" required />
          <textarea
            name="message"
            placeholder="Your Message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Send Me a Message :)
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;

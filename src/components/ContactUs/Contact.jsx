import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { Container } from "../Header/Header";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./Contact.css";
export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_9cr3mom",
        "template_7aormff",
        form.current,
        "sOcqAHnaBZ7bLUbm6"
      )
      .then(
        (result) => {
          console.log(result.text);
          toast.success("Ajoyib");
        },
        (error) => {
          console.log(error.message);
          toast.error("yomon");
        }
      );
  };

  return (
    <section className="contact" id="contact">
      <Container>
        <h2 className="contact-title">
          Leave your number and we'll call you back
        </h2>
        <p className="contact-desc">
          Nullam laoreet nec turpis et ultrices. Duis sit amet quam arcu. Nam
          facilisis lacinia ex, eget sollicitudin massa pellentesque in. Vivamus
          mattis eros at sem pulvinar
        </p>
        <div className="contact__wrapper">
          <form className="contact-form" ref={form} onSubmit={sendEmail}>
            <input
              className="contact-input"
              type="text"
              name="user_name"
              placeholder="Name"
            />
            <input
              className="contact-input"
              type="tel"
              name="tel"
              placeholder="Phone number"
            />
            <input
              className="contact-input"
              name="message"
              placeholder="Description"
            />
            <button className="contact-btn " type="submit">
              Send
            </button>
          </form>
          <p className="contact__wrapper-desc">
            We call back in 10-30 minutes, guaranteed!
          </p>
        </div>
      </Container>
    </section>
  );
};

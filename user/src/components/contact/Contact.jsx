import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import EmailIcon from '@mui/icons-material/Email';
import './contact.css';

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_uq0kkal",
        "template_o7e98w1",
        formRef.current,
        "9A2I0x9mkpS4sXN-V"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <>
      <section
        id="contact"
        style={{
          marginTop: "20rem",
        }}
      >
        <h5>Get In Touch</h5>
        <h2>Ask Us Anything!</h2>
        <div className="container contact__container">
          <div className="contact__options">
            <article className="contact__option">
              <EmailIcon className="contact__option-icon" />
              <h4>Email</h4>
              <h5>askaway@southshire.edu</h5>
              <a href="mailto:askaway@southshire.edu">Send a message</a>
            </article>
          </div>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Your Full Name"
              name="user_name"
              required
            />
            <input
              type="text"
              placeholder="Your Email"
              name="user_email"
              required
            />
            <textarea
              placeholder="Your message"
              rows="7"
              name="message"
              required
            ></textarea>
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
            {message && (
              <span>We will get back to you as soon as possible!</span>
            )}
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;

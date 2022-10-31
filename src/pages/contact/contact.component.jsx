import React, { useRef } from "react";
import "./contact.style.scss";

import emailjs from "@emailjs/browser";
import FormGroup from "../../components/form-group/form-group.component";

const Contact = () => {
  const form = useRef();

  const sendEmail = (event) => {
    event.preventDefault();

    emailjs
      .sendForm(
        "your_service_code",
        "contact_form",
        form.current,
        "YOUR EMAILJS KEY"
      )
      .then(
        () => {
          alert("Message Successfully Sent!");
          window.location.reload(false);
        },
        (error) => {
          console.log(error);
          alert("Failed to Send Message, Please Try Again");
        }
      );
  };

  return (
    <main className="contact">
      <div className="contact-container" xyz="fade stagger">
        <h1 className="xyz-in" xyz="inherit left">
          Contact Me
        </h1>
        <div className="contact-wrapper">
          <header className="xyz-in" xyz="inherit right">
            <h2>Get In Touch</h2>
            <p>
              Tiramisu pudding shortbread jelly-o brownie pie cake chocolate
              cake jelly beans. Wafer carrot cake danish jelly-o danish biscuit
              jujubes cheesecake. Jujubes danish pudding tart chocolate bar
              carrot cake cake. <strong>Be Happy!!!</strong>
            </p>
          </header>
          <form
            id="form"
            ref={form}
            onSubmit={sendEmail}
            className="xyz-in"
            xyz="inherit down"
          >
            <div className="form-column xyz-in" xyz="inherit down">
              <FormGroup
                id="Name"
                type="text"
                placeholder="Your Name*"
                required
                minLength="6"
                maxLength="36"
                name="name"
              />
              <FormGroup
                id="email"
                type="email"
                placeholder="Your Email*"
                required
                name="email"
              />
              <FormGroup
                id="Subject"
                noMargin
                type="text"
                placeholder="Subject*"
                required
                name="Subject"
              />
            </div>
            <div className="form-column xyz-in" xyz="inherit down">
              <textarea
                className="textarea"
                placeholder=" Your Message*"
                required
                name="Message"
              />
            </div>
            <div className="send xyz-in" xyz="inherit down">
              <input
                type="submit"
                className="send-button"
                value="Send Message"
              />
            </div>
          </form>
        </div>
      </div>
    </main>
  );
};

export default Contact;

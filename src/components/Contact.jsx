import React from "react";
import { CiLinkedin } from "react-icons/ci";
import { FaGithubSquare } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import msg_icon from "../../public/assets/msg-icon.png";
import mail_icon from "../../public/assets/mail-icon.png";
import phone_icon from "../../public/assets/phone-icon.png";
import location_icon from "../../public/assets/location-icon.png";
import white_arrow from "../../public/assets/white-arrow.png";

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "e20f09c5-f55a-470e-92ef-2a56b5c3cdb4");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData,
    });

    const data = await response.json();

    if (data.success) {
      setResult(" Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
    }
  };
  return (
    <>
      <div className="container contact" id="contact">
        <h1>CONTACT ME</h1>
        <div className="contacts">
          <div className="contacts-col">
            <h3 id="text">
              Send us a message <img src={msg_icon} alt="" />
            </h3>
            <p>We are avaliable 24X7</p>
            <ul>
              <li>
                <img src={mail_icon} alt="" /> manis.sh.katha@gmail.com
              </li>
              <li>
                <img src={phone_icon} alt="" /> +919027554899
              </li>
              <li>
                <img src={location_icon} alt="" /> Vpo katha distt. baghpat U.P.
                (250609)
              </li>
            </ul>
          </div>
          <div className="contacts-col">
            <form onSubmit={onSubmit}>
              <level>Your Name </level>
              <input
                type="text"
                name="name"
                placeholder="Enter Your Name"
                required
              />
              <level>Phone Number </level>
              <input
                type="tel"
                name="phone"
                placeholder="Enter Your Mobile No.."
                required
              />
              <level>Message </level>
              <textarea
                name="message"
                rows="6"
                placeholder="Enter Your Message"
                required
              />
              <button type="submit" className="btn dark-btn">
                Submit now <img src={white_arrow} alt="" />
              </button>
            </form>
            <span>{result}</span>
          </div>
        </div>
        <div
          className="contact-icon"
          data-aos="zoom-in-up"
          data-aos-duration="1000"
        >
         
         
          <a
            href="https://www.linkedin.com/in/manish-sharma-22a3a822b/"
            target="_blank"
            className="items"
          >
            <CiLinkedin className="icons" />
          </a>
         
          <a
            href="https://github.com/manish-katha"
            target="_blank"
            className="items"
          >
            <FaGithubSquare className="icons" />
          </a>
          <a
            href="mailto:manish.sh.katha@gmail.com"
            target="_blank"
            className="items"
          >
            <SiGmail className="icons" />
          </a>
        </div>
        <h3 id="text">
          {" "}
          2024 Copyright &copy; MANISH SHARMA - All rights reserved.
        </h3>
      </div>
    </>
  );
};

export default Contact;

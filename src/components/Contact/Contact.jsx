import Button from "../common/Button/Button";
import "./Contact.css";
import { contactData, contactList } from "../../utils/constants/contactText.js";

const Contact = () => {
  const { heading, paragraph } = contactData;
  return (
    <div className="contact-wrapper">
      <div className="contact-section">
        <h2>{heading}</h2>
        <p>{paragraph}</p>
      </div>
      <div className="tel-section">
        <ul>
          {contactList.map((item, index) => {
            return (
              <li key={index}>
                {item.span} {item.text}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="btn-section">
        <Button text={"Contact Us"} />
      </div>
    </div>
  );
};

export default Contact;

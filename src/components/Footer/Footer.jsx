import { footerData } from "../../utils/constants/Footer";
import "./Footer.css";

const Footer = () => {
  const [firstArray, secondArray, thirdArray, fourthArray, fifthArray] =
    footerData;

  return (
    <div className="footer-container">
      <div className="footer-wrapper">
        {firstArray.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            {item.description1 && <p>{item.description1}</p>}
          </div>
        ))}
        {secondArray.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            {item.description1 && <p>{item.description1}</p>}
            {item.description2 && <p>{item.description2}</p>}
            {item.description3 && <p>{item.description3}</p>}
            {item.description4 && <p>{item.description4}</p>}
          </div>
        ))}
        {thirdArray.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            {item.description1 && <p>{item.description1}</p>}
            {item.description2 && <p>{item.description2}</p>}
            {item.description3 && <p>{item.description3}</p>}
          </div>
        ))}
        {fourthArray.map((item, index) => (
          <div key={index}>
            <h4>{item.title}</h4>
            {item.description1 && <p>{item.description1}</p>}
            {item.description2 && <p>{item.description2}</p>}
            {item.description3 && <p>{item.description3}</p>}
          </div>
        ))}
        {fifthArray.map((item, index) => (
          <div className="social" key={index}>
            <h4 className={item.title1}></h4>
            <h4 className={item.title3}></h4>
            <h4 className={item.title2}></h4>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;

import Button from "../common/Button/Button";
import "./Header.css";

const Header = () => {
  return (
    <div className="header-wrapper">
      <div className="logo">
        <h3>Delivery</h3>
      </div>
      <div className="navbar">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Contact us</li>
        </ul>
      </div>
      <div className="btn-wrapper">
        <Button text="Order now!" />
      </div>
    </div>
  );
};

export default Header;

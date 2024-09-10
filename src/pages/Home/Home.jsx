import Banner from "../../components/Banner/Banner";
import Header from "../../components/Header/Header";
import {
  firstBannerText,
  fourthBannerText,
  secondBannerText,
  thirdBannerText,
} from "../../utils/constants/bannerText";
import Card from "../../components/common/Card/Card";
import "./Home.css";
import { cardData } from "../../utils/constants/services.js";
import Contact from "../../components/Contact/Contact.jsx";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div>
      <Header />
      <Banner data={firstBannerText} />
      <Banner isRotate data={secondBannerText} />
      <Banner data={thirdBannerText} />
      <div className="card-container">
        {cardData.map((item, index) => {
          return <Card key={index} data={item} />;
        })}
      </div>
      <Banner isRotate data={fourthBannerText} />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;

import Button from "../common/Button/Button";
import "./Banner.css";

const Banner = ({ isRotate, data }) => {
  const {
    mainHeading,
    paragraph,
    imageUrl,
    buttonText1,
    buttonText2,
    buttonIcon1,
    buttonIcon2,
    buttonText,
  } = data;
  return (
    <div className={`banner-wrapper ${isRotate && "rotateFlex"}`}>
      <div className="content-wrapper">
        <h1>{mainHeading}</h1>
        <p>{paragraph}</p>
        <div className="btn-wrapper">
          {buttonText && <Button text={buttonText} isImg={buttonIcon1} />}
          {buttonText1 && <Button text={buttonText1} isImg={buttonIcon1} />}
          {buttonText2 && <Button text={buttonText2} isImg={buttonIcon2} />}
        </div>
      </div>
      <div className="img-wrapper">
        <img src={imageUrl} />
      </div>
    </div>
  );
};

export default Banner;

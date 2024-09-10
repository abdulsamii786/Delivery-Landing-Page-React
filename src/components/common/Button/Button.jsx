import "./Button.css";

const Button = ({ isImg, text }) => {
  return (
    <div className="btn-wrapper">
      <button>
        {isImg && <i className={isImg}></i>}

        {text}
      </button>
    </div>
  );
};

export default Button;

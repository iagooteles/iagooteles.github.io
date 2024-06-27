import imgLoginRegister from "./../../utils/img-login-register.png";
import arrowCircle from "./../../utils/arrow-circle.png";
import "./header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="flower-back-container">
        <img src={imgLoginRegister} alt="flower-login" className="flower-img" />

        <img src={arrowCircle} alt="Back arrow" className="back-arrow" />
      </div>

      <div class="flex flex-col justify-center">
        <div class="sm:mx-auto sm:w-full">
          <h2 class="heading-text">
            {props.headerText}
          </h2>
          <p className="heading-subtext">{props.text}</p>
          <p className="heading-subtext">{props.subtext}</p>
        </div>
      </div>
    </div>
  );
}

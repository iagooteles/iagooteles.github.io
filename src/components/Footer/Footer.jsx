import google from "./../../utils/google.png";
import facebook from "./../../utils/facebook.png";
import apple from "./../../utils/apple.png";
import twitter from "./../../utils/twitter.png";
import "./footer.css";
import { Link } from 'react-router-dom';


export default function Footer(props) {
  return (
    <footer className="footer-container">
      <p>{props.accountsSignText}</p>

      <div className="social-accounts-container flex">
        <img src={google} alt="Google" className="social-icon" />
        <img src={facebook} alt="Facebook" className="social-icon" />
        <img src={apple} alt="Apple" className="social-icon" />
        <img src={twitter} alt="Twitter" className="social-icon" />
      </div>

      <p class="create-account-text">
        {props.noAccountText}
        <Link to={props.linkTo}>
        <span className="create-now"> {props.createOrLoginNowText}</span>
        </Link>
      </p>
    </footer>
  );
}

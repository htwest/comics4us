import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

import "../../css/Footer.css";

const Footer = () => {
  const navigate = useNavigate();

  return (
    <footer>
      <div id="footer-icons">
        <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        <FontAwesomeIcon icon={faTwitter} className="social-icon" />
      </div>
      <div className="footer-block">
        <span>Contact</span>
        <span>About</span>
        <span>FAQ</span>
      </div>
      <div className="footer-block">
        <span onClick={() => navigate("/privacy")}>Privacy</span>
        <span>Shipping</span>
        <span>Returns</span>
      </div>
    </footer>
  );
};

export default Footer;

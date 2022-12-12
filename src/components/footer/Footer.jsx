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
        <a href="https://www.google.com/search?q=comics4us+facebook&source=hp&ei=8ZKXY8_wI5rCkPIPiuGTwAw&iflsig=AJiK0e8AAAAAY5ehAZlYgpWEQ1qpXqO9Rm1t9QFMveYz&ved=0ahUKEwiPrbuv-fT7AhUaIUQIHYrwBMgQ4dUDCAs&uact=5&oq=comics4us+facebook&gs_lcp=Cgdnd3Mtd2l6EAMyBQghEKABOhEILhCABBCxAxCDARDHARDRAzoRCC4QgwEQxwEQsQMQ0QMQgAQ6CAgAEIAEELEDOgQIABADOggILhCxAxCDAToLCC4QgAQQsQMQgwE6BQgAEIAEOgsIABCABBCxAxCDAToICAAQsQMQgwE6EQguEIAEELEDEMcBENEDENQCOggILhCABBCxAzoLCC4QsQMQxwEQ0QM6CwguEK8BEMcBEIAEOg4IABCABBCxAxCDARDJAzoLCC4QgAQQsQMQ1AI6CwguEIAEEMcBEK8BOg0IABCABBCxAxCDARANOg0ILhCABBDHARCvARANOg0IABCABBCxAxDJAxANOg4ILhCxAxCDARDHARDRAzoLCAAQgAQQsQMQyQM6DQgAEIAEELEDEIMBEAo6DQguEIAEEMcBEK8BEAo6DQgAEIAEELEDEMkDEAo6DwgAEIAEELEDEIMBEA0QCjoPCC4QgAQQxwEQrwEQDRAKOg8IABCABBCxAxDJAxANEAo6BQgAEKIEOgcIABAeEKIEOgUIIRCrAlAAWOkgYIwiaAFwAHgBgAGJAogB3RKSAQY2LjEyLjGYAQCgAQE&sclient=gws-wiz">
          <FontAwesomeIcon icon={faFacebook} className="social-icon" />
        </a>
        <a href="https://www.google.com/search?q=comics4us+instagram&ei=-JKXY6SvA8zakPIP8_Op0As&ved=0ahUKEwiki8ay-fT7AhVMLUQIHfN5CroQ4dUDCBA&uact=5&oq=comics4us+instagram&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAE6DQgAEEcQ1gQQyQMQsAM6CggAEEcQ1gQQsAM6CAgAEJIDELADOgUIIRCrAkoECEEYAEoECEYYAFCOEVjlF2DEGGgDcAF4AIABkAGIAaEHkgEDMC44mAEAoAEByAEEwAEB&sclient=gws-wiz-serp">
          <FontAwesomeIcon icon={faInstagram} className="social-icon" />
        </a>
        <a href="https://www.google.com/search?q=comics4us+twitter&ei=CZOXY4W1FM7pkPIPuoe9gA8&ved=0ahUKEwjF3eS6-fT7AhXONEQIHbpDD_AQ4dUDCBA&uact=5&oq=comics4us+twitter&gs_lcp=Cgxnd3Mtd2l6LXNlcnAQAzIFCCEQoAE6CggAEEcQ1gQQsAM6BQghEKsCSgQIQRgASgQIRhgAUNYBWPcGYM0HaAJwAXgAgAG9AYgBiAaSAQMwLjaYAQCgAQHIAQjAAQE&sclient=gws-wiz-serp">
          <FontAwesomeIcon icon={faTwitter} className="social-icon" />
        </a>
      </div>
      <div className="footer-block">
        <span onClick={() => navigate("/privacy")}>Privacy & Satisfaction</span>
        <span onClick={() => navigate("/about")}>About</span>
      </div>
      <div className="footer-block">
        <span onClick={() => navigate("/contact")}>Contact</span>
        <span onClick={() => navigate("/shipping")}>Shipping & Returns</span>
      </div>
    </footer>
  );
};

export default Footer;

import logo from "../../images/logo.png";
import "../../css/About.css";

const About = () => {
  return (
    <div id="about-page">
      <div className="about-container">
        <h1>About Us!</h1>
        <div className="info-container">
          <img src={logo} alt="logo" />
          <div className="about-info">
            <p>
              {" "}
              We are an indepented company focused on comics for collectors!
              Here you can buy single issues from other collectors with without
              the hassle of other online retailers. We are just the middle man!
            </p>

            <p>
              Once you've created an account with us, you will be able to
              purchase any or our listed products. If you are a vendor, you can
              upload the issues you wish to sell on your profile page. Once
              verified, they will be listed on our site for other collectors to
              purchase!
            </p>

            <p>
              Thank you for being a part of this wonderful hobby! Happy
              collecting!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

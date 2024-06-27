import "./Contact.css";
import Header from "../../components/header/Header.jsx";
import SocialMedia from "../../components/socialMedia/SocialMedia.jsx";
import Tilt from "react-parallax-tilt";
import { greeting, ContactData } from "../../portfolio.js";
import Footer from "../../components/Footer/Footer.jsx";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom.js";
import { Fade } from "react-awesome-reveal";

function Contact() {
  const theme = useRecoilValue(themeSelector);

  return (
    <div className="contact-main">
      <Header />
      <div className="basic-contact">
        <Fade bottom duration={1000} distance="40px">
          <div className="contact-heading-div">
            <div className="contact-heading-text-div">
              <h1
                className="contact-heading-text"
                style={{ color: theme.text }}
              >
                {ContactData["title"]}
              </h1>
              <p
                className="contact-header-detail-text subTitle"
                style={{ color: theme.secondaryText }}
              >
                {ContactData["description"]}
              </p>
              <SocialMedia />
              <br />
              <br />
              <a
                className="general-btn"
                onClick={() => {
                  window.open(greeting.resumeLink, "_blank").focus();
                }}
              >
                See my Resume
              </a>
            </div>
            <div className="contact-heading-img-div">
              {/* <img
                className="profile-pic"
                src="./src/pages/contact/img.jpg"
                alt=""
              /> */}

              <Tilt>
                <img className="profile-pic" src="/avatar.svg" />
              </Tilt>
            </div>
          </div>
        </Fade>
      </div>
      <Footer />
    </div>
  );
}

export default Contact;

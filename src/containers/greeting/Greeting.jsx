import React from "react";
import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
// import { greeting } from "../../portfolio";
// import { Fade } from "react-reveal";
// import { useHistory } from "react-router-dom";
// import FeelingProud from "./FeelingProud";
// import { style } from "glamor";
import { useRecoilValue } from "recoil";
import { Fade } from "react-awesome-reveal";
import { themes } from "../../theme";
import { themeAtom } from "../../recoil/themeAtom";
import { greeting } from "../../portfolio";
import FeelingProud from "./FeelingProud";
import { NavLink } from "react-router-dom";
import Typewriter from "typewriter-effect";
export default function Greeting() {
  const theme = themes[useRecoilValue(themeAtom)];
  //   const history = useHistory();

  //   const styles = style({
  //
  //   });

  return (
    <Fade duration={2000}>
      <div className="greet-main" id="greeting">
        <div className="greeting-main">
          <div className="greeting-text-div">
            <div>
              <h1 className="greeting-text">{greeting.title}</h1>
              <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText, fontSize: "64px" }}
              >
                <span>I'm </span>
                <span style={{ color: theme.accentColor }}>
                  {greeting.full_name}.{" "}
                </span>
              </p>
              {/* <p className="typewriteWrapper"> */}
              <Typewriter
                options={{
                  skipAddStyles: true,
                  wrapperClassName:
                    theme.name === "light"
                      ? "typewriterWrapper light"
                      : "typewriterWrapper dark",
                  cursorClassName:
                    theme.name === "light"
                      ? "typewriterCursor light"
                      : "typewriterCursor dark",
                  strings: [
                    "DSA Enthusiast !!",
                    "Competitive Programmer !!",
                    "MERN Stack Developer !!",
                    "Always Learning !!",
                  ],
                  autoStart: true,
                  loop: true,
                }}
              />
              {/* </p> */}

              {/* <p
                className="greeting-text-p subTitle"
                style={{ color: theme.secondaryText }}
              >
                {greeting.subTitle}
              </p> */}
              <SocialMedia />
              <p
                className="greeting-text-p subTitle checkout-my-projects"
                style={{ color: theme.secondaryText }}
              >
                <span className="checkout-my">{"Checkout my "}</span>
                <span className="checkout-my-projects-link">
                  <NavLink to="/projects" style={{ textDecoration: "none" }}>
                    <span style={{ color: theme.accentColor }}>Projects</span>
                  </NavLink>
                </span>
              </p>
              {/* <div className="portfolio-repo-btn-div">
                <button
                  className="button"
                  //   onClick={() => {
                  //     history.push("/contact");
                  //   }}
                >
                  Contact Me
                </button>
              </div> */}
            </div>
          </div>
          <div className="greeting-image-div">
            <FeelingProud />
          </div>
        </div>
      </div>
    </Fade>
  );
}

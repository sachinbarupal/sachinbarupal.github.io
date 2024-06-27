import "./Greeting.css";
import SocialMedia from "../../components/socialMedia/SocialMedia";
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

  return (
    <div className="greet-main" id="greeting">
      <div className="greeting-main">
        <div className="greeting-text-div">
          <Fade
            cascade
            damping={0.1}
            triggerOnce
            direction="left"
            duration={1500}
          >
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
                  "MERN Stack Developer !!",
                  "Competitive Programmer !!",
                  "DSA Enthusiast !!",
                  "Always Learning !!",
                ],
                autoStart: true,
                loop: true,
              }}
            />
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
          </Fade>
        </div>
        <Fade direction="right" triggerOnce>
          <div className="greeting-image-div">
            <FeelingProud />
          </div>
        </Fade>
      </div>
    </div>
  );
}

import React from "react";
import "./Footer.css";
import { greeting } from "../../portfolio.js";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom.js";

export default function Footer() {
  const theme = useRecoilValue(themeSelector);
  return (
    <div className="footer-div">
      <Fade triggerOnce>
        <p className="footer-text" style={{ color: theme.secondaryText }}>
          Made with <span role="img">❤️</span> by {greeting.title2}
        </p>
      </Fade>
    </div>
  );
}

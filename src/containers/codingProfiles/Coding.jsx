import React from "react";
import "./Coding.css";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom";
import CodingSection from "./CodingSection";

export default function Coding() {
  const theme = useRecoilValue(themeSelector);
  return (
    <div className="main" id="coding">
      <div className="coding-header-div" style={{ marginTop: "0px" }}>
        <Fade direction="up" duration={1500} triggerOnce>
          <h1
            className="coding-header"
            style={{
              marginBottom: "0px",
              marginTop: "30px",
              color: theme.text,
            }}
          >
            Coding Profiles
          </h1>
        </Fade>
      </div>
      <CodingSection />
    </div>
  );
}

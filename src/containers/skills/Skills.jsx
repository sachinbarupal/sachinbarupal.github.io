import React from "react";
import "./Skills.css";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom";
import SkillSection from "./SkillSection";

export default function Skills() {
  const theme = useRecoilValue(themeSelector);
  return (
    <div
      className="main"
      id="skills"
      style={{ marginTop: "0px", marginBottom: "0px" }}
    >
      <div className="skills-header-div">
        <Fade direction="up" duration={1500}>
          <h1
            className="skills-header"
            style={{ color: theme.text, marginTop: "0px", marginBottom: "0px" }}
          >
            Here's what I do
          </h1>
        </Fade>
      </div>
      <SkillSection />
    </div>
  );
}

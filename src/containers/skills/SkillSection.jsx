import "./Skills.css";
import { skills } from "../../portfolio";
import FullStackImg from "./FullStackImg";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom";
import SoftwareSkill from "../../components/SoftwareSkill/SoftwareSkill";

function SkillSection() {
  const theme = useRecoilValue(themeSelector);

  return (
    <div>
      {skills.map((skill, index) => {
        if (index % 2 === 0) {
          return (
            <div key={index} className="skills-main-div">
              <Fade triggerOnce direction="left" duration={2000}>
                <div className="skills-image-div">
                  <FullStackImg theme={theme} />
                </div>
              </Fade>

              <div className="skills-text-div">
                <Fade triggerOnce direction="right" duration={1000}>
                  <h1 className="skills-heading" style={{ color: theme.text }}>
                    {skill.title}
                  </h1>
                </Fade>
                <Fade triggerOnce direction="right" duration={1500}>
                  <SoftwareSkill logos={skill.softwareSkills} />
                </Fade>
                <Fade triggerOnce direction="right" duration={2000}>
                  <div>
                    {skill.skills.map((skillSentence, index) => {
                      return (
                        <p
                          key={index}
                          className="subTitle skills-text"
                          style={{ color: theme.secondaryText }}
                        >
                          {skillSentence}
                        </p>
                      );
                    })}
                  </div>
                </Fade>
              </div>
            </div>
          );
        }

        {
          /* RIGHT SIDE */
        }
        {
          /* return (
          <div key={index} className="skills-main-div">
            <div className="skills-text-div">
              <Fade left duration={1000}>
                <h1 className="skills-heading" style={{ color: theme.text }}>
                  {skill.title}
                </h1>
              </Fade>
              <Fade left duration={1500}>
                <SoftwareSkill logos={skill.softwareSkills} />
              </Fade>
              <Fade left duration={2000}>
                <div>
                  {skill.skills.map((skillSentence) => {
                    return (
                      <p
                        className="subTitle skills-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {skillSentence}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
            <Fade right duration={2000}>
              <div className="skills-image-div">
                <GetSkillSvg fileName={skill.fileName} theme={theme} />
              </div>
            </Fade>
          </div>
        ); */
        }
      })}
    </div>
  );
}

export default SkillSection;

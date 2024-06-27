import "./Coding.css";
import { codingProfiles } from "../../portfolio";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom";
import { useEffect, useState } from "react";

export default function CodingSection() {
  const theme = useRecoilValue(themeSelector);
  const [selectedProfile, setSelectedProfile] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSelectedProfile((idx) => (idx + 1) % codingProfiles.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [codingProfiles.length, selectedProfile]);

  return (
    <div>
      <div className="platform-icons">
        {codingProfiles.map((profile, index) => (
          <div
            key={profile.id}
            onClick={() => setSelectedProfile(index)}
            className={
              selectedProfile === index ? "active platformIcon" : "platformIcon"
            }
          >
            {/* {platform.icon} */}
            <img
              className="icon"
              src={
                theme.name === "light" ? profile.iconLight : profile.iconDark
              }
            />
            <p style={{ margin: "0px" }}>{profile.title}</p>
          </div>
        ))}
      </div>

      <div className="coding-main-div">
        <Fade triggerOnce direction="left" duration={1000}>
          <div className="coding-text-div">
            <Fade triggerOnce direction="left" duration={1500}>
              <div
                style={{
                  display: "flex",
                  alignItems: "baseline",
                }}
              >
                <h1 className="coding-heading" style={{ color: theme.text }}>
                  {codingProfiles[selectedProfile].title}
                </h1>
                <a
                  className="profileLink"
                  href={codingProfiles[selectedProfile].profile}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: theme.secondaryText }}
                >
                  View Profile
                </a>
              </div>
            </Fade>
            <Fade triggerOnce direction="left" duration={2000}>
              <div>
                {codingProfiles[selectedProfile]?.lines?.map((line, index) => {
                  return (
                    <p
                      key={index}
                      className="subTitle coding-text"
                      style={{ color: theme.secondaryText }}
                    >
                      {line}
                    </p>
                  );
                })}
              </div>
            </Fade>
          </div>
        </Fade>
        <Fade triggerOnce direction="right" duration={1000}>
          <div className="coding-image-div">
            <img
              src="./src/containers/codingProfiles/coding.png"
              className="floating"
            />
          </div>
        </Fade>
      </div>

      {/* Right Side  */}
      {false &&
        (selectedProfile % 2 === 0 ? (
          <div className="coding-main-div">
            <div className="coding-text-div">
              <Fade left duration={1000}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    // justifyContent: "space-between",
                  }}
                >
                  <h1 className="coding-heading" style={{ color: theme.text }}>
                    {codingProfiles[selectedProfile].title}
                  </h1>
                  <a
                    className="profileLink"
                    href={codingProfiles[selectedProfile].profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </Fade>
              {/* <p>Profile : {codingProfiles[selectedProfile].profile}</p> */}
              <Fade left duration={2000}>
                <div>
                  {codingProfiles[selectedProfile]?.lines?.map((line) => {
                    return (
                      <p
                        className="subTitle coding-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>

            <div className="coding-image-div">
              <img
                src="./src/containers/codingProfiles/coding.png"
                className="floating"
              />
            </div>
          </div>
        ) : (
          <div className="coding-main-div">
            <div className="coding-image-div">
              <img
                src="./src/containers/codingProfiles/coding.png"
                className="floating"
              />
            </div>

            <div className="coding-text-div-right">
              <Fade right duration={1000}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "baseline",
                    // justifyContent: "space-between",
                  }}
                >
                  <h1 className="coding-heading" style={{ color: theme.text }}>
                    {codingProfiles[selectedProfile].title}
                  </h1>
                  <a
                    className="profileLink"
                    href={codingProfiles[selectedProfile].profile}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    View Profile
                  </a>
                </div>
              </Fade>

              <Fade right duration={2000}>
                <div>
                  {codingProfiles[selectedProfile].lines.map((line) => {
                    return (
                      <p
                        className="subTitle coding-text"
                        style={{ color: theme.secondaryText }}
                      >
                        {line}
                      </p>
                    );
                  })}
                </div>
              </Fade>
            </div>
          </div>
        ))}
    </div>
  );
}

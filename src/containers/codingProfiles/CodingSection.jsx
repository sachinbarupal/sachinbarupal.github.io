import "./Coding.css";
import { codingProfiles } from "../../portfolio";
// import FullStackImg from "./FullStackImg";
// import CloudInfraImg from "./CloudInfraImg";
import { Fade } from "react-awesome-reveal";
import { useRecoilValue } from "recoil";
import { themeSelector } from "../../recoil/themeAtom";
import { useState } from "react";

function CodingSection() {
  const theme = useRecoilValue(themeSelector);

  const [selectedProfile, setSelectedProfile] = useState(0);

  return (
    <div>
      <div className="platform-icons">
        {codingProfiles.map((profile, index) => (
          <div
            key={index}
            onClick={() => setSelectedProfile(index)}
            className={selectedProfile === index ? "active" : ""}
          >
            {/* {platform.icon} */}
            <p>{profile.title}</p>
          </div>
        ))}
      </div>

      {selectedProfile % 2 === 0 ? (
        <div className="coding-main-div">
          <div className="coding-text-div">
            <Fade left duration={1000}>
              <h1 className="coding-heading" style={{ color: theme.text }}>
                {codingProfiles[selectedProfile].title}
              </h1>
            </Fade>
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
              <h1 className="coding-heading" style={{ color: theme.text }}>
                {codingProfiles[selectedProfile].title}
              </h1>
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
      )}
    </div>
  );
  // return (
  //   <div>
  //     {codingProfiles.data.map((skill, index) => {
  //       return (
  //         <div key={index} className="coding-main-div">
  //           <div className="coding-text-div">
  //             <Fade left duration={1000}>
  //               <h1 className="coding-heading" style={{ color: theme.text }}>
  //                 {skill.title}
  //               </h1>
  //             </Fade>
  //             {/* <Fade left duration={1500}>
  //               <SoftwareSkill logos={skill.softwareSkills} />
  //             </Fade> */}
  //             <Fade left duration={2000}>
  //               <div>
  //                 {skill.skills.map((skillSentence) => {
  //                   return (
  //                     <p
  //                       className="subTitle coding-text"
  //                       style={{ color: theme.secondaryText }}
  //                     >
  //                       {skillSentence}
  //                     </p>
  //                   );
  //                 })}
  //               </div>
  //             </Fade>
  //           </div>
  //           <div className="coding-image-div">
  //             <img
  //               src="./src/containers/codingProfiles/coding.png"
  //               className="floating"
  //             />
  //           </div>
  //         </div>
  //       );
  //     })}
  //   </div>
  // );
}

export default CodingSection;

const ProfileCardShower = () => {
  const [selectedProfile, setSelectedProfile] = useState(null);

  const handleClick = (index) => {
    setSelectedProfile(index);
  };

  return (
    <div>
      <div className="platform-icons">
        {platforms.map((platform, index) => (
          <div
            key={index}
            onClick={() => handleClick(index)}
            className={selectedPlatform === index ? "active" : ""}
          >
            {platform.icon}
          </div>
        ))}
      </div>
      {selectedPlatform !== null && (
        <div className="profile-card">
          <h2>{platforms[selectedPlatform].name} Profile</h2>
          <p>Username: yourusername</p>
          <p>Location: yourlocation</p>
          <a
            href={platforms[selectedPlatform].profile}
            target="_blank"
            rel="noopener noreferrer"
          >
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

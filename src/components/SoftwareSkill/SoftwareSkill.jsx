import "./SoftwareSkill.css";
import { OverlayTrigger, Tooltip } from "react-bootstrap";

function SoftwareSkill(props) {
  return (
    <div>
      <div className="software-skills-main-div">
        <ul className="dev-icons">
          {props.logos.map((logo, index) => {
            return (
              <OverlayTrigger
                key={index}
                placement={"top"}
                overlay={
                  <Tooltip id={`tooltip-top`} style={{ position: "fixed" }}>
                    <strong>{logo.skillName}</strong>
                  </Tooltip>
                }
              >
                <li
                  className="software-skill-inline"
                  style={{
                    cursor: logo.skillName !== "" ? "pointer" : "default",
                  }}
                  name={logo.skillName}
                >
                  <span
                    className="iconify"
                    data-icon={logo.fontAwesomeClassname}
                    style={logo.style}
                    data-inline="false"
                  ></span>
                </li>
              </OverlayTrigger>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SoftwareSkill;

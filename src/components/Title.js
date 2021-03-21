import { IconContext } from "react-icons";
import { GiPresent } from "react-icons/gi";

/// flex align-center j-center

function Title({ text, className }) {
  return (
    <div className={`title  flex j-center align-center ${className}`}>
      <div className="present-b"></div>

      <h1 style={{ margin: "25px 15px" }}>{text}</h1>

      <div className="present-a"></div>
    </div>
  );
}

export default Title;

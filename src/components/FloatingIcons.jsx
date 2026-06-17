import { FaBrain, FaRobot, FaDatabase, FaCode } from "react-icons/fa";
import { BsCpuFill, BsStars } from "react-icons/bs";

const FloatingIcons = () => {
  return (
    <div className="floating-icons">
      <span className="float-icon icon-a">
        <FaBrain />
      </span>

      <span className="float-icon icon-b">
        <BsCpuFill />
      </span>

      <span className="float-icon icon-c">
        <FaRobot />
      </span>

      <span className="float-icon icon-d">
        <FaDatabase />
      </span>

      <span className="float-icon icon-e">
        <FaCode />
      </span>

      <span className="float-icon icon-f">
        <BsStars />
      </span>
    </div>
  );
};

export default FloatingIcons;
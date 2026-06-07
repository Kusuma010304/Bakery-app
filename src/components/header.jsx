import {
  FaDesktop,
  FaLaptop,
  FaTabletAlt,
  FaMobileAlt,
} from "react-icons/fa";

function Header({ device, setDevice}) {
  return (
    <>
      <div className="preview-bar">
        <FaDesktop
          className={device === "desktop" ? "active" : ""}
          onClick={() => setDevice("desktop")}
        />

        <FaLaptop
          className={device === "laptop" ? "active" : ""}
          onClick={() => setDevice("laptop")}
        />

        <FaTabletAlt
          className={device === "tablet" ? "active" : ""}
          onClick={() => setDevice("tablet")}
        />

        <FaMobileAlt
          className={device === "mobile" ? "active" : ""}
          onClick={() => setDevice("mobile")}
        />
      </div>
    </>
  );
}

export default Header;

import { NavLink } from "react-router-dom";

function Logo() {
  return (
    <div className="logoDiv">
      <NavLink to="/">
        <img
          className="logoImg"
          src="../src/assets/images/loreal_logo.png"
          alt="loreal_logo"
        />
      </NavLink>
    </div>
  );
}

export default Logo;

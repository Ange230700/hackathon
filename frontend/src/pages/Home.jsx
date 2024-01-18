import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Home() {
  return (
    <div className="homePage">
      <Logo />
      <div className="heroImageDiv">
        <img
          className="heroImage"
          alt="heroImage"
          src="../src/assets/images/hero.png"
        />
        <NavLink to="/form1">
          <div className="CTA_button">Exclusive Makeover</div>
        </NavLink>
      </div>
    </div>
  );
}

export default Home;

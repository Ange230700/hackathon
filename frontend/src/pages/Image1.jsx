import { NavLink } from "react-router-dom";

function Image1() {
  return (
    <div className="Iphone14Plus">
      <img
        className="GlobalWomenBeautyStandardsEstherHonig21"
        src="./src/assets/images/Original.jpg"
        alt="image1"
      />
      <div className="Ellipse1" />

      <NavLink to="/Image2" className="image2">
        <div className="Ellipse2" />
      </NavLink>
    </div>
  );
}

export default Image1;

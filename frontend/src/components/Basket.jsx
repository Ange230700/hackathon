import { NavLink } from "react-router-dom";
import PropTypes from "prop-types";

function Basket({ basketAmount }) {
  return (
    <div className="basket_bar">
      <div>
        <NavLink to="/routine">
          <p>VOIR MON PANIER</p>{" "}
        </NavLink>
      </div>
      <div className="basketAmount">
        <img
          className="caddie"
          src="../src/assets/images/caddie.png"
          alt="caddie"
        />
        <p>{basketAmount}€</p>
      </div>
    </div>
  );
}

Basket.propTypes = {
  basketAmount: PropTypes.number.isRequired,
};

export default Basket;

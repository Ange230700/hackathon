/* eslint-disable react/self-closing-comp */
import { NavLink } from "react-router-dom";

function Panier() {
  return (
    <div className="panier-page">
      <div className="panier-navbar">
        <NavLink to="/">
          <div className="logo-link">
            <img src="../src/assets/images/logo.png" alt="logo-loreal" />
          </div>
        </NavLink>
        <div className="search-shopping">
          <div className="searchbar">
            <img src="../src/assets/images/search.png" alt="search" />
          </div>
          <div className="shopping">
            <img src="../src/assets/images/shopping.png" alt="panier" />
          </div>
          <div className="burger-menu">
            <div className="menu"></div>
            <div className="menu"></div>
            <div className="menu"></div>
          </div>
        </div>
      </div>
      <div className="panier-title">
        <p>Votre panier (2 produit(s))</p>
      </div>
      <div className="panier-card">
        <div className="items-image">
          <img
            className="imgItems"
            src="../src/assets/images/ral.png"
            alt="business suffer"
          />
        </div>
        <div className="items-name-price">
          <div className="items-name">
            <p>Business Suffer</p>
          </div>
          <div className="items-price">
            <p>10.50€</p>
          </div>
        </div>
        <div className="quantity-container">
          <div className="quantity">
            <p>
              Quantité <br /> - 1 +
            </p>
          </div>
          <div className="delete">
            <button type="button" className="delete-par">
              Supprimer
            </button>
          </div>
        </div>
      </div>
      <div className="panier-card">
        <div className="items-image">
          <img
            className="imgItems"
            src="../src/assets/images/fdt.png"
            alt="business suffer"
          />
        </div>
        <div className="items-name-price">
          <div className="items-name">
            <p>Business Suffer</p>
          </div>
          <div className="items-price">
            <p>11.17€</p>
          </div>
        </div>
        <div className="quantity-container">
          <div className="quantity">
            <p>
              Quantité <br /> - 1 +
            </p>
          </div>
          <div className="delete">
            <button type="button" className="delete-par">
              Supprimer
            </button>
          </div>
        </div>
      </div>
      <div className="payment-container">
        <div className="total">
          <p>Total</p>
          <p>21.67€</p>
        </div>
        <div className="payment-button">
          <button type="button">PAIEMENT SÉCURISÉ</button>
        </div>
      </div>
    </div>
  );
}

export default Panier;

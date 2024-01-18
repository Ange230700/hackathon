import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";
import Basket from "../components/Basket";

function Look1() {
  const [basketAmount] = useState(0);

  return (
    <div className="looks">
      <Logo />
      <div className="subHeader">
        <img
          src="../src/assets/images/fleche-gauche.png"
          alt="previous"
          className="hidden"
        />
        <h2>Look n°1</h2>
        <NavLink to="/look/2">
          <img src="../src/assets/images/fleche-droite.png" alt="next" />
        </NavLink>
      </div>
      <div className="lookImgDiv">
        <img
          className="lookImg"
          src="../src/assets/images/look_1.jpg"
          alt="look_2"
        />
        <div className="cta_button">
          <p>Envoyer ce look par email</p>
        </div>
      </div>
      <div className="dotDiv">
        <span className="dot dotActive" />
        <span className="dot" />
        <span className="dot" />
      </div>

      <h3>ARTICLES DU LOOK</h3>
      <div className="productDiv">
        <div className="productInfo">
          <div className="productImageDiv">
            <img
              className="productImg"
              src="../src/assets/images/fond_de_teint.jpg"
              alt="fond_de_teint"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Sérum teinté Allow Exactly</p>
            <p className="productPrice">13.12€</p>
          </div>
        </div>
        <div className="addToBasket">
          <p>AJOUTER AU PANIER</p>
        </div>
      </div>
      <div className="productDiv">
        <div className="productInfo">
          <div className="productImageDiv">
            <img
              className="productImg"
              src="../src/assets/images/poudre.jpg"
              alt="fond_de_teint"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Poudre Allow Exactly</p>
            <p className="productPrice">11.99€</p>
          </div>
        </div>
        <div className="addToBasket">
          <p>AJOUTER AU PANIER</p>
        </div>
      </div>
      <div className="productDiv">
        <div className="productInfo">
          <div className="productImageDiv">
            <img
              className="productImg"
              src="../src/assets/images/fard.jpg"
              alt="ombre_a_paupieres"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Majority Fly Ombre à Paupière</p>
            <p className="productPrice">9.10€</p>
          </div>
        </div>
        <div className="addToBasket">
          <p>AJOUTER AU PANIER</p>
        </div>
      </div>
      <Basket basketAmount={basketAmount} />
    </div>
  );
}

export default Look1;

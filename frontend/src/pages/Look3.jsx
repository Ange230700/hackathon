import { NavLink } from "react-router-dom";
import { useState } from "react";
import Logo from "../components/Logo";
import Basket from "../components/Basket";

function Look3() {
  const [basketAmount, setBasketAmount] = useState(0);

  function handleClick1() {
    setBasketAmount(11.17);
  }
  function handleClick2() {
    setBasketAmount(21.67);
  }
  return (
    <div className="looks">
      <Logo />
      <div className="subHeader">
        <NavLink to="/look/2">
          <img src="../src/assets/images/fleche-gauche.png" alt="previous" />
        </NavLink>
        <h2>Look n°3</h2>
        <img
          src="../src/assets/images/fleche-droite.png"
          alt="next"
          className="hidden"
        />
      </div>
      <div className="lookImgDiv">
        <img
          className="lookImg"
          src="../src/assets/images/look_3.jpg"
          alt="look_2"
        />
        <div className="cta_button">
          <p>Envoyer ce look par email</p>
        </div>
      </div>
      <div className="dotDiv">
        <span className="dot" />
        <span className="dot" />
        <span className="dot dotActive" />
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
            <p className="productName">Sérum teinté Accord Parfait</p>
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
            <p className="productName">Way Find</p>
            <p className="productPrice">11.17€</p>
          </div>
        </div>
        <button type="button" className="addToBasket" onClick={handleClick1}>
          <p>AJOUTER AU PANIER</p>
        </button>
      </div>
      <div className="productDiv">
        <div className="productInfo">
          <div className="productImageDiv">
            <img
              className="productImg"
              src="../src/assets/images/blush.jpg"
              alt="fond_de_teint"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Blush Accord Parfait</p>
            <p className="productPrice">13.40€</p>
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
              src="../src/assets/images/rouge.jpg"
              alt="ombre_a_paupieres"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Business Suffer Rouge à lèvres</p>
            <p className="productPrice">10.50€</p>
          </div>
        </div>
        <button type="button" className="addToBasket" onClick={handleClick2}>
          <p>AJOUTER AU PANIER</p>
        </button>
      </div>
      <Basket basketAmount={basketAmount} />
    </div>
  );
}

export default Look3;

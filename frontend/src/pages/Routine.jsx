import { useState } from "react";
import Logo from "../components/Logo";
import Basket from "../components/Basket";

function Routine() {
  const [basketAmount] = useState(28.11);

  return (
    <>
      <div className="routine-page">
        <Logo />
        <div className="header-routine">
          <p>Votre routine soin sur-mesure</p>
        </div>
        <div className="products-container">
          <div className="productDiv">
            <div className="productInfo">
              <div className="productImageDiv">
                <img
                  className="productImg"
                  src="../src/assets/images/revitalift.png"
                  alt="fond_de_teint"
                />
              </div>
              <div className="productDetailsDiv">
                <p className="productName">Sérum Make International</p>
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
                  src="../src/assets/images/contouryeux.jpg"
                  alt="fond_de_teint"
                />
              </div>
              <div className="productDetailsDiv">
                <p className="productName">Contour pour les yeux List Rule</p>
                <p className="productPrice">14.99€</p>
              </div>
            </div>
            <div className="addToBasket">
              <p>AJOUTER AU PANIER</p>
            </div>
          </div>
        </div>
      </div>

      <Basket basketAmount={basketAmount} />
    </>
  );
}

export default Routine;

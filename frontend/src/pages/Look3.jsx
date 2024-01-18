import React, { useState } from "react";
import { NavLink } from "react-router-dom";
// eslint-disable-next-line import/no-extraneous-dependencies
import { ToastContainer, toast } from "react-toastify";
// eslint-disable-next-line import/no-extraneous-dependencies
import "react-toastify/dist/ReactToastify.css";
import Logo from "../components/Logo";
import Basket from "../components/Basket";

function Look3() {
  const [basketAmount, setBasketAmount] = useState(0);
  const [showModal, setShowModal] = useState(false);

  function handleClick1() {
    setBasketAmount(11.17);
  }

  function handleClick2() {
    setBasketAmount(21.67);
  }

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const sendByEmail = () => {
    toast.success("Look envoyé par email avec succès !", {
      position: "top-right",
      autoClose: 3000, // Ferme le toast après 3000 millisecondes (3 secondes)
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });

    // Fermer la modale après l'envoi
    closeModal();
  };

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
        <div
          className="cta_button"
          role="button"
          tabIndex="0"
          onClick={openModal}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === "Space") {
              openModal();
            }
          }}
        >
          <p>Envoyer ce look par email</p>
        </div>
      </div>
      <div className="dotDiv">
        <span className="dot" />
        <span className="dot" />
        <span className="dot dotActive" />
      </div>

      {showModal && (
        <div className="modal">
          <p>Êtes-vous sûr de vouloir envoyer ce look par email ?</p>
          <button type="button" onClick={sendByEmail}>
            Confirmer
          </button>
          <button type="button" onClick={closeModal}>
            Annuler
          </button>
        </div>
      )}

      <ToastContainer />

      <h3>ARTICLES DU LOOK</h3>
      <div className="productDiv">
        <div className="productInfo">
          <div className="productImageDiv">
            <img
              className="productImg"
              src="../src/assets/images/coloration.jpg"
              alt="coloration cheveux"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Coloration Study Design Noir Ebène</p>
            <p className="productPrice">10.80€</p>
          </div>
        </div>
        <button type="button" className="addToBasket" onClick={handleClick2}>
          <p>AJOUTER AU PANIER</p>
        </button>
      </div>
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
              alt="blush"
            />
          </div>
          <div className="productDetailsDiv">
            <p className="productName">Blush Allow Exactly</p>
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
              alt="rouge à lèvres"
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

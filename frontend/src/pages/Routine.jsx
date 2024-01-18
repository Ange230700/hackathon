import Logo from "../components/Logo";

function Routine() {
  return (
    <div className="routine-page">
      <Logo />
      <div className="header-routine">
        <p>Votre routine soin sur-mesure</p>
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
            <p className="productName">Sérum teinté Accord Parfait</p>
            <p className="productPrice">13.12€</p>
          </div>
        </div>
        <div className="addToBasket">
          <p>AJOUTER AU PANIER</p>
        </div>
      </div>
    </div>
  );
}

export default Routine;

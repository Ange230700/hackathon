import Logo from "../components/Logo";

function Look2() {
  return (
    <div className="looks">
      <Logo />

      <h2>Look n°2</h2>
      <div className="lookImgDiv">
        <img
          className="lookImg"
          src="../src/assets/images/look_2.jpg"
          alt="look_2"
        />
        <div className="cta_button">
          <p>Ajouter ce look au panier</p>
        </div>
      </div>
      <div className="dotDiv">
        <span className="dot" />
        <span className="dot dotActive" />
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
            <p className="productName">Poudre Accord Parfait</p>
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
            <p className="productName">Color Queen Ombre à Paupière</p>
            <p className="productPrice">9.10€</p>
          </div>
        </div>
        <div className="addToBasket">
          <p>AJOUTER AU PANIER</p>
        </div>
      </div>
    </div>
  );
}

export default Look2;

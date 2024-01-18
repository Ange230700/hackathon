import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

function Image2() {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Activer l'animation après un court délai (par exemple, 500ms)
    const timeout = setTimeout(() => {
      setAnimate(true);
    }, 500);

    // Nettoyer le timeout lorsque le composant est démonté
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div className={`Iphone14Plus4 ${animate ? "appearAnimation" : ""}`}>
      <img
        className="GlobalWomenBeautyStandardsEstherHonig22"
        src="./src/assets/images/Original.jpg"
        alt="image2"
      />
      <div className="Rectangle14" />
      <NavLink to="/Image3" className="EnvoyerCettePhoto">
        ENVOYER CETTE PHOTO
      </NavLink>
    </div>
  );
}

export default Image2;

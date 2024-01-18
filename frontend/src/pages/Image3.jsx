import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Image3() {
  const [animationCompleted, setAnimationCompleted] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleAnimationEnd = () => {
      setAnimationCompleted(true);
    };

    const loader = document.querySelector(".loader");
    if (loader) {
      loader.addEventListener("animationend", handleAnimationEnd);
    }

    return () => {
      if (loader) {
        loader.removeEventListener("animationend", handleAnimationEnd);
      }
    };
  }, []);

  useEffect(() => {
    if (animationCompleted) {
      navigate("/look/3"); // Remplacez '/page-suivante' par le chemin réel de votre page suivante
    }
  }, [animationCompleted, navigate]);

  return (
    <div className="Iphone14Plus3">
      <img
        className="GlobalWomenBeautyStandardsEstherHonig23"
        src="./src/assets/images/Original.jpg"
        alt="image3"
      />
      <div className="loader" />
    </div>
  );
}

export default Image3;

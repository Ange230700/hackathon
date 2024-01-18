import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Looks() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [animationStart, setAnimationStart] = useState(false);

  useEffect(() => {
    // Simulate AI processing delay
    let timer;

    if (progress < 100) {
      timer = setTimeout(() => {
        setProgress(progress + 1);
      }, 100);
      setAnimationStart(true);
    } else {
      setLoading(false);
    }

    return () => clearTimeout(timer);
  }, [progress]);

  if (loading) {
    return (
      <div className="loading">
        <p>
          {progress < 20
            ? "Analyse de vos données"
            : progress < 40
              ? "Création du look 1 sur 3"
              : progress < 60
                ? "Création du look 2 sur 3"
                : progress < 80
                  ? "Création du look 3 sur 3"
                  : "Finalisation..."}{" "}
          {progress}%
        </p>
        <div className="progressBar">
          <div className="progress" style={{ width: `${progress}%` }} />
        </div>
      </div>
    ); // Style this as needed
  }

  return (
    <main>
      <Logo />
      <div className="Looks">
        <div className="Wrapper">
          <div className="Container">
            <p>Vos looks personnalisés</p>
          </div>
          <div className="Container2">
            <div
              className={`LooksContainer ${
                animationStart ? "startAnimation" : ""
              }`}
            >
              <NavLink to="/look/1">
                <img src="../src/assets/images/look_1.jpg" alt="Look1" />
              </NavLink>
              <NavLink to="/look/2">
                <img src="../src/assets/images/look_2.jpg" alt="Look2" />
              </NavLink>
              <NavLink to="/look/3">
                <img src="../src/assets/images/look_3.jpg" alt="Look3" />
              </NavLink>
            </div>
            <NavLink className="Button" to="/routine">
              PASSER CETTE ÉTAPE
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Looks;

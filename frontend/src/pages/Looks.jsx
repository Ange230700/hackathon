import React, { useState, useEffect, useRef } from "react";
import { NavLink } from "react-router-dom";
import Typed from "typed.js";
import Logo from "../components/Logo";

function Looks() {
  const [loading, setLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const messageRef = useRef(null);

  useEffect(() => {
    // Simulate AI processing delay
    let timer;

    if (progress < 100) {
      timer = setTimeout(() => {
        setProgress(progress + 1);
      }, 50);
    }

    if (progress === 100) {
      setLoading(false);
      const options = {
        strings: [
          "Vos looks sont prêts ! Choisissez votre préféré entre ces 3 propositions pour voir les produits qui le composent.",
        ],
        typeSpeed: 20,
        backSpeed: 20,
        loop: false,
      };

      setTimeout(() => {
        if (messageRef.current) {
          new Typed(messageRef.current, options);
        }
      }, 2000);
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
            <div className="LooksContainer">
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
            <div className="messageContainer">
              <p ref={messageRef} />
            </div>
            <NavLink className="Button" to="/routine">
              VOIR LES DETAILS DES LOOKS
            </NavLink>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Looks;

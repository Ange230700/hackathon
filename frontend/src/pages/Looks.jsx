import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../components/Logo";

function Looks() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate AI processing delay
    const timer = setTimeout(() => setLoading(false), 3000); // 3 seconds delay
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <div className="loading">Generating looks...</div>; // Style this as needed
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

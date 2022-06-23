import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "./Logo";

const Headers = () => {
  return (
    <div className="navigation">
      <nav>
        <ul className="menu">
          <li>
            <Logo />
          </li>
          <NavLink
            to="/"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Acceuil</li>
          </NavLink>
          <NavLink
            to="/article"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Mes Articles</li>
          </NavLink>
          <NavLink
            to="/contact"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Contactez-moi</li>
          </NavLink>
          <NavLink
            to="/produit"
            className={(nav) => (nav.isActive ? "nav-active" : "")}
          >
            <li>Nos Produits</li>
          </NavLink>
        </ul>
      </nav>
    </div>
  );
};

export default Headers;

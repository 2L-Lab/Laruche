import React from "react";
import Headers from "../components/Headers";

const Erreur = () => {
  return (
    <div className="erreur">
      <Headers />
      <h3>Erreur 404</h3>
      <p>Retourner à la page d'acceuil</p>
    </div>
  );
};

export default Erreur;

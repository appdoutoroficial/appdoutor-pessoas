import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../../assets/img/ft_perfil.png";
const Congrats = () => {
  const navigate = useNavigate();
  return (
    <>
      <div
        className="welcome d-flex fixed-bottom align-items-center justify-content-center vh-100"
        style={{ margin: "auto" }}
      >
        <div className="text-center pb-5 mb-5">
          <div className="mb-5">
            <img src={logo} alt="" className="img-fluid blue-logo mb-3" />
            <h1 className="text-primary fw-bold mb-1">Dra. Regina Biasoli</h1>
            <h6 className="text-1">Hematologista</h6>
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom p-3">
        <a
          onClick={() => navigate("/inicio")}
          className="btn btn-info btn-lg w-100 rounded-4"
        >
          Continuar
        </a>
      </div>
    </>
  );
};

export default Congrats;

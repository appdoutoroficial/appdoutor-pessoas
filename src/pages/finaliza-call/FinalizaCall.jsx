import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png";
import { useNavigate } from "react-router-dom";

const FinalizaCall = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="call-end d-flex align-items-center justify-content-center vh-100">
        <div className="text-center mb-5 pb-5">
          <img
            src={photo}
            alt=""
            className="img-fluid rounded-circle call-img"
          />
          <div className="mt-4">
            <p className="mb-2 text-danger">Consulta encerrada</p>
            <h6 className="text-primary mb-2">35:00 Minutos</h6>
          </div>
        </div>
      </div>
      <div className="footer fixed-bottom d-grid gap-3 m-3">
        <a
          onClick={() => navigate("/review")}
          className="btn btn-info btn-lg w-100 rounded-4"
        >
          Avalie a consulta
        </a>
        <a
          onClick={() => navigate("/inicio")}
          className="btn btn-outline-info btn-lg w-100"
        >
          Finalizar
        </a>
      </div>
    </>
  );
};

export default FinalizaCall;

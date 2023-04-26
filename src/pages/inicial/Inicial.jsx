import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import { ReactSVG } from "react-svg";
import logo from "../../assets/img/ft_perfil.png";

const Inicial = () => {
    return (
        <>
          <div className="welcome d-flex fixed-bottom align-items-center justify-content-center vh-100" style={{ margin: "auto" }}>
                <div className="text-center pb-5 mb-5">
                    <div className="mb-5">
                    <img src={logo} alt="" className="img-fluid blue-logo mb-3"/>
                    <h1 className="text-primary fw-bold mb-1">Dra. Regina Biasoli</h1>
                    <h6 className="text-1">Hematologista</h6>
                    </div>
                </div>
            </div>
            <div className="footer fixed-bottom d-grid gap-3 m-4">
                <a href="/cadastrar" className="btn btn-info btn-lg">Inscreva-se</a>
                <a href="/entrar" className="btn btn-outline-info btn-lg">Entrar</a>
            </div>
        </>
    )
}

export default Inicial;
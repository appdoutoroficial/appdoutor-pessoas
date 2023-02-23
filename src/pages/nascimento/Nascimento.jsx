
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';

const Nascimento = () => {
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru">Olá <b>Fulano!</b></p>
                    </div>
                    <div className="card-body">
                        <p className="txt-instru">Digite sua data de nascimento abaixo para continuar.</p>
                    </div>
                </div>
                <div className="campo-cad">
                    <input type="date" className="cad-2" id="nome" placeholder="Digite seu nome completo" />
                </div>
                <button className="btn-avancar">Avançar</button>
            </div>
        </>
    )
}

export default Nascimento;
import React, { useState, useEffect, Component } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';


const validaCPF = () => {
    return (
        <>
            <Navbar />
            
            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru">Seja muito <b>bem vindo!</b></p>
                    </div>

                    <div className="card-body">
                        <p className="txt-instru">Para iniciar a criação da sua conta, insira seu <b>CPF</b> abaixo.</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <InputMask mask="999.999.999-99" maskChar=" " />
                    {/* <input type="text" className="cad-2" data-mask="000.000.000-00" name="cpf" id="cpf" placeholder="Digite seu CPF" aria-label="Recipiente para nickname" aria-describedby="basic-addon2" /> */}
                </div>

                <button className="btn-avancar">Avançar</button>
            </div>
        </>
    )
}

export default validaCPF;
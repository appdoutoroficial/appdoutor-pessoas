import React, { useState, useEffect } from "react";
import logo from '../../assets/images/123.png'; // Tell webpack this JS file uses this image

const ContaCriada = () => {
    return (
        <div className="container">
            <div className="card-foto">
                <div className="card-body">
                    <img src={logo} className="emoji" alt=""/>
                </div>
            </div>
            <div className="card-txt">
                <div className="card-body">
                    <p className="txt-instru2">Seja muito bem vindo <b>Fulano</b> ao <b>App Doutor!</b></p>
                </div>
            </div>
            <button className="btn-avancar">Vamos lá!</button>
        </div>
    )
}

export default ContaCriada;
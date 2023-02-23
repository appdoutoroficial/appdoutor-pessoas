
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import selfie from '../../assets/images/selfie.png'

const Selfie = () => {
    return (
        <>
            <Navbar />

            <div className="container">
                <div className="card-txt2">
                    <div className="card-body">
                        <p className="txt-instru"><b>Fulano!</b> Chegou a hora de tirar aquela foto.</p>
                    </div>
                </div>
                <div className="card-foto">
                    <div className="card-body">
                        <img src={selfie} className="selfie" alt="" />
                    </div>
                </div>

                <button className="btn-avancar">Avançar</button>
                <div className="bx-cad">
                    <a href="#" className="cad"> Pular</a>
                </div>
            </div>
        </>
    )
}

export default Selfie;
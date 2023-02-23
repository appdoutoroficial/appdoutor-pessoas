import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import axiosConfig from '../../axiosConfig';

const ValidaCPF = () => {
    const [cpf, setCpf] = useState();

    useEffect(() => {
        // Atualiza o título do documento usando a API do browser
        document.title = `Você clicou 1 vezes`;
    });

    
    const validaCPF = (elem) => {
        axiosConfig.get("/Especialidades/Listar")
        .then((response) => {
            console.log(response);
            // setCep(response.data);
        })
    }

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
                    <InputMask mask="999.999.999-99" onBlur={validaCPF} name="cpf" className="cpf" maskChar=" " />
                    {/* <input type="text" className="cad-2" data-mask="000.000.000-00" name="cpf" id="cpf" placeholder="Digite seu CPF" aria-label="Recipiente para nickname" aria-describedby="basic-addon2" /> */}
                </div>

                <button className="btn-avancar">Avançar</button>
            </div>
        </>
    )
}

export default ValidaCPF;
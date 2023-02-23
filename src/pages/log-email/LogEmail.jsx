
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';

const LogEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");

    const change = (elem) => {
        localStorage.setItem('emailDigitado', elem.target.value);
        setEmail(elem.target.value);
    }

    const validaCampos = () => {
        if( email != '' ){
            navigate('/senha')
        }else{
            Swal.fire({
                icon: "warning",
                title: "Confira os campos",
                text: "Preencha os campos corretamente!",
                showCancelButton: false,
                confirmButtonText: 'Sim',
            });
        }
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru">Qual é o email cadastrado nessa conta?</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <input className="form-control cad-2" type="email" name="email" onChange={change} required="" placeholder="usuario@dominio.com" />
                </div>

                <button className="btn-avancar" onClick={validaCampos}>Avançar</button>
            </div>
        </>
    )
}

export default LogEmail;
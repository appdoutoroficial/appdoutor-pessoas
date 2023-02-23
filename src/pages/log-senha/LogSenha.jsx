
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axiosConfig from '../../axiosConfig';

const LogSenha = () => {
    const change = (elem) => {
        localStorage.setItem('senhaDigitada', elem.target.value);
        setSenha(elem.target.value);
    }

    const navigate = useNavigate();
    const [senha, setSenha] = useState("");

    const validaCampos = () => {
        var email = localStorage.getItem('emailDigitado');
        if( senha != '' && email != '' ){
            var idUser = localStorage.getItem('idUser');
                    
            axiosConfig.post("/Pessoa/Salvar", {
                idPessoa: idUser,
                login: email,
                senha: senha
            })
            .then((response) => {
                // console.log(response);
            })
            .catch((err) =>{
                Swal.fire({
                    icon: "warning",
                    title: "Erro",
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                });
            })
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
                        <p className="txt-instru">Olá <b>Fulano!</b></p>
                    </div>
                    <div className="card-body">
                        <p className="txt-instru">Digite sua senha para ter certeza que é você mesmo tentando entrar</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <input className="form-control cad-2" type="password" name="" onChange={change} required="" placeholder="Digite uma senha" />
                </div>

                <button className="btn-avancar" onClick={validaCampos}>Avançar</button>
            </div>
        </>
    )
}

export default LogSenha;

import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";


const CriarSenha = () => {
    const navigate = useNavigate();
    const [password, setPassword] = useState();
    const [passwordConfirm, setPasswordConfirm] = useState();

    useEffect(() => {
        checkLocalStorage();
    })

    const checkLocalStorage = () => {
        var validaCpf = localStorage.getItem('cpf');
        var name = localStorage.getItem('name');
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');
        var pin = localStorage.getItem('pin');
        var pinEmail = localStorage.getItem('pinEmail');

        if( validaCpf == '' && name == '' && telefone == "" && pin == "" && email == "" && pinEmail == "" ){
            navigate('/email');
        }
    }

    const changePassword = (elem) => {
        if( elem.target.value != '' ){
            switch (elem.target.name) {
                case "password":
                    setPassword(elem.target.value);
                    break;
                default:
                    setPasswordConfirm(elem.target.value);
                    break;
            }
        }
    }

    const submitPassword = () => {
        if( password === passwordConfirm ){
            localStorage.setItem('password', password);
            localStorage.setItem('passwordConfirm', passwordConfirm);
            navigate('/revisa');
        }else{
            Swal.fire({
                icon: "question",
                title: "Confira os campos",
                text: "Senhas não batem",
                showCancelButton: false,
                confirmButtonText: 'Ok',
            });
        }
    }
    
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru"><b>Fulano</b>, para ter certeza que sua conta vai estar segura, nós precisamos que você adicione uma senha.</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <input className="form-control cad-2" type="password" onChange={changePassword} name="password" required="" placeholder="Digite sua senha" />
                    
                    <div className="space"></div>

                    <input className="form-control cad-2" type="password" onChange={changePassword} name="passwordConfirm" required="" placeholder="Repita sua senha" />
                </div>

                <button className="btn-avancar" onClick={submitPassword}>Avançar</button>
            </div>
        </>
    )
}

export default CriarSenha;

import React, { useState, useEffect, Component } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";

const ConfirmaEmail = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState("");
    const [pin, setPin] = useState("");

    useEffect(() => {
        checkLocalStorage();
    })

    const checkLocalStorage = () => {
        var validaCpf = localStorage.getItem('cpf');
        var name = localStorage.getItem('name');
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');

        email = email.replace('"', '');
        email = email.replace('"', '');

        setEmail(email);

        if( validaCpf == '' && name == '' && telefone == "" && pin == "" && email == "" ){
            navigate('/email');
        }
    }

    const getPin = (elem) => {
        if( elem.target.value != '' ){
            setPin(elem.target.value);
            localStorage.setItem('pinEmail', JSON.stringify(elem.target.value));
        }
    }

    const verifyEmail = () => {
        if( email != '' ){
            Swal.fire({
                icon: "question",
                title: "Deseja prossseguir",
                text: "Tem certeza que o PIN está correto?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            }).then((result) => {
              if (result.isConfirmed) {
                axiosConfig.post("/Pessoa/ValidaEmail?email="+email+"&pin="+pin)
                .then((response) => {
                    if( response.data.statusCode === 200 && response.data.sucesso ){
                        Swal.fire({
                            icon: "success",
                            title: response.data.mensagem,
                            showCancelButton: false,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/endereco');
                            }
                        });
                    }
                })
                .catch((err) =>{
                    Swal.fire({
                        icon: "warning",
                        title: "PIN Inválido",
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    });
                })
              }
            })
        }else{
            Swal.fire({
                icon: "question",
                title: "Confira os campos",
                text: "Preencha com o PIN",
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
                        <p className="txt-instru"><b>Fulano</b>, digite o código recebido no seu email, para continuar.</p>
                    </div>
                </div>
                
                <div className="campo-cad">
                    <InputMask mask="999999" onChange={getPin} maskChar=" " />
                </div>

                <button className="btn-avancar" onClick={verifyEmail}>Avançar</button>
{/*                 
                <div className="bx-cad">
                    <a href="#" className="cad"> Reenviar código</a>
                </div> */}
            </div>
        </>
    )
}

export default ConfirmaEmail;
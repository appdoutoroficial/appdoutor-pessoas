import React, { useState, useEffect, Component } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";

const Confirma = () => {
    const navigate = useNavigate();
    const [pin, setPin] = useState("");
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        checkLocalStorage();
    })

    const checkLocalStorage = () => {
        var validaCpf = localStorage.getItem('cpf');
        var name = localStorage.getItem('name');
        var telefone = localStorage.getItem('telefone');

        telefone = telefone.replace("(", "");
        telefone = telefone.replace(")", "");
        telefone = telefone.replace("-", "");
        telefone = telefone.replace(" ", "");
        telefone = telefone.replace('"', '');
        telefone = telefone.replace('"', '');
        localStorage.setItem('telefone', JSON.stringify(telefone));

        setTelefone(telefone);
        if( validaCpf == '' && name == '' && telefone == "" ){
            navigate('/contato');
        }
    }

    const getPin = (elem) => {
        if( elem != '' ){
            var pin = elem.target.value;
            setPin(pin);
            localStorage.setItem('pin', '');
            localStorage.setItem('pin', pin);
        }
    }

    const checkTelefone = () => {
        if( pin != '' ){
            Swal.fire({
                icon: "question",
                title: "Deseja prossseguir",
                text: "Tem certeza que as informações estão certas?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            }).then((result) => {
                if (result.isConfirmed) {
                    axiosConfig.post("/Pessoa/ValidaTelefone?telefone=55"+telefone+"&pin="+pin)
                    .then((response) => {
                        if( response.data.statusCode === 200 && response.data.sucesso ){
                            Swal.fire({
                                icon: "success",
                                title: response.data.mensagem,
                                showCancelButton: false,
                                confirmButtonText: 'Ok',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/email');
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
                text: "Informe o PIN",
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
                        <p className="txt-instru"><b>Fulano</b>, digite o código recebido no seu telefone, para continuar.</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <InputMask mask="999999" onChange={getPin} maskChar=" " />
                </div>

                <button className="btn-avancar" onClick={checkTelefone}>Avançar</button>
            </div>
        </>
    )
}

export default Confirma;
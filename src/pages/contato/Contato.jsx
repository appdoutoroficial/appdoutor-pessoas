
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";

const Contato = () => {
    const navigate = useNavigate();
    const [telefone, setTelefone] = useState("");

    useEffect(() => {
        checkLocalStorage();
    })

    const checkLocalStorage = () => {
        var validaCpf = localStorage.getItem('cpf');
        var name = localStorage.getItem('name');
        if( validaCpf == '' && name == '' ){
            navigate('/valida-cpf');
        }
    }


    const getTelefone = (elem) => {
        if( elem != '' ){
            var telefone = elem.target.value;
            telefone = telefone.replace("(", "");
            telefone = telefone.replace(")", "");
            telefone = telefone.replace("-", "");
            telefone = telefone.replace(" ", "");
            setTelefone(telefone);
            localStorage.setItem('telefone', JSON.stringify(telefone));
        }
    }

    const checkTelefone = () => {
        if( telefone != '' ){
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
                    axiosConfig.post("/Pessoa/EnviarTelefoneParaValidacao?telefone=55"+telefone)
                    .then((response) => {
                        if( response.data.statusCode === 200 && response.data.sucesso ){
                            Swal.fire({
                                icon: "success",
                                title: response.data.mensagem,
                                showCancelButton: false,
                                confirmButtonText: 'Ok',
                            }).then((result) => {
                                if (result.isConfirmed) {
                                    navigate('/confirma');
                                }
                            });
                        }
                    })
                    .catch((err) =>{
                        Swal.fire({
                            icon: "warning",
                            title: "Revise os campos!",
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
                text: "Informe seu celular",
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
                        <p className="txt-instru"><b>Fulano</b>, com qual número de telefone nós podemos usar para te contatar?</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <InputMask mask="(99) 99999-9999" onChange={getTelefone} maskChar=" " />
                </div>

                <button className="btn-avancar" onClick={checkTelefone}>Avançar</button>
            </div>
        </>
    )
}

export default Contato;
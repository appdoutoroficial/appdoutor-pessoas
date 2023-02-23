
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Nome = () => {
    const navigate = useNavigate();
    const [nome, setNome] = useState("");

    useEffect(() => {
        checkLocalStorage();
    })

    const checkLocalStorage = () => {
        var validaCpf = localStorage.getItem('cpf');
        if( validaCpf == '' ){
            navigate('/valida-cpf');
        }
    }

    const setName = (elem) => {
        if( elem.target.value != '' ){
            setNome(elem.target.value);
            localStorage.setItem('name', JSON.stringify(elem.target.value));            
        }
    }

    const ValidaNome = () => {
        if( nome != '' ){
            Swal.fire({
                icon: "question",
                title: "Deseja prossseguir",
                text: "Tem certeza que o seu nome está correto?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            }).then((result) => {
                console.log(result, 'aq');
              if (result.isConfirmed) {
                navigate('/nascimento');
              }
            })
        }else{
            Swal.fire({
                icon: "question",
                title: "Confira os campos",
                text: "Preenche seu nome",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            });
        }
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
                        <p className="txt-instru">Para iniciar a criação da sua conta, insira abaixo como podemos te chamar.</p>
                    </div>
                </div>
                <div className="campo-cad">
                    <input type="text" className="cad-2" id="nome" onChange={setName} placeholder="Digite seu nome completo" />
                </div>

                <button className="btn-avancar" onClick={ValidaNome}>Avançar</button>
            </div>
        </>
    )
}

export default Nome;
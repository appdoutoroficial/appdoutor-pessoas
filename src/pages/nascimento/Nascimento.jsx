
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Nascimento = () => {
    const navigate = useNavigate();
    const [nascimento, setNascimento] = useState("");

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


    const setName = (elem) => {
        if( elem != '' ){
            setNascimento(elem.target.value);
            localStorage.setItem('nascimento', JSON.stringify(elem.target.value));            
        }
    }

    const checkNascimento = () => {
        if( nascimento != '' ){
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
                navigate('/contato');
              }
            })
        }else{
            Swal.fire({
                icon: "question",
                title: "Confira os campos",
                text: "Preenche sua data de nascimento",
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
                        <p className="txt-instru">Olá <b>Fulano!</b></p>
                    </div>
                    <div className="card-body">
                        <p className="txt-instru">Digite sua data de nascimento abaixo para continuar.</p>
                    </div>
                </div>
                
                <div className="campo-cad">
                    <input type="date" className="cad-2" onChange={setName} id="nome" placeholder="Digite seu nome completo" />
                </div>

                <button className="btn-avancar" onClick={checkNascimento}>Avançar</button>
            </div>
        </>
    )
}

export default Nascimento;
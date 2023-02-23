
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import axiosConfig from '../../axiosConfig';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Email = () => {
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
        var pin = localStorage.getItem('pin');

        pin = pin.replace('"', '');
        pin = pin.replace('"', '');

        setPin(pin);

        if( validaCpf == '' && name == '' && telefone == "" && pin == "" ){
            navigate('/confirma');
        }
    }

    const getEmail = (elem) => {
        if( elem.target.value != '' ){
            setEmail(elem.target.value);
            localStorage.setItem('email', JSON.stringify(elem.target.value));            
        }
        
    }

    const verifyEmail = () => {
        if( email != '' ){
            Swal.fire({
                icon: "question",
                title: "Deseja prossseguir",
                text: "Tem certeza que o seu e-mail está correto?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            }).then((result) => {
              if (result.isConfirmed) {
                // navigate('/nascimento');
                axiosConfig.post("/Pessoa/EnviaEmailParaValidacao?email="+email)
                .then((response) => {
                    if( response.data.statusCode === 200 && response.data.sucesso ){
                        Swal.fire({
                            icon: "success",
                            title: response.data.mensagem,
                            showCancelButton: false,
                            confirmButtonText: 'Ok',
                        }).then((result) => {
                            if (result.isConfirmed) {
                                navigate('/confirma-email');
                            }
                        });
                    }
                })
                .catch((err) =>{
                    Swal.fire({
                        icon: "warning",
                        title: "Preencha seu e-mail",
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
                text: "Preenche seu e-mail",
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
                        <p className="txt-instru"><b>Fulano</b>, com qual email nós podemos usar para te contatar?</p>
                    </div>
                </div>
                <div className="campo-cad">
                    <input className="form-control cad-2" type="email" onChange={getEmail} name="email" required="" placeholder="usuario@dominio.com" />
                </div>

                <button className="btn-avancar" onClick={verifyEmail}>Avançar</button>
            </div>
        </>
    )
}

export default Email;
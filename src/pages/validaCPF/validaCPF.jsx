import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import axiosConfig from '../../axiosConfig';
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';
import Swal from "sweetalert2";

const ValidaCPF = () => {
    const preencha = "Preencha seu CPF";
    const [disable, setDisable] = useState(true);
    const [cpf, setCpf] = useState();
    const [button, setButton] = useState(preencha);

    useEffect(() => {
        document.title = `Validar CPF`;
    });

    const validaCPF = (elem) => {
        localStorage.setItem('cpf', elem.target.value);

        if( elem.target.value != '' ){
            axiosConfig.post("/Pessoa/ValidaCPF?CPF="+elem.target.value)
            .then((response) => {
                if( response.data.statusCode === 200 && response.data.existente === false ){
                    setButton("Avançar");
                    setDisable(false);
                }else{
                    setButton(preencha);
                    Swal.fire({
                        icon: "warning",
                        title: response.data.mensagem,
                        showCancelButton: false,
                        confirmButtonText: 'Ok',
                    });
                }
            })
            .catch((err) =>{
                setButton(preencha);
                Swal.fire({
                    icon: "warning",
                    title: "Revise os campos!",
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                });
            })
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
                        <p className="txt-instru">Para iniciar a criação da sua conta, insira seu <b>CPF</b> abaixo.</p>
                    </div>
                </div>

                <div className="campo-cad">
                    <InputMask mask="999.999.999-99" onBlur={validaCPF} name="cpf" className="cpf" value={cpf} maskChar=" " />
                </div>

                <Button loading={true} className="btn-avancar" component={Link} to="/nome" disabled={disable}>
                    {button}
                </Button>
            </div>
        </>
    )
}

export default ValidaCPF;
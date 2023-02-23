
import React, { useState, useEffect } from "react";
import Navbar from '../../components/NavBar';
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import axios from 'axios';


const Endereco = () => {
    const navigate = useNavigate();
    const [cep, setCep] = useState({
        bairro: "",
        cep: "",
        complemento: "",
        ddd: "",
        gia: "",
        ibge: "",
        localidade: "",
        logradouro: "",
        numero: "",
        siafi: "",
        uf: "",
    });

    const getCep = (elem) => {
        elem = limpaVariavel(elem.target.value.replace("-", ""));
        axios.get("https://viacep.com.br/ws/"+elem+"/json/", {
            headers: {
                'Content-Type': 'application/json;charset=UTF-8',
                "Access-Control-Allow-Origin": "*",
                "Accept": 'application/json',
            }    
        })
        .then((response) => {
            if( response.data.erro ){
                Swal.fire({
                    icon: "warning",
                    title: "Confira os campos",
                    text: "Preencha seu CEP corretamente",
                    showCancelButton: false,
                    confirmButtonText: 'Sim',
                });
            }else{
                setCep(response.data);
                localStorage.setItem('cep', JSON.stringify(response.data));
                // console.log(localStorage.getItem('cep'));

            }
        })
    }

    const ValidaCEP = () => {
        if( cep != '' ){
            Swal.fire({
                icon: "question",
                title: "Deseja prossseguir",
                text: "Tem certeza que seu endereço está correto?",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            }).then((result) => {
              if (result.isConfirmed) {
                localStorage.setItem('cep', '');
                localStorage.setItem('cep', JSON.stringify(cep));
                navigate('/criar-senha');
              }
            })
        }else{
            Swal.fire({
                icon: "question",
                title: "Confira os campos",
                text: "Preencha seu CEP",
                showCancelButton: true,
                confirmButtonText: 'Sim',
                cancelButtonText: 'Não',
                focusConfirm: false,
            });
        }
    }


    const limpaVariavel = (value) => {
        value = value.replace('"', "");
        value = value.replace('"', "");
        return value;
    }

    const changeEndereco = (e) => {
        setCep({ ...cep, [e.target.name]: e.target.value });
    }

    return (
        <>
            <Navbar />
            <div className="container">
                <div className="card-txt">
                    <div className="card-body">
                        <p className="txt-instru"><b>Fulano</b>, agora precisamos saber o seu endereço.</p>
                    </div>
                </div>
                <form action="" className="getCep">
                    <div className="row">
                        <div className="mb-4 col-md-4">
                            <p className="font-weight-400 txt-end">Cep</p>
                            <InputMask mask="99999-999" onBlur={getCep} maskChar=" " />
                        </div>

                        <div className="space"></div>

                        <div className="mb-4 col-md-4">
                            <p className="font-weight-400 txt-end">Endereço</p>
                            <input className="form-control" readOnly type="text" onChange={changeEndereco} value={cep.logradouro} name="logradouro" id="rua" placeholder="Endereço " />
                        </div>

                        <div className="space"></div>
                        
                        <div className="mb-4 col-md-2">
                            <p className="font-weight-400 txt-end">Número</p>
                            <input className="form-control" type="text" onChange={changeEndereco} value={cep.numero} name="numero" id="number" placeholder="Número" />
                        </div>

                        <div className="space"></div>

                        <div className="mb-4 col-md-2">
                            <p className="font-weight-400 txt-end">Complemento</p>
                            <input className="form-control" type="text" onChange={changeEndereco} value={cep.complemento} name="complemento" id="complemento" placeholder="Complemento" />
                        </div>

                        <div className="space"></div>

                        <div className="mb-4 col-md-4">
                            <p className="font-weight-400 txt-end">Bairro</p>
                            <input className="form-control" readOnly type="text" onChange={changeEndereco} value={cep.bairro} name="bairro" id="neighbor" placeholder="Bairro " />
                        </div>

                        <div className="space"></div>

                        <div className="mb-4 col-md-4">
                            <p className="font-weight-400 txt-end">Cidade</p>
                            <input className="form-control" readOnly type="text" onChange={changeEndereco} value={cep.localidade} name="localidade" id="city" placeholder="Cidade" />
                        </div>

                        <div className="space"></div>

                        <div className="mb-4 col-md-2">
                            <p className="font-weight-400 txt-end">Estado</p>
                            <input className="form-control" readOnly type="text" onChange={changeEndereco} value={cep.uf} name="uf" id="state" placeholder="Estado " />
                        </div>

                        <div className="space"></div>

                    </div>
                </form>
                
                <button className="btn-avancar" onClick={ValidaCEP}>Avançar</button>
            </div>
        </>
    )
}

export default Endereco;
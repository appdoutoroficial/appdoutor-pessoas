
import React, { useState, useEffect, componentWillUnmount } from "react";
import Navbar from '../../components/NavBar';
import selfie from '../../assets/images/selfie.png'
import InputMask from 'react-input-mask';
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";

const Revisa = () => {
    const navigate = useNavigate();
    const [revisa, setRevisa] = useState({
        nome: "",
        cpf: "",
        nascimento: "",
        email: "",
        telefone: ""
    });

    const [revisaCEP, setRevisaCep] = useState({});
    const [formData, setFormData] = useState({
        nome: "",
        sobrenome: "",
        email: "",
        telefone: "",
        cpf: "",
        rg: "",
        endereco: {
            logradouro: "",
            numero: "",
            complemento: "",
            bairro: "",
            cidade: "",
            estado: "",
            cep: ""
        },
        dataNascimento: "",
        perfil: ""
    });

    useEffect(() => {
        checkLocalStorage();
        
        return () => {
            setRevisaCep(JSON.parse(localStorage.cep));
        }

    }, [revisa])

    const checkLocalStorage = () => {
        setRevisa(localStorage);

        var validaCpf = localStorage.getItem('cpf');
        var name = localStorage.getItem('name');
        var telefone = localStorage.getItem('telefone');
        var email = localStorage.getItem('email');
        var pin = localStorage.getItem('pin');
        var pinEmail = localStorage.getItem('pinEmail');

        if( revisa != "" ){
            if( validaCpf == '' && name == '' && telefone == "" && pin == "" && email == "" && pinEmail == "" ){
                navigate('/email');
            }
        }else{
            navigate('/valida-cpf');
        }
    }

    const limpaVariavel = (value) => {
        if( value != undefined ){
            value = value.replace('"', "");
            value = value.replace('"', "");
            return value;    
        }
    }

    const submitForm = () => {
        setFormData({});

        setFormData((prev) => [{...prev, 
            nome: limpaVariavel(localStorage.getItem('name')),
            sobrenome: "",
            email: limpaVariavel(localStorage.getItem('email')),
            telefone: "55"+limpaVariavel(localStorage.getItem('telefone')),
            cpf: limpaVariavel(localStorage.getItem('cpf')),
            rg: "",
            endereco: {
                logradouro: revisaCEP.logradouro,
                numero: revisaCEP.numero,
                complemento: revisaCEP.complemento,
                bairro: revisaCEP.bairro,
                cidade: revisaCEP.localidade,
                estado: revisaCEP.uf,
                cep: revisaCEP.cep
            },
            dataNascimento: limpaVariavel(localStorage.getItem('nascimento')),
            perfil: 1
        }]);
        
        axiosConfig.post("/Pessoa/Salvar", formData[0])
        .then((response) => {
            if( response.data.statusCode === 200 && response.data.sucesso ){
                localStorage.setItem('idUser', response.data.id);

                Swal.fire({
                    icon: "success",
                    title: response.data.mensagem,
                    showCancelButton: false,
                    confirmButtonText: 'Ok',
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/login');
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

    return (
        <>
            <Navbar />

            <div className="container noScroll">
                <div className="card-txt2">
                    <div className="card-body">
                        <p className="txt-instru"><b>Fulano</b>, vamos revisar as informações enviadas.</p>
                    </div>
                </div>

                {
                    // SELFIE
                    /* <div className="card-revisa">
                        <div className="card-body">
                            <img src={selfie} className="ft-cad" alt="" />
                        </div>
                    </div> */
                }

                <div className="space"></div>
                <div className="space"></div>

                <div className="">
                    <form>
                        <div className="info-pac">
                            <h6 className="cad">Nome completo</h6>
                            <input type="text" value={limpaVariavel(revisa.name)} placeholder="Fulano de Tal" />
                            <span className="bar"></span>
                        </div>

                        <div className="info-pac">
                            <h6 className="cad">CPF</h6>
                            <input type="text" value={limpaVariavel(revisa.cpf)} placeholder="000.000.000-01" />
                            <span className="bar"></span>
                        </div>

                        <div className="info-pac">
                            <h6 className="cad">Nascimento</h6>
                            <input type="date" value={limpaVariavel(revisa.nascimento)} placeholder="02/05/1990" />
                            <span className="bar"></span>
                        </div>

                        <div className="info-pac">
                            <h6 className="cad">Email</h6>
                            <input type="text" value={limpaVariavel(revisa.email)} placeholder="Fulano@dominio.com" />
                            <span className="bar"></span>
                        </div>

                        <div className="info-pac">
                            <h6 className="cad">Telefone</h6>
                            <InputMask mask="(99) 99999-9999" value={limpaVariavel(revisa.telefone)} maskChar=" " />
                            <span className="bar"></span>
                        </div>


                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Cep</p>
                            <InputMask mask="99999-999" value={revisaCEP.cep} maskChar=" " />
                        </div>

                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Endereço</p>
                            <input className="form-control" readOnly type="text" value={revisaCEP.logradouro} name="address" id="rua" placeholder="Endereço " />
                        </div>

                        <div className="space"></div>
                        
                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Número</p>
                            <input className="form-control" type="text" value={revisaCEP.numero} name="number" id="number" placeholder="Número" />
                        </div>

                        <div className="space"></div>

                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Complemento</p>
                            <input className="form-control" type="text" value={revisaCEP.complemento} name="complemento" id="complemento" placeholder="Complemento" />
                        </div>

                        <div className="space"></div>

                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Bairro</p>
                            <input className="form-control" readOnly type="text" value={revisaCEP.bairro} name="neighbor" id="neighbor" placeholder="Bairro " />
                        </div>

                        <div className="space"></div>

                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Cidade</p>
                            <input className="form-control" readOnly type="text" value={revisaCEP.localidade} name="city" id="city" placeholder="Cidade" />
                        </div>

                        <div className="space"></div>

                        <div className="info-pac">
                            <p className="font-weight-400 txt-end">Estado</p>
                            <input className="form-control" readOnly type="text" value={revisaCEP.uf} name="state" id="state" placeholder="Estado " />
                        </div>

                        <div className="space"></div>
                    </form>
                </div>

                <button className="btn-avancar" onClick={submitForm}>Isso aí, tudo certo!</button>
            </div>
        </>
    )
}

export default Revisa;
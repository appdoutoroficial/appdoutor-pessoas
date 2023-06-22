import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import axiosConfig from '../../axiosConfig';
import Swal from "sweetalert2";
import { SaveRounded } from "@mui/icons-material";

const Profile = (props) => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  console.log(value);

  const checkCEP = (e) => {
    const cep = e.target.value.replace(/\D/g, "");
    fetch(`https://viacep.com.br/ws/${cep}/json/`)
      .then((res) => res.json())
      .then((data) => {
        value.setOnboarding((prev) => ({ ...prev, endereco: data }));
      });
  };

  const dateOfBirthday = (data) => {
    var nascimento = data.split("/");
    nascimento = nascimento.reverse();
    nascimento = nascimento[0] + "-" + nascimento[1] + "-" + nascimento[2];
    nascimento = nascimento.split("-undefined");
    return nascimento[0];
  }
  
  const sendSubmit = () => {
    var datanascimento = dateOfBirthday(value.state.onboarding.dataNascimento);
    const form = value.state.onboarding;

    form.dataNascimento = datanascimento;
    form.endereco.cidade = form.endereco.localidade;
    form.endereco.estado = form.endereco.uf;
    form.endereco.numero = '123';

    axiosConfig.post("/Pessoa/Salvar", form)
    .then((response) => {
      if( response.data.statusCode === 200 && response.data.sucesso ){
          Swal.fire({
              icon: "success",
              title: response.data.mensagem,
              showCancelButton: false,
              confirmButtonText: 'Ok',
          }).then((result) => {
            saveCredencial(response.data.id)
          });
      }
    })
    .catch((err) =>{
        Swal.fire({
            icon: "warning",
            title: "Erro por favor tente mais tarde",
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });
    })
  }

  const saveCredencial = (cred) => {
    var formCredencial = {
      idPessoa: cred,
      login: value.state.onboarding.email,
      senha: value.state.onboarding.senha
    }
    
    axiosConfig.post("/Pessoa/SalvarCredencial", formCredencial)
    .then((response) => {
      if( response.data.statusCode === 200 && response.data.sucesso ){
          Swal.fire({
              icon: "success",
              title: response.data.mensagem,
              showCancelButton: false,
              confirmButtonText: 'Ok',
          }).then((result) => {
            navigate('/entrar')
          });
      }
    })
    .catch((err) =>{
        Swal.fire({
            icon: "warning",
            title: "Erro por favor tente mais tarde",
            showCancelButton: false,
            confirmButtonText: 'Ok',
        });
    })
  }

  return (
    <div className="sign-in p-4">
      <div className="d-flex align-items-start justify-content-between mb-4">
        <div>
          <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
          <h2 className="my-3 fw-bold secundario">
            Precisamos de algumas informações.
          </h2>
          <p className="text-muted mb-0">Nos ajude a te conhecer melhor!</p>
        </div>
      </div>
      <form>
        <div className="mb-3">
          <label for="exampleFormControlCPF" className="form-label mb-1">
            RG
          </label>
          <div
            className="input-group border bg-white rounded-3 py-1"
            id="exampleFormControlCPF"
          >
            <span
              className="input-group-text bg-transparent rounded-0 border-0"
              id="rg"
            >
              <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
            </span>

            <input
              type="text"
              className="form-control bg-transparent rounded-0 border-0 px-0"
              name="address"
              id="rua"
              placeholder="RG "
              aria-label=""
              aria-describedby="rg"
              value={value.state.onboarding.rg}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    rg: val.target.value,
                  }))
                }
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlCPF" className="form-label mb-1">
            Data de Nascimento
          </label>
          <div
            className="input-group border bg-white rounded-3 py-1"
            id="exampleFormControlCPF"
          >
            <span
              className="input-group-text bg-transparent rounded-0 border-0"
              id="rg"
            >
              <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
            </span>
            <InputMask
              mask="99/99/9999"
              //defaultValue={}
              className="form-control bg-transparent rounded-0 border-0 px-0"
              placeholder="Data de Nascimento"
              value={value.state.onboarding.dataNascimento}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    dataNascimento: val.target.value,
                  }))
                }
            />
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleFormControlCPF" className="form-label mb-1">
            Cep
          </label>
          <div
            className="input-group border bg-white rounded-3 py-1"
            id="exampleFormControlCPF"
          >
            <span
              className="input-group-text bg-transparent rounded-0 border-0"
              id="cep"
            >
              <span className="mdi mdi-home mdi-18px text-muted"></span>
            </span>
            <InputMask
              mask="99999-999"
              maskChar={""}
              type="text"
              className="form-control bg-transparent rounded-0 border-0 px-0"
              placeholder="Digite seu CEP"
              onBlur={checkCEP}
              value={value.state.onboarding.cep}
              onChange={(val) =>
                value.setOnboarding((prev) => ({
                  ...prev,
                  cep: val.target.value,
                }))
              }
            />
          </div>
        </div>

        
        <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Endereço
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="address"
                id="rua"
                placeholder="Endereço "
                aria-label=""
                aria-describedby="endereco"
                value={value.state.onboarding.endereco.logradouro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Número
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="number"
                id="number"
                placeholder="Número"
                aria-label=""
                aria-describedby="numero"
                value={value.state.onboarding.endereco.numero}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Complemento
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="complement"
                id="complement"
                placeholder="Complemento"
                aria-label=""
                aria-describedby="Complemento"
                value={value.state.onboarding.endereco.complemento}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Bairro
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="neighbor"
                id="neighbor"
                placeholder="Bairro "
                aria-label=""
                aria-describedby="bairro"
                value={value.state.onboarding.endereco.bairro}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Cidade
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="city"
                id="city"
                placeholder="Cidade"
                aria-label=""
                aria-describedby="cidade"
                value={value.state.onboarding.endereco.localidade}
              />
            </div>
          </div>
          <div className="mb-3">
            <label for="exampleFormControlCPF" className="form-label mb-1">
              Estado
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cep"
              >
                <span className="mdi mdi-home mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                name="state"
                id="state"
                placeholder="Estado"
                aria-label=""
                aria-describedby="Estado"
                value={value.state.onboarding.endereco.uf}
              />
            </div>
          </div>
        <div>
          <a
            onClick={sendSubmit}
            // onClick={() => navigate("/cadastrar-pagamento")}
            className="btn btn-info btn-lg w-100 rounded-4 mb-3"
          >
            Continuar
          </a>
        </div>
      </form>
    </div>
  );
};

export default Profile;

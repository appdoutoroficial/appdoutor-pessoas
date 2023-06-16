import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import InputMask from "react-input-mask";

import AppContext from "../../context/AppContext";
import axiosConfig from "../../axiosConfig";
import Swal from "sweetalert2";

const Signin = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  console.log(value);
  
  const sendSubmit = () => {
    axiosConfig
      .post(
        "/Clinica/EnviarTelefoneParaValidacao?telefone=" +
          value.state.onboarding.telefone
      )
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            sendEmail();
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };

  const sendEmail = () => {
    axiosConfig
      .post(
        "/Clinica/EnviaEmailParaValidacao?email=" + value.state.onboarding.email
      )
      .then((response) => {
        if (response.data.statusCode === 200 && response.data.sucesso) {
          Swal.fire({
            icon: "success",
            title: response.data.mensagem,
            showCancelButton: false,
            confirmButtonText: "Ok",
          }).then((result) => {
            if (result.isConfirmed) {
              navigate("/verifica");
            }
          });
        }
      })
      .catch((err) => {
        Swal.fire({
          icon: "warning",
          title: "Erro por favor tente mais tarde",
          showCancelButton: false,
          confirmButtonText: "Ok",
        });
      });
  };
  
  return (
    <>
      <div className="sign-in p-4">
        <div className="d-flex align-items-start justify-content-between mb-4">
          <div>
            <span className="mdi mdi-account-plus-outline display-1 user-icon"></span>
            <h2 className="my-3 fw-bold secundario">Vamos começar?</h2>
            <p className="text-muted mb-0">Crie uma conta para continuar!</p>
          </div>
        </div>
        <form>
          <div className="mb-3">
            <label className="form-label mb-1">
              CPF
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlCPF"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="cpf"
              >
                <span className="mdi  mdi-card-account-details-outline mdi-18px text-muted"></span>
              </span>
              <InputMask
                mask="999.999.999-99"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu CPF "
                defaultValue={value.state.onboarding.cpf}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    cpf: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          
          <div className="mb-3">
            <label className="form-label mb-1">
              E-mail
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlEmail"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="mail"
              >
                <span className="mdi mdi-email-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="email"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu E-mail"
                aria-label="Type your email or phone"
                aria-describedby="mail"
                value={value.state.onboarding.email}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    email: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">
              Nome
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-account-circle-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu nome "
                aria-label="Type your name"
                aria-describedby="name"
                value={value.state.onboarding.nome}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    nome: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">
              Sobrenome
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi mdi-account-circle-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="text"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite seu sobrenome "
                aria-label="Type your name"
                aria-describedby="name"
                value={value.state.onboarding.sobrenome}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    sobrenome: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">
              Celular
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlName"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="name"
              >
                <span className="mdi  mdi-phone mdi-18px text-muted"></span>
              </span>
              <InputMask
                name="telefone"
                mask="(99) 99999-9999"
                maskChar={""}
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite o seu celular"
                value={value.state.onboarding.telefone}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    telefone: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div className="mb-3">
            <label className="form-label mb-1">
              Senha
            </label>
            <div
              className="input-group border bg-white rounded-3 py-1"
              id="exampleFormControlPassword"
            >
              <span
                className="input-group-text bg-transparent rounded-0 border-0"
                id="password"
              >
                <span className="mdi mdi-lock-outline mdi-18px text-muted"></span>
              </span>
              <input
                type="password"
                className="form-control bg-transparent rounded-0 border-0 px-0"
                placeholder="Digite sua senha"
                aria-label="Type your password"
                aria-describedby="password"
                value={value.state.onboarding.senha}
                onChange={(val) =>
                  value.setOnboarding((prev) => ({
                    ...prev,
                    senha: val.target.value,
                  }))
                }
              />
            </div>
          </div>
          <div>
            <a
              onClick={sendSubmit}
              className="btn btn-info btn-lg w-100 rounded-4 mb-3"
            >
              Criar Conta
            </a>
            <p className="text-muted text-center small">
              Já tem cadastro?{" "}
              <a onClick={() => navigate("/entrar")} className="text-primary">
                Entrar
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Signin;

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfigPerfil';
import Swal from "sweetalert2";

const EditaPerfil = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  const[perfil, setPerfil] = useState({
    id: "",
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    rg: "",
    dataNascimento: "2023-06-28T17:10:04.951Z",
    perfil: 0,
    endereco: {
      logradouro: "",
      complemento: "",
      numero: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "rg"
    },
  });

  useEffect(() => {
    setTimeout(() => {
      value.verifyAdmin();    
    }, 100);

    axiosConfig.get('/Pessoa/'+value.state.userLogged.idUsuario, {
      headers: {
        Authorization: `Bearer ${value.state.userLogged.token}`,
      }
    })
    .then((res) => {
      setPerfil(res.data);
    })
    .catch((error) => {
      console.error(error)
    })
    
  }, [])

  const changePerfil = () => {
    var telefone = perfil.telefone.replace("(", "");
    telefone = telefone.replace("(", "", telefone);
    telefone = telefone.replace(")", "", telefone);
    telefone = telefone.replace(" ", "", telefone);
    telefone = telefone.replace("-", "", telefone);
    perfil.telefone = telefone;

    var dtn = perfil.dataNascimento;
    dtn = dateOfBirthday(dtn);
    perfil.dataNascimento = dtn;

    if( perfil.nome != '' ){
      axiosConfig.put('/Pessoa/', perfil, {
        headers: {
          Authorization: `Bearer ${value.state.userLogged.token}`,
        }
      })
      .then((res) => {
        if( res.data.statusCode == 200 ){
          Swal.fire({
            icon: "success",
            title: res.data.mensagem,
            showCancelButton: false,
            confirmButtonText: 'Ok',
          }).then((result) => {});
        }
      })
      .catch((error) => {
        console.error(error)
      })
    }
  }

  const dateOfBirthday = (data) => {
    var nascimento = data.split("/");
    nascimento = nascimento.reverse();
    nascimento = nascimento[0] + "-" + nascimento[1] + "-" + nascimento[2];
    nascimento = nascimento.split("-undefined");
    return nascimento[0];
  }

  return (
    <>
      <NavBar />
      <div className="request-appointment d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px"></span>
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">Editar perfil</h6>
          <div className="d-flex align-items-center gap-3">
            <a
              href="javascript:;"
              onClick={() => value.setMenuObject(!value.state.changeMenu)}
              className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            >
              <i className="mdi mdi-menu"></i>
            </a>
          </div>
        </div>

        <div className="vh-100 my-auto overflow-auto p-3">
          <form>
            <div className="mb-3">
              <label for="exampleFormControlName" className="form-label mb-1">
                Nome
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px"></span>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu nome"
                  value={perfil.nome}
                  onChange={(val) =>
                    setPerfil((prev) => ({
                      ...prev,
                      nome: val.target.value,
                    }))
                  }
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlName1" className="form-label mb-1">
                Sobre nome
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px"></span>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu sobrenome"
                  value={perfil.sobrenome}
                  onChange={(val) =>
                    setPerfil((prev) => ({
                      ...prev,
                      sobrenome: val.target.value,
                    }))
                  }
                />
              </div>
            </div>
            {/* <div className="mb-3">
              <label for="exampleFormControlName1" className="form-label mb-1">
                Genero
              </label>
              <div className="input-group border bg-white rounded-3 py-1">
                <label
                  className="input-group-text bg-transparent rounded-0 border-0"
                  for="inputGroupSelect01"
                >
                  <span className="mdi mdi-account-group-outline mdi-18px"></span>
                </label>
                <select
                  className="form-select bg-transparent rounded-0 border-0 px-0"
                  id="inputGroupSelect01"
                >
                  <option selected>Masc</option>
                  <option value="1">Fem</option>
                </select>
              </div>
            </div> */}

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
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Data de Nascimento"
                  value={value.convertData(perfil.dataNascimento)}
                  onChange={(val) =>
                    setPerfil((prev) => ({
                      ...prev,
                      dataNascimento: val.target.value,
                    }))
                  }
                />
              </div>
            </div>

            <div>
              <label for="exampleFormControlNumber" className="form-label mb-1">
                Contato
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlNumber"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="number"
                >
                  <span className="mdi mdi-phone-outline mdi-18px"></span>
                </span>
                <InputMask
                  name="telefone"
                  mask="(99) 99999-9999"
                  maskChar={""}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o seu celular"
                  value={perfil.telefone}
                  onChange={(val) =>
                    setPerfil((prev) => ({
                      ...prev,
                      telefone: val.target.value,
                    }))
                  }
                  // onChange={(val) => value.setOnboarding(prev => ({...prev, telefoneResponsavel: val.target.value}))}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="footer mt-auto p-3">
          <a
            onClick={changePerfil}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Salvar alterações
          </a>
        </div>
      </div>
    </>
  );
};

export default EditaPerfil;

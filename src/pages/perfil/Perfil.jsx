import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import axiosConfig from '../../axiosConfigPerfil';
import Swal from "sweetalert2";

const Perfil = () => {
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
      // console.log(res.data)
      setPerfil(res.data);
    })
    .catch((error) => {
      console.error(error)
    })  
  }, [])

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
          <h6 className="mb-0 txt-center me-auto fw-bold">Perfil</h6>
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
        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="p-3">
            <div className="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3">
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">Nome</span>
                    <br />
                    {perfil.nome}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Nascimento</span>
                    <br />
                    {value.convertData(perfil.dataNascimento)}
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">CPF</span>
                    <br />
                    {perfil.cpf}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Contato</span>
                    <br />
                    {perfil.telefone}
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">E-mail</span>
                    <br />
                    {perfil.email}
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Cidade</span>
                    <br />
                    {perfil.endereco.cidade}
                  </p>
                </div>
              </div>
              <a
                onClick={() => navigate("/change-profile")}
                className="link-dark"
              >
                <div className="edit-profile-icon bg-primary text-white">
                  <span className="mdi mdi-square-edit-outline h2 m-0 pt-3 pe-2 seta"></span>
                </div>
              </a>
            </div>
            <div className="rounded-4 shadow overflow-hidden">
              <a onClick={() => navigate("/consulta")} className="link-dark">
                <div className="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
                  <h6 className="m-0">Minhas Consultas</h6>
                  <span className="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
                </div>
              </a>
              <a onClick={() => navigate("/meu-exame")} className="link-dark">
                <div className="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
                  <h6 className="m-0">Meus Exames</h6>
                  <span className="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
                </div>
              </a>
              <a
                onClick={() => navigate("/minha-receita")}
                className="link-dark"
              >
                <div className="bg-white d-flex align-items-center justify-content-between p-3">
                  <h6 className="m-0">Minhas Receitas</h6>
                  <span className="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
                </div>
              </a>
            </div>
          </div>
        </div>
        <div className="footer mt-auto p-3 fix-osahan-footer">
          <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
            <a
              onClick={() => navigate("/inicio")}
              className="col footer-bottom-nav active"
            >
              <span className="mdi mdi-home-variant-outline mdi-24px text-1"></span>
              <span>Home</span>
            </a>
            <a
              onClick={() => navigate("/pesquisar")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-magnify mdi-24px text-1"></span>
              <span>Pesquisar</span>
            </a>
            <a
              onClick={() => navigate("/video")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-video-outline mdi-24px text-1"></span>
              <span>Telemedicina</span>
            </a>
            <a
              onClick={() => navigate("/chat")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-message-processing-outline mdi-24px text-1"></span>
              <span>Chat</span>
            </a>
            <a
              onClick={() => navigate("/admin/perfil")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-account-outline mdi-24px text-1"></span>
              <span>Perfil</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Perfil;

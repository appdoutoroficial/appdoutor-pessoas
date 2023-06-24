import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const IniciarConsulta = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  return (
    <>
      <NavBar />
      <div className="appointment-upcoming d-flex flex-column vh-100">
        {/* navbar */}
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">Minha consulta</h6>
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
        {/* body */}
        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="p-3 bg-white shadow-sm">
            <div className="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
              <div>
                <h6 className="mb-1">Dra Regina Biasoli</h6>
                <p className="text-muted mb-2">Hematologista e Clínica Geral</p>
                <p className="text-muted m-0">
                  <span className="mdi mdi-calendar-month text-primary me-1" />
                  05 Abr 2023
                </p>
              </div>
              <div className="ms-auto">
                <span className="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                  Confirmado
                </span>
              </div>
            </div>
          </div>
          <div className="p-3">
            {/* visit time */}
            <div className="bg-white rounded-4 border p-3 mb-2">
              <p className="mb-2 fs-14 fw-bold text-black">Tempo de consulta</p>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <p className="mb-1">Dia:</p>
                  <p className="mb-0">Horário</p>
                </div>
                <div>
                  <p className="mb-1"> Quarta, Nov 13, 2023</p>
                  <p className="mb-0">: 12:00 - 12:30 </p>
                </div>
              </div>
            </div>
            {/* patient info */}
            <div className="bg-white rounded-4 border p-3 mb-2">
              <p className="mb-2 fs-14 fw-bold text-black">
                Informações do paciente
              </p>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <p className="mb-1">Nome:</p>
                  <p className="mb-1">Idade:</p>
                  <p className="m-0">Contato</p>
                </div>
                <div>
                  <p className="mb-1"> Arthur</p>
                  <p className="mb-1"> 22</p>
                  <p className="m-0">: (11) 95544-8877</p>
                </div>
              </div>
            </div>
            {/* fee info */}
            <div className="bg-white rounded-4 border p-3 mb-3">
              <p className="mb-2 fs-14 fw-bold text-black">
                Informação de pagamento
              </p>
              <div className="d-flex align-items-center gap-4">
                <div>
                  <p className="mb-1">Consulta</p>
                  <p className="mb-0">Exame:</p>
                </div>
                <div>
                  <p className="mb-1">: R$99,00</p>
                  <p className="mb-0"> R$199,00</p>
                </div>
              </div>
            </div>
            <a
              onClick={() => navigate("")}
              className="btn btn-info btn-lg w-100 rounded-4"
            >
              Iniciar consulta
            </a>
          </div>
        </div>
        {/* footer */}
        <div className="footer mt-auto p-3 fix-osahan-footer">
          <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
            <a
              onClick={() => navigate("/inicio")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-home-variant-outline mdi-24px" />
              <span>Home</span>
            </a>
            <a
              onClick={() => navigate("/pesquisar")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-magnify mdi-24px" />
              <span>Pesquisar</span>
            </a>
            <a
              onClick={() => navigate("/video")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-video-outline mdi-24px" />
              <span>Video</span>
            </a>
            <a
              onClick={() => navigate("/chat")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-message-processing-outline mdi-24px" />
              <span>Chat</span>
            </a>
            <a
              onClick={() => navigate("/admin/perfil")}
              className="col footer-bottom-nav active"
            >
              <span className="mdi mdi-account-outline mdi-24px" />
              <span>Profile</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default IniciarConsulta;

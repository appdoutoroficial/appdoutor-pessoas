import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Notificacao = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="notification d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">Notificações</h6>
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
          <div>
            <h6 className="border-bottom fw-bold text-black p-3 mb-0">
              Hoje 29 Mar, 2023
            </h6>
            {/* 1st */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="bg-info-subtle rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-month text-info" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Você tem uma consulta marcada com a Dra. Regina as 13:00 hrs
                </p>
                <a onClick={() => navigate("")}>Agora</a>
              </div>
            </div>
            {/* 2nd */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="light-bg-orange rounded-pill notification-icon">
                  <span className="mdi mdi-account-circle-outline text-orange" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Complete seu perfil para agilizarmos seu atendimento.{" "}
                  <a onClick={() => navigate("")}>Complete seu perfil</a>
                </p>
                <span className="text-primary">25 Minutos atrás</span>
              </div>
            </div>
            {/* 3rd */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="light-bg-warning rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-range text-warning" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Seu Exame está foi remarcado, consulte instruções.
                </p>
                <a onClick={() => navigate("")}>25 Minutos atrás</a>
              </div>
            </div>
            {/* 4rth */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="bg-success-subtle rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-check text-success" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">Consulta agendada com sucesso</p>
                <a onClick={() => navigate("")}>25 Minutos atrás</a>
              </div>
            </div>
          </div>
          {/* preview notifications */}
          <div>
            <h6 className="border-bottom fw-bold text-black p-3 mb-0">
              Anteriores
            </h6>
            {/* 1st */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="bg-info-subtle rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-month text-info" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Você tem uma consulta marcada com a Dra. Regina as 13:00 hrs
                </p>
                <a onClick={() => navigate("")}>2 dias atrás</a>
              </div>
            </div>
            {/* 2nd */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="light-bg-orange rounded-pill notification-icon">
                  <span className="mdi mdi-account-circle-outline text-orange" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Complete seu perfil para agilizarmos seu atendimento.{" "}
                  <a onClick={() => navigate("")}>Complete seu perfil</a>
                </p>
                <span className="text-primary">2 dias atrás</span>
              </div>
            </div>
            {/* 3rd */}
            <div className="d-flex gap-3 bg-white border-bottom p-3">
              <div>
                <span className="light-bg-warning rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-range text-warning" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Seu Exame está foi remarcado, consulte instruções.
                </p>
                <a onClick={() => navigate("")}>2 dias atrás</a>
              </div>
            </div>
            {/* 4rth */}
            <div className="d-flex gap-3 bg-white border-bottom p-3 mb-3">
              <div>
                <span className="bg-success-subtle rounded-pill notification-icon">
                  <span className="mdi mdi-calendar-check text-success" />
                </span>
              </div>
              <div>
                <p className="text-muted mb-2">
                  Seu Exame está foi remarcado, consulte instruções.
                </p>
                <a onClick={() => navigate("")}>2 dias atrás</a>
              </div>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer mt-auto p-3 fix-osahan-footer">
          <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
            <a
              onClick={() => navigate("/inicio")}
              className="col footer-bottom-nav active"
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
              <span>Telemedicina</span>
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
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-account-outline mdi-24px" />
              <span>Perfil</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Notificacao;

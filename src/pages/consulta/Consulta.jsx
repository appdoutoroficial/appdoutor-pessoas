import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Consulta = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  return (
    <>
      <NavBar />
      <div className="request-appointment d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/perfil")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px"></span>
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">Minhas consultas</h6>
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
          <ul
            className="nav doctor-profile-tabs mb-2 shadow-sm"
            id="pills-tab"
            role="tablist"
          >
            <li className="nav-item col" role="presentation">
              <button
                className="nav-link w-100 active"
                id="pills-upcoming-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-upcoming"
                type="button"
                role="tab"
                aria-controls="pills-upcoming"
                aria-selected="true"
              >
                Agendadas
              </button>
            </li>
            <li className="nav-item col" role="presentation">
              <button
                className="nav-link w-100"
                id="pills-past-tab"
                data-bs-toggle="pill"
                data-bs-target="#pills-past"
                type="button"
                role="tab"
                aria-controls="pills-past"
                aria-selected="false"
              >
                Antigas
              </button>
            </li>
          </ul>
          <div className="tab-content bx" id="pills-tabContent">
            <div
              className="tab-pane fade show active"
              id="pills-upcoming"
              role="tabpanel"
              aria-labelledby="pills-upcoming-tab"
              tabindex="0"
            >
              <a
                onClick={() => navigate("/iniciar-consulta")}
                className="link-dark"
              >
                <div className="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <div>
                    <h6 className="mb-1">Dra Regina Biasoli</h6>
                    <p className="text-muted mb-2">
                      Hematologista e Clínica Geral
                    </p>
                    <p className="text-muted m-0">
                      <span className="mdi mdi-calendar-month text-primary me-1"></span>
                      05 Abr 2023
                    </p>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex justify-content-end">
                      <div className="bg-info-subtle rounded-circle icon mb-3">
                        <span className="mdi mdi-phone-outline mdi-18px text-info"></span>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                      Confirmado
                    </span>
                  </div>
                </div>
              </a>
            </div>
            <div
              className="tab-pane fade"
              id="pills-past"
              role="tabpanel"
              aria-labelledby="pills-past-tab"
              tabindex="0"
            >
              <a onClick={() => navigate("")} className="link-dark">
                <div className="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <div>
                    <h6 className="mb-1">Dra Regina Biasoli</h6>
                    <p className="text-muted mb-2">
                      Hematologista e Clínica Geral
                    </p>
                    <p className="text-muted m-0">
                      <span className="mdi mdi-calendar-month text-primary me-1"></span>
                      05 Abr 2023
                    </p>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex justify-content-end">
                      <div className="bg-info-subtle rounded-circle icon mb-3">
                        <span className="mdi mdi-phone-outline mdi-18px text-info"></span>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                      Completo
                    </span>
                  </div>
                </div>
              </a>
              <a onClick={() => navigate("")} className="link-dark">
                <div className="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <div>
                    <h6 className="mb-1">Dra Regina Biasoli</h6>
                    <p className="text-muted mb-2">
                      Hematologista e Clínica Geral
                    </p>
                    <p className="text-muted m-0">
                      <span className="mdi mdi-calendar-month text-primary me-1"></span>
                      05 Abr 2023
                    </p>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex justify-content-end">
                      <div className="bg-info-subtle rounded-circle icon mb-3">
                        <span className="mdi mdi-phone-outline mdi-18px text-info"></span>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                      Completo
                    </span>
                  </div>
                </div>
              </a>
              <a onClick={() => navigate("")} className="link-dark">
                <div className="bg-white d-flex align-items-center gap-3 p-3 mb-1 shadow-sm">
                  <div>
                    <h6 className="mb-1">Dra Regina Biasoli</h6>
                    <p className="text-muted mb-2">
                      Hematologista e Clínica Geral
                    </p>
                    <p className="text-muted m-0">
                      <span className="mdi mdi-calendar-month text-primary me-1"></span>
                      05 Abr 2023
                    </p>
                  </div>
                  <div className="ms-auto">
                    <div className="d-flex justify-content-end">
                      <div className="bg-info-subtle rounded-circle icon mb-3">
                        <span className="mdi mdi-phone-outline mdi-18px text-info"></span>
                      </div>
                    </div>
                    <span className="badge bg-success-subtle text-success fw-normal rounded-pill px-2">
                      Completo
                    </span>
                  </div>
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
              <span className="mdi mdi-home-variant-outline mdi-24px"></span>
              <span>Home</span>
            </a>
            <a
              onClick={() => navigate("/pesquisar")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-magnify mdi-24px"></span>
              <span>Pesquisar</span>
            </a>
            <a
              onClick={() => navigate("/video")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-video-outline mdi-24px"></span>
              <span>Telemedicina</span>
            </a>
            <a
              onClick={() => navigate("/chat")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-message-processing-outline mdi-24px"></span>
              <span>Chat</span>
            </a>
            <a
              onClick={() => navigate("/perfil")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-account-outline mdi-24px"></span>
              <span>Perfil</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Consulta;

import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Acompanha = () => {
  const navigate = useNavigate();

  const value = useContext(AppContext);

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
          <h6 className="mb-0 txt-center me-auto fw-bold">
            Informações de consulta
          </h6>
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
              <h6 className="pb-2">Perfil</h6>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">Nome</span>
                    <br />
                    Arthur Bastos
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Nascimento</span>
                    <br />
                    07 Jan 2000
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">Genero</span>
                    <br />
                    Masc
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Contato</span>
                    <br />
                    (11) 95588-9955
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-muted small">E-mail</span>
                    <br />
                    arthur@gmail.com
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-muted small">Cidade</span>
                    <br />
                    São Paulo
                  </p>
                </div>
              </div>
              <a
                onClick={() => navigate("/change-profile")}
                className="link-dark"
              >
                <div className="edit-profile-icon bg-primary text-white">
                  <span className="mdi mdi-square-edit-outline h2 m-0 pt-3 pe-2"></span>
                </div>
              </a>
            </div>
            <div className="page-content page-container" id="page-content">
              <div className="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3">
                <div className="row">
                  <div className="col-lg-6">
                    <p>Acompanhe </p>
                    <div className="timeline p-4 block mb-4">
                      <div className="tl-item active">
                        <div className="tl-dot b-warning"></div>
                        <div className="tl-content">
                          <div className="">Consulta agendada.</div>
                          <div className="tl-date text-muted mt-1">
                            2 minutos atrás
                          </div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot b-primary"></div>
                        <div className="tl-content">
                          <div className="">Aguardando pagamento</div>
                          <div className="tl-date text-muted mt-1">
                            5 minutos atrás
                          </div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot b-success"></div>
                        <div className="tl-content">
                          <div className="">Pagamento efetuado.</div>
                          <div className="tl-date text-muted mt-1">
                            10 minutos atrás
                          </div>
                        </div>
                      </div>
                      <div className="tl-item">
                        <div className="tl-dot b-success"></div>
                        <div className="tl-content">
                          <div className="">
                            Sua consulta com{" "}
                            <a onClick={() => navigate("")} data-abc="true">
                              Dra. Regina
                            </a>{" "}
                            está confirmada!
                          </div>
                          <div className="tl-date text-muted mt-1">
                            1 minuto atrás
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer mt-auto p-3">
          <a
            onClick={() => navigate("/inicio")}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Avançar
          </a>
        </div>
      </div>
    </>
  );
};

export default Acompanha;

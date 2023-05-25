import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Mapa = () => {
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
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">
            Informações da clínica
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
        {/* body */}
        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="p-3">
            <div className="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3">
              <h6 className="pb-2">Clínica Dra. Regina Biasoli</h6>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">ENDEREÇO</span>
                    <br />
                    Rua Doutor Veiga Filho, 350 – Cj.1103.
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">BAIRRO</span>
                    <br />
                    Higienópolis – SP
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">CIDADE</span>
                    <br />
                    São Paulo
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">CONTATO</span>
                    <br />
                    (11) 95588-9955
                    <br />
                    (11) 95588-9955
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">E-MAIL</span>
                    <br />
                    clinica@gmail.com
                  </p>
                </div>
              </div>
              <div className="d-flex">
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">ATENDIMENTO</span>
                    <br />
                    3ª e 5ª Das 13h às 17h
                    <br />
                    4ª e 6ª Das 8h às 11h
                  </p>
                </div>
                <div className="col">
                  <p>
                    <span className="text-1 fw-bold">INFO</span>
                    <br />
                    Informação a definir
                  </p>
                </div>
              </div>
              <div className="edit-profile-icon bg-primary text-white" />
            </div>
          </div>
          {/*Mapa*/}
          <div className="p-3">
            <div
              className="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3"
              style={{ height: 420 }}
            >
              <h6 className="pb-2">Como chegar</h6>
              <div className="d-flex">
                <div id="wrapper-9cd199b9cc5410cd3b1ad21cab2e54d3">
                  <div id="map-9cd199b9cc5410cd3b1ad21cab2e54d3" />
                  <a onClick={() => navigate("https://1map.com/pt/map-embed")}>
                    {" "}
                    1 Map
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="footer mt-auto p-3">
            <a
              onClick={() => navigate("")}
              className="btn btn-info btn-lg w-100 rounded-4"
            >
              Traçar Rota
            </a>
          </div>
        </div>
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
              onClick={() => navigate("/pesquisa")}
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
              onClick={() => navigate("/perfil")}
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

export default Mapa;

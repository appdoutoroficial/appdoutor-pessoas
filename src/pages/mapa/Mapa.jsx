import React, { useState, useEffect } from "react";

const Mapa = () => {

    return (
        <div className="request-appointment d-flex flex-column vh-100">
  <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
    <a
      href="home.html"
      className="text-dark bg-white shadow rounded-circle icon"
    >
      <span className="mdi mdi-arrow-left mdi-18px" />
    </a>
    <h6 className="mb-0 ms-3 me-auto fw-bold">Informações da clínica</h6>
    <div className="d-flex align-items-center gap-3">
      <a
        className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
        href="#"
      >
        <i className="bi bi-list" />
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
            <a href="https://1map.com/pt/map-embed">1 Map</a>
          </div>
        </div>
      </div>
    </div>
    <div className="footer mt-auto p-3">
      <a href="#" className="btn btn-info btn-lg w-100 rounded-4">
        Traçar Rota
      </a>
    </div>
  </div>
  <div className="footer mt-auto p-3 fix-osahan-footer">
    <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
      <a href="/inicio" className="col footer-bottom-nav active">
        <span className="mdi mdi-home-variant-outline mdi-24px" />
        <span>Home</span>
      </a>
      <a href="/pesquisa" className="col footer-bottom-nav">
        <span className="mdi mdi-magnify mdi-24px" />
        <span>Pesquisar</span>
      </a>
      <a href="/video" className="col footer-bottom-nav">
        <span className="mdi mdi-video-outline mdi-24px" />
        <span>Telemedicina</span>
      </a>
      <a href="/chat" className="col footer-bottom-nav">
        <span className="mdi mdi-message-processing-outline mdi-24px" />
        <span>Chat</span>
      </a>
      <a href="/perfil" className="col footer-bottom-nav">
        <span className="mdi mdi-account-outline mdi-24px" />
        <span>Perfil</span>
      </a>
    </div>
  </div>
</div>


    )
}

export default Mapa;
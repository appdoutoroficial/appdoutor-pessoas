import React, { useState, useEffect } from "react";

const Receita = () => {
    return (
        <>
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
        <a href="/change-profile" className="link-dark">
          <div className="edit-profile-icon bg-primary text-white">
            <span className="mdi mdi-square-edit-outline h2 m-0 pt-3 pe-2" />
          </div>
        </a>
      </div>
      <div className="rounded-4 shadow overflow-hidden">
        <a href="/minha-receita" className="link-dark">
          <div className="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
            <h6 className="m-0">Minhas receitas</h6>
            <span className="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill" />
          </div>
        </a>
      </div>
    </div>
  </div>
  <div className="footer mt-auto p-3 fix-osahan-footer">
    <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
      <a href="/inicio" className="col footer-bottom-nav active">
        <span className="mdi mdi-home-variant-outline mdi-24px" />
        <span>Home</span>
      </a>
      <a href="/pesquisar" className="col footer-bottom-nav">
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
</>

    )
}

export default Receita;
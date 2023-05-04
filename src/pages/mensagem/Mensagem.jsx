import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png";
import photo2 from "../../assets/img/review/profile-1.jpg"

const Mensagem = () => {
 
    return(
        <>
  <div className="message d-flex flex-column vh-100">
    {/* navbar */}
    <div className="bg-white shadow-sm mb-2">
      <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
        <div className="d-flex align-items-center me-auto">
          <a
            href="/inicio"
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h6 className="mb-0 ms-3 me-auto fw-bold">Mensagens</h6>
        </div>
        <div className="d-flex align-items-center gap-2">
          <a
            className="toggle text-dark d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
            href="#"
          >
            <i className="bi bi-list" />
          </a>
        </div>
      </div>
      <div className="px-3 pb-3">
        <form>
          <div className="input-group rounded-4 py-1 px-3 bg-light shadow">
            <span
              className="input-group-text bg-transparent text-muted border-0 p-0"
              id="search"
            >
              <span className="mdi mdi-magnify mdi-24px text-primary" />
            </span>
            <input
              type="text"
              className="form-control bg-transparent text-muted border-0 px-3 fs-14"
              placeholder="Search Chat"
              aria-label="Search"
              aria-describedby="search"
            />
            <a
              href="#"
              className="input-group-text bg-transparent text-muted border-0 border-start pe-0"
              id="search"
            >
              <span className="mdi mdi-filter-outline mdi-18px" />
            </a>
          </div>
        </form>
      </div>
      <div className="chat-scroll px-3 pb-3">
        <div className="d-flex align-items-center justify-content-between">
          <a href="/chat" className="link-dark text-center">
            <div className="bg-primary rounded-circle plus-icon">
              <i className="bi bi-plus text-white" />
            </div>
            <p className="pt-1 text-dark m-0">Arthur</p>
          </a>
          <a href="/chat" className="link-dark text-center">
            <img
              src={photo}
              alt=""
              className="img-fluid rounded-pill message-profile"
            />
            <p className="pt-1 m-0 small text-dark-50">Dra. Regina</p>
          </a>
          <a href="/chat" className="link-dark text-center">
            <img
              src={photo2}
              alt=""
              className="img-fluid rounded-pill message-profile"
            />
            <p className="pt-1 m-0 small text-dark-50">Katia</p>
          </a>
          <a href="/chat" className="link-dark text-center">
            <img
              src={photo2}
              alt=""
              className="img-fluid rounded-pill message-profile"
            />
            <p className="pt-1 m-0 small text-dark-50">Renata</p>
          </a>
        </div>
      </div>
    </div>
    {/* body */}
    <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
      <div className="rounded-4 shadow overflow-hidden bg-white m-3">
        <a href="/chat" className="link-dark">
          <div className="bg-white shadow-sm d-flex align-items-center gap-3 p-3 border-bottom">
            <img
              src={photo}
              alt=""
              className="img-fluid rounded-pill message-profile"
            />
            <div>
              <h6 className="mb-1 fs-14"> Dra. Regina</h6>
              <p className="text-muted m-0 small">Posso te ajudar?</p>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  {/* footer */}
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

export default Mensagem;
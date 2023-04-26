import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png"


const Pesquisar = () => {
    return (
        <div className="home d-flex flex-column vh-100">
  <div className="bg-white shadow-sm">
    <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
      <div className="d-flex align-items-center gap-2 me-auto">
        <a
          href="/inicio"
          className="text-dark bg-white shadow rounded-circle icon"
        >
          <span className="mdi mdi-arrow-left mdi-18px" />
        </a>
      </div>
      <div className="d-flex align-items-center gap-3">
        <a
          className="toggle text-muted d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon"
          href="#"
        >
          <i className="bi bi-list" />
        </a>
      </div>
    </div>
    <div className="px-3 pb-3">
      <form>
        <div className="input-group rounded-4 shadow overflow-hidden border-0 py-1 ps-3 bg-light">
          <span
            className="input-group-text bg-transparent text-muted border-0 p-0"
            id="search"
          >
            <span className="mdi mdi-magnify mdi-24px text-primary" />
          </span>
          <input
            type="text"
            className="form-control bg-transparent text-muted border-0 px-3 fs-14"
            placeholder="Pesquisar"
            aria-label="Search"
            aria-describedby="search"
          />
        </div>
      </form>
    </div>
  </div>
  {/* body */}
  <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
    <div className="py-3">
      {/* Specialist */}
      <div>
        <h6 className="mb-2 pb-1 px-3 fw-bold text-1">Especialistas</h6>
      </div>
      <div className="mb-3">
        <div className="top-doctors ps-2 ms-1">
          <div className="top-doctor-item">
            <a href="#" className="link-dark">
              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <img
                  src={photo}
                  className="card-img-top top-doctor-img"
                  alt="..."
                />
                <div className="card-body small p-3 osahan-card-body">
                  <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                    Dra. Regina Biasoli
                  </p>
                  <p className="card-text text-muted small m-0">
                    Especialista em trombofilia
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="top-doctor-item">
            <a href="#" className="link-dark">
              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <img
                  src={photo}
                  className="card-img-top top-doctor-img"
                  alt="..."
                />
                <div className="card-body small p-3 osahan-card-body">
                  <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                    Dra. Regina Biasoli
                  </p>
                  <p className="card-text text-muted small m-0">
                    Especialista em trombofilia
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="top-doctor-item">
            <a href="#" className="link-dark">
              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <img
                  src={photo}
                  className="card-img-top top-doctor-img"
                  alt="..."
                />
                <div className="card-body small p-3 osahan-card-body">
                  <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                    Dra. Regina Biasoli
                  </p>
                  <p className="card-text text-muted small m-0">
                    Especialista em trombofilia
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="top-doctor-item">
            <a href="#" className="link-dark">
              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <img
                  src={photo}
                  className="card-img-top top-doctor-img"
                  alt="..."
                />
                <div className="card-body small p-3 osahan-card-body">
                  <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                    Dra. Regina Biasoli
                  </p>
                  <p className="card-text text-muted small m-0">
                    Especialista em trombofilia
                  </p>
                </div>
              </div>
            </a>
          </div>
          <div className="top-doctor-item">
            <a href="#" className="link-dark">
              <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                <img
                  src={photo}
                  className="card-img-top top-doctor-img"
                  alt="..."
                />
                <div className="card-body small p-3 osahan-card-body">
                  <p className="card-title fw-semibold mb-0 text-truncate fs-14">
                    Dra. Regina Biasoli
                  </p>
                  <p className="card-text text-muted small m-0">
                    Especialista em trombofilia
                  </p>
                </div>
              </div>
            </a>
          </div>
        </div>
      </div>
    </div>
    {/* Available doctors */}
    <div className="mb-3">
      <h6 className="mb-2 pb-1 fw-bold px-3 text-1">
        Promoções / Noticias a definir
      </h6>
      <div className="available-doctor ps-2 ms-1">
        <div className="available-doctor-item">
          <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
            <h1 className="mb-1 doctor-book-back-title">
              Texto 1<br />
              <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                <b className="bg-warning text-black px-1 rounded">Texto 2</b>
                <b className="text-black">Texto 3</b>
              </span>
            </h1>
            <p className="mb-2 text-white small">
              Desconto de 15% na próxima consulta
            </p>
            <a href="#" className="btn btn-sm btn-dark btn-book">
              Pegar Cupom <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="available-doctor-item">
          <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
            <h1 className="mb-1 doctor-book-back-title">
              Texto 1<br />
              <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                <b className="bg-warning text-black px-1 rounded">Texto 2</b>
                <b className="text-black">Texto 3</b>
              </span>
            </h1>
            <p className="mb-2 text-white small">
              Desconto de 15% na próxima consulta
            </p>
            <a href="#" className="btn btn-sm btn-dark btn-book">
              Pegar Cupom <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
        <div className="available-doctor-item">
          <div className="bg-primary text-white rounded-4 p-3 doctor-book-back">
            <h1 className="mb-1 doctor-book-back-title">
              Texto 1<br />
              <span className="h4 text-warning overflow-hidden rounded-4 m-0">
                <b className="bg-warning text-black px-1 rounded">Texto 2</b>
                <b className="text-black">Texto 3</b>
              </span>
            </h1>
            <p className="mb-2 text-white small">
              Desconto de 15% na próxima consulta
            </p>
            <a href="#" className="btn btn-sm btn-dark btn-book">
              Pegar Cupom <i className="bi bi-arrow-right" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="space" />
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
</div>

    )
}

export default Pesquisar;
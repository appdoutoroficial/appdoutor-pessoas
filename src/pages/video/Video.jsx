import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import photo from "../../assets/img/ft_perfil.png";

const Video = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  var settings = {
    dots: false,
    nav: false,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  var settingsDoctor = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: false,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  return (
    <>
      <NavBar />
      <div className="video d-flex flex-column vh-100">
        {/* navbar */}

        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h5 className="m-0">
            Telemedicina
            <span
              className="badge bg-success ms-2 rounded-1 fw-normal"
              style={{ width: 95 }}
            >
              Disponível
            </span>
          </h5>
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
          {/* search */}
          <div className="mb-4">
            <div className="bg-white shadow-sm">
              <div>
                <form>
                  <div className="input-group py-2 px-3">
                    <span
                      className="input-group-text bg-transparent text-muted border-0 p-0"
                      id="search"
                    >
                      <span className="mdi mdi-magnify mdi-24px text-primary" />
                    </span>
                    <input
                      type="text"
                      className="form-control text-muted border-0 px-3"
                      placeholder="Pesquisar especialistas on-line"
                      aria-label="Search"
                      aria-describedby="search"
                    />
                    <a
                      onClick={() => navigate("")}
                      className="input-group-text bg-transparent text-muted border-0 border-start py-0 pe-0"
                      id="search"
                    >
                      <span className="mdi mdi-filter-outline mdi-18px" />
                    </a>
                  </div>
                </form>
              </div>
            </div>
          </div>
          {/* Recent view Doctor */}
          <div className="mb-1">
            <h6 className="mb-2 pb-1 fw-bold px-3 text-1">
              Especialistas pesquisados recentemente
            </h6>
            <Slider {...settingsDoctor} className="top-doctors">
              <div className="top-doctor-item" style={{ width: 349 }}>
                <a onClick={() => navigate("/sobre")} className="link-dark">
                  <div
                    className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                    style={{ width: "95%", margin: "auto" }}
                  >
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
              <div className="top-doctor-item" style={{ width: 349 }}>
                <a onClick={() => navigate("/sobre")} className="link-dark">
                  <div
                    className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                    style={{ width: "95%", margin: "auto" }}
                  >
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
              <div className="top-doctor-item" style={{ width: 349 }}>
                <a onClick={() => navigate("/sobre")} className="link-dark">
                  <div
                    className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden"
                    style={{ width: "95%", margin: "auto" }}
                  >
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
            </Slider>
          </div>
          {/* available */}
          <div className="p-3">
            <h6 className="mb-2 pb-2 fw-bold text-1">
              Especialistas Disponíveis
            </h6>
            <div className="row row-cols-2 g-3">
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img src={photo} alt="" className="card-img-top top-img" />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">
                      Dra. Regina Biasoli
                    </h6>
                    <p className="card-text text-muted mb-1">
                      Especialista em trombofilia
                    </p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1" />
                        4.9 (5,380)
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      onClick={() => navigate("/call")}
                      className="btn btn-sm btn-success d-flex align-items-center justify-content-between small"
                    >
                      <span className="small">SELECIONAR</span>
                      <span className="mdi mdi-video-outline mdi-18px" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img src={photo} alt="" className="card-img-top top-img" />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">
                      Dra. Regina Biasoli
                    </h6>
                    <p className="card-text text-muted mb-1">
                      Especialista em trombofilia
                    </p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1" />
                        4.9 (5,380)
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      onClick={() => navigate("/call")}
                      className="btn btn-sm btn-success d-flex align-items-center justify-content-between small"
                    >
                      <span className="small">SELECIONAR</span>
                      <span className="mdi mdi-video-outline mdi-18px" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img src={photo} alt="" className="card-img-top top-img" />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">
                      Dra. Regina Biasoli
                    </h6>
                    <p className="card-text text-muted mb-1">
                      Especialista em trombofilia
                    </p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1" />
                        4.9 (5,380)
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      onClick={() => navigate("/call")}
                      className="btn btn-sm btn-success d-flex align-items-center justify-content-between small"
                    >
                      <span className="small">SELECIONAR</span>
                      <span className="mdi mdi-video-outline mdi-18px" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">
                  <img src={photo} alt="" className="card-img-top top-img" />
                  <div className="card-body small p-3 osahan-card-body">
                    <h6 className="card-title fs-14 mb-1">
                      Dra. Regina Biasoli
                    </h6>
                    <p className="card-text text-muted mb-1">
                      Especialista em trombofilia
                    </p>
                    <div className="d-flex align-items-center gap-3 small mb-3">
                      <div>
                        <span className="mdi mdi-star text-warning me-1" />
                        4.9 (5,380)
                      </div>
                    </div>
                  </div>
                  <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                    <a
                      onClick={() => navigate("/call")}
                      className="btn btn-sm btn-success d-flex align-items-center justify-content-between small"
                    >
                      <span className="small">SELECIONAR</span>
                      <span className="mdi mdi-video-outline mdi-18px" />
                    </a>
                  </div>
                </div>
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

export default Video;

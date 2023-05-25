import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import Slider from "react-slick";
import photo from "../../assets/img/ft_perfil.png";
import AppContext from "../../context/AppContext";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";

const Agenda = () => {
  const navigate = useNavigate();

  const value = useContext(AppContext);

  var settings = {
    infinite: false,
    dots: false,
    arrows: false,
    speed: 300,
    autoplay: false,
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
      <div className="request-appointment d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px"></span>
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">
            Agende sua consulta
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
        <div className="request-appointment d-flex flex-column vh-100">
          <div className="space"></div>
          <div className="cardHome">
            <h2 className="mb-2 pb-1 fw-bold px-3 text-1">CONSULTAS</h2>
            <p className="mb-2 pb-1 fw-bold px-3 text-1">
              SELECIONE A ESPECIALIDADE
            </p>
          </div>

          <div className="mb-3 bx">
            <div className="top-doctors ps-2 ms-1"></div>
            <Slider {...settingsDoctor} className="top-doctor-item">
              <div className="top-doctor-item">
                <a
                  onClick={() => navigate("/especialista")}
                  className="link-dark"
                >
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <span className="mdi mdi-hospital text-1 text-center ic"></span>
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        HEMATOLOGIA
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="top-doctor-item">
                <a
                  onClick={() => navigate("/especialista")}
                  className="link-dark"
                >
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <span className="mdi mdi-hospital ic text-1 text-center"></span>
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        GINECOLOGIA
                      </p>
                    </div>
                  </div>
                </a>
              </div>

              <div className="top-doctor-item">
                <a
                  onClick={() => navigate("/especialista")}
                  className="link-dark"
                >
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <span className="mdi mdi-hospital ic text-1 text-center"></span>
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        CARDIOLOGISTA
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="top-doctor-item">
                <a
                  onClick={() => navigate("/especialista")}
                  className="link-dark"
                >
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <span className="mdi mdi-hospital ic text-1 text-center"></span>
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        CLÍNICO GERAL
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="top-doctor-item">
                <a
                  onClick={() => navigate("/especialista")}
                  className="link-dark"
                >
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <span className="mdi mdi-hospital ic text-1 text-center"></span>
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        NUTRICIONISTA
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Slider>
          </div>

          <div className="cardHome">
            <p className="mb-2 pb-1 fw-bold px-3 text-1">
              SELECIONE O ESPECIALISTA
            </p>
          </div>

          <div className="mb-3 bx">
            <div className="top-doctors ps-2 ms-1"></div>

            <Slider {...settingsDoctor} className="top-doctor-especialista">
              <div className="top-doctor-item">
                <a onClick={() => navigate("")} className="link-dark">
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill ft-age"
                    />
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        Dra. Regina
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="top-doctor-item">
                <a onClick={() => navigate("")} className="link-dark">
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill ft-age"
                    />
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        Dra. Katia
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="top-doctor-item">
                <a onClick={() => navigate("")} className="link-dark">
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill ft-age"
                    />
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        Dra. Leticia
                      </p>
                    </div>
                  </div>
                </a>
              </div>
              <div className="top-doctor-item">
                <a onClick={() => navigate("")} className="link-dark">
                  <div className="card bg-white border-0 rounded-4 shadow-sm overflow-hidden">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill ft-age"
                    />
                    <div className="card-body small p-3 osahan-card-body">
                      <p className="card-title fw-semibold mb-0 text-truncate text-center s-14">
                        Dra. Carla
                      </p>
                    </div>
                  </div>
                </a>
              </div>
            </Slider>
          </div>

          <button
            className="btn btn-outline-info"
            style={{ width: "95%", margin: "auto" }}
          >
            <span className="mdi mdi-video-outline"> Somente on-line</span>
          </button>
          <div className="space"></div>
          <div className="cardHome">
            <p className="mb-2 pb-1 fw-bold px-3 text-1">
              SELECIONE O MELHOR DIA PARA A CONSULTA
            </p>
          </div>
          <div className="rounded-4 px-3 mb-4">
            <div className="mb-4">
              <p className="fs-14 fw-bold text-black mb-3">Abril</p>
              <div className="row align-items-center justify-content-between g-2 custom-check">
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio1"
                  />
                  <label className="btn btn-outline-info text-center">
                    Dom
                    <br />
                    <span className="fs-5">10</span>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio1"
                  />
                  <label className="btn btn-outline-info text-center">
                    Seg
                    <br />
                    <span className="fs-5">11</span>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio2"
                  />
                  <label className="btn btn-outline-info text-center">
                    Ter
                    <br />
                    <span className="fs-5">12</span>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio3"
                  />
                  <label className="btn btn-outline-info text-center">
                    Qua
                    <br />
                    <span className="fs-5">13</span>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio4"
                  />
                  <label className="btn btn-outline-info text-center">
                    Qui
                    <br />
                    <span className="fs-5">14</span>
                  </label>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio0"
                    id="btnradio5"
                  />
                  <label className="btn btn-outline-info text-center">
                    Sex
                    <br />
                    <span className="fs-5">15</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="cardHome">
              <p className="mb-2 pb-1 fw-bold px-3 text-1">
                SELECIONE O HORÁRIO
              </p>
            </div>
            <div className="mb-4">
              <h5 className="fs-14 fw-bold text-black mb-3">Horário manhã</h5>
              <div className="row align-items-center justify-content-between g-2 custom-check">
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    Dra. Regina
                    <br />
                    10:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    Dra. Regina
                    <br />
                    10:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    Dra. Regina
                    <br />
                    11:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    Dra. Regina
                    <br />
                    11:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
            </div>

            <div className="mb-4">
              <h5 className="fs-14 fw-bold text-black mb-3">Horário tarde</h5>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    12:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    12:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    13:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src="img/ft_perfil.png"
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    13:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    14:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    14:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    15:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    15:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
              <div
                className="row align-items-center justify-content-between g-2 custom-check"
                style={{ marginTop: "10px" }}
              >
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio7"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    16:00
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
                <div className="col">
                  <input
                    type="radio"
                    className="btn-check"
                    name="btnradio1"
                    id="btnradio8"
                  />
                  <button className="btn btn-outline-info">
                    <img
                      src={photo}
                      alt=""
                      className="img-fluid rounded-pill  ft-age1 "
                    />
                    Dra. Regina
                    <br />
                    16:30
                    <span className="mdi mdi-video-outline"></span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="footer mt-auto p-3">
            <a
              onClick={() => navigate("/pagamento")}
              className="btn btn-info btn-lg w-100 rounded-4"
            >
              Avançar
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Agenda;

import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const Call = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

  return (
    <>
      <NavBar />
      <div className="call">
        <div className="d-flex align-items-center justify-content-between p-3 position-absolute w-100">
          <a
            onClick={() => navigate("/chat")}
            className="link-dark shadow bg-white rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px"></span>
          </a>
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
        <div className="bg-light d-flex align-items-center justify-content-center call-display">
          <div className="text-center">
            <div className="border-dashed-primary rounded-circle p-2">
              <div className="border-dashed-primary rounded-circle p-2">
                <div className="border-dashed-muted rounded-circle p-2">
                  <img
                    src={photo}
                    alt=""
                    className="img-fluid rounded-circle call-img"
                  />
                </div>
              </div>
            </div>
            <div className="pt-3">
              <p className="text-muted mb-2">Chamando ...</p>
              <h4>Dra. Regina Biasoli</h4>
            </div>
          </div>
        </div>
      </div>

      <div className="footer fixed-bottom d-flex align-items-center justify-content-between call-icons m-3">
        <a
          onClick={() => navigate("")}
          className="lighter-bg-primary rounded-circle"
        >
          <span className="mdi mdi-microphone-outline mdi-24px"></span>
        </a>
        <a
          onClick={() => navigate("")}
          className="lighter-bg-primary rounded-circle"
        >
          <span className="mdi mdi-volume-high mdi-24px"></span>
        </a>
        <a onClick={() => navigate("")} className="bg-success rounded-circle">
          <span className="mdi mdi-video-outline mdi-24px"></span>
        </a>
        <a
          onClick={() => navigate("/chat")}
          className="lighter-bg-primary rounded-circle"
        >
          <span className="mdi mdi-message-processing-outline mdi-24px"></span>
        </a>
        <a
          onClick={() => navigate("/finaliza-call")}
          className="bg-danger rounded-circle"
        >
          <span className="mdi mdi-close mdi-24px"></span>
        </a>
      </div>
    </>
  );
};

export default Call;

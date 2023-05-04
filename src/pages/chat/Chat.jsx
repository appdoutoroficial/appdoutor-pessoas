import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png";
import photo1 from "../../assets/img/perf1.jpeg";

const Chat = () => {
    return (
        <>
        <div className="chat d-flex flex-column vh-100">
          {/* navbar */}
          <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a
              href="/inicio"
              className="text-dark bg-white shadow rounded-circle icon"
            >
              <span className="mdi mdi-arrow-left mdi-18px" />
            </a>
            <div className="d-flex align-items-center gap-2 ms-3 me-auto">
              <a href="#">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded-circle icon"
                />
              </a>
              <div>
                <p className="mb-0 fw-bold">Dra. Ragina</p>
                <p className="text-orange m-0 small">On-line</p>
              </div>
            </div>
            <div className="d-flex align-items-center gap-2">
              <a href="/call" className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-phone-outline mdi-18px" />
              </a>
              <a href="/call" className="bg-white shadow rounded-circle icon">
                <span className="mdi mdi-video-outline mdi-18px" />
              </a>
              <a
                className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
                href="#"
              >
                <i className="bi bi-list" />
              </a>
            </div>
          </div>
          {/* body */}
          <div className="vh-100 my-auto overflow-auto p-3">
            <p className="text-center">Ontem</p>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <img
                  src={photo1}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
                <div className="bg-white chat-rounded-left p-3 shadow-sm">
                  <div className="m-0">Boa tarde, doutora!</div>
                </div>
              </div>
              <p className="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <div className="d-flex align-items-center gap-3 text-white w-100 text-right">
                  <span className="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                    Boa tarde, Arthur.
                  </span>
                </div>
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
              </div>
              <p className="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <img
                  src={photo1}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
                <div className="bg-white chat-rounded-left p-3 shadow-sm">
                  <div className="m-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                    ipsum quasi amet, eos ab natus sit debitis in illum repellat fuga
                    omnis ad dicta qui, soluta sed provident, possimus eaque!
                  </div>
                </div>
              </div>
              <p className="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <div className="d-flex align-items-center gap-3 text-white w-100 text-right">
                  <span className="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                    ipsum quasi amet, eos ab natus sit debitis in illum repellat fuga
                    omnis ad dicta qui, soluta sed provident, possimus eaque!
                  </span>
                </div>
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
              </div>
              <p className="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <img
                  src={photo1}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
                <div className="bg-white chat-rounded-left p-3 shadow-sm">
                  <div className="m-0">
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa
                    ipsum quasi amet, eos ab natus sit debitis in illum repellat fuga
                    omnis ad dicta qui, soluta sed provident, possimus eaque!
                  </div>
                </div>
              </div>
              <p className="text-muted mb-0 ps-5 small ms-3">05:55PM</p>
            </div>
            <div className="mb-3">
              <div className="d-flex align-items-end gap-2 mb-1">
                <div className="d-flex align-items-center gap-3 text-white w-100 text-right">
                  <span className="bg-info ms-auto chat-rounded-right p-3 shadow-sm">
                    {" "}
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    Similique nam dolore natus deleniti ea! Numquam, unde! Perferendis
                    dignissimos officia voluptatibus nesciunt, soluta facere numquam,
                    tempora optio et possimus, est deserunt!
                  </span>
                </div>
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded-circle icon-lg"
                />
              </div>
              <p className="text-muted m-0 pe-5 small me-3 text-end">05:57PM</p>
            </div>
            <div className="d-flex align-items-center gap-3">
              <img
                src={photo}
                alt=""
                className="img-fluid rounded-circle icon-lg"
              />
              <p className="text-muted m-0">Dra. Regina está digitando...</p>
            </div>
          </div>
          {/* footer */}
          <div className="footer bg-white mt-auto shadow border-top">
            <div className="input-group pe-3">
              <input
                type="text"
                className="form-control p-3 border-0"
                placeholder="Escreva sua mensagem"
              />
              <span
                className="input-group-text bg-transparent border-0 p-0"
                id="basic-addon2"
              >
                <a
                  className="lighter-bg-primary-opacity rounded-circle icon text-dark"
                  href="#"
                  data-bs-toggle="offcanvas"
                  data-bs-target="#offcanvasBottom"
                  aria-controls="offcanvasBottom"
                >
                  <i className="bi bi-paperclip" />
                </a>
              </span>
              <span
                className="input-group-text bg-transparent mx-1 border-0 p-0"
                id="basic-addon2"
              >
                <a
                  className="lighter-bg-primary-opacity rounded-circle icon text-dark"
                  href="#"
                >
                  <i className="bi bi-mic-fill" />
                </a>
              </span>
              <span
                className="input-group-text bg-transparent border-0 p-0"
                id="basic-addon2"
              >
                <a className="bg-primary rounded-circle icon text-white" href="#">
                  <i className="bi bi-send" />
                </a>
              </span>
            </div>
          </div>
        </div>
        {/* gallaery offcanvas */}
        <div
          className="offcanvas offcanvas-bottom"
          tabIndex={-1}
          id="offcanvasBottom"
          aria-labelledby="offcanvasBottomLabel"
          style={{ height: "40vh" }}
        >
          <div className="offcanvas-header d-flex justify-content-center">
            <h6 className="offcanvas-title" id="offcanvasBottomLabel">
              Galeria
            </h6>
            {/* <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button> */}
          </div>
          <div
            className="offcanvas-body"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <div className="row row-cols-3 g-2">
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
              <div className="col">
                <img
                  src={photo}
                  alt=""
                  className="img-fluid rounded"
                />
              </div>
            </div>
          </div>
        </div>
      </>

    )
}

export default Chat;
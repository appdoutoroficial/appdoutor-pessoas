import React, { useState, useEffect } from "react";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import NavBar from "../../components/NavBar";

const Review = () => {
  const value = useContext(AppContext);
    return (
       <>
       <NavBar />
        <div className="review d-flex flex-column vh-100">
  {/* navbar */}
  <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
    <a
      href="/inicio"
      className="text-dark bg-white shadow rounded-circle icon"
    >
      <span className="mdi mdi-arrow-left mdi-18px" />
    </a>
    <h6 className="mb-0 ms-3 me-auto fw-bold">Minha avaliação</h6>
    <div className="d-flex align-items-center gap-3">
    <a href="javascript:;" onClick={() => value.setMenuObject(!value.state.changeMenu)} className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5">
      <i className="bi bi-list"></i>
    </a>
    </div>
  </div>
  {/* body */}
  <div className="vh-100 my-auto overflow-auto p-3">
    <div className="text-center mb-5">
      <img
        src="img/ft_perfil.png"
        alt=""
        className="img-fluid rounded-circle call-img mb-4 mt-4"
      />
      <div>
        <h6 className="mb-2">Conte-nos como foi sua experiência com</h6>
        <h5 className="mb-3 text-primary fw-bold">Dra. Regina Biasoli</h5>
        <div className="d-flex align-items-center justify-content-center gap-2 fs-5 text-warning">
          <span className="mdi mdi-star" />
          <span className="mdi mdi-star" />
          <span className="mdi mdi-star" />
          <span className="mdi mdi-star" />          
        </div>
      </div>
    </div>
    {/* comment */}
    <div>
      <div className="d-flex align-items-center justify-content-between mb-2">
        <h6 className="m-0 fs-14 text-1">Avalie a consulta</h6>
      </div>
      <form>
        <textarea
          className="form-control text-muted p-3 fs-14"
          name=""
          id=""
          cols={30}
          rows={5}
          defaultValue={
            "Uma boa experiência com a Dra. Regina. Ela sempre tenta entender meu discurso com cuidado. Agradeço o seu processo..."
          }
        />
      </form>
    </div>
  </div>
  {/* footer */}
  <div className="footer mt-auto p-3">
    <a href="/inicio" className="btn btn-info btn-lg w-100 rounded-4">
      Enviar
    </a>
  </div>
</div>
   </>

    )
}

export default Review;
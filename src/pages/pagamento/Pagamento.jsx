import React, { useState, useEffect } from "react";

const Pagamento = () => {
    return (
        <>
  <div className="request-appointment d-flex flex-column vh-100">
    <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
      <a
        href="/inicio"
        className="text-dark bg-white shadow rounded-circle icon"
      >
        <span className="mdi mdi-arrow-left mdi-18px" />
      </a>
      <h6 className="mb-0 ms-3 me-auto fw-bold">Pagamento</h6>
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
    <div className="vh-100 my-auto overflow-auto p-3">
      <form>
        <div className="credit-card visa selectable">
          <div className="credit-card-last4">4242</div>
          <p>Fulano de Tal</p>
          <div className="credit-card-expiry">08/25</div>
        </div>
        <div className="bg-white rounded-4 p-3 mb-3 border">
          <h6 className="pb-1 mb-2 fs-6">Detalhes de pagamento</h6>
          <div className="pb-3">
            <div className="d-flex align-items-center justify-content-between text-muted mb-1">
              <div>Consulta</div>
              <div>R$194,29</div>
            </div>
            <div className="d-flex align-items-center justify-content-between text-muted">
              <div>Exames</div>
              <div>R$400,00</div>
            </div>
          </div>
          <h6 className="d-flex align-items-center justify-content-between border-top pt-3 mb-0">
            <div className="fw-normal">Total</div>
            <div className="fw-bold">R$ 594,29</div>
          </h6>
        </div>
        <div className="bg-white rounded-4 p-3 border">
          <h6 className="pb-1 mb-0 fs-6">Escolha a forma de pagamento</h6>
          <p className="text-muted">Selecione a forma de pagamento</p>
          <div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault1"
                defaultChecked=""
              />
              <label className="form-check-label" htmlFor="flexRadioDefault1">
                Crédito
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Débito
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Pix
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="flexRadioDefault"
                id="flexRadioDefault2"
              />
              <label className="form-check-label" htmlFor="flexRadioDefault2">
                Pagar na clínica
              </label>
            </div>
          </div>
        </div>
      </form>
    </div>
    {/* footer */}
    <div className="footer mt-auto p-3">
      <a
        href="#"
        className="btn btn-info btn-lg w-100 rounded-4"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasBottom"
        aria-controls="offcanvasBottom"
      >
        Pagar
      </a>
    </div>
  </div>
  {/* model */}
  <div
    className="offcanvas offcanvas-bottom"
    tabIndex={-1}
    id="offcanvasBottom"
    aria-labelledby="offcanvasBottomLabel"
    style={{ height: "50vh" }}
  >
    <div className="offcanvas-body text-center d-flex align-items-center justify-content-center">
      <div>
        <i className="bi bi-hand-thumbs-up text-primary display-1" />
        <h5 className="py-3">Seu pagamento foi efetuado com sucesso!</h5>
        <p className="text-muted fs-6">
          Você agendou uma consulta com a Dra Regia Biasoli, dia 05 de abril ás
          10:00 horas.
        </p>
      </div>
    </div>
    <div className="offcanvas-footer">
      <a href="/acompanha" className="btn btn-info btn-lg w-100 rounded-4">
        Continuar
      </a>
    </div>
  </div>
</>

    )
}

export default Pagamento;
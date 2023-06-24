import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import InputMask from "react-input-mask";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

const EditaPerfil = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);

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
          <h6 className="mb-0 txt-center me-auto fw-bold">Editar perfil</h6>
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

        <div className="vh-100 my-auto overflow-auto p-3">
          <form>
            <div className="mb-3">
              <label for="exampleFormControlName" className="form-label mb-1">
                Nome
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px"></span>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu nome"
                  //value={''}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlName1" className="form-label mb-1">
                Sobre nome
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlName1"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="firstname"
                >
                  <span className="mdi mdi-account-outline mdi-18px"></span>
                </span>
                <input
                  type="text"
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite seu sobrenome"
                  //value={}
                />
              </div>
            </div>
            <div className="mb-3">
              <label for="exampleFormControlName1" className="form-label mb-1">
                Genero
              </label>
              <div className="input-group border bg-white rounded-3 py-1">
                <label
                  className="input-group-text bg-transparent rounded-0 border-0"
                  for="inputGroupSelect01"
                >
                  <span className="mdi mdi-account-group-outline mdi-18px"></span>
                </label>
                <select
                  className="form-select bg-transparent rounded-0 border-0 px-0"
                  id="inputGroupSelect01"
                >
                  <option selected>Masc</option>
                  <option value="1">Fem</option>
                </select>
              </div>
            </div>
            <div className="row g-2 mb-3">
              <div className="col">
                <div>
                  <label className="form-label mb-1">Dia</label>
                  <div className="input-group border bg-white rounded-3 py-1">
                    <label
                      className="input-group-text bg-transparent rounded-0 border-0"
                      for="inputGroupSelectDay"
                    >
                      <span className="mdi mdi-calendar-today mdi-18px"></span>
                    </label>
                    <select
                      className="form-select bg-transparent rounded-0 border-0 px-0"
                      id="inputGroupSelectDay"
                    >
                      <option selected>11</option>
                      <option value="1">1</option>
                      <option value="2">2</option>
                      <option value="3">3</option>
                      <option value="4">4</option>
                      <option value="5">5</option>
                      <option value="6">6</option>
                      <option value="7">7</option>
                      <option value="8">8</option>
                      <option value="9">9</option>
                      <option value="10">10</option>
                      <option value="11">11</option>
                      <option value="12">12</option>
                      <option value="13">13</option>
                      <option value="14">14</option>
                      <option value="15">15</option>
                      <option value="16">16</option>
                      <option value="17">17</option>
                      <option value="18">18</option>
                      <option value="19">19</option>
                      <option value="20">20</option>
                      <option value="21">21</option>
                      <option value="22">22</option>
                      <option value="23">23</option>
                      <option value="24">24</option>
                      <option value="25">25</option>
                      <option value="26">26</option>
                      <option value="27">27</option>
                      <option value="28">28</option>
                      <option value="29">29</option>
                      <option value="30">30</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <label className="form-label mb-1">Mês</label>
                  <div className="input-group border bg-white rounded-3 py-1">
                    <label
                      className="input-group-text bg-transparent rounded-0 border-0"
                      for="inputGroupSelectMonth"
                    >
                      <span className="mdi mdi-calendar-month mdi-18px"></span>
                    </label>
                    <select
                      className="form-select bg-transparent rounded-0 border-0 px-0"
                      id="inputGroupSelectMonth"
                    >
                      <option selected>Jan</option>
                      <option value="1">Jan</option>
                      <option value="2">Fev</option>
                      <option value="3">Mar</option>
                      <option value="4">Abr</option>
                      <option value="5">Mai</option>
                      <option value="6">Jun</option>
                      <option value="7">Jul</option>
                      <option value="8">Ago</option>
                      <option value="9">Set</option>
                      <option value="10">Out</option>
                      <option value="11">Nov</option>
                      <option value="12">Dez</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="col">
                <div>
                  <label className="form-label mb-1">Ano</label>
                  <div className="input-group border bg-white rounded-3 py-1">
                    <label
                      className="input-group-text bg-transparent rounded-0 border-0"
                      for="inputGroupSelectYear"
                    >
                      <span className="mdi mdi-calendar-text mdi-18px"></span>
                    </label>
                    <select
                      className="form-select bg-transparent rounded-0 border-0 px-0"
                      id="inputGroupSelectYear"
                    >
                      <option selected>2000</option>
                      <option value="1">2001</option>
                      <option value="2">2002</option>
                      <option value="3">2003</option>
                      <option value="4">2004</option>
                      <option value="5">2005</option>
                      <option value="6">2006</option>
                      <option value="7">2007</option>
                      <option value="8">2008</option>
                      <option value="9">2009</option>
                      <option value="10">2010</option>
                      <option value="11">2011</option>
                      <option value="12">2012</option>
                      <option value="13">2013</option>
                      <option value="14">2014</option>
                      <option value="15">2015</option>
                      <option value="16">2016</option>
                      <option value="17">2017</option>
                      <option value="18">2018</option>
                      <option value="19">2019</option>
                      <option value="20">2020</option>
                      <option value="21">2021</option>
                      <option value="22">2022</option>
                      <option value="23">2023</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <label for="exampleFormControlNumber" className="form-label mb-1">
                Contato
              </label>
              <div
                className="input-group border bg-white rounded-3 py-1"
                id="exampleFormControlNumber"
              >
                <span
                  className="input-group-text bg-transparent rounded-0 border-0"
                  id="number"
                >
                  <span className="mdi mdi-phone-outline mdi-18px"></span>
                </span>
                <InputMask
                  name="telefone"
                  mask="(99) 99999-9999"
                  maskChar={""}
                  className="form-control bg-transparent rounded-0 border-0 px-0"
                  placeholder="Digite o seu celular"
                  // value={value.state.onboarding.telefoneResponsavel}
                  // onChange={(val) => value.setOnboarding(prev => ({...prev, telefoneResponsavel: val.target.value}))}
                />
              </div>
            </div>
          </form>
        </div>

        <div className="footer mt-auto p-3">
          <a
            onClick={() => navigate("/admin/perfil")}
            className="btn btn-info btn-lg w-100 rounded-4"
          >
            Salvar alterações
          </a>
        </div>
      </div>
    </>
  );
};

export default EditaPerfil;

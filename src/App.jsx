import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Cadastro from "./pages/Cadastro/cadastro";
import Entrar from "./pages/Entrar/entrar";
import EntrarGmail from "./pages/Entrar/entrar";
import VerificaSms from "./pages/VerificaSms/verifica";
import VerificaEmail from "./pages/VerificaEmail/verificaEmail";
import CadastroPessoa from "./pages/CadastroPessoa/cadastroPessoa";
import Congrats from "./pages/Congrats/congrats";
import Home from "./pages/home/home";

import './App.scss'

function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Cadastro />},
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/entrar-gmail', exact: true, element: <EntrarGmail />},
    {path: '/sms', exact: true, element: <VerificaSms/>},
    {path: '/email', exact: true, element: <VerificaEmail/>},
    {path: '/cadastro', exact: true, element: <CadastroPessoa/>},
    {path: '/congrats', exact: true, element: <Congrats/>}, 
    {path: '/home', exact: true, element: <Home/>},
  
  ]);

  return element;
}

const AppWrapper = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

export default AppWrapper;

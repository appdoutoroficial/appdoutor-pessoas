import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Login from "./pages/auth/Login";
import ValidaCPF from "./pages/validaCPF/validaCPF";
import Confirma from "./pages/confirma/confirma";
import Bemvindo from "./pages/bem-vindo/bemVindo";
import ConfirmaEmail from "./pages/confirma-email/confirmaEmail";
import ContaCriada from "./pages/conta-criada/ContaCriada";
import Contato from "./pages/contato/Contato";
import CriarSenha from "./pages/criar-senha/criarSenha";
import Email from "./pages/email/Email";
import Endereco from "./pages/endereco/Endereco";
import LogEmail from "./pages/log-email/LogEmail";
import LogSenha from "./pages/log-senha/LogSenha";
import Nascimento from "./pages/nascimento/Nascimento";
import Nome from "./pages/nome/Nome";
import Revisa from "./pages/revisa/Revisa";
import Selfie from "./pages/selfie/Selfie";
import './App.scss'

function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Login />},
    {path: '/bem-vindo', element: <Bemvindo />},
    {path: '/valida-cpf', element: <ValidaCPF />},
    {path: '/confirma', element: <Confirma />},
    {path: '/confirma-email', element: <ConfirmaEmail />},
    {path: '/conta-criada', element: <ContaCriada />},
    {path: '/contato', element: <Contato />},
    {path: '/criar-senha', element: <CriarSenha />},
    {path: '/email', element: <Email />},
    {path: '/endereco', element: <Endereco />},
    {path: '/log-email', element: <LogEmail />},
    {path: '/log-senha', element: <LogSenha />},
    {path: '/nascimento', element: <Nascimento />},
    {path: '/nome', element: <Nome />},
    {path: '/revisa', element: <Revisa />},
    {path: '/selfie', element: <Selfie />},
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

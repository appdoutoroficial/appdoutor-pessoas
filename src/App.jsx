import React, { useEffect, useState } from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Signin from "./pages/sign-in/Signin";
import Entrar from "./pages/entrar/Entrar";
import Verify from "./pages/verify/Verify";
import VerifyEmail from "./pages/verify-email/VerifyEmail";
import VerifySenha from "./pages/verify-senha/VerifySenha";
import Profile from "./pages/profile/Profile";
import Selfie from "./pages/selfie/Selfie";
import RecuperaSenha from "./pages/recuperaSenha/RecuperaSenha";
import NovaSenha from "./pages/nova-senha/NovaSenha";
import Gmail from "./pages/entrar-gmail/EntrarGmail";
import Congrats from "./pages/congrats/Congrats";
import Home from "./pages/inicio/Inicio";
import Perfil from "./pages/perfil/Perfil";
import EditaPerfil from "./pages/change-profile/changeProfile";
import Consulta from "./pages/consulta/Consulta";
import Exame from "./pages/exame/Exame";
import MeuExame from "./pages/meu-exame/meuExame";
import MinhaReceita from "./pages/minha-receita/minhaReceita";
import Agenda from "./pages/agenda/Agenda";
import Acompanha from "./pages/acompanha/Acompanha";
import Call from "./pages/call/Call";
import Chat from "./pages/chat/Chat";
import ContinueProfile from "./pages/continue-profile/continueProfile";
import Especialista from "./pages/especialista/Especialista";
import FinalizaCall from "./pages/finaliza-call/FinalizaCall";
import Mapa from "./pages/mapa/Mapa"
import Mensagem from "./pages/mensagem/Mensagem";
import IniciarConsulta from "./pages/iniciar-consulta/IniciarConsulta";
import Notificacao from "./pages/notificacao/Notificacao";
import Pagamento from "./pages/pagamento/Pagamento";
import Pesquisar from "./pages/pesquisar/Pesquisar";
import Receita from "./pages/receita/Receita";
import Review from "./pages/review/Review";
import Sobre from "./pages/sobre/Sobre";
import Video from "./pages/video/Video";
import CadastrarCartao from "./pages/cadastrar-cartao/CadastrarCartao";
import CadastrarPagamento from "./pages/cadastrar-pagamento/CadastrarPagamento"
import { useCookies } from 'react-cookie';
import axiosConfigLogin from './axiosConfigLogin';

import './assets/materialdesign/scss/materialdesignicons.scss'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import "./components/NavBar";
import AppContext from "./context/AppContext";
import { Prev } from "react-bootstrap/esm/PageItem";





function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Inicial />},
    {path: '/cadastrar', exact: true, element: <Signin />},  
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/verifica', exact: true, element: <Verify />},
    {path: '/verifica-email', exact: true, element: <VerifyEmail />},
    {path: '/verifica-senha', exact: true, element: <VerifySenha />},   
    {path: '/cadastro', exact: true, element: <Profile />},
    {path: '/selfie', exact: true, element: <Selfie />},
    {path: '/finalizar', exact: true, element: <Congrats />},
    {path: '/login-gmail', exact: true, element: <Gmail />},
    {path: '/recuperar-senha', exact: true, element: <RecuperaSenha />},
    {path: '/nova-senha', exact: true, element: <NovaSenha />},    


    {path: '/admin/inicio', exact: true, element: <Home />},
    {path: '/perfil', exact: true, element: <Perfil />},
    {path: '/change-profile', exact: true, element: < EditaPerfil/>},
    {path: '/consulta', exact: true, element: < Consulta/>},
    {path: '/admin/exame', exact: true, element: < Exame/>},
    {path: '/meu-exame', exact: true, element: < MeuExame/>},
    {path: '/minha-receita', exact: true, element: < MinhaReceita/>},
    {path: '/admin/agenda', exact: true, element: < Agenda/>},
    {path: '/admin/acompanha', exact: true, element: < Acompanha/>},
    {path: '/admin/call', exact: true, element: < Call/>},
    {path: '/admin/chat', exact: true, element: < Chat/>},
    {path: '/continue-profile', exact: true, element: < ContinueProfile/>},
    {path: '/especialista', exact: true, element: < Especialista/>},
    {path: '/finaliza-call', exact: true, element: < FinalizaCall/>},
    {path: '/mapa', exact: true, element: < Mapa/>},
    {path: '/mensagem', exact: true, element: < Mensagem/>},
    {path: '/iniciar-consulta', exact: true, element: < IniciarConsulta/>},
    {path: '/notificacao', exact: true, element: < Notificacao/>},
    {path: '/pagamento', exact: true, element: < Pagamento/>},
    {path: '/pesquisar', exact: true, element: < Pesquisar/>},
    {path: '/admin/receita', exact: true, element: < Receita/>},
    {path: '/review', exact: true, element: < Review/>},
    {path: '/sobre', exact: true, element: < Sobre/>},
    {path: '/video', exact: true, element: < Video/>},
    {path: '/cadastrar-cartao', exact: true, element: < CadastrarCartao/>}, 
    {path: '/cadastrar-pagamento', exact: true, element: < CadastrarPagamento/>}, 

  ]);

  return element;
}
const AppWrapper = () => {
  const [cookie, setCookie] = useCookies(['idUsuario', 'mensagem', 'nome', 'nomeCompleto', 'primeiroAcesso', 'sobreNome', 'statusCode', 'sucesso', 'token']);
  const [menuObject, setMenuObject] = useState(false);

  useEffect(() => {
    if( cookie.token != '' ){
      setUserLogged(prev => ({...prev, idUsuario: cookie.idUsuario}))
      setUserLogged(prev => ({...prev, token: cookie.token}))
      setUserLogged(prev => ({...prev, nomeCompleto: cookie.nomeCompleto}))
    }
  }, [cookie]);


  const [onboarding, setOnboarding] = useState({
    nome: "",
    sobrenome: "",
    email: "",
    telefone: "",
    cpf: "",
    rg: "",
    endereco: {
      logradouro: "",
      numero: "",
      complemento: "",
      bairro: "",
      cidade: "",
      estado: "",
      cep: "0"
    },
    dataNascimento: "",
    perfil: 1
  });

  const [userLogged, setUserLogged] = useState({
    idUsuario: "",
    mensagem: "",
    nome: "",
    nomeCompleto: "",
    primeiroAcesso: false,
    sobreNome: "",
    statusCode: 0,
    sucesso: false,
    token: ""
  })

  const resetUser = () => {
    setUserLogged({
      idUsuario: "",
      mensagem: "",
      nome: "",
      nomeCompleto: "",
      primeiroAcesso: false,
      sobreNome: "",
      statusCode: 0,
      sucesso: false,
      token: ""
    })
  }

  const verifySession = () => {
    if(userLogged.token == '' && cookie.token == ''){
      window.location.href = '/entrar';
    }else{
      axiosConfigLogin.post("/Auth/ValidarToken", {
        token: cookie.token
      })
      .then((response) => {
        if( !response.data.tokenValido ){
          window.location.href = '/entrar';
        }
      })
      .catch((err) =>{
        if( !err.data.tokenValido ){
          window.location.href = '/entrar';
        }
      })
    }
  }

  const verifyAdmin = () => {
    if(window.location.pathname.indexOf("admin")){
      verifySession();
    }
  }

  return (
    <AppContext.Provider
    // <Router
      value={{
        state: {
          changeMenu: menuObject,
          onboarding: onboarding,
          userLogged: userLogged,
          cookie: cookie
        },
        setMenuObject: setMenuObject,
        setOnboarding: setOnboarding,
        setUserLogged: setUserLogged,
        resetUser: resetUser,
        verifyAdmin: verifyAdmin,
        setCookie: setCookie,
      }}
    >
      <Router>
        <App />
      </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;

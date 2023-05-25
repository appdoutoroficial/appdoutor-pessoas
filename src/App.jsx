import React, { useState } from "react";
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
import IndexInterno from "./pages/interna/inicial/Inicial";
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



import './assets/materialdesign/scss/materialdesignicons.scss'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'
import "./components/NavBar";
import AppContext from "./context/AppContext";





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
    {path: '/admin/index', exact: true, element: <IndexInterno />},
    {path: '/inicio', exact: true, element: <Home />},
    {path: '/perfil', exact: true, element: <Perfil />},
    {path: '/change-profile', exact: true, element: < EditaPerfil/>},
    {path: '/consulta', exact: true, element: < Consulta/>},
    {path: '/exame', exact: true, element: < Exame/>},
    {path: '/meu-exame', exact: true, element: < MeuExame/>},
    {path: '/minha-receita', exact: true, element: < MinhaReceita/>},
    {path: '/agenda', exact: true, element: < Agenda/>},
    {path: '/acompanha', exact: true, element: < Acompanha/>},
    {path: '/call', exact: true, element: < Call/>},
    {path: '/chat', exact: true, element: < Chat/>},
    {path: '/continue-profile', exact: true, element: < ContinueProfile/>},
    {path: '/especialista', exact: true, element: < Especialista/>},
    {path: '/finaliza-call', exact: true, element: < FinalizaCall/>},
    {path: '/mapa', exact: true, element: < Mapa/>},
    {path: '/mensagem', exact: true, element: < Mensagem/>},
    {path: '/iniciar-consulta', exact: true, element: < IniciarConsulta/>},
    {path: '/notificacao', exact: true, element: < Notificacao/>},
    {path: '/pagamento', exact: true, element: < Pagamento/>},
    {path: '/pesquisar', exact: true, element: < Pesquisar/>},
    {path: '/receita', exact: true, element: < Receita/>},
    {path: '/review', exact: true, element: < Review/>},
    {path: '/sobre', exact: true, element: < Sobre/>},
    {path: '/video', exact: true, element: < Video/>},
    {path: '/cadastrar-cartao', exact: true, element: < CadastrarCartao/>}, 

  ]);

  return element;
}

const AppWrapper = () => {
  const [menuObject, setMenuObject] = useState(false);

  console.log(menuObject);

  return (
    <AppContext.Provider
    // <Router
      value={{
        state: {
          changeMenu: menuObject
        },
        setMenuObject: setMenuObject
      }}
    >
      <Router>
        <App />
      </Router>
    </AppContext.Provider>
  );
};

export default AppWrapper;

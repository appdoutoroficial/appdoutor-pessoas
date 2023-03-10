import React from "react";
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import Inicial from "./pages/inicial/Inicial";
import Signin from "./pages/sign-in/Signin";
import Entrar from "./pages/entrar/Entrar";
import Verify from "./pages/verify/Verify";
import Profile from "./pages/profile/Profile";
import IndexInterno from "./pages/interna/inicial/Inicial";

import './assets/materialdesign/scss/materialdesignicons.scss'
import './bootstrapicons.scss'
import './demo.scss'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './App.scss'

function App() {
  let element = useRoutes([
    {path: '/', exact: true, element: <Inicial />},
    {path: '/cadastrar', exact: true, element: <Signin />},
    {path: '/entrar', exact: true, element: <Entrar />},
    {path: '/verify', exact: true, element: <Verify />},
    {path: '/profile', exact: true, element: <Profile />},
    {path: '/admin/index', exact: true, element: <IndexInterno />},
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

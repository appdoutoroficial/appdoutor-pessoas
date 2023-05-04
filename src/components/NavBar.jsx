import React, { useState, useEffect } from "react";
// import logo from '../assets/images/logo-branco.png'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from "react-router-dom";
import photo from '../assets/img/perf1.jpeg';

const NavBar = () => {
    const navigate = useNavigate();

    return (
        <nav id="main-nav">
      <ul className="second-nav">
         <li className="osahan-user-profile bg-primary">
            <div className="d-flex align-items-center gap-2">
               <img src={photo} alt="" className="rounded-pill img-fluid"/>
               <div className="ps-1">
                  <h6 className="fw-bold text-white mb-0">Arthur Bastos</h6>
                  <p className="text-white-50 m-0 small">(11) 95599-9988</p>
               </div>
            </div>
         </li>           
         <li><a href="notification.html"><span className="mdi mdi-bell-outline me-3"></span>Notificações</a></li>
         <li><a href="home.html"><span className="mdi mdi-home-variant-outline me-3"></span>Home</a></li>
         <li><a href="mapa.html"><span className="mdi mdi-car me-3"></span>Rota</a></li>                              
         <li><a href="pagamento.html"><span className="mdi mdi-file-table-box-outline me-3"></span>Pagamento</a></li>         
         <li>
            <a href="#"><span className="mdi mdi-account-outline me-3"></span>Opções</a>
            <ul>
               <li><a href="my-profile.html"><span className="mdi mdi-account-outline me-3"></span>Minha conta</a></li>
               <li><a href="my-appointment-upcoming.html"><span className="mdi mdi-calendar-clock me-3"></span>Próximas consultas</a></li>
               <li><a href="my-appointment.html"><span className="mdi mdi-calendar-range me-3"></span>Minhas consultas</a></li>
               <li><a href="history.html"><span className="mdi mdi-history me-3"></span>Histórico</a></li>
               <li><a href="favorite-doctor.html"><span className="mdi mdi-cards-heart-outline me-3"></span>Favoritos</a></li>
               <li><a href="change-profile.html"><span className="mdi mdi-square-edit-outline me-3"></span>Editar conta</a></li>
            </ul>
         </li>
         <li><a href="video.html"><span className="mdi mdi-video-outline me-3"></span>Telemedicina</a></li>                    
         <li><a href="chat.html"><span className="mdi mdi-chat-processing-outline me-3"></span>Chat</a></li>
         <li><a href="review.html"><span className="mdi mdi-star-half-full me-3"></span>Avaliar especialista</a></li>
         <li><a href="index.html"><span className="mdi mdi-login me-3"></span>Sair</a></li>
         <li><a href="inicial.html"><span className="mdi mdi-login me-3"></span>Tela carregar</a></li>
      </ul>   
      <ul className="bottom-nav">
         <li className="home">
            <a href="https://www.facebook.com/drareginabiasoli/">
               <p className="h5 m-0"><span className="mdi mdi-facebook"></span></p>
               Facebook
            </a>
         </li>
         <li className="find">
            <a href="https://www.instagram.com/drareginabiasoli/">
               <p className="h5 m-0"><span className="mdi mdi-instagram"></span></p>
               Instagram
            </a>
         </li>
         <li className="more">
            <a href="https://drareginabiasoli.com.br/">
               <p className="h5 m-0"><span className="mdi mdi-web"></span></p>
               Site
            </a>
         </li>
      </ul>     
   </nav>
    )
}

export default NavBar;
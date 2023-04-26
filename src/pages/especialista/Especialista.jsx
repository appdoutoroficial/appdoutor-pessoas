import React, { useState, useEffect } from "react";
import photo from "../../assets/img/ft_perfil.png"


const Especialista = () => {
    return (

        <div className="home d-flex flex-column vh-100">
        <div className="bg-white shadow-sm">
            <div className="d-flex align-items-center justify-content-between mb-auto p-3 osahan-header">
               <div className="d-flex align-items-center gap-2 me-auto">
                  <a href="/inicio" className="text-dark bg-white shadow rounded-circle icon">
                     <span className="mdi mdi-arrow-left mdi-18px"></span>
                  </a>
               </div>
               <div className="d-flex align-items-center gap-3">
                  <a className="toggle text-muted d-flex align-items-center justify-content-center fs-5 bg-white shadow rounded-circle icon" href="#"><i
                        className="bi bi-list"></i></a>
               </div>
            </div>
            <div className="px-3 pb-3">
               <form>
                  <div className="input-group rounded-4 shadow overflow-hidden border-0 py-1 ps-3 bg-light">
                     <span className="input-group-text bg-transparent text-muted border-0 p-0" id="search"><span className="mdi mdi-magnify mdi-24px text-primary"></span></span>
                     <input type="text" className="form-control bg-transparent text-muted border-0 px-3 fs-14" placeholder="Pesquisar" aria-label="Search" aria-describedby="search"/>
                  </div>
               </form>
            </div>
         </div>
        
          <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">                        
            <div className="p-3">
               <h6 className="mb-2 pb-2 fw-bold text-1">Conheça nossos especialistas</h6>
               <div className="row row-cols-2 g-3">
                  <div className="col">
                     <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">                 
                        <img src={photo}alt="" className="card-img-top top-doctor-img"/>
                        <div className="card-body small p-3 osahan-card-body">
                           <h6 className="card-title fs-14 mb-1">Dra. Regina Biasoli</h6>
                           <p className="card-text text-muted mb-1">Especialista em trombofilia</p>
                           <div className="d-flex align-items-center gap-3 small mb-3">
                              <div><span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)</div>                          
                           </div>                        
                        </div>
                        <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                           <a href="/call-doctor"
                              className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                              <span className="small">Selecionar</span>                          
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">                  
                     <img src={photo}alt="" className="card-img-top top-doctor-img"/>
                        <div className="card-body small p-3 osahan-card-body">
                           <h6 className="card-title fs-14 mb-1">Dra. Regina Biasoli</h6>
                           <p className="card-text text-muted mb-1">Especialista em trombofilia</p>
                           <div className="d-flex align-items-center gap-3 small mb-3">
                              <div><span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)</div>                          
                           </div>                        
                        </div>
                        <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                           <a href="/call-doctor"
                              className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                              <span className="small">Selecionar</span>                          
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">                   
                     <img src={photo}alt="" className="card-img-top top-doctor-img"/>
                        <div className="card-body small p-3 osahan-card-body">
                           <h6 className="card-title fs-14 mb-1">Dra. Regina Biasoli</h6>
                           <p className="card-text text-muted mb-1">Especialista em trombofilia</p>
                           <div className="d-flex align-items-center gap-3 small mb-3">
                              <div><span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)</div>                          
                           </div>                        
                        </div>
                        <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                           <a href="/call-doctor"
                              className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                              <span className="small">Selecionar</span>                          
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className="col">
                     <div className="card rounded-4 border-0 position-relative shadow-sm overflow-hidden">                   
                     <img src={photo}alt="" className="card-img-top top-doctor-img"/>
                        <div className="card-body small p-3 osahan-card-body">
                           <h6 className="card-title fs-14 mb-1">Dra. Regina Biasoli</h6>
                           <p className="card-text text-muted mb-1">Especialista em trombofilia</p>
                           <div className="d-flex align-items-center gap-3 small mb-3">
                              <div><span className="mdi mdi-star text-warning me-1"></span>4.9 (5,380)</div>                          
                           </div>                        
                        </div>
                        <div className="card-footer bg-transparent border-0 p-0 cf-btn">
                           <a href="/call-doctor"
                              className="btn btn-sm btn-primary d-flex align-items-center justify-content-between small">
                              <span className="small">Selecionar</span>                         
                           </a>
                        </div>
                     </div>
                  </div>      
               </div>
            </div>
         </div>
         <div className="space"></div>    
          <div className="footer mt-auto p-3 fix-osahan-footer">
             <div
                className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
                <a href="/inicio" className="col footer-bottom-nav active">
                   <span className="mdi mdi-home-variant-outline mdi-24px"></span>
                   <span>Home</span>
                </a>
                <a href="/pesquisar" className="col footer-bottom-nav">
                   <span className="mdi mdi-magnify mdi-24px"></span>
                   <span>Pesquisar</span>
                </a>
                <a href="/video" className="col footer-bottom-nav">
                   <span className="mdi mdi-video-outline mdi-24px"></span>
                   <span>Telemedicina</span>
                </a>
                <a href="/chat" className="col footer-bottom-nav">
                   <span className="mdi mdi-message-processing-outline mdi-24px"></span>
                   <span>Chat</span>
                </a>
                <a href="/perfil" className="col footer-bottom-nav">
                   <span className="mdi mdi-account-outline mdi-24px"></span>
                   <span>Perfil</span>
                </a>
             </div>
          </div>
       </div>

    )    
}

export default Especialista;
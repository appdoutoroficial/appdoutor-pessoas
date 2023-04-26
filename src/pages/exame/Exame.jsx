import React, { useState, useEffect } from "react";



const  Exame  = () => {
    return (
        
        <div class="request-appointment d-flex flex-column vh-100">
         <div class="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
            <a href="/inicio" class="text-dark bg-white shadow rounded-circle icon">
                  <span class="mdi mdi-arrow-left mdi-18px"></span></a>
            <h6 class="mb-0 ms-3 me-auto fw-bold">Meus exames</h6>
            <div class="d-flex align-items-center gap-3">
               <a class="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5" href="#"><i class="bi bi-list"></i></a>
            </div>
         </div>
         <div class="vh-100 my-auto overflow-auto body-fix-osahan-footer">
            <div class="p-3">
               <div class="bg-white rounded-4 px-3 pt-3 overflow-hidden edit-profile-back shadow mb-3">
                  <h6 class="pb-2">Perfil</h6>
                  <div class="d-flex">
                     <div class="col">
                        <p><span class="text-muted small">Nome</span><br/>Arthur Bastos</p>
                     </div>
                     <div class="col">
                        <p><span class="text-muted small">Nascimento</span><br/>07 Jan 2000</p>
                     </div>
                  </div>
                  <div class="d-flex">
                     <div class="col">
                        <p><span class="text-muted small">Genero</span><br/>Masc</p>
                     </div>
                     <div class="col">
                        <p><span class="text-muted small">Contato</span><br/>(11) 95588-9955</p>
                     </div>
                  </div>
                  <div class="d-flex">
                     <div class="col">
                        <p><span class="text-muted small">E-mail</span><br/>arthur@gmail.com</p>
                     </div>
                     <div class="col">
                        <p><span class="text-muted small">Cidade</span><br/>São Paulo</p>
                     </div>
                  </div>
                  <a href="/change-profile" class="link-dark">
                     <div class="edit-profile-icon bg-primary text-white">
                        <span class="mdi mdi-square-edit-outline h2 m-0 pt-3 pe-2"></span>
                     </div>
                  </a>
               </div>
               <div class="rounded-4 shadow overflow-hidden">
                  <a href="/meu-exame" class="link-dark">
                     <div class="bg-white d-flex align-items-center justify-content-between p-3 border-bottom">
                        <h6 class="m-0">Meus exames</h6>
                        <span class="mdi mdi-chevron-right mdi-24px icon shadow rounded-pill"></span>
                     </div>
                  </a>                   
               </div>
            </div>
         </div>     
         <div class="footer mt-auto p-3">
            <div class="bg-white rounded-4 border-primary-dotted py-3 ps-3 pe-5 upload-file mb-3">
               <p class="fw-bold mb-1 text-primary fs-14">Envie<br/> os exames solicitados</p>
               <small class="text-muted">JPG, PNG, PDF (Max de documentos por vez: 10)</small>
               <div class="upload-file-icon bg-primary">
                  <i class="bi bi-file-earmark-arrow-up text-white fs-3 pt-4 pe-3"></i>
               </div>
            </div>
            <a href="/inicio" class="btn btn-info btn-lg w-100 rounded-4">Salvar</a>
         </div> 
      </div>
   
    )
}


export default Exame;
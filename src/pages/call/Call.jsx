import React, { useState, useEffect } from 'react';
import photo from '../../assets/img/ft_perfil.png';


const Call = () => {
    return (
        <>
        <div className="call">
        <div className="d-flex align-items-center justify-content-between p-3 position-absolute w-100">
           <a href="/chat" className="link-dark shadow bg-white rounded-circle icon">
              <span className="mdi mdi-arrow-left mdi-18px"></span>
           </a>
           <a className="toggle d-flex hc-nav-trigger shadow hc-nav-1 link-dark bg-white rounded-circle icon" href="#" role="button" aria-controls="hc-nav-1"><i className="bi bi-list fs-3 d-flex"></i></a>
        </div>
        <div className="bg-light d-flex align-items-center justify-content-center call-display">
           <div className="text-center">
              <div className="border-dashed-primary rounded-circle p-2">
                 <div className="border-dashed-primary rounded-circle p-2">
                    <div className="border-dashed-muted rounded-circle p-2">
                       <img src={photo} alt="" className="img-fluid rounded-circle call-img"/>
                    </div>
                 </div>
              </div>
              <div className="pt-3">
                 <p className="text-muted mb-2">Chamando ...</p>
                 <h4>Dra. Regina Biasoli</h4>
              </div>
           </div>
        </div>
     </div>   
    
     <div className="footer fixed-bottom d-flex align-items-center justify-content-between call-icons m-3">
        <a href="#" className="lighter-bg-primary rounded-circle">
        <span className="mdi mdi-microphone-outline mdi-24px"></span>
        </a>
        <a href="#" className="lighter-bg-primary rounded-circle">
           <span className="mdi mdi-volume-high mdi-24px"></span>
        </a>
        <a href="#" className="bg-success rounded-circle">
           <span className="mdi mdi-video-outline mdi-24px"></span>
        </a>
        <a href="/chat" className="lighter-bg-primary rounded-circle">
        <span className="mdi mdi-message-processing-outline mdi-24px"></span>
        </a>
        <a href="/call-end" className="bg-danger rounded-circle">
           <span className="mdi mdi-close mdi-24px"></span>
        </a>
     </div>
     </>
    )
}

export default Call;
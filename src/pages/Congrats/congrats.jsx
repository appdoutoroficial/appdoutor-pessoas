import React, { useState, useEffect } from "react";

const Congrats = () => {
    return (
        <div>
        <div className="congrats d-flex align-items-center justify-content-center vh-100">
          <div className="text-center p-3">
            <div className="mb-5">
              <img src="img/mobile.png" alt="" className="img-fluid blue-logo mb-5" />
              <h1 className="primario display-1 fw-bold mb-2">SEU APP</h1>
              <h2><strong>EXCLUSIVO</strong></h2>
              <h6>Mais conforto para você e seus pacientes</h6>
            </div>
          </div>
        </div>
        {/* footer */}
        <div className="footer fixed-bottom p-3">
          <a href="#" className="btn btn-info btn-lg w-100 rounded-4">Continuar</a>
        </div>
      </div>
    )
}

export default Congrats;
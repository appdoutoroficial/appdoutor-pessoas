import React, { useState, useEffect } from "react";
//import logo from '../assets/img/logo/logo-app.png'; 

const Login = () => {
    return (
    <div>
            <div className="welcome d-flex align-items-center justify-content-center vh-100">
                <div className="text-center pb-5 mb-5">
                <div className="mb-5">
                    <img src="{logo}" alt="" className="img-fluid logo-app mb-3" />               
                </div>
                </div>
            </div>
      
      <div className="footer fixed-bottom d-grid gap-3 m-4">
        <a href="sign-up" className="btn btn-info btn-lg">Inscreva-se</a>
        <a href="sign-in" className="btn btn-outline-info btn-lg">Entrar com App doutor</a>
      </div>
    </div>
    )
}

export default Login;
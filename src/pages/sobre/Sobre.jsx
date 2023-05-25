import React, { useState, useEffect } from "react";
import NavBar from "../../components/NavBar";
import AppContext from "../../context/AppContext";
import { useContext } from "react";
import photo from "../../assets/img/icon4.png";
import photo2 from "../../assets/img/ftmao.png";
import photo3 from "../../assets/img/Hemocromatose-1.png";
import { useNavigate } from "react-router-dom";

const Sobre = () => {
  const navigate = useNavigate();
  const value = useContext(AppContext);
  return (
    <>
      <NavBar />
      <div className="request-appointment d-flex flex-column vh-100">
        <div className="d-flex align-items-center justify-content-between mb-auto p-3 bg-white shadow-sm osahan-header">
          <a
            onClick={() => navigate("/inicio")}
            className="text-dark bg-white shadow rounded-circle icon"
          >
            <span className="mdi mdi-arrow-left mdi-18px" />
          </a>
          <h6 className="mb-0 txt-center me-auto fw-bold">Sobre</h6>
          <div className="d-flex align-items-center gap-3">
            <a
              href="javascript:;"
              onClick={() => value.setMenuObject(!value.state.changeMenu)}
              className="toggle bg-white shadow rounded-circle icon d-flex align-items-center justify-content-center fs-5"
            >
              <i className="mdi mdi-menu"></i>
            </a>
          </div>
        </div>
        {/* body */}
        <div className="vh-100 my-auto overflow-auto body-fix-osahan-footer">
          <div className="p-3">
            <div className="bx-ft">
              <img src={photo} className="img-fluid" alt="banner1" />
            </div>
            <h3 className="text-1">DRA. REGINA BIASOLI KIYOTA</h3>
            <p className=" txt-2 fw-bold">
              Hematologista e Clínica Geral - CRM 57627
            </p>
            <div className="bx-txt">
              <p className="mb-4 fw-bold">
                Especialista em TROMBOFILIA, primordialmente em fase
                gestacional, de mulheres com história de abortos de repetição;
                falhas de fertilização in vitro; pré-eclâmpsia, trombose e
                história gestacional de déficit de crescimento intra-uterino
                (Síndrome do Anticorpo Antifosfolípide). Especialista em
                distúrbios da coagulação, neoplasias do sangue, casos de
                ferritina alta, anemias, etc.
              </p>
            </div>
            <div className="bx-txt-1">
              <p className=" mb-2 txt-sobre fw-bold">
                - Título de Especialista pela Sociedade Brasileira de
                Hematologia e Hemoterapia
              </p>
            </div>
            <div className="bx-txt-1">
              <p className=" mb-2 txt-sobre fw-bold">
                - Membro do Grupo Internacional CLAHT de Hemostasia e Trombose
              </p>
            </div>
            <div className="bx-txt-1">
              <p className="mb-2 txt-sobre fw-bold">
                - Membro da Sociedade Brasileira de Hematologia e Hemoterapia
              </p>
            </div>
            <div className="bx-txt-1">
              <p className="mb-2 txt-sobre fw-bold">
                - Médica Credenciada do Hospital Albert Einstein e Sírio Libanês
              </p>
            </div>
            <div className="bx-txt-1">
              <p className="mb-2 txt-sobre fw-bold">
                - Residência Médica em Hematologia e Hemoterapia
              </p>
            </div>
            <div className="bx-txt-1">
              <p className="mb-2 txt-sobre fw-bold">
                - Residência Médica em Medicina Interna
              </p>
            </div>
            <div className="space" />
            <h3 className="text-1">Especialidades</h3>
            <div className="bx-ft">
              <img src={photo2} className="img-fluid" alt="banner1" />
            </div>
            <h6 className="text-1 txt-sobre1">Hematologia</h6>
            <div className="bx-txt">
              <p className="mb-4 fw-bold">
                A Hematologia é a especialidade médica que estuda e trata as
                doenças do sangue e de órgãos hematopoéticos, onde se formam as
                células do sangue (hemácias, leucócitos e plaquetas), estuda
                como são produzidos e em quais órgãos, incluindo a medula óssea,
                baço e linfonodos. Além de estudar o sangue com as suas
                características normais, estuda também todas as alterações e
                distúrbios sanguíneos que originam doenças das mais simples às
                mais graves, benignas, oncológicas e também aquelas dentro da
                esfera da coagulação do sangue.​ <br /> <br />
                Na prática do consultório, muitas queixas costumam ser
                frequentes, como casos de FERRITINA ALTA, totalmente atrelados à
                área da hematologia; casos de TROMBOSE, onde uma minuciosa
                investigação da causa deve ser feita, até mulheres com histórico
                de abortos de repetição ou falhas de fertilização in vitro têm
                me procurado porque temos alguns anticorpos muito relacionados à
                estes casos, que não são diagnosticados no dia a dia, ou,
                diagnosticados tardiamente, quando a mulher já está desgastada,
                principalmente, emocionalmente, devido a vários abortos
                ocorridos ou várias tentativas de “FIV” sem sucesso. <br />
                <br />
                A hematologia também cuida das Leucemias, Linfomas, anemias,
                Plaquetas, etc. <br />
              </p>
            </div>
            <div className="space" />
            <div className="bx-ft">
              <img src={photo3} className="img-fluid" alt="banner1" />
            </div>
            <h6 className="text-1 txt-sobre1">Hemocromatose</h6>
            <div className="bx-txt">
              <p className="mb-4 fw-bold">
                A Hemocromatose Hereditária (HH) é uma doença genética do
                metabolismo do ferro caracterizada por aumento da absorção
                intestinal e acúmulo progressivo do metal em diferentes órgãos
                do organismo47.​ <br /> <br />
                O excesso de ferro causa dano tecidual e fibrose com lesão
                irreversível e comprometimento funcional de vários órgãos entre
                os quais os mais comumente afetados são fígado, pâncreas e
                coração. De acordo com as mutações encontradas, a HH pode ser
                classificada em: hemocromatose associada ao HFE (hemocromatose
                clássica) e hemocromatose não associada ao HFE [hemocromatose
                hereditária por mutação no receptor 2 da transferrina-TfR2,
                hemocromatose juvenil (mutação da hemojuvelina – gene HJV e
                mutação da hepcidina – gene HAMP), doença da ferroportina
                (mutações no gene da ferroportina 1) e sobrecarga de ferro
                africana]39-42,45 (tabelas 1 e 2). <br />
                <br />
                A grande maioria (80-85%) dos casos de HH que tem ancestrais do
                norte Europeu é associada ao HFE, enquanto 10-15% dos casos de
                HH não são associados ao HFE4,45. Por outro lado, a HH não
                associada ao HFE é rara, mas é encontrada em várias partes do
                mundo, independente da raça. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="footer mt-auto p-3 fix-osahan-footer">
          <div className="d-flex align-items-center justify-content-between rounded-4 shadow overflow-hidden bottom-nav-main">
            <a
              onClick={() => navigate("/inicio")}
              className="col footer-bottom-nav active"
            >
              <span className="mdi mdi-home-variant-outline mdi-24px" />
              <span>Home</span>
            </a>
            <a
              onClick={() => navigate("/pesquisar")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-magnify mdi-24px" />
              <span>Pesquisar</span>
            </a>
            <a
              onClick={() => navigate("/video")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-video-outline mdi-24px" />
              <span>Telemedicina</span>
            </a>
            <a
              onClick={() => navigate("/chat")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-message-processing-outline mdi-24px" />
              <span>Chat</span>
            </a>
            <a
              onClick={() => navigate("/pesquisar")}
              className="col footer-bottom-nav"
            >
              <span className="mdi mdi-account-outline mdi-24px" />
              <span>Perfil</span>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sobre;

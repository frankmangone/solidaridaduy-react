import React from "react";
import {
  FaFacebookSquare,
  FaInstagramSquare,
  FaTwitterSquare,
} from "react-icons/fa";
import participateSvg from "../assets/svgs/participate_home.svg";
import donateSvg from "../assets/svgs/donate_home.svg";
import promoteSvg from "../assets/svgs/promote_home.svg";

const CollaborateView = () => {
  return (
    <div className="info-page">
      <img src={participateSvg} className="svg" alt="" />
      <h3>Sumate a Solidaridad UY</h3>
      <p>
        <span className="highlight">Relevamiento:</span> Contacto con vecinas y
        vecinos para actualizar datos.
      </p>
      <p>
        <span className="highlight">Transporte:</span> Ofrecer vehículo para
        transporte de donaciones.
      </p>
      <p>
        <span className="highlight">Difusión y Comunicación:</span> Manejo de redes 
        sociales para dar difusión a las necesidades y respuestas a consultas de varios tipos.
      </p>
      <p>
        <span className="highlight">Manos a la Olla:</span> Sumarte a cocinar en
        las ollas que haga falta.
      </p>
      <p>
        Si querés participar de esta u otras formas, ponete en contacto a través
        del <span className="highlight">092 555 425</span>.
      </p>

      <br />
      <br />
      <img src={donateSvg} className="svg" alt="" />
          <h3 className="orange-text">Colaborá con la Coordinadora Popular y Solidaria</h3>
      <p>
        Contactate al <span className="highlight orange-text">092 555 425</span>{" "}
        para recibir más información sobre tu <b>punto de acopio</b> más cercano y/o consultar qué
        alimentos están haciendo falta.
      </p>
      <p>
        Doná a través de la <b>cuenta BROU de la CPS</b>:
      </p>
      <p>
        <span className="highlight orange-text">CA 001569964-00004 </span>
              <br />

         Enviar comprobante a <b>comision.acopio.cps@gmail.com</b> 
        <br />
         Referencia: donación 
        <br />
         El dinero de la Coordinadora se utiliza para comprar alimentos 
        y cubrir las necesidades de las ollas y merenderos de las redes 
        que la integran.
      </p>
          <p>
              Podés arrimarte a tu <span className="highlight orange-text">PUNTO DE ACOPIO</span>{" "} 
              más cercano a colaborar.
              <ul>
                  <li><span className="highlight orange-text">Red CERRO por autonomía y vida digna</span>{" "} 
                      <br />
                  Haití 1606 (Salón de usuarios de la salud) 
                      <br />
                  Martes y Miércoles de 14 a 16hs 
                  </li>
                  <li><span className="highlight orange-text">Red de ollas al SUR</span>{" "}
                      <br /> Convención 1131 (Sindicato del gas)
                      <br /> Lunes a Viernes hasta las 16 horas<br />
                  </li>
                  <li><span className="highlight orange-text">Coordinadora solidaria de VILLA ESPAÑOLA</span>{" "}
                      <br /> Camino Corrales 3041 (Galpón de Corrales)
                      <br /> Coordinar al  096 762 350 <br /> </li>
                  <li><span className="highlight orange-text">Red solidaria del barrio LAVALLEJA</span>{" "}
                      <br />Instrucciones y José María Silva (Teatro del barrio Lavalleja) <br />
                            Lunes a jueves 16 a 18hs
                  </li>
                  <li><span className="highlight orange-text">Red de ollas de BELLA ITALIA</span>{" "} <br />
                     Manuel Pérez y Curiz 6129
                     <br />Coordinar al 097 030 441 </li>
                  <li><span className="highlight orange-text">Solidaridad CARBONERA</span>{" "} <br />
                      Pernas 2484 esq. Cabrera (FUNSA)
                      <br />
                      Lunes, miércoles o viernes de 15.00 a 20.00
                      </li>
                  <li><span className="highlight orange-text">Brigada JOSÉ ARTIGAS</span>{" "} <br />
                      Carlomagno esquina Victor Manuel (Mercadito Bella Italia)
                      <br />Lunes a viernes de 8 a 14hs
                      </li>
                  <li><span className="highlight orange-text">Red LOS BULEVARES</span>{" "} <br />
                      Ideario Artiguista 1947 (Comisión fomento Los Bulevares)
                      <br /> Coordinar al 097 151 643 </li>
                  <li><span className="highlight orange-text">Red CORAZONES CONTENTOS</span>{" "} <br />
                      Acosta y Lara 7129 (Salón Comunal Asociación Civil Esperanza)
                      <br /> Coordinar al 093 633 739 </li>
                  <li><span className="highlight orange-text">Red PASO CARRASCO</span>{" "} <br />
                      Acuña de figueroa 126 (Merendero Arcoíris) 
                      <br /> Coordinar al 098 783 061 </li>

              </ul>

              

        

      </p>

      <br />
      <br />

      <img src={promoteSvg} className="svg" alt="" />
          <h3 className="red-text">Difundí esta información</h3>
      <p>
        Seguinos en nuestras redes sociales, para ver y compartir las últimas
        actualizaciones.
      </p>
      <p>
        <FaFacebookSquare />
        {"  "}
        <a href="https://www.facebook.com/solidaridadUY/" className="red-link">
          /solidaridaduy
        </a>
      </p>

      <p>
        <FaInstagramSquare />
        {"  "}
        <a href="https://www.instagram.com/solidaridadUY/" className="red-link">
          @solidaridaduy
        </a>
      </p>

      <p>
        <FaTwitterSquare />
        {"  "}
        <a href="https://twitter.com/SolidaridadUY" className="red-link">
          @solidaridaduy
        </a>
      </p>
    </div>
  );
};

export default CollaborateView;

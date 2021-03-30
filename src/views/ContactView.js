import React from "react";

const ContactView = () => {
  return (
    <div className="info-page">
      <h3>Contacto</h3>
      <p>
        Envianos comentarios, ideas y sugerencias para seguir mejorando la
        plataforma. Si sos referente de una olla o querés generar una iniciativa
        en tu barrio, ponete en contacto para sumarte a la Coordinadora Popular y Solidaria.
        <br />
        <br />
        También podés contactarnos directamente al mail{" "}
        <span className="highlight">uysolidaridad@gmail.com</span>
      </p>
      <form
        className="content-right"
        action="mailto:uysolidaridad@gmail.com"
        method="POST"
        encType="multipart/form-data"
      >
        <input placeholder="Tu nombre / email..." />
        <textarea placeholder="Coméntanos algo..." />
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
};

export default ContactView;

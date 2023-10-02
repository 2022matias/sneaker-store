import "./contactos.scss";
import iconoEmail from "../../images/iconoEmail.jpg";
import { useState } from "react";

function Contactos(props) {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [consulta, setConsulta] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    props.togglePopup("contact");
    setNombre("");
    setEmail("");
    setConsulta("");
  }

  return (
    <div className="contacts">
      <h2 className="contacts__title">Contacto</h2>
      <form onSubmit={handleSubmit} className="contacts__form">
        <img
          src={iconoEmail}
          alt="Icono Email"
          className="contacts__iconoEmail"
        />
        <div className="contacts__separator">
          <input
            type="text"
            placeholder="Nombre"
            className="contacts__name"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
          <input
            type="email"
            placeholder="Email"
            className="contacts__email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <textarea
            type="text"
            placeholder="Dejenos su consulta"
            className="contacts__message"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
            required
          ></textarea>
          <button>Enviar</button>
        </div>
      </form>
    </div>
  );
}

export default Contactos;

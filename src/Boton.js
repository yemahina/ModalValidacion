import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import ModalValidacion from "./ModalValidacion";
import "./ModalValidacion.css";

const Boton = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  return (
    <div>
      <h1></h1>
      <img className="imagPagPrincipal" src="/imagenes/ping.jpg" alt="" />
      <button className="botonAbrirModal" onClick={ModalValidacion.openModal}>
        Abrir Modal
      </button>
      <ModalValidacion />
    </div>
  );
};

export default Boton;

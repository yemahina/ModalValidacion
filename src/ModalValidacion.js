import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./ModalValidacion.css";

// Estilos del modal
/*const modalStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)"
  },
  content: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    border: "none",
    borderRadius: "4px",
    outline: "none",
    padding: "20px",
    maxWidth: "300px",
    margin: "0 auto"
  }
};*/

// Componente principal
const ModalValidacion = () => {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  useEffect(() => {
    if (modalIsOpen) {
      const timeoutId = setTimeout(() => {
        closeModal();
      }, 3000); // Cerrar el modal después de 3000 milisegundos (3 segundos)

      return () => {
        clearTimeout(timeoutId); // Limpiar el temporizador si el modal se cierra manualmente antes de que expire el tiempo
      };
    }
  }, [modalIsOpen]);

  const openModal = () => {
    setModalIsOpen(true); // Abrir el modal
  };

  const closeModal = () => {
    setModalIsOpen(false); // Cerrar el modal
  };

  return (
    <div>
      <Modal
        isOpen={modalIsOpen} // Estado que controla si el modal está abierto o cerrado
        onRequestClose={closeModal} // Función para cerrar el modal
        className="modalContainer" // Clase para estilos específicos del modal
        /*style={modalStyles}*/
        /*contentLabel="Modal"*/
      >
        <img className="imagModal" src="/imagenes/prueba.jpg" alt="Imagen" />
        <p>Modal Validado</p>
      </Modal>
    </div>
  );
};

export default ModalValidacion;

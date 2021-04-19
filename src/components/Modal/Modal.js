import React, { Component } from "react";
// import React, { useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

const modalRoot = document.querySelector("#modal-root");

// ========== HOOK =============

// const Modal = ({ onClose, children }) => {
//   //   componentDidMount
//   useEffect(() => {
//     window.addEventListener("keydown", handleKeyDown);
//     //   componentWillUnmount
//     return () => {
//       window.removeEventListener("keydown", handleKeyDown);
//     };
//   }, []);

//   const handleKeyDown = (event) => {
//     if (event.code === "Escape") {
//       onClose();
//     }
//   };

//   const handleBackdropClick = (event) => {
//     if (event.target === event.currentTarget) {
//       onClose();
//     }
//   };

//   return createPortal(
//     <div className="Modal__backdrop" onClick={handleBackdropClick}>
//       <div className="Modal__content">{children}</div>
//     </div>,
//     modalRoot
//   );
// };

// export default Modal;

// =========== CLASS =============
class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }

  handleKeyDown = (event) => {
    if (event.code === "Escape") {
      this.props.onClose();
    }
  };

  handleBackdropClick = (event) => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {
    return createPortal(
      <div className="Modal__backdrop" onClick={this.handleBackdropClick}>
        <div className="Modal__content">{this.props.children}</div>
      </div>,
      modalRoot
    );
  }
}

export default Modal;

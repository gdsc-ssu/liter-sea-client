import React from "react";
import ReactDOM from "react-dom";

interface ModalPortalProps {
  children: React.ReactNode;
}

const ModalPortal = ({ children }: ModalPortalProps) => {
  const modal = document.getElementById("modal");
  return ReactDOM.createPortal(children, modal);
};

export default ModalPortal;

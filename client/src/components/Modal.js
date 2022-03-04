import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>{props.title}</h3>
          </div>
          <div className="modal-body">
            <p>{props.content}</p>
          </div>
          <div className="modal-footer">{props.actions}</div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

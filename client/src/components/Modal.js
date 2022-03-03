import React from "react";
import ReactDOM from "react-dom";
import history from "../history";

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div onClick={() => history.push("/")} className="modal">
      <div onClick={(e) => e.stopPropagation()} className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h3>Delete Stream</h3>
          </div>
          <div className="modal-body">
            <p>Are you sure you want to delete this stream - name</p>
          </div>
          <div className="modal-footer">
            <button className="btn btn-primary">Confirm</button>
            <button className="btn btn-secondary">Cancel</button>
          </div>
        </div>
      </div>
    </div>,
    document.querySelector("#modal")
  );
};

export default Modal;

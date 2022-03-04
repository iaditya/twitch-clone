import React from "react";
import Modal from "../Modal";

const StreamDelete = () => {
  const actions = (
    <React.Fragment>
      <button className="btn btn-primary">Confirm</button>
      <button className="btn btn-secondary">Cancel</button>
    </React.Fragment>
  );
  return (
    <div>
      StreamDelete
      <Modal
        actions={actions}
        title="Delete Stream"
        content="Are you sure you want to delete this stream - name"
      />
    </div>
  );
};

export default StreamDelete;

import React from "react";

const ButtonComponent = props => (
  <div className="form-group row">
    <div className="col-sm-6">
      <button
        className=" btn btn-success col-sm-6"
        type="button"
        onClick={props.saveChanges}
      >
        Save Changes
      </button>
    </div>
    <button
      className="btn btn-link col-sm-6"
      type="button"
      onClick={props.clearChanges}
    >
      Cancel
    </button>
  </div>
);

export default ButtonComponent;

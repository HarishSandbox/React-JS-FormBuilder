import React from "react";
import PropTypes from "prop-types";

const TypeComponent = props => (
  <div className="form-group row">
    <label
      htmlFor="exampleFormControlSelect1"
      className="col-sm-3 col-md-3 col-form-label"
    >
      Type
    </label>
    <div className="col-sm-4">
      <select
        className="form-control"
        id="exampleFormControlSelect1"
        onChange={props.typeDropDownSelected}
      >
        <option>Single-Select</option>
        <option>Multi-Select</option>
      </select>
    </div>
    <div className="col-sm-4">
      <div className="row">
        <div className="col-sm-1">
          <input
            type="checkbox"
            aria-label="Checkbox for following text input"
            onChange={() => props.required}
          />
        </div>
        <div className="col-sm-10">
          <label htmlFor="exampleFormControlSelect1">Value is required</label>
        </div>
      </div>
    </div>
  </div>
);

export default TypeComponent;

TypeComponent.propTypes = {
  typeDropDownSelected: PropTypes.func,
  required: PropTypes.func
};

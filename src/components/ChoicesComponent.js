import React from "react";
import PropTypes from "prop-types";

const ChoicesComponent = props => (
  <div>
    <div className="form-group row">
      <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
        Default Value
      </label>
      <div className="col-sm-7">
        <input
          type="label"
          className="form-control"
          value={props.defaultValue}
          id="label1"
          placeholder="Value is required"
          onChange={props.textField}
        />
      </div>
      <div className="col-sm-2">
        <button
          type="button"
          className="btn btn-success"
          onClick={props.addEntry}
        >
          Add
        </button>
      </div>
    </div>
    <div className="form-group row">
      <label
        htmlFor="exampleFormControlSelect1"
        className="col-sm-3 col-form-label"
      >
        Choices
      </label>
      <ul className="col-sm-8" style={{ paddingLeft: 33 }}>
        {props.choices.map(tag => (
          <div className="col-sm-12">
            <div className="row">
              <li className="col-sm-6">{tag}</li>
              <span
                className="badge badge-danger col-sm-2"
                onClick={() => props.deleteEntry(tag)}
              >
                remove
              </span>
            </div>
          </div>
        ))}
      </ul>
    </div>
  </div>
);

export default ChoicesComponent;

ChoicesComponent.propTypes = {
  addEntry: PropTypes.func
};

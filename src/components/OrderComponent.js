import React from "react";
import PropTypes from "prop-types";

const OrderComponent = props => (
  <div className="form-group row">
    <label htmlFor="inputEmail3" className="col-sm-3 col-form-label">
      Order
    </label>
    <div className="dropdown col-sm-9">
      <select
        className="form-control col-sm-8"
        id="exampleFormControlSelect1"
        onChange={props.order}
      >
        <option className="form-control">Display choices in Ascending</option>
        <option className="form-control">Display choices in Descending</option>
      </select>
    </div>
  </div>
);

export default OrderComponent;

OrderComponent.propTypes = {
  order: PropTypes.func
};

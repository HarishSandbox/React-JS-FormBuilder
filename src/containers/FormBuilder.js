import React, { Component } from "react";
import TypeComponent from "../components/TypeComponent.js";
import ChoicesComponent from "../components/ChoicesComponent.js";
import OrderComponent from "../components/OrderComponent.js";
import ButtonComponent from "../components/ButtonComponent.js";
import "./../css/FormBuilder.css";

const defaultState = {
  label: "",
  type: "",
  required: false,
  defaultValue: "",
  listOfChoices: [],
  order: "Ascending"
};

class FormBuilder extends Component {
  constructor(props) {
    super();
    this.state = defaultState;
  }

  defaultValueHandler = e => {
    this.setState({ defaultValue: e.target.value });
  };

  // Handler for required checkbox
  requiredCheckBoxHandler = () =>
    this.setState({ required: !this.state.required });

  // Handler for type drop down
  selectTypeHandler = e => this.setState({ type: e.target.value });

  // Handler for adding a choice
  addChoiceHandler = e => {
    if (this.state.listOfChoices.length > 50) {
      alert("Choices cannot be more than 50");
      return;
    }

    const temp = this.state.listOfChoices.slice(0);
    temp.push(this.state.defaultValue);
    this.setState({
      listOfChoices: temp
    });
  };

  // Handler for delete choice
  deleteChoiceHandler = tag => {
    var index = this.state.listOfChoices.indexOf(tag);
    if (index >= 0) {
      this.state.listOfChoices.splice(index, 1);
    }
    this.setState({ listOfChoices: this.state.listOfChoices });
  };

  // Handler for order drop down
  orderHandler = e => {
    var x = e.target.value;
    this.setState({ order: x });
    var sortedList = this.state.listOfChoices;
    if (this.state.order.includes("Ascending")) {
      sortedList.sort();
      sortedList.reverse();
    } else {
      sortedList.sort();
    }

    this.setState({ listOfChoices: sortedList });
  };

  // Handler for reading input from Label field
  readLabelHandler = e => {
    this.setState({
      label: e.target.value
    });
  };

  saveChangeHandler = e => {
    if (this.state.label.trim() === "") {
      alert("Label should not be empty");
      return;
    }
    fetch("http://www.mocky.io/v2/566061f21200008e3aabd919", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(this.state)
    });
  };

  clearHandler = e => {
    this.setState(defaultState);
  };

  render() {
    return (
      <div
        className="container-fluid center_div"
        style={{ paddingTop: 150, width: 700 }}
      >
        <div className="card">
          <div className="card-header">Field Builder</div>
          <div className="card-body">
            <form>
              <div className="form-group row">
                <label
                  htmlFor="inputEmail3"
                  className="col-sm-3 col-md-3 col-form-label"
                >
                  Label
                </label>
                <div className="col-sm-9">
                  <input
                    type="label"
                    className="form-control"
                    id="label1"
                    placeholder="Value is required"
                    required={true}
                    value={this.state.label}
                    onChange={this.readLabelHandler}
                  />
                </div>
              </div>

              <TypeComponent
                typeDropDownSelected={this.selectTypeHandler}
                required={this.requiredCheckBoxHandler}
              />
              <ChoicesComponent
                choices={this.state.listOfChoices}
                textField={this.defaultValueHandler}
                addEntry={this.addChoiceHandler}
                deleteEntry={this.deleteChoiceHandler}
                defaultValue={this.state.defaultValue}
              />
              <OrderComponent order={this.orderHandler} />
              <ButtonComponent
                saveChanges={this.saveChangeHandler}
                clearChanges={this.clearHandler}
              />
            </form>
          </div>
        </div>
      </div>
    );
  }
}

export default FormBuilder;

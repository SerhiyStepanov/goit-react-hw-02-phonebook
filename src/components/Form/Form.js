import React, { Component, Fragment } from "react";
import shortid from "shortid";
import PropTypes from "prop-types";
import s from "./Form.module.css";

export default class Form extends Component {
  state = {
    name: "",
    number: "",
  };

  onInputChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({
      [name]: value,
    });
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    this.props.onSubmit(this.state);
    this.reset();
  };

  reset = () => {
    this.setState({
      name: "",
      number: "",
    });
  };

  render() {
    const inputNameId = shortid.generate();
    const inputNumberId = shortid.generate();

    return (
      <Fragment>
        <form onSubmit={this.onFormSubmit}>
          <div className={s.container}>
            <label htmlFor={inputNameId} className={s.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id={inputNameId}
              value={this.state.name}
              onChange={this.onInputChange}
            />
          </div>

          <div className={s.container}>
            <label htmlFor={inputNumberId} className={s.label}>
              Number
            </label>
            <input
              type="tel"
              name="number"
              id={inputNumberId}
              value={this.state.number}
              onChange={this.onInputChange}
            />
          </div>

          <button type="submit" className={s.button}>
            Add contact
          </button>
        </form>
      </Fragment>
    );
  }
}

Form.propTypes = {
  onSubmit: PropTypes.func,
};

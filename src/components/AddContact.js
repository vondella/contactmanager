import React, { Component } from "react";
import { connect } from "react-redux";
import { editName } from "../actions/EditContacts";

class AddContact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      phone: ""
    };
    this.onNameChange = this.onNameChange.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPhoneChange = this.onPhoneChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }
  onNameChange(e) {
    const name = e.target.value;
    this.setState(() => {
      return { name };
    });
  }
  onEmailChange(e) {
    const email = e.target.value;
    this.setState(() => {
      return { email };
    });
  }
  onPhoneChange(e) {
    const phone = e.target.value;
    this.setState(() => {
      return { phone };
    });
  }
  onSubmit(e) {
    e.preventDefault();
    // props.dispatch(editName("abuu"));
    this.props.dispatch(editName("abuu"));
    console.log(this.props);
  }

  render() {
    console.log(this.props.name);
    return (
      <div className="card mb-3">
        <div className="card-header">Add Contact</div>
        <form onSubmit={this.onSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              value={this.state.name}
              type="text"
              name="name"
              className="form-control form-control-lg"
              placeholder="Enter Name"
              onChange={this.onNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              value={this.state.email}
              name="email"
              className="form-control form-control-lg"
              placeholder="Enter Email"
              onChange={this.onEmailChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="phone">Phone</label>
            <input
              type="text"
              value={this.state.phone}
              name="phone"
              className="form-control form-control-lg"
              placeholder="Enter Phone"
              onChange={this.onPhoneChange}
            />
          </div>
          <input
            type="submit"
            value="Add Contact"
            className="btn btn-light btn-block"
          />
        </form>
      </div>
    );
  }
}

const mapsStateToProps = (state, props) => {
  return {
    name: state.name
  };
};
export default connect(mapsStateToProps)(AddContact);

import React, { Component } from "react";
import PropTypes from "prop-types";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.onDeleteClick = this.onDeleteClick.bind(this);
  }
  state = {
    showContactInfo: true
  };
  onShowClick = e => {
    this.setState(prevState => {
      return {
        showContactInfo: !prevState.showContactInfo
      };
    });
  };
  onDeleteClick() {
    this.props.deleteClickHandler(this.props.Contact.id);
  }

  render() {
    const { id, name, email } = this.props.Contact;
    return (
      <div className="card card-body">
        <h4>
          {this.props.Contact.name}{" "}
          <i onClick={this.onShowClick} className="fas fa-sort-down" />{" "}
          <i
            className="fas fa-times"
            style={{ float: "right", cursor: "pointer", color: "red" }}
            onClick={this.onDeleteClick}
          />
        </h4>
        {this.state.showContactInfo && (
          <ul className="list-group">
            <li className="list-group-item">{id}</li>
            <li className="list-group-item">{email}</li>
          </ul>
        )}
      </div>
    );
  }
}

Contact.defaultProps = {
  branding: "React"
};
Contact.propTypes = {
  branding: PropTypes.string.isRequired
};

export default Contact;

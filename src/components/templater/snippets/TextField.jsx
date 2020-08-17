import React, { Component } from "react";
import "./../Templater.css";
class TextField extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {'        <label">'}
            {this.props.input.name}
            {"</label>"}
            <br />
            {"        {props.errors."}
            {this.props.input.name} {" && ("}
            <br />
            {'          <div id="feedback">{props.errors.'}
            {this.props.input.name} {"}</div>"}
            <br />
            {"        )}"}
            <br />
            {"        <Field"}
            <br />
            {'          name="'}
            {this.props.input.name}
            {'"'}
            <br />
            {'          type="text"'}
            <br />
            {'          className="form-control '}
            {this.props.input.name}
            {'"'}
            <br />
            {'          placeholder="Enter '}
            {this.props.input.name}
            {'"'}
            <br />
            {"        />"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default TextField;

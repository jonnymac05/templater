import React, { Component } from "react";
import "./../Templater.css";
class DomainText extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {"public string "}
            {this.props.domainText.name}
            {" { get; set; }"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default DomainText;

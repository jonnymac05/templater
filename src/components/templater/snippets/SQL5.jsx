import React, { Component } from "react";
import "./../Templater.css";
class SQL5 extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {",["}
            {this.props.variable.name}
            {"]"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default SQL5;

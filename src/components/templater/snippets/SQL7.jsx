import React, { Component } from "react";
import "./../Templater.css";
class SQL7 extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {"OR ["}
            {this.props.variable.name}
            {"] LIKE '%' + @Q + '%'"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default SQL7;

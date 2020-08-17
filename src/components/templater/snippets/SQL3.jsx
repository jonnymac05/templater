import React, { Component } from "react";
import "./../Templater.css";
class SQL3 extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {",@"}
            {this.props.variable.name}
            {" nvarchar("}
            {this.props.variable.characterLimit}
            {") = 'Example'"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default SQL3;

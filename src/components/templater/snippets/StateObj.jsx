import React, { Component } from "react";
import "./../Templater.css";
class StateObj extends Component {
  render() {
    if (this.props.stateItem.type === "text") {
      return (
        <React.Fragment>
          <pre>
            <code>
              {"         "}
              {this.props.name}
              {": "}
              {'""'}
              {","} <br />
            </code>
          </pre>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <pre>
            <code>
              {this.props.name}
              {": "}
              {"[]"}
              {","} <br />
            </code>
          </pre>
        </React.Fragment>
      );
    }
  }
}

export default StateObj;

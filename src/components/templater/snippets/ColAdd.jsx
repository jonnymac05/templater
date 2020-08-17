import React, { Component } from "react";
import "./../Templater.css";
class ColAdd extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {'col.AddWithValue("@'}
            {this.props.colAdd.name}
            {'", model.'}
            {this.props.colAdd.name}
            {");"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default ColAdd;

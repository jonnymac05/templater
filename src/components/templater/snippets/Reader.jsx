import React, { Component } from "react";
import "./../Templater.css";
class Reader extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {this.props.formData.widgetName.toLowerCase()}
            {"."}
            {this.props.reader.name}
            {" = reader.GetSafeString(index++);"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default Reader;

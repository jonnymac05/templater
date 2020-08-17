import React, { Component } from "react";
import "./../Templater.css";
class CardText extends Component {
  render() {
    return (
      <React.Fragment>
        <pre>
          <code>
            {'<p className="card-text">'}
            <br />

            {"<strong>"}
            {this.props.text.name}
            {":</strong> {this.props."}
            {this.props.formData.widgetName}
            {"."}
            {this.props.text.name}
            {"}"}
            <br />
            {"</p>"}
            <br />
          </code>
        </pre>
      </React.Fragment>
    );
  }
}

export default CardText;

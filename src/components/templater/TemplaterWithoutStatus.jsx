import React, { Component } from "react";
import "./Templater.css";
import debug from "sabio-debug";
import TextField from "./snippets/TextField";
import StateObj from "./snippets/StateObj";
import CardText from "./snippets/CardText";
import DomainText from "./snippets/DomainText";
import ColAdd from "./snippets/ColAdd";
import Reader from "./snippets/Reader";
const _logger = debug.extend("Templater");
class Templater extends Component {
  state = {
    formData: {
      widgetName: "Widget",
      textField: "",
    },
    inputsArray: [],
    mapArray: [],
    mapState: [],
    cardTextArray: [],
    domainTextArray: [],
    colAddArray: [],
    readerArray: [],
  };
  onChange = (event) => {
    _logger("OnChange", event.target);
    const name = event.target.name;
    const value = event.target.value;

    this.setState((prevState) => {
      const updatedFormData = {
        ...prevState.formData,
      };
      updatedFormData[name] = value;

      return { formData: updatedFormData };
    });
  };

  mapStateItem = (stateItem) => {
    return (
      <StateObj
        key={stateItem.id}
        stateItem={stateItem}
        name={stateItem.name}
      />
    );
  };
  mapDomainText = (domainText) => {
    return <DomainText key={domainText.id} domainText={domainText} />;
  };

  mapColAdd = (colAdd) => {
    return <ColAdd key={colAdd.id} colAdd={colAdd} />;
  };

  mapReader = (reader) => {
    return (
      <Reader key={reader.id} reader={reader} formData={this.state.formData} />
    );
  };

  mapInput = (input) => {
    if (input.type === "text") {
      return <TextField key={input.id} input={input} />;
    }
  };

  mapCardText = (text) => {
    return (
      <CardText key={text.id} text={text} formData={this.state.formData} />
    );
  };

  addTextFieldClick = (e) => {
    e.preventDefault();
    this.setState((prevState) => {
      const data = { ...this.state.formData };
      const aName = this.state.formData.textField;
      const array = [...this.state.inputsArray];
      data.textField = "";
      const textObj = { type: "text", name: aName, id: array.length };
      array.push(textObj);
      _logger("name ", aName, " array: ", array);
      return {
        ...prevState,
        inputsArray: array,
        mapArray: array.map(this.mapInput),
        mapState: array.map(this.mapStateItem),
        cardTextArray: array.map(this.mapCardText),
        domainTextArray: array.map(this.mapDomainText),
        colAddArray: array.map(this.mapColAdd),
        readerArray: array.map(this.mapReader),
        formData: data,
      };
    });
  };

  render() {
    return (
      <React.Fragment>
        <div className="container">
          <div className="input-area col">
            <div className="formBanner">
              <h5>Create Your Component</h5>
            </div>

            <form>
              <div className="form-group">
                <label>Component Name</label>
                <input
                  type="text"
                  className="form-control"
                  name="widgetName"
                  value={this.state.formData.widgetName}
                  onChange={this.onChange}
                  placeholder="Name for the Component"
                />
              </div>
            </form>
            <form className="form-inline">
              <div className="form-group mb-2">
                <label>Text Field</label>
              </div>
              <div className="form-group mx-sm-3 mb-2">
                <input
                  type="text"
                  className="form-control"
                  name="textField"
                  value={this.state.formData.textField}
                  onChange={this.onChange}
                  placeholder="Unique Name"
                />
              </div>
              <button
                className="btn btn-primary mb-2"
                onClick={this.addTextFieldClick}
              >
                Add
              </button>
            </form>
          </div>
        </div>
        <div className="box col">
          <button className="code-title">REACT FORM</button>
          <div className="code-section">
            <pre>
              <code>
                {'import React, { Component } from "react";'}
                <br />
                {'import { Field, Form, Formik } from "formik";'}
                <br />
                {"import "}
                {this.state.formData.widgetName}
                {'Card from "./'}
                {this.state.formData.widgetName}
                {'Card";'}
                <br />
                {"import "}
                {this.state.formData.widgetName}
                {'Search from "./'}
                {this.state.formData.widgetName}
                {'Search";'}
                <br />
                {"import * as "}
                {this.state.formData.widgetName}
                {'Service from "./../../services/'}
                {this.state.formData.widgetName}
                {'Service";'}
                <br />
                {
                  'import * as serviceHelper from "./../../services/serviceHelper";'
                }
                <br />
                {'import Pagination from "rc-pagination";'}
                <br />
                {'import "rc-pagination/assets/index.css";'}
                <br />
                {'import debug from "sabio-debug";'}
                <br />
                {'const _logger = debug.extend("'}
                {this.state.formData.widgetName}
                {'s");'}
                <br />
                {"class "}
                {this.state.formData.widgetName}
                {" extends Component {"}
                <br />
                {" state = {"}
                <br />
                {"  formData: {"}
                <br />
                {this.state.mapState}
                {"             },"} <br />
                {"};"} <br />
                {""}
                <br />
                {"onSubmitClick = ("}
                {this.state.formData.widgetName}
                {") => {"}
                <br />
                {"post(a"}
                {this.state.formData.widgetName}
                {").then(this.onSuccessPost"}
                {this.state.formData.widgetName}
                {").catch(this.onErrorPost"}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onSuccessPost"}
                {this.state.formData.widgetName}
                {" = (response) => {"}
                <br />
                {'_logger("Success Posting '}
                {this.state.formData.widgetName}
                {'", response.item);'}
                <br />
                {"this.updateId(response);"}
                <br />
                {"this.success"}
                {this.state.formData.widgetName}
                {"Banner();"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onErrorPost"}
                {this.state.formData.widgetName}
                {" = (error) => {"}
                <br />
                {'_logger("Error Posting '}
                {this.state.formData.widgetName}
                {'", error);'}
                <br />
                {"this.error"}
                {this.state.formData.widgetName}
                {"Banner();"}
                <br />
                {"return Promise.reject(error);"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"success"}
                {this.state.formData.widgetName}
                {"Banner = () => {"}
                <br />
                {'Swal.fire("Good '}
                {this.state.formData.widgetName}
                {'!", "You posted a '}
                {this.state.formData.widgetName}
                {'!", "success");'}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"error"}
                {this.state.formData.widgetName}
                {"Banner = () => {"}
                <br />
                {"Swal.fire({"}
                <br />
                {'icon: "error",'}
                <br />
                {'title: "'}
                {this.state.formData.widgetName}
                {' Not Posted",'}
                <br />
                {'text: "Make sure you fill in all fields",'}
                <br />
                {"});"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {" render() {"} <br />
                {"    return ("} <br />
                {"<React.Fragment>"} <br />
                {" <Formik"}
                <br />
                {'  className="formik-form"'}
                <br />
                {"  enableReinitialize={true}"}
                <br />
                {"  validationSchema={formValidationSchema}"}
                <br />
                {"  initialValues={this.state.formData}"}
                <br />
                {"    onSubmit={(values, { resetForm }) => {"}
                <br />
                {"    this.onSubmitClick(values);"}
                <br />
                {"    resetForm({"}
                <br />
                {this.state.mapState}
                {"    });"}
                <br />
                {"  }}"}
                <br />
                {">"}
                <br />
                {"  {(props) => ("}
                <br />
                {'    <Form className="form">'}
                <br />
                {'      <div className="form-group">'}
                <br />
                {this.state.mapArray}
                {"      </div>"}
                <br />
                {"      <button"}
                <br />
                {'        type="submit"'}
                <br />
                {'        className="btn btn-primary btn-lg btn-block submit"'}
                <br />
                {"      >"}
                <br />
                {"      </button>"}
                <br />
                {"    </Form>"}
                <br />
                {"  )}"}
                <br />
                {" </Formik>"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"</React.Fragment>"} <br />
                {"    );"} <br />
                {" }"} <br />
                {"}"} <br />
                {"export default "}
                {this.state.formData.widgetName}
                {";"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">REACT DISPLAY ALL</button>
          <div className="code-section">
            <pre>
              <code>
                {'import React, { Component } from "react";'}
                <br />
                {"import "}
                {this.state.formData.widgetName}
                {'Card from "./'}
                {this.state.formData.widgetName}
                {'Card";'}
                <br />
                {"import "}
                {this.state.formData.widgetName}
                {'Search from "./'}
                {this.state.formData.widgetName}
                {'Search";'}
                <br />
                {"import * as "}
                {this.state.formData.widgetName}
                {'Service from "./../../services/'}
                {this.state.formData.widgetName}
                {'Service";'}
                <br />
                {
                  'import * as serviceHelper from "./../../services/serviceHelper";'
                }
                <br />
                {'import Pagination from "rc-pagination";'}
                <br />
                {'import "rc-pagination/assets/index.css";'}
                <br />
                {'import debug from "sabio-debug";'}
                <br />
                {'const _logger = debug.extend("'}
                {this.state.formData.widgetName}
                {'s");'}
                <br />
                {""}
                <br />
                {"class "}
                {this.state.formData.widgetName}
                {"s extends Component {"}
                <br />
                {"state = {"}
                <br />
                {this.state.formData.widgetName}
                {"s: [],"}
                <br />
                {"mapped"}
                {this.state.formData.widgetName}
                {"s: [],"}
                <br />
                {"currentPage: 1,"}
                <br />
                {"pageSize: 6,"}
                <br />
                {"total"}
                {this.state.formData.widgetName}
                {"s: 0,"}
                <br />
                {"search: null,"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"componentDidMount() {"}
                <br />
                {"this.request"}
                {this.state.formData.widgetName}
                {"s();"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"request"}
                {this.state.formData.widgetName}
                {"s = () => {"}
                <br />
                {"let pageIndex = this.state.currentPage - 1;"}
                <br />
                {this.state.formData.widgetName}
                {"Service"}
                <br />
                {".get"}
                {this.state.formData.widgetName}
                {"s(pageIndex, this.state.pageSize)"}
                <br />
                {".then(this.onSuccessGet"}
                {this.state.formData.widgetName}
                {"s)"}
                <br />
                {".catch(serviceHelper.onGlobalError);"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onSuccessGet"}
                {this.state.formData.widgetName}
                {"s = (response) => {"}
                <br />
                {'_logger("Success Getting '}
                {this.state.formData.widgetName}
                {'s", response);'}
                <br />
                {"this.setState((prevState) => {"}
                <br />
                {"return {"}
                <br />
                {"...prevState,"}
                <br />
                {this.state.formData.widgetName}
                {"s: response.item.pagedItems,"}
                <br />
                {"total"}
                {this.state.formData.widgetName}
                {"s: response.item.totalCount,"}
                <br />
                {"};"}
                <br />
                {"});"}
                <br />
                {"this.render"}
                {this.state.formData.widgetName}
                {"s();"}
                <br />
                {"return response.data;"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"render"}
                {this.state.formData.widgetName}
                {"s = () => {"}
                <br />
                {"this.setState((prevState) => {"}
                <br />
                {"let "}
                {this.state.formData.widgetName}
                {"sArray = this.state."}
                {this.state.formData.widgetName}
                {"s.map(this.renderOne"}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"return { ...prevState, mapped"}
                {this.state.formData.widgetName}
                {"s: "}
                {this.state.formData.widgetName}
                {"sArray };"}
                <br />
                {"});"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"renderOne"}
                {this.state.formData.widgetName}
                {" = (A"}
                {this.state.formData.widgetName}
                {") => ("}
                <br />
                {"<"}
                {this.state.formData.widgetName}
                {"Card"}
                <br />
                {this.state.formData.widgetName}
                {"={A"}
                {this.state.formData.widgetName}
                {"}"}
                <br />
                {"key={A"}
                {this.state.formData.widgetName}
                {".id}"}
                <br />
                {"onEdit"}
                {this.state.formData.widgetName}
                {"Request={this.onEdit"}
                {this.state.formData.widgetName}
                {"Request}"}
                <br />
                {"onDelete"}
                {this.state.formData.widgetName}
                {"Request={this.onDelete"}
                {this.state.formData.widgetName}
                {"Request}"}
                <br />
                {"></"}
                {this.state.formData.widgetName}
                {"Card>"}
                <br />
                {");"}
                <br />
                {""}
                <br />
                {"onEdit"}
                {this.state.formData.widgetName}
                {"Request = ("}
                {this.state.formData.widgetName}
                {") => {"}
                <br />
                {'_logger("edit '}
                {this.state.formData.widgetName}
                {' button firing", '}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"this.props.history.push(`/"}
                {this.state.formData.widgetName}
                {"s/${"}
                {this.state.formData.widgetName}
                {".id}/edit`, "}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onDelete"}
                {this.state.formData.widgetName}
                {"Request = ("}
                {this.state.formData.widgetName}
                {") => {"}
                <br />
                {'_logger("delete '}
                {this.state.formData.widgetName}
                {' buton firing", '}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {this.state.formData.widgetName}
                {"Service"}
                <br />
                {".delete"}
                {this.state.formData.widgetName}
                {"("}
                {this.state.formData.widgetName}
                {".id)"}
                <br />
                {".then(this.onSuccessDelete"}
                {this.state.formData.widgetName}
                {")"}
                <br />
                {".catch(this.onErrorDelete"}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onSuccessDelete"}
                {this.state.formData.widgetName}
                {" = (id) => {"}
                <br />
                {'_logger("Success Deleting '}
                {this.state.formData.widgetName}
                {'", id);'}
                <br />
                {"this.setState((prevState) => {"}
                <br />
                {"let "}
                {this.state.formData.widgetName}
                {"s = [...prevState."}
                {this.state.formData.widgetName}
                {"s];"}
                <br />
                {this.state.formData.widgetName}
                {" = "}
                {this.state.formData.widgetName}
                {"s.filter(("}
                {this.state.formData.widgetName}
                {") => "}
                {this.state.formData.widgetName}
                {".id !== id);"}
                <br />
                {"return {"}
                <br />
                {"...prevState,"}
                <br />
                {this.state.formData.widgetName}
                {"s,"}
                <br />
                {"mapped"}
                {this.state.formData.widgetName}
                {"s: "}
                {this.state.formData.widgetName}
                {"s.map(this.renderOne"}
                {this.state.formData.widgetName}
                {"),"}
                <br />
                {"};"}
                <br />
                {"});"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onErrorDelete"}
                {this.state.formData.widgetName}
                {" = (response) => {"}
                <br />
                {'_logger("error deleting '}
                {this.state.formData.widgetName}
                {'", response);'}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"queryCheck = (query) => {"}
                <br />
                {"let pageIndex = this.state.currentPage - 1;"}
                <br />
                {""}
                <br />
                {"if (this.state.search === null) {"}
                <br />
                {"pageIndex = 0;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"this.queryRequest(query, pageIndex);"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"queryRequest = (query, pageIndex) => {"}
                <br />
                {"this.updateQueryState(query);"}
                <br />
                {""}
                <br />
                {this.state.formData.widgetName}
                {"Service"}
                <br />
                {".search"}
                {this.state.formData.widgetName}
                {"s(query, pageIndex, this.state.pageSize)"}
                <br />
                {".then(this.querySuccess)"}
                <br />
                {".catch(serviceHelper.onGlobalError);"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"updateQueryState = (query) => {"}
                <br />
                {"this.setState((prevState) => {"}
                <br />
                {"return { ...prevState, search: query };"}
                <br />
                {"});"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"querySuccess = (response) => {"}
                <br />
                {'_logger("Successful query", response.item.pagedItems);'}
                <br />
                {"this.onSuccessGet"}
                {this.state.formData.widgetName}
                {"s(response);"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"determineSearch = () => {"}
                <br />
                {"if (this.state.search === null) {"}
                <br />
                {"this.request"}
                {this.state.formData.widgetName}
                {"s();"}
                <br />
                {"} else {"}
                <br />
                {"this.queryCheck(this.state.search);"}
                <br />
                {"}"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"onPaginationChange = (pageSelected, pagesize) => {"}
                <br />
                {'_logger("Current:", pageSelected, "pagesize:", pagesize);'}
                <br />
                {"this.setState("}
                <br />
                {"(prevState) => {"}
                <br />
                {"return { ...prevState, currentPage: pageSelected };"}
                <br />
                {"},"}
                <br />
                {"() => this.determineSearch()"}
                <br />
                {");"}
                <br />
                {"};"}
                <br />
                {"//"}
                <br />
                {"render() {"}
                <br />
                {"return ("}
                <br />
                {"<React.Fragment>"}
                <br />
                {"<"}
                {this.state.formData.widgetName}
                {"Search"}
                <br />
                {"currentPage={this.state.currentPage}"}
                <br />
                {"pageSize={this.state.pageSize}"}
                <br />
                {"queryCheck={this.queryCheck}"}
                <br />
                {"/>"}
                <br />
                {"{this.state.mapped"}
                {this.state.formData.widgetName}
                {"s}"}
                <br />
                {"<Pagination"}
                <br />
                {"current={this.state.currentPage}"}
                <br />
                {"pageSize={this.state.pageSize}"}
                <br />
                {"total={this.state.total"}
                {this.state.formData.widgetName}
                {"s}"}
                <br />
                {"onChange={this.onPaginationChange}"}
                <br />
                {"/>"}
                <br />
                {"</React.Fragment>"}
                <br />
                {");"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export default "}
                {this.state.formData.widgetName}
                {"s;"}
                <br />
              </code>
            </pre>
          </div>
        </div>
        <div className="box col">
          <button className="code-title">REACT CARD</button>
          <div className="code-section">
            <pre>
              <code>
                {'import React, { Component } from "react";'}
                <br />
                {"import "}
                {this.state.formData.widgetName}
                {'Modal from "./'}
                {this.state.formData.widgetName}
                {'Modal";'}
                <br />
                {'import { Button } from "reactstrap";'}
                <br />
                {""}
                <br />
                {"class "}
                {this.state.formData.widgetName}
                {"Card extends Component {"}
                <br />
                {""}
                <br />
                {"state = {"}
                <br />
                {"isOpen: false,"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"toggleModal = () => {"}
                <br />
                {"this.setState((prevState) => {"}
                <br />
                {"return {"}
                <br />
                {"isOpen: !prevState.isOpen,"}
                <br />
                {"};"}
                <br />
                {"});"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"editButtonPressed = () => {"}
                <br />
                {"this.props.onEdit"}
                {this.state.formData.widgetName}
                {"Request(this.props."}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"};"}
                <br />
                {"deleteButtonPressed = () => {"}
                <br />
                {"this.props.onDelete"}
                {this.state.formData.widgetName}
                {"Request(this.props."}
                {this.state.formData.widgetName}
                {");"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"render() {"}
                <br />
                {"return ("}
                <br />
                {"<React.Fragment key={this.props."}
                {this.state.formData.widgetName}
                {".id}>"}
                <br />
                {"<div key={this.props."}
                {this.state.formData.widgetName}
                {'.id} className="card col-3 '}
                {this.state.formData.widgetName}
                {'card">'}
                <br />
                {'<div className="card-body">'}
                <br />
                {this.state.cardTextArray}
                {'<div className="buttons">'}
                <br />
                {'<div className="button-left">'}
                <br />
                {"<button"}
                <br />
                {"onClick={this.editButtonPressed}"}
                <br />
                {"name={this.props."}
                {this.state.formData.widgetName}
                {".id}"}
                <br />
                {'className="edit btn btn-primary"'}
                <br />
                {">"}
                <br />
                {"Edit"}
                <br />
                {"</button>"}
                <br />
                {"</div>"}
                <br />
                {""}
                <br />
                {'<div className="button-right">'}
                <br />
                {"<button"}
                <br />
                {"onClick={this.deleteButtonPressed}"}
                <br />
                {'className="delete btn btn-danger"'}
                <br />
                {">"}
                <br />
                {"Delete"}
                <br />
                {"</button>"}
                <br />
                {"</div>"}
                <br />
                {'<div className="'}
                {this.state.formData.widgetName}
                {'-modal">'}
                <br />
                {
                  '<Button outline color="secondary" onClick={this.toggleModal}>'
                }
                <br />
                {this.state.formData.widgetName}
                {" Details"}
                <br />
                {"</Button>"}
                <br />
                {""}
                <br />
                {"<"}
                {this.state.formData.widgetName}
                {"Modal"}
                <br />
                {"isOpen={this.state.isOpen}"}
                <br />
                {"toggleModal={this.toggleModal}"}
                <br />
                {this.state.formData.widgetName}
                {"={this.props."}
                {this.state.formData.widgetName}
                {"}"}
                <br />
                {"/>"}
                <br />
                {"</div>"}
                <br />
                {"</div>"}
                <br />
                {"</div>"}
                <br />
                {"</div>"}
                <br />
                {"</div>"}
                <br />
                {"</React.Fragment>"}
                <br />
                {");"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export default "}
                {this.state.formData.widgetName}
                {"Card;"}
                <br />
              </code>
            </pre>
          </div>
        </div>
        <div className="box col">
          <button className="code-title">REACT MODAL(DETAILS)</button>
          <div className="code-section">
            <pre>
              <code>
                {'import React, { Component } from "react";'}
                <br />
                {
                  'import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";'
                }
                <br />
                {""}
                <br />
                {"class "}
                {this.state.formData.widgetName}
                {"Modal extends Component {"}
                <br />
                {""}
                <br />
                {"render() {"}
                <br />
                {"return ("}
                <br />
                {"<React.Fragment>"}
                <br />
                {
                  "<Modal isOpen={this.props.isOpen} toggle={this.props.toggleModal}>"
                }
                <br />
                {"<ModalHeader toggle={this.props.toggleModal}>"}
                <br />
                {"{this.props."}
                {this.state.formData.widgetName}

                <br />
                {"</ModalHeader>"}
                <br />
                {"<ModalBody>"}
                <br />

                {this.state.cardTextArray}
                {"</ModalBody>"}
                <br />
                {"<ModalFooter>"}
                <br />
                {'<Button color="secondary" onClick={this.props.toggleModal}>'}
                <br />
                {"Close"}
                <br />
                {"</Button>"}
                <br />
                {"</ModalFooter>"}
                <br />
                {"</Modal>"}
                <br />
                {"</React.Fragment>"}
                <br />
                {");"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"export default "}
                {this.state.formData.widgetName}
                {"Modal;"}
                <br />
              </code>
            </pre>
          </div>
        </div>
        <div className="box col">
          <button className="code-title">REACT SERVICE</button>
          <div className="code-section">
            <pre>
              <code>
                {'import axios from "axios";'}
                <br />
                {'import debug from "sabio-debug";'}
                <br />
                {"import {"}
                <br />
                {"onGlobalSuccess,"}
                <br />
                {"onGlobalError"}
                <br />
                {'} from "./serviceHelper"'}
                <br />
                {'const _logger = debug.extend("'}
                {this.state.formData.widgetName}
                {'Service");'}
                <br />
                {""}
                <br />
                {"const "}
                {this.state.formData.widgetName}
                {'sUrl = "http://localhost:50000/api/'}
                {this.state.formData.widgetName}
                {'s";'}
                <br />
                {""}
                <br />
                {"export function post"}
                {this.state.formData.widgetName}
                {"(payload) {"}
                <br />
                {'_logger("post '}
                {this.state.formData.widgetName}
                {' firing", payload)'}
                <br />
                {"const config = {"}
                <br />
                {'method: "POST",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {"sUrl,"}
                <br />
                {"data: payload,"}
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export function update"}
                {this.state.formData.widgetName}
                {"(payload, id) {"}
                <br />
                {'_logger("update '}
                {this.state.formData.widgetName}
                {' firing", payload)'}
                <br />
                {"const config = {"}
                <br />
                {'method: "PUT",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {'sUrl+"/"+id,'}
                <br />
                {"data: payload,"}
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export function get"}
                {this.state.formData.widgetName}
                {"s(curentPageIndex, pageSize) {"}
                <br />
                {'_logger("Get '}
                {this.state.formData.widgetName}
                {
                  's firing. Current page index: ",curentPageIndex," and pagesize: ",pageSize)'
                }
                <br />
                {"const config = {"}
                <br />
                {'method: "GET",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {'sUrl+"?pageIndex="+curentPageIndex+"&pageSize="+pageSize,'}
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export function search"}
                {this.state.formData.widgetName}
                {"s(query, curentPageIndex, pageSize) {"}
                <br />
                {'_logger("search '}
                {this.state.formData.widgetName}
                {'s firing", query)'}
                <br />
                {"const config = {"}
                <br />
                {'method: "GET",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {
                  'sUrl+"/search?pageIndex="+curentPageIndex+"&pageSize="+pageSize+"&q="+query,'
                }
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export function delete"}
                {this.state.formData.widgetName}
                {"(id) {"}
                <br />
                {'_logger("delete '}
                {this.state.formData.widgetName}
                {' firing", id)'}
                <br />
                {"const config = {"}
                <br />
                {'method: "PUT",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {'sUrl+"/delete/"+id,'}
                <br />
                {"data: id,"}
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".then(() => id)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"export function get"}
                {this.state.formData.widgetName}
                {"ById(id) {"}
                <br />
                {'_logger("Get '}
                {this.state.formData.widgetName}
                {'s By Id firing. Id:", id)'}
                <br />
                {"const config = {"}
                <br />
                {'method: "GET",'}
                <br />
                {"url: "}
                {this.state.formData.widgetName}
                {'sUrl+"/"+id,'}
                <br />
                {"withCredentials: true,"}
                <br />
                {"crossdomain: true,"}
                <br />
                {"headers: {"}
                <br />
                {'Content-Type: "application/json"'}
                <br />
                {"},"}
                <br />
                {"};"}
                <br />
                {""}
                <br />
                {"return axios(config)"}
                <br />
                {".then(onGlobalSuccess)"}
                <br />
                {".catch(onGlobalError);"}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">C# DOMAIN</button>
          <div className="code-section">
            <pre>
              <code>
                {"using System;"}
                <br />
                {"using System.Collections.Generic;"}
                <br />
                {"using System.Text;"}
                <br />
                {""}
                <br />
                {"namespace Sabio.Models.Domain"}
                <br />
                {"{"}
                <br />
                {"public class "}
                {this.state.formData.widgetName}
                <br />
                {"{"}
                <br />
                {"public int Id { get; set; }"}
                <br />
                {this.state.domainTextArray}
                {"public DateTime DateCreated { get; set; }"}
                <br />
                {"public DateTime DateModified { get; set; }"}
                <br />
                {""}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">C# ADD REQUEST</button>
          <div className="code-section">
            <pre>
              <code>
                {"using System;"}
                <br />
                {"using System.Collections.Generic;"}
                <br />
                {"using System.Text;"}
                <br />
                {""}
                <br />
                {"namespace Sabio.Models.Requests."}
                {this.state.formData.widgetName}
                <br />
                {"{"}
                <br />
                {"public class "}
                {this.state.formData.widgetName}
                {"AddRequest"}
                <br />
                {"{"}
                <br />
                {this.state.domainTextArray}
                {"}"}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">C# SERVICE</button>
          <div className="code-section">
            <pre>
              <code>
                {"using Sabio.Data;"}
                <br />
                {"using Sabio.Data.Providers;"}
                <br />
                {"using Sabio.Models.Domain;"}
                <br />
                {"using Sabio.Models.Requests."}
                {this.state.formData.widgetName}
                {";"}
                <br />
                {"using System;"}
                <br />
                {"using System.Collections.Generic;"}
                <br />
                {"using System.Data;"}
                <br />
                {"using System.Data.SqlClient;"}
                <br />
                {""}
                <br />
                {"namespace Sabio.Services"}
                <br />
                {"{"}
                <br />
                {"public class "}
                {this.state.formData.widgetName}
                {"Service : I"}
                {this.state.formData.widgetName}
                {"Service"}
                <br />
                {"{"}
                <br />
                {""}
                <br />
                {"IDataProvider _data = null;"}
                <br />
                {""}
                <br />
                {"public "}
                {this.state.formData.widgetName}
                {"Service(IDataProvider data)"}
                <br />
                {"{"}
                <br />
                {"_data = data;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public int Add("}
                {this.state.formData.widgetName}
                {"AddRequest model, int userId)"}
                <br />
                {"{"}
                <br />
                {"int id = 0;"}
                <br />
                {'string procName = "[dbo].['}
                {this.state.formData.widgetName}
                {'s_Add]";'}
                <br />
                {""}
                <br />
                {
                  "_data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)"
                }
                <br />
                {"{"}
                <br />
                {""}
                <br />
                {this.state.colAddArray}
                <br />
                {'SqlParameter idOut = new SqlParameter("@Id", SqlDbType.Int);'}
                <br />
                {"idOut.Direction = ParameterDirection.Output;"}
                <br />
                {"col.Add(idOut);"}
                <br />
                {""}
                <br />
                {
                  "}, returnParameters: delegate (SqlParameterCollection returnCollection)"
                }
                <br />
                {"{"}
                <br />
                {'object oId = returnCollection["@Id"].Value;'}
                <br />
                {"Int32.TryParse(oId.ToString(), out id);"}
                <br />
                {"});"}
                <br />
                {"return id;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public void Update("}
                {this.state.formData.widgetName}
                {"UpdateRequest model)"}
                <br />
                {"{"}
                <br />
                {'string procName = "[dbo].['}
                {this.state.formData.widgetName}
                {'s_Update]";'}
                <br />
                {
                  "_data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)"
                }
                <br />
                {"{"}
                <br />
                {""}
                <br />
                {'col.AddWithValue("@Id", model.Id);'}
                <br />
                {this.state.colAddArray}
                {""}
                <br />
                {"},"}
                <br />
                {"returnParameters: null);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public Paged<"}
                {this.state.formData.widgetName}
                {"> GetAllByPagination(int pageIndex, int pageSize)"}
                <br />
                {"{"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {"> pagedResult = null;"}
                <br />
                {""}
                <br />
                {"List<"}
                {this.state.formData.widgetName}
                {"> result = null;"}
                <br />
                {""}
                <br />
                {"int totalCount = 0;"}
                <br />
                {""}
                <br />
                {"_data.ExecuteCmd("}
                <br />
                {"[dbo].["}
                {this.state.formData.widgetName}
                {"s_GetAllPaginated],"}
                <br />
                {
                  "inputParamMapper: delegate (SqlParameterCollection parameterCollection)"
                }
                <br />
                {"{"}
                <br />
                {'parameterCollection.AddWithValue("@pageIndex", pageIndex);'}
                <br />
                {'parameterCollection.AddWithValue("@pageSize", pageSize);'}
                <br />
                {"},"}
                <br />
                {"singleRecordMapper: delegate (IDataReader reader, short set)"}
                <br />
                {"{"}
                <br />
                {this.state.formData.widgetName}{" "}
                {this.state.formData.widgetName.toLowerCase()}
                {" = new "}
                {this.state.formData.widgetName}
                {"();"}
                <br />
                {"int index = 0;"}
                <br />
                {""}
                <br />
                {this.state.formData.widgetName.toLowerCase()}
                {".Id = reader.GetSafeInt32(index++);"}
                <br />
                {this.state.readerArray}
                <br />
                {"if (totalCount == 0)"}
                <br />
                {"{"}
                <br />
                {"totalCount = reader.GetSafeInt32(index++);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"if (result == null)"}
                <br />
                {"{"}
                <br />
                {"result = new List<"}
                {this.state.formData.widgetName}
                {">();"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"result.Add("}
                {this.state.formData.widgetName.toLowerCase()}
                {");"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {");"}
                <br />
                {"if (result != null)"}
                <br />
                {"{"}
                <br />
                {"pagedResult = new Paged<"}
                {this.state.formData.widgetName}
                {">(result, pageIndex, pageSize, totalCount);"}
                <br />
                {"}"}
                <br />
                {"return pagedResult;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public Paged<"}
                {this.state.formData.widgetName}
                {"> QueryPagination(int pageIndex, int pageSize, string query)"}
                <br />
                {"{"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {"> pagedResult = null;"}
                <br />
                {""}
                <br />
                {"List<"}
                {this.state.formData.widgetName}
                {"> result = null;"}
                <br />
                {""}
                <br />
                {"int totalCount = 0;"}
                <br />
                {""}
                <br />
                {"_data.ExecuteCmd("}
                <br />
                {"[dbo].["}
                {this.state.formData.widgetName}
                {"s_SearchPaginated],"}
                <br />
                {
                  "inputParamMapper: delegate (SqlParameterCollection parameterCollection)"
                }
                <br />
                {"{"}
                <br />
                {'parameterCollection.AddWithValue("@pageIndex", pageIndex);'}
                <br />
                {'parameterCollection.AddWithValue("@pageSize", pageSize);'}
                <br />
                {'parameterCollection.AddWithValue("@Q", query);'}
                <br />
                {"},"}
                <br />
                {"singleRecordMapper: delegate (IDataReader reader, short set)"}
                <br />
                {"{"}
                <br />
                {this.state.formData.widgetName}{" "}
                {this.state.formData.widgetName.toLowerCase()}
                {" = new "}
                {this.state.formData.widgetName}
                {"();"}
                <br />
                {"int index = 0;"}
                <br />
                {""}
                <br />
                {this.state.formData.widgetName.toLowerCase()}
                {".Id = reader.GetSafeInt32(index++);"}
                <br />
                {this.state.readerArray}
                {"if (totalCount == 0)"}
                <br />
                {"{"}
                <br />
                {"totalCount = reader.GetSafeInt32(index++);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"if (result == null)"}
                <br />
                {"{"}
                <br />
                {"result = new List<"}
                {this.state.formData.widgetName}
                {">();"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"result.Add("}
                {this.state.formData.widgetName.toLowerCase()}
                {");"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {");"}
                <br />
                {"if (result != null)"}
                <br />
                {"{"}
                <br />
                {"pagedResult = new Paged<"}
                {this.state.formData.widgetName}
                {">(result, pageIndex, pageSize, totalCount);"}
                <br />
                {"}"}
                <br />
                {"return pagedResult;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public "}
                {this.state.formData.widgetName}
                {" Get(int id)"}
                <br />
                {"{"}
                <br />
                {""}
                <br />
                {this.state.formData.widgetName}{" "}
                {this.state.formData.widgetName.toLowerCase()}
                {" = null;"}
                <br />
                {""}
                <br />
                {'string procName = "[dbo].['}
                {this.state.formData.widgetName}
                {'s_GetById]";'}
                <br />
                {
                  "_data.ExecuteCmd(procName, inputParamMapper: delegate (SqlParameterCollection paramsCollection)"
                }
                <br />
                {"{"}
                <br />
                {'paramsCollection.AddWithValue("@Id", id);'}
                <br />
                {"},"}
                <br />
                {"singleRecordMapper: delegate (IDataReader reader, short set)"}
                <br />
                {"{"}
                <br />
                {this.state.formData.widgetName.toLowerCase()}
                {" = new "}
                {this.state.formData.widgetName}
                {"();"}
                <br />
                {"int index = 0;"}
                <br />
                {""}
                <br />
                {this.state.formData.widgetName.toLowerCase()}
                {".Id = reader.GetSafeInt32(index++);"}
                <br />
                {this.state.readerArray}
                {this.state.formData.widgetName.toLowerCase()}
                {".DateCreated = reader.GetSafeDateTime(index++);"}
                <br />
                {this.state.formData.widgetName.toLowerCase()}
                {".DateModified = reader.GetSafeDateTime(index++);"}
                <br />
                {"}"}
                <br />
                {");"}
                <br />
                {""}
                <br />
                {"return "}
                {this.state.formData.widgetName.toLowerCase()}
                {";"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"public void Delete(int id)"}
                <br />
                {"{"}
                <br />
                {'string procName = "[dbo].['}
                {this.state.formData.widgetName}
                {'s_Delete]";'}
                <br />
                {
                  "_data.ExecuteNonQuery(procName, inputParamMapper: delegate (SqlParameterCollection col)"
                }
                <br />
                {"{"}
                <br />
                {'col.AddWithValue("@Id", id);'}
                <br />
                {"},"}
                <br />
                {"returnParameters: null);"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">C# Interface</button>
          <div className="code-section">
            <pre>
              <code>
                {"{"}
                <br />
                {"public interface I"}
                {this.state.formData.widgetName}
                {"Service"}
                <br />
                {"{"}
                <br />
                {"int Add("}
                {this.state.formData.widgetName}
                {"AddRequest model, int userId);"}
                <br />
                {"void Delete(int id);"}
                <br />
                {this.state.formData.widgetName}
                {" Get(int id);"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {"> GetAllByPagination(int pageIndex, int pageSize);"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {
                  "> QueryPagination(int pageIndex, int pageSize, string query);"
                }
                <br />
                {"void Update("}
                {this.state.formData.widgetName}
                {"UpdateRequest model);"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">C# API CONTROLLER</button>
          <div className="code-section">
            <pre>
              <code>
                {"using System;"}
                <br />
                {"using System.Data.SqlClient;"}
                <br />
                {"using Microsoft.AspNetCore.Mvc;"}
                <br />
                {"using Microsoft.Extensions.Logging;"}
                <br />
                {"using Sabio.Models.Domain;"}
                <br />
                {"using Sabio.Models.Requests."}
                {this.state.formData.widgetName}
                {";"}
                <br />
                {"using Sabio.Services;"}
                <br />
                {"using Sabio.Web.Controllers;"}
                <br />
                {"using Sabio.Web.Models.Responses;"}
                <br />
                {""}
                <br />
                {"namespace Sabio.Web.Api.Controllers.Temp"}
                <br />
                {"{"}
                <br />
                {'[Route("api/'}
                {this.state.formData.widgetName.toLowerCase()}
                {'s")]'}
                <br />
                {"[ApiController]"}
                <br />
                {"public class "}
                {this.state.formData.widgetName}
                {"sApiController : BaseApiController"}
                <br />
                {"{"}
                <br />
                {"private I"}
                {this.state.formData.widgetName}
                {"Service _service = null;"}
                <br />
                {"private IAuthenticationService<int> _authService = null;"}
                <br />
                {"public "}
                {this.state.formData.widgetName}
                {"sApiController(I"}
                {this.state.formData.widgetName}
                {"Service service"}
                <br />
                {", ILogger<"}
                {this.state.formData.widgetName}
                {"sApiController> logger"}
                <br />
                {", IAuthenticationService<int> authService) : base(logger)"}
                <br />
                {"{"}
                <br />
                {"_service = service;"}
                <br />
                {"_authService = authService;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpGet("")]'}
                <br />
                {"public ActionResult<ItemResponse<Paged<"}
                {this.state.formData.widgetName}
                {">>> GetPaginated(int pageIndex, int pageSize)"}
                <br />
                {"{"}
                <br />
                {"int code = 200;"}
                <br />
                {"BaseResponse response = null;"}
                <br />
                {""}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {"> list = _service.GetAllByPagination(pageIndex, pageSize);"}
                <br />
                {""}
                <br />
                {"if (list == null)"}
                <br />
                {"{"}
                <br />
                {"code = 404;"}
                <br />
                {'response = new ErrorResponse("Record Not Found");'}
                <br />
                {""}
                <br />
                {"}"}
                <br />
                {"else"}
                <br />
                {"{"}
                <br />
                {"response = new ItemResponse<Paged<"}
                {this.state.formData.widgetName}
                {">> { Item = list };"}
                <br />
                {""}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"code = 500;"}
                <br />
                {"response = new ErrorResponse(ex.Message);"}
                <br />
                {"base.Logger.LogError(ex.ToString());"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"return StatusCode(code, response);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpGet("{id:int}")]'}
                <br />
                {"public ActionResult<ItemResponse<"}
                {this.state.formData.widgetName}
                {">> Get(int id)"}
                <br />
                {"{"}
                <br />
                {"int iCode = 200;"}
                <br />
                {"BaseResponse response = null;"}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {this.state.formData.widgetName}{" "}
                {this.state.formData.widgetName.toLowerCase()}
                {" = _service.Get(id);"}
                <br />
                {""}
                <br />
                {"if ("}
                {this.state.formData.widgetName.toLowerCase()}
                {" == null)"}
                <br />
                {"{"}
                <br />
                {"iCode = 404;"}
                <br />
                {'response = new ErrorResponse("Resource not found");'}
                <br />
                {"}"}
                <br />
                {"else"}
                <br />
                {"{"}
                <br />
                {"response = new ItemResponse<"}
                {this.state.formData.widgetName}
                {"> { Item = "}
                {this.state.formData.widgetName.toLowerCase()}
                {" };"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"catch (SqlException sqlEx)"}
                <br />
                {"{"}
                <br />
                {"iCode = 500;"}
                <br />
                {
                  'response = new ErrorResponse($"SQL Exception Error: {sqlEx.Message}");'
                }
                <br />
                {"base.Logger.LogError(sqlEx.ToString());"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"catch (ArgumentException argEx)"}
                <br />
                {"{"}
                <br />
                {"iCode = 500;"}
                <br />
                {
                  'response = new ErrorResponse($"Argument Exception Error: {argEx.Message}");'
                }
                <br />
                {"base.Logger.LogError(argEx.ToString());"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"iCode = 500;"}
                <br />
                {
                  'response = new ErrorResponse($"Generic Error: {ex.Message}");'
                }
                <br />
                {"base.Logger.LogError(ex.ToString());"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"return StatusCode(iCode, response);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpGet("search")]'}
                <br />
                {"public ActionResult<ItemResponse<Paged<"}
                {this.state.formData.widgetName}
                {
                  ">>> GetSearchPaginated(int pageIndex, int pageSize, string q)"
                }
                <br />
                {"{"}
                <br />
                {"int code = 200;"}
                <br />
                {"BaseResponse response = null;"}
                <br />
                {""}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {"Paged<"}
                {this.state.formData.widgetName}
                {"> list = _service.QueryPagination(pageIndex, pageSize, q);"}
                <br />
                {""}
                <br />
                {"if (list == null)"}
                <br />
                {"{"}
                <br />
                {"code = 404;"}
                <br />
                {'response = new ErrorResponse("Record Not Found");'}
                <br />
                {"}"}
                <br />
                {"else"}
                <br />
                {"{"}
                <br />
                {"response = new ItemResponse<Paged<"}
                {this.state.formData.widgetName}
                {">> { Item = list };"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"code = 500;"}
                <br />
                {"response = new ErrorResponse(ex.Message);"}
                <br />
                {"base.Logger.LogError(ex.ToString());"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"return StatusCode(code, response);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpPost("")]'}
                <br />
                {"public ActionResult<ItemResponse<int>> Add("}
                {this.state.formData.widgetName}
                {"AddRequest model)"}
                <br />
                {"{"}
                <br />
                {"ObjectResult result = null;"}
                <br />
                {""}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {"int userId = _authService.GetCurrentUserId();"}
                <br />
                {"int id = _service.Add(model, userId);"}
                <br />
                {
                  "ItemResponse<int> response = new ItemResponse<int>() { Item = id };"
                }
                <br />
                {"result = Created201(response);"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"}"}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"ErrorResponse response = new ErrorResponse(ex.Message);"}
                <br />
                {"base.Logger.LogError(ex.ToString());"}
                <br />
                {"result = StatusCode(500, response);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {""}
                <br />
                {"return result;"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpPut("{id:int}")]'}
                <br />
                {"public ActionResult<ItemResponse<int>> Update("}
                {this.state.formData.widgetName}
                {"UpdateRequest model)"}
                <br />
                {"{"}
                <br />
                {""}
                <br />
                {"int code = 200;"}
                <br />
                {"BaseResponse response = null;//"}
                <br />
                {""}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {"_service.Update(model);"}
                <br />
                {""}
                <br />
                {"response = new SuccessResponse();"}
                <br />
                {"}"}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"code = 500;"}
                <br />
                {"response = new ErrorResponse(ex.Message);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"return StatusCode(code, response);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {'[HttpPut("delete/{id:int}")]'}
                <br />
                {"public ActionResult<ItemResponse<int>> Delete(int id)"}
                <br />
                {"{"}
                <br />
                {"int code = 200;"}
                <br />
                {"BaseResponse response = null;"}
                <br />
                {""}
                <br />
                {"try"}
                <br />
                {"{"}
                <br />
                {"_service.Delete(id);"}
                <br />
                {""}
                <br />
                {"response = new SuccessResponse();"}
                <br />
                {"}"}
                <br />
                {"catch (Exception ex)"}
                <br />
                {"{"}
                <br />
                {"code = 500;"}
                <br />
                {"response = new ErrorResponse(ex.Message);"}
                <br />
                {"}"}
                <br />
                {""}
                <br />
                {"return StatusCode(code, response); ;"}
                <br />
                {""}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
                {"}"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">
            C# Dependency Injection (just one line)
          </button>
          <div className="code-section">
            <pre>
              <code></code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">
            C# Dependency Injection (one line to add)
          </button>
          <div className="code-section">
            <pre>
              <code>
                {"services.AddSingleton<I"}
                {this.state.formData.widgetName}
                {"Service, "}
                {this.state.formData.widgetName}
                {"Service>();"}
                <br />
              </code>
            </pre>
          </div>
        </div>

        <div className="box col">
          <button className="code-title">SQL</button>
          <div className="code-section">
            <pre>
              <code></code>
            </pre>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Templater;

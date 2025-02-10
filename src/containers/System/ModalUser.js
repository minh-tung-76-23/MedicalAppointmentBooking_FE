import React from "react";
import { useState, Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  InputGroup,
  InputGroupText,
  Input,
  FormGroup,
  Form,
  Label,
} from "reactstrap";
class ModalUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      firstName: "",
      lastName: "",
      address: "",
      phoneNumber: "",
      gender: "1",
      roleId: "R1",
    };
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  handleOnChangeInput = (event, id) => {
    let copyState = { ...this.state };
    copyState[id] = event.target.value;

    this.setState({
      ...copyState,
    });

    // console.log("copyState:", copyState);
    // console.log("event:", event.target.value, id);
  };

  checkValidateInput = () => {
    let isValid = true;
    let arrInput = [
      "email",
      "password",
      "firstName",
      "lastName",
      "address",
      "phoneNumber",
    ];
    for (let i = 0; i < arrInput.length; i++) {
      if (!this.state[arrInput[i]]) {
        isValid = false;
        alert("Missing parameter: " + arrInput[i]);
        break;
      }
    }
    return isValid;
  };

  handleAddNewUser = () => {
    let isValid = this.checkValidateInput();
    if (isValid) {
      // this.props.onAddUser(this.state);
      // this.toggle();
      this.props.createNewUser(this.state);
      // console.log("data modal", this.state);
    }
  };

  render() {
    return (
      <Modal
        isOpen={this.props.isOpen}
        toggle={() => this.toggle()}
        size="lg"
        centered
        className="modal-user-container"
      >
        <Form>
          <ModalHeader toggle={() => this.toggle()}>
            Create a new user
          </ModalHeader>

          <ModalBody>
            <div className="container">
              <div className="form-row mt-3 cut-50">
                <div className="col-md-6 mt-2">
                  <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                      type="email"
                      name="email"
                      id="email"
                      placeholder="with a placeholder"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "email");
                      }}
                      value={this.state.email}
                    />
                  </FormGroup>
                </div>
                <div className="col-md-6 mt-2">
                  <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                      type="password"
                      name="password"
                      id="password"
                      placeholder="password"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "password");
                      }}
                      value={this.state.password}
                    />
                  </FormGroup>
                </div>
              </div>

              <div className="form-row mt-3 cut-50">
                <div className="col-md-6">
                  <div>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupText>First Name</InputGroupText>
                        <Input
                          placeholder="Ex: Minh"
                          onChange={(event) => {
                            this.handleOnChangeInput(event, "firstName");
                          }}
                          value={this.state.firstName}
                        />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupText>Last Name</InputGroupText>
                        <Input
                          placeholder="Ex: Tùng"
                          onChange={(event) => {
                            this.handleOnChangeInput(event, "lastName");
                          }}
                          value={this.state.lastName}
                        />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </div>
              </div>

              <div className="form-row mt-3">
                <div className="col-md-12">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupText>Address</InputGroupText>
                      <Input
                        placeholder="Thai Binh"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "address");
                        }}
                        value={this.state.address}
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
              </div>

              <div className="form-row mt-3 cut-3">
                <div className="col-md-4">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupText>Phone Number</InputGroupText>
                      <Input
                        placeholder="012443543"
                        onChange={(event) => {
                          this.handleOnChangeInput(event, "phoneNumber");
                        }}
                        value={this.state.phoneNumber}
                      />
                    </InputGroup>
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup className="cut-50">
                    <Label for="gender" className="p-2">
                      Gender:
                    </Label>
                    <Input
                      type="select"
                      name="select"
                      id="gender"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "gender");
                      }}
                      value={this.state.gender}
                    >
                      <option value="1">Male</option>
                      <option value="0">Female</option>
                    </Input>
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup className="cut-50">
                    <Label for="role" className="p-2">
                      Role:
                    </Label>
                    <Input
                      type="select"
                      name="select"
                      id="roleId"
                      onChange={(event) => {
                        this.handleOnChangeInput(event, "roleId");
                      }}
                      value={this.state.roleId}
                    >
                      <option value="R1">Admin</option>
                      <option value="R2">Doctor</option>
                      <option value="R3">Patient</option>
                    </Input>
                  </FormGroup>
                </div>
              </div>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button
              color="primary px-3"
              onClick={() => this.handleAddNewUser()}
            >
              Create new user
            </Button>{" "}
            <Button color="secondary px-3" onClick={() => this.toggle()}>
              Cancel
            </Button>
          </ModalFooter>
        </Form>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(ModalUser);

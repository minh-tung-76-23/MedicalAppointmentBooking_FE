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
    this.state = {};
  }

  componentDidMount() {}

  toggle = () => {
    this.props.toggleFromParent();
  };

  render() {
    console.log("check child props", this.props);
    console.log("check child open modal", this.props.isOpen);
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
                        <Input placeholder="Ex: Minh" />
                      </InputGroup>
                    </FormGroup>
                  </div>
                </div>
                <div className="col-md-6">
                  <div>
                    <FormGroup>
                      <InputGroup>
                        <InputGroupText>Last Name</InputGroupText>
                        <Input placeholder="Ex: Tùng" />
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
                      <Input placeholder="Thai Binh" />
                    </InputGroup>
                  </FormGroup>
                </div>
              </div>

              <div className="form-row mt-3 cut-3">
                <div className="col-md-4">
                  <FormGroup>
                    <InputGroup>
                      <InputGroupText>Phone Number</InputGroupText>
                      <Input placeholder="012443543" />
                    </InputGroup>
                  </FormGroup>
                </div>
                <div className="col-md-3">
                  <FormGroup className="cut-50">
                    <Label for="gender" className="p-2">
                      Gender:
                    </Label>
                    <Input type="select" name="select" id="gender">
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
                    <Input type="select" name="select" id="roleId">
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
            <Button color="primary px-3" onClick={() => this.toggle()}>
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

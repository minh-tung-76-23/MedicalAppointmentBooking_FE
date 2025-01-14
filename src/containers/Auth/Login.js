import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
// import * as actions from "../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    //JSX
    return (
      <div className="login-background">
        <div className="login-container">
          <div div className="login-content row">
            <div className="col-12 login-text">Login</div>
            <div className="col-12 form-group">
              <label>Username:</label>
              <input
                type="text"
                className="form-control"
                placeholder="Enter your Username"
              />
            </div>
            <div className="col-12 form-group">
              <label>Password:</label>
              <input
                type="password"
                className="form-control"
                placeholder="Enter your Password"
              />
            </div>

            <div className="col-12 form-group">
              <button
                type="submit"
                className="btn btn-primary"
                // onClick={() => this.props.login()}
              >
                Sign In
              </button>
            </div>

            <div className="col-12 text-center">
              <span>Forgot your Password?</span>
            </div>

            <div className="col-12 btn-connect">
              <a href="" className="btn btn-facebook btn--witch-icon col-6">
                <i className="fa-brands fa-facebook"></i>
                <span>Facebook</span>
              </a>
              <a href="" className="btn btn-google btn--witch-icon col-6">
                <i className="fa-brands fa-google-plus-g"></i>
                <span>Google</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    langue: state.app.language,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    navigate: (path) => dispatch(push(path)),
    adminLoginSuccess: (adminInfo) =>
      dispatch(actions.adminLoginSuccess(adminInfo)),
    adminLoginFail: () => dispatch(actions.adminLoginFail()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);

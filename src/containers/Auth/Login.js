import React, { Component } from "react";
import { connect } from "react-redux";
import { push } from "connected-react-router";

import * as actions from "../../store/actions";
// import * as actions from "../store/actions";
import "./Login.scss";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      isShowPassword: false,
    };
  }

  handleOnChangeUserName = (event) => {
    this.setState({ username: event.target.value });
  };

  handleOnChangePassWord = (event) => {
    this.setState({ password: event.target.value });
  };

  handleLogin = () => {
    console.log(this.state);
  };

  handleShowHidePassWord = () => {
    this.setState({
      isShowPassword: !this.state.isShowPassword,
    });
    console.log(this.state);
  };

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
                value={this.state.username}
                onChange={(event) => this.handleOnChangeUserName(event)}
              />
            </div>
            <div className="col-12 form-group">
              <label>Password:</label>
              <div className="sel-pass">
                <input
                  type={this.state.isShowPassword ? "text" : "password"}
                  className="form-control"
                  placeholder="Enter your Password"
                  onChange={(event) => this.handleOnChangePassWord(event)}
                />
                <span
                  onClick={() => {
                    this.handleShowHidePassWord();
                  }}
                >
                  <i
                    className={
                      this.state.isShowPassword
                        ? "fa-solid fa-eye"
                        : "fa-solid fa-eye-slash"
                    }
                  ></i>
                  {/* <i class="fa-solid fa-eye"></i> */}
                </span>
              </div>
            </div>

            <div className="col-12 form-group">
              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => this.handleLogin()}
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

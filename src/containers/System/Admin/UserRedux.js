import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import { getAllCodeService } from "../../../services/userService";
import { languages } from "../../../utils";
import * as actions from "../../../store/actions";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
        };
    }

    async componentDidMount() {
        // console.log(this.props.getGenderStart());
        this.props.getGenderStart();
        // this.props.dispatch(actions.fetchGenderStart());
        // try {
        //     let res = await getAllCodeService("gender");
        //     console.log("check res: " + res.data);
        //     if (res && res.errCode === 0) {
        //         this.setState({
        //             genderArr: res.data,
        //         });
        //     }
        // } catch (error) {
        //     console.log(error);
        // }
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.genderRedux !== this.props.genderRedux) {
            this.setState({
                genderArr: this.props.genderRedux,
            });
        }
    }

    render() {
        // console.log("check state", this.state);
        let genders = this.state.genderArr;
        let language = this.props.language;
        console.log("Check gender redu:", this.props.genderRedux);
        return (
            <div className="user-redux-container">
                <div className="text-center title">User Redux</div>;
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <h4>
                                <FormattedMessage id="crud-redux.add" />
                            </h4>
                            <form className="row g-3">
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputEmail4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.email" />
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="inputEmail4"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputPassword4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.password" />
                                    </label>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="inputPassword4"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputEmail4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.first-name" />
                                    </label>
                                    <input
                                        type="firstname"
                                        className="form-control"
                                        id="inputFirstName"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputLastName4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.last-name" />
                                    </label>
                                    <input
                                        type="lastname"
                                        className="form-control"
                                        id="inputLastName4"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputAddress4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.address" />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputAddress4"
                                    />
                                </div>
                                <div className="col-md-6">
                                    <label
                                        htmlFor="inputPhoneNumber4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.phone" />
                                    </label>
                                    <input
                                        type="integer"
                                        className="form-control"
                                        id="inputPhoneNumber4"
                                    />
                                </div>

                                <div className="col-md-3">
                                    <label
                                        htmlFor="gender"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.gender" />
                                    </label>
                                    <select
                                        id="inputGender"
                                        className="form-select"
                                    >
                                        {genders &&
                                            genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.id}
                                                    >
                                                        {language ===
                                                        languages.VI
                                                            ? item.valueVi
                                                            : item.valueEn}
                                                    </option>
                                                );
                                            })}
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label
                                        htmlFor="role"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.role" />
                                    </label>
                                    <select id="roleId" className="form-select">
                                        <option value="R1">Admin</option>
                                        <option value="R2">Doctor</option>
                                        <option value="R3">Patient</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label
                                        htmlFor="role"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.position" />
                                    </label>
                                    <select id="roleId" className="form-select">
                                        <option value="Admin">Admin</option>
                                        <option value="R2">Doctor</option>
                                        <option value="R3">Patient</option>
                                    </select>
                                </div>
                                <div className="col-md-3">
                                    <label
                                        htmlFor="inputImage4"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.image" />
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="inputImage4"
                                    />
                                </div>
                                <div className="col-12">
                                    <button
                                        type="submit"
                                        className="btn btn-primary px-4"
                                    >
                                        <FormattedMessage id="crud-redux.submit" />
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        // changeLanguage: (language) =>
        //     dispatch(actions.changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
// import { getAllCodeService } from "../../../services/userService";
import { languages } from "../../../utils";
import * as actions from "../../../store/actions";
import "./UserRedux.scss";
import Lightbox from "react-image-lightbox";
import "react-image-lightbox/style.css";
import TableManage from "./TableManage";
import { ToastContainer, toast } from "react-toastify";

class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            genderArr: [],
            positionArr: [],
            roleArr: [],
            previewImgUrl: "",
            isOpen: false,

            email: "",
            password: "",
            firstName: "",
            lastName: "",
            phoneNumber: "",
            address: "",
            gender: "",
            position: "",
            role: "",
            avatar: "",
        };
    }

    async componentDidMount() {
        // console.log(this.props.getRoleStart);
        this.props.getGenderStart();
        this.props.getPositionStart();
        this.props.getRoleStart();
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
        let arrGender = this.props.genderRedux;
        let arrPosition = this.props.positionRedux;
        let arrRole = this.props.roleRedux;
        if (prevProps.genderRedux !== arrGender) {
            this.setState({
                genderArr: arrGender,
                gender:
                    arrGender && arrGender.length > 0 ? arrGender[0].key : "",
            });
        }
        if (prevProps.positionRedux !== arrPosition) {
            this.setState({
                positionArr: arrPosition,
                position:
                    arrPosition && arrPosition.length > 0
                        ? arrPosition[0].key
                        : "",
            });
        }
        if (prevProps.roleRedux !== arrRole) {
            this.setState({
                roleArr: arrRole,
                role: arrRole && arrRole.length > 0 ? arrRole[0].key : "",
            });
        }

        if (prevProps.usersList !== this.props.usersList) {
            this.setState({
                email: "",
                password: "",
                firstName: "",
                lastName: "",
                phoneNumber: "",
                address: "",
                gender: "",
                position: "",
                role: "",
                avatar: "",
            });
        }
    }

    handleOnchangeImage = (event) => {
        let data = event.target.files;
        let file = data[0];
        console.log(file);
        if (file) {
            let objUrl = URL.createObjectURL(file);
            this.setState({
                previewImgUrl: objUrl,
                avatar: file,
            });
        }
    };

    delUrlImg = (event) => {
        this.setState({
            previewImgUrl: "",
        });
    };

    onChangeInput = (event, id) => {
        let copyState = { ...this.state };
        copyState[id] = event.target.value;
        this.setState({ ...copyState });
    };

    openImg = () => {
        if (!this.state.previewImgUrl) return;
        this.setState({ isOpen: true });
    };

    handleSaveUser = () => {
        let isValid = this.checkValidateInput();
        if (!isValid) return;

        this.props.createNewUser({
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            address: this.state.address,
            phoneNumber: this.state.phoneNumber,
            gender: this.state.gender,
            roleId: this.state.role,
            positionId: this.state.position,
            image: this.state.avatar,
        });
    };

    checkValidateInput = () => {
        let isValid = true;
        let arrCheck = [
            "email",
            "password",
            "firstName",
            "lastName",
            "phoneNumber",
            "address",
        ];
        for (let i = 0; i < arrCheck.length; i++) {
            if (!this.state[arrCheck[i]]) {
                isValid = false;
                toast.error("This input required: " + arrCheck[i]);
                break;
            }
        }
        return isValid;
    };

    render() {
        // console.log("check state", this.state);
        let genders = this.state.genderArr;
        let positions = this.state.positionArr;
        let roles = this.state.roleArr;
        let language = this.props.language;
        let isLoadingGender = this.props.isLoadingGender;
        let {
            email,
            password,
            firstName,
            lastName,
            phoneNumber,
            address,
            gender,
            role,
            position,
            avatar,
        } = this.state;
        return (
            <div className="user-redux-container">
                <div className="text-center title">User Redux</div>;
                <div className="user-redux-body">
                    <div className="container">
                        <div className="row">
                            <h4>
                                <FormattedMessage id="crud-redux.add" />
                            </h4>
                            <div>
                                {isLoadingGender === true
                                    ? "loading-genders"
                                    : ""}
                            </div>
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
                                        onChange={(event) =>
                                            this.onChangeInput(event, "email")
                                        }
                                        value={email}
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
                                        value={password}
                                        onChange={(event) =>
                                            this.onChangeInput(
                                                event,
                                                "password"
                                            )
                                        }
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
                                        value={firstName}
                                        onChange={(event) =>
                                            this.onChangeInput(
                                                event,
                                                "firstName"
                                            )
                                        }
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
                                        value={lastName}
                                        onChange={(event) =>
                                            this.onChangeInput(
                                                event,
                                                "lastName"
                                            )
                                        }
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
                                        value={address}
                                        onChange={(event) =>
                                            this.onChangeInput(event, "address")
                                        }
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
                                        value={phoneNumber}
                                        onChange={(event) =>
                                            this.onChangeInput(
                                                event,
                                                "phoneNumber"
                                            )
                                        }
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
                                        onChange={(event) =>
                                            this.onChangeInput(event, "gender")
                                        }
                                    >
                                        {genders &&
                                            genders.length > 0 &&
                                            genders.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.key}
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
                                    <select
                                        id="roleId"
                                        className="form-select"
                                        onChange={(event) =>
                                            this.onChangeInput(event, "role")
                                        }
                                    >
                                        {roles &&
                                            roles.length > 0 &&
                                            roles.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.key}
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
                                        htmlFor="position"
                                        className="form-label"
                                    >
                                        <FormattedMessage id="crud-redux.position" />
                                    </label>
                                    <select
                                        id="position"
                                        className="form-select"
                                        onChange={(event) =>
                                            this.onChangeInput(
                                                event,
                                                "position"
                                            )
                                        }
                                    >
                                        {positions &&
                                            positions.length > 0 &&
                                            positions.map((item, index) => {
                                                return (
                                                    <option
                                                        key={index}
                                                        value={item.key}
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
                                <div
                                    className="col-md-3 sel-img"
                                    onChange={(event) =>
                                        this.handleOnchangeImage(event)
                                    }
                                >
                                    <div>
                                        <label
                                            htmlFor="inputImage4"
                                            className="form-label"
                                        >
                                            <FormattedMessage id="crud-redux.image" />
                                        </label>
                                        <input
                                            type="file"
                                            className="form-control"
                                            id="inputImage4"
                                            onClick={(event) =>
                                                this.delUrlImg(event)
                                            }
                                            onChange={(event) =>
                                                this.onChangeInput(
                                                    event,
                                                    "avatar"
                                                )
                                            }
                                        />
                                    </div>
                                    <div
                                        className={`preview-img mx-auto ${
                                            this.state.previewImgUrl
                                                ? ""
                                                : "hidden"
                                        }`}
                                        style={{
                                            backgroundImage: `url(${this.state.previewImgUrl})`,
                                        }}
                                        onClick={() => this.openImg()}
                                    ></div>
                                </div>
                                <div className="col-12">
                                    <button
                                        type="button"
                                        className="btn btn-primary px-4 my-3"
                                        onClick={() => this.handleSaveUser()}
                                    >
                                        <FormattedMessage id="crud-redux.submit" />
                                    </button>
                                </div>
                            </form>

                            <TableManage />
                        </div>
                    </div>
                </div>
                {this.state.isOpen === true && (
                    <Lightbox
                        mainSrc={this.state.previewImgUrl}
                        onCloseRequest={() => this.setState({ isOpen: false })}
                    />
                )}
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        language: state.app.language,
        genderRedux: state.admin.gender,
        positionRedux: state.admin.position,
        roleRedux: state.admin.roles,
        isLoadingGender: state.admin.isLoadingGender,
        usersList: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        getGenderStart: () => dispatch(actions.fetchGenderStart()),
        getPositionStart: () => dispatch(actions.fetchPositionStart()),
        getRoleStart: () => dispatch(actions.fetchRoleStart()),
        createNewUser: (data) => dispatch(actions.createNewUser(data)),
        fetchAllUserStart: () => dispatch(actions.fetchAllUserStart()),

        // changeLanguage: (language) =>
        //     dispatch(actions.changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

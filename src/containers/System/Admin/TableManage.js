import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./TableManage.scss";
import {
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
} from "../../../services/userService";
import * as actions from "../../../store/actions";

class TableManage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            arrUsers: [],
            isOpenModal: false,
            isOpenModalEditUser: false,
            userEdit: {},
        };
    }

    async componentDidMount() {
        this.props.fetchAllUserStart();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (prevProps.usersList !== this.props.usersList) {
            this.setState({ arrUsersRedux: this.props.usersList });
        }
    }

    handleDeleteUser = async (user) => {
        console.log(`delete user ${user}`);
        this.props.deleteUser(user.id);
    };

    handleEditUser = (user) => {
        this.setState({ isOpenModalEditUser: true, userEdit: user });
        // console.log("res:", user);
    };

    editUser = async (user) => {
        try {
            let response = await editUserService(user);
            if (response && response.errCode !== 0) {
                alert(response.message);
            } else {
                await this.getAllUsersFormReact();
                this.setState({ isOpenModalEditUser: false });
            }
            // console.log("res", response);
        } catch (error) {
            console.log(error);
        }
    };

    render() {
        // console.log("check all users redux", this.state.arrUsersRedux);
        let arrUsers = this.state.arrUsersRedux;
        return (
            <div className="user-container mb-5">
                <table id="customers">
                    <thead>
                        <tr>
                            <th scope="col">#</th>
                            <th scope="col">Email</th>
                            <th scope="col">First Name</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Address</th>
                            <th scope="col">Phone Number</th>
                            <th scope="col">Gender</th>
                            <th scope="col">RoleId</th>
                            <th scope="col" className="text-center">
                                Action
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {arrUsers &&
                            arrUsers.length > 0 &&
                            arrUsers.map((user, index) => {
                                return (
                                    <tr key={index}>
                                        <td>{user.id}</td>
                                        <td>{user.email}</td>
                                        <td>{user.firstName}</td>
                                        <td>{user.lastName}</td>
                                        <td>{user.address}</td>
                                        <td>{user.phoneNumber}</td>
                                        <td>{user.gender}</td>
                                        <td>{user.roleId}</td>
                                        <td
                                            style={{
                                                display: "flex",
                                                justifyContent: "space-evenly",
                                            }}
                                        >
                                            <button
                                                className="btn btn-sm btn-warning px-3"
                                                onClick={() =>
                                                    this.handleEditUser(user)
                                                }
                                            >
                                                <i className="fa-solid fa-pen-to-square"></i>
                                            </button>
                                            <button
                                                className="btn btn-sm btn-danger px-3 ml-2"
                                                onClick={() =>
                                                    this.handleDeleteUser(user)
                                                }
                                            >
                                                <i className="fa-solid fa-trash"></i>
                                            </button>
                                        </td>
                                    </tr>
                                );
                            })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        usersList: state.admin.users,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        fetchAllUserStart: () => dispatch(actions.fetchAllUserStart()),
        deleteUser: (id) => dispatch(actions.deleteUser(id)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(TableManage);

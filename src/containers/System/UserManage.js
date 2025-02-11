import React, { Component } from "react";
// import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
import "./userManager.scss";
import {
  getAllUsers,
  createNewUserService,
  deleteUserService,
  editUserService,
} from "../../services/userService";
import ModalUser from "./ModalUser";
import ModalEditUser from "./ModalEditUser";
import { emitter } from "../../utils/emitter";

class UserManage extends Component {
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
    await this.getAllUsersFormReact();
  }

  getAllUsersFormReact = async (req, res) => {
    let response = await getAllUsers("All");
    if (response && response.errCode === 0) {
      this.setState(
        {
          arrUsers: response.users,
        },
        () => {
          console.log(this.state.arrUsers);
        }
      );
    }
  };

  handleAddNewUser = () => {
    this.setState({ isOpenModal: true });
  };

  toggleUserModal = () => {
    this.setState({ isOpenModal: !this.state.isOpenModal });
  };

  toggleUserModalEditUser = () => {
    this.setState({ isOpenModalEditUser: !this.state.isOpenModalEditUser });
  };

  createNewUser = async (data) => {
    try {
      let response = await createNewUserService(data);
      if (response && response.errCode !== 0) {
        alert(response.message);
      } else {
        await this.getAllUsersFormReact();
        this.setState({ isOpenModal: false });
        emitter.emit("EVENT_CLEAR_MODAL_DATA");
      }
      console.log("res", response);
    } catch (error) {
      console.log(error);
    }
  };

  handleDeleteUser = async (user) => {
    try {
      let res = await deleteUserService(user.id);
      if (res && res.errCode !== 0) {
        alert(res.message);
      } else {
        await this.getAllUsersFormReact();
        alert("User deleted successfully");
      }
    } catch (error) {
      console.log(error);
    }
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
    let arrUsers = this.state.arrUsers;
    return (
      <div className="user-container">
        <ModalUser
          isOpen={this.state.isOpenModal}
          toggleFromParent={this.toggleUserModal}
          createNewUser={this.createNewUser}
        />
        {this.state.isOpenModalEditUser && (
          <ModalEditUser
            isOpen={this.state.isOpenModalEditUser}
            toggleFromParent={this.toggleUserModalEditUser}
            currentUser={this.state.userEdit}
            editUser={this.editUser}
          />
        )}
        <div className="title text-center">manage user</div>
        <div className="mx-1">
          <button
            className="btn btn-primary mt-2 px-3"
            onClick={() => this.handleAddNewUser()}
          >
            <i class="fa-solid fa-user-plus"></i>
            <span className="px-2">Add New User</span>
          </button>
        </div>
        <div className="user-table mt-2 mx-1">
          <table id="customers">
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
            {arrUsers &&
              arrUsers.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{user.id}</td>
                    <td>{user.email}</td>
                    <td>{user.firstName}</td>
                    <td>{user.lastName}</td>
                    <td>{user.address}</td>
                    <td>{user.phoneNumber}</td>
                    <td>{user.gender == "1" ? "Male" : "Female"}</td>
                    <td>{user.roleId}</td>
                    <td
                      style={{
                        display: "flex",
                        justifyContent: "space-evenly",
                      }}
                    >
                      <button
                        className="btn btn-sm btn-warning px-3"
                        onClick={() => this.handleEditUser(user)}
                      >
                        <i class="fa-solid fa-pen-to-square"></i>
                      </button>
                      <button
                        className="btn btn-sm btn-danger px-3 ml-2"
                        onClick={() => this.handleDeleteUser(user)}
                      >
                        <i class="fa-solid fa-trash"></i>
                      </button>
                    </td>
                  </tr>
                );
              })}
          </table>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(UserManage);

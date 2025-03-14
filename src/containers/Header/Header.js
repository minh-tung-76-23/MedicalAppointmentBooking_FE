import React, { Component } from "react";
import { connect } from "react-redux";

import * as actions from "../../store/actions";
import Navigator from "../../components/Navigator";
import { adminMenu } from "./menuApp";
import "./Header.scss";
import { languages } from "../../utils/constant";
import { FormattedMessage } from "react-intl";

// import { changeLangueApp } from "../../store/actions/appActions";
class Header extends Component {
    changeLangue = (language) => {
        this.props.changeLanguage(language);
    };
    render() {
        const { processLogout, language, userInfo } = this.props;
        return (
            <div className="header-container ">
                {/* thanh navigator */}
                <div className="header-tabs-container">
                    <Navigator menus={adminMenu} />
                </div>
                <div className="flex items-center">
                    {/* thanh language */}
                    <div className="flex items-center change-langue mr-8">
                        <p className="welcome">
                            {" "}
                            <FormattedMessage id="menu.system.welcome" />,{" "}
                            {userInfo && userInfo.firstName && userInfo.lastName
                                ? userInfo.firstName +
                                  " " +
                                  userInfo.lastName +
                                  " !"
                                : " "}
                        </p>
                        <span
                            onClick={() => this.changeLangue(languages.VI)}
                            className={
                                language === languages.VI
                                    ? "language-vi active"
                                    : "language-vi"
                            }
                        >
                            VI
                        </span>
                        <span
                            onClick={() => this.changeLangue(languages.EN)}
                            className={
                                language === languages.EN
                                    ? "language-en active"
                                    : "language-en"
                            }
                        >
                            EN
                        </span>
                    </div>

                    {/* nút logout */}
                    <div
                        className="btn btn-logout"
                        onClick={processLogout}
                        title="Log out"
                    >
                        <i className="fas fa-sign-out-alt"></i>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        userInfo: state.user.userInfo,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        processLogout: () => dispatch(actions.processLogout()),
        changeLanguage: (language) =>
            dispatch(actions.changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

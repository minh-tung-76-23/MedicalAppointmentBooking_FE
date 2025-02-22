import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeHeader.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../utils/constant";
import { changeLangueApp } from "../../store/actions/appActions";

class Header extends Component {
    changeLangue = (language) => {
        this.props.changeLanguage(language);
    };
    render() {
        let language = this.props.language;
        console.log(language);
        return (
            <React.Fragment>
                <div className="home-header-container">
                    <div className="home-header-content">
                        <div className="left-content">
                            <button className="select-menu">
                                <i class="fa-solid fa-bars"></i>
                            </button>
                            <div className="header-logo"></div>
                        </div>

                        <div className="flex center-content justify-center">
                            <div className="flex items-center space-x-4 ml-8">
                                <a className="bg-yellow-500 text-white px-4 py-2 rounded-full">
                                    <FormattedMessage id="home-header.all" />
                                </a>
                                <a href="#" className="text-gray-800">
                                    <FormattedMessage id="home-header.at-home" />
                                </a>
                                <a href="#" className="text-gray-800">
                                    <FormattedMessage id="home-header.at-the-hospital" />
                                </a>
                                <a href="#" className="text-gray-800">
                                    <FormattedMessage id="home-header.live-healthy" />
                                </a>
                            </div>

                            <div className="flex items-center ml-8">
                                <div className="relative">
                                    <input
                                        type="text"
                                        placeholder="Tìm chuyên khoa"
                                        className="pl-10 pr-4 py-2 rounded-full border border-gray-300 focus:outline-none"
                                    />
                                    <i className="fas fa-search absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500"></i>
                                </div>
                            </div>
                        </div>

                        <div className="right-content flex items-center justify-center space-x-4 ml-auto">
                            <div className="flex flex-col items-center item-hover">
                                <i className="fas fa-handshake text-blue-400 text-2xl"></i>
                                <span className="text-blue-400">
                                    <FormattedMessage id="home-header.cooperate" />
                                </span>
                            </div>
                            <div className="flex flex-col items-center item-hover">
                                <i className="fas fa-history text-blue-400 text-2xl"></i>
                                <span className="text-blue-400">
                                    <FormattedMessage id="home-header.appointment" />
                                </span>
                            </div>
                            <div className="flex items-center change-langue">
                                <span
                                    onClick={() =>
                                        this.changeLangue(languages.VI)
                                    }
                                    className={
                                        language === languages.VI
                                            ? "language-vi active"
                                            : "language-vi"
                                    }
                                >
                                    VI
                                </span>
                                <span
                                    onClick={() =>
                                        this.changeLangue(languages.EN)
                                    }
                                    className={
                                        language === languages.EN
                                            ? "language-en active"
                                            : "language-en"
                                    }
                                >
                                    EN
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="home-header-banner">
                    <div className="home-header-banner container mx-auto p-4">
                        <h1 className="text-center font-bold text-black mb-4">
                            <FormattedMessage id="home-header.content" />
                        </h1>
                        <div className="bg-white rounded-lg shadow p-4 flex items-center mb-6">
                            <input
                                type="text"
                                placeholder="Đặt câu hỏi với Trợ lý AI Bệnh viện top đầu"
                                className="flex-grow p-2 text-gray-500 outline-none"
                            />
                            <div className="flex items-center ml-4">
                                <i className="fas fa-home text-gray-500 mr-2"></i>
                                <span className="text-gray-500">
                                    <FormattedMessage id="home-header.sel-hos" />
                                </span>
                            </div>
                            <button className="ml-4">
                                <i className="fas fa-paper-plane text-gray-500"></i>
                            </button>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
                            <div className="bg-blue-300 p-4 rounded-lg">
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques1" />
                                    </span>
                                    <span>+</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques2" />
                                    </span>
                                    <span>+</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques3" />
                                    </span>
                                    <span>+</span>
                                </div>
                            </div>
                            <div className="bg-blue-300 p-4 rounded-lg">
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques4" />
                                    </span>
                                    <span>+</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques5" />
                                    </span>
                                    <span>+</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white py-2">
                                    <span>
                                        <FormattedMessage id="home-header.ques6" />
                                    </span>
                                    <span>+</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

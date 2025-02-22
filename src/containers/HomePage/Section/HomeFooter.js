import React, { Component } from "react";
import { connect } from "react-redux";
import "./HomeFooter.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils/constant";
import { changeLangueApp } from "../../../store/actions/appActions";

class HomeFooter extends Component {
    changeLangue = (language) => {
        this.props.changeLanguage(language);
    };
    render() {
        let language = this.props.language;
        return (
            <div className="section-home-footer">
                <footer className="bg-gray-200 pt-8">
                    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between footer-content">
                        <div className="mb-8 md:mb-0 max-w-xl left-content">
                            <h2 className="font-bold text-lg mb-4">
                                <FormattedMessage id="home-footer.bc-tech" />
                            </h2>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt px-2"></i>
                                <FormattedMessage id="home-footer.address" />
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-briefcase px-2"></i>
                                <FormattedMessage id="home-footer.business-registration" />
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-phone-alt px-2"></i>{" "}
                                <FormattedMessage id="home-footer.hotline" />
                            </p>
                            <p className="mb-2">
                                <i className="fas fa-envelope px-2"></i>{" "}
                                <FormattedMessage id="home-footer.email" />
                            </p>
                            <h2 className="font-bold text-lg mt-4 mb-2">
                                <FormattedMessage id="home-footer.office" />
                            </h2>
                            <p className="mb-2">
                                <i className="fas fa-map-marker-alt px-2"></i>{" "}
                                <FormattedMessage id="home-footer.add-off" />
                            </p>
                            <div className="flex space-x-2 mt-4">
                                <img
                                    src="./images/bo-cong-thuong.svg"
                                    alt="Đã đăng ký bộ công thương"
                                    className="w-17 h-12"
                                />
                                <img
                                    src="./images/bo-cong-thuong.svg"
                                    alt="Đã đăng ký bộ công thương"
                                    className="w-17 h-12"
                                />
                            </div>
                        </div>
                        <div className="mb-8 md:mb-0 center-content">
                            <div className="font-bold text-lg">
                                <img
                                    src="./images/logoBookingCare-removebg-preview.png"
                                    alt="BookingCare"
                                    className="w-40 h-20"
                                />
                            </div>
                            <ul className="text-blue-500">
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li1" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li2" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li3" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li4" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li5" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li6" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li7" />
                                    </a>
                                </li>
                                <li className="mb-2">
                                    <a href="#">
                                        {" "}
                                        <FormattedMessage id="home-footer.li8" />
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="right-content">
                            <h2 className="font-bold text-lg mb-4">
                                <FormattedMessage id="home-footer.partner" />
                            </h2>
                            <div className="flex items-center mb-4">
                                <img
                                    src="./images/093706-hellodoctorlogo.png"
                                    alt="Hello Doctor logo"
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h3 className="font-bold text-xl">
                                        Hello Doctor
                                    </h3>
                                    <p>
                                        <FormattedMessage id="home-footer.sponsor" />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center mb-4">
                                <img
                                    src="./images/082316-logo-bernard.png"
                                    alt="Bernard Healthcare logo"
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h3 className="font-bold text-xl">
                                        Hệ thống y khoa chuyên sâu quốc tế
                                        Bernard
                                    </h3>
                                    <p>
                                        <FormattedMessage id="home-footer.sponsor1" />
                                    </p>
                                </div>
                            </div>
                            <div className="flex items-center">
                                <img
                                    src="./images/064252-doctor-check-2.png"
                                    alt="Doctor Check logo"
                                    className="w-12 h-12 mr-4"
                                />
                                <div>
                                    <h3 className="font-bold text-xl">
                                        Doctor Check - Tầm Soát Bệnh Để Sống Thọ
                                        Hơn
                                    </h3>
                                    <p>
                                        <FormattedMessage id="home-footer.sponsor2" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container mx-auto px-4 mt-8">
                        <p className="text-center mb-4">
                            <i className="fas fa-mobile-alt px-2"></i>{" "}
                            <FormattedMessage id="home-footer.contact" />
                            <a
                                className="text-blue-500 pl-2"
                                href="https://www.facebook.com/share/1EbHe5FzE9/?mibextid=wwXIfr"
                            >
                                <FormattedMessage id="home-footer.name-contact" />
                            </a>
                        </p>
                        <p className="text-center text-gray-500">
                            © 2025 BookingCare
                        </p>
                    </div>
                    <div className="contact-information py-1">
                        <div className="container mx-auto px-4 flex justify-center space-x-4">
                            <a
                                href="https://www.tiktok.com/@minhtung763?is_from_webapp=1&sender_device=pc"
                                className="p-2 hover:bg-sky-900 rounded-3xl"
                            >
                                <i className="fab fa-tiktok text-white text-2xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1EbHe5FzE9/?mibextid=wwXIfr"
                                className="p-2 hover:bg-blue-700 rounded-xl"
                            >
                                <i className="fab fa-facebook text-white text-2xl"></i>
                            </a>
                            <a
                                href="https://www.facebook.com/share/1EbHe5FzE9/?mibextid=wwXIfr"
                                className="p-2 rounded-3xl hover:bg-red-700"
                            >
                                <i className="fab fa-youtube text-white text-2xl"></i>
                            </a>
                        </div>
                    </div>
                </footer>
            </div>
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

export default connect(mapStateToProps, mapDispatchToProps)(HomeFooter);

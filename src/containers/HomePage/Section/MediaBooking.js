/* eslint-disable jsx-a11y/iframe-has-title */
import React, { Component } from "react";
import { connect } from "react-redux";
import "./MediaBooking.scss";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils/constant";
import { changeLangueApp } from "../../../store/actions/appActions";

class MediaBooking extends Component {
    changeLangue = (language) => {
        this.props.changeLanguage(language);
    };
    render() {
        // let language = this.props.language;
        return (
            <div className="section-media-booking">
                <div className="container mx-auto py-10">
                    <h1 className="text-center text-2xl font-semibold mb-8">
                        <FormattedMessage id="home-footer.content-media" />
                    </h1>
                    <div className="flex flex-col lg:flex-row items-center justify-center">
                        <div className="w-full h-50 lg:w-1/2 px-4 mb-8 lg:mb-0">
                            <div>
                                <iframe
                                    className="w-full rounded-3xl"
                                    style={{ height: "350px" }}
                                    src="https://www.youtube.com/embed/FyDQljKtWnI"
                                    frameBorder="0"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                        <div className="w-full lg:w-1/2 px-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://vnexpress.net/bookingcare-ra-mat-tro-ly-ai-4798819.html"
                                target="_blank"
                                rel="VNEXPRESS noreferrer"
                            >
                                <img
                                    src="./images/vnexpress.png"
                                    alt="VNEXPRESS logo"
                                    width="150"
                                    height="50"
                                />
                            </a>
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://suckhoedoisong.vn/dat-lich-kham-benh-tiet-kiem-thong-minh-va-hieu-qua-169153232.htm"
                                target="_blank"
                                rel="SỨC KHỎE & ĐỜI SỐNG noreferrer"
                            >
                                <img
                                    src="./images/suckhoedoisong.png"
                                    alt="SỨC KHỎE & ĐỜI SỐNG logo"
                                    width="150"
                                    height="50"
                                />
                            </a>
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://vietnamnet.vn/nen-tang-dat-lich-kham-online-bookingcare-muon-tang-truong-nguoi-dung-gap-5-lan-nam-2017-i370270.html"
                                target="_blank"
                                rel="VIETNAMNET noreferrer"
                            >
                                <img
                                    src="./images/142415-logo-vnnet.png"
                                    alt="VIETNAMNET logo"
                                    width="150"
                                    height="50"
                                />
                            </a>
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://vtv.vn/video/ca-phe-khoi-nghiep-14-11-2018-334894.htm"
                                target="_blank"
                                rel="VTV1 noreferrer"
                            >
                                <img
                                    src="./images/vtv1.png"
                                    alt="VTV1 logo"
                                    width="150"
                                    height="50"
                                />
                            </a>
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://vtcnews.vn/dat-kham-chuyen-khoa-va-hanh-trinh-ho-tro-cac-benh-vien-qua-tai-ar434101.html"
                                target="_blank"
                                rel="VTCNEWS noreferrer"
                            >
                                <img
                                    src="./images/165432-vtcnewslogosvg.png"
                                    alt="VTCNEWS logo"
                                    width="150"
                                    height="50"
                                />
                            </a>
                            <a
                                className="bg-white p-4 rounded-lg shadow-md flex items-center justify-center hover:scale-105 hover:bg-opacity-90"
                                href="https://dantri.com.vn/nhan-tai-dat-viet/san-pham-nen-tang-dat-kham-booking-care-201908201625624751.htm"
                                target="_blank"
                                rel="DÂN TRÍ noreferrer"
                            >
                                <img
                                    src="./images/110757-dantrilogo.png"
                                    alt="DÂN TRÍ logo"
                                    width="150"
                                    height="50"
                                />
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
        isLoggedIn: state.user.isLoggedIn,
        language: state.app.language,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        changeLanguage: (language) => dispatch(changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(MediaBooking);

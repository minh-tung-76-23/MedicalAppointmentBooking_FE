import React, { Component } from "react";
import { connect } from "react-redux";
import "./Doctor.scss";
// import { FormattedMessage } from "react-intl";
// import { languages } from "../../utils/constant";
// import { changeLangueApp } from "../../store/actions/appActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Doctor extends Component {
    // changeLangue = (language) => {
    //     this.props.changeLanguage(language);
    // };
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 3,
        };
        let language = this.props.language;
        console.log(language);
        return (
            <div className="section-doctor">
                <div className="doctor-content">
                    <div className="doctor-title">
                        <span>Bác sĩ nổi bật</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="doctor-body">
                        <Slider {...settings}>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>BSCKI Nguyễn Thị Huệ </h5>
                                    <span>Sản Phụ khoa</span>
                                </div>
                            </div>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>Bác sĩ Nội trú Nguyễn Duy Sơn </h5>
                                    <span>Tai Mũi Họng</span>
                                </div>
                            </div>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>BSCKI Nguyễn Thị Huệ </h5>
                                    <span>Sản Phụ khoa</span>
                                </div>
                            </div>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>BSCKI Nguyễn Thị Huệ </h5>
                                    <span>Sản Phụ khoa</span>
                                </div>
                            </div>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>BSCKI Nguyễn Thị Huệ </h5>
                                    <span>Sản Phụ khoa</span>
                                </div>
                            </div>
                            <div className="img-custom">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/doctor/143837-bs-nguyen-thi-hue-spk1.jpg"
                                        alt="BSCKI Nguyễn Thị Huệ "
                                    ></img>
                                </div>
                                <div className="text-center text-custom-item">
                                    <h5>BSCKI Nguyễn Thị Huệ </h5>
                                    <span>Sản Phụ khoa</span>
                                </div>
                            </div>
                        </Slider>
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
        // changeLanguage: (language) => dispatch(changeLangueApp(language)),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Doctor);

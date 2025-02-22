import React, { Component } from "react";
import { connect } from "react-redux";
import "./Specialty.scss";
// import { FormattedMessage } from "react-intl";
// import { languages } from "../../utils/constant";
// import { changeLangueApp } from "../../store/actions/appActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Specialty extends Component {
    // changeLangue = (language) => {
    //     this.props.changeLanguage(language);
    // };
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 3,
            slidesToScroll: 2,
        };
        let language = this.props.language;
        console.log(language);
        return (
            <div className="section-specialty">
                <div className="specialty-content">
                    <div className="specialty-title">
                        <span>Khám từ xa</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="specialty-body">
                        <Slider {...settings}>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-tam-ly-tu-xa.png"
                                        alt="Tư vấn tâm lý từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Tư vấn, trị liệu Tâm lý từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/103343-tam-than-tu-xa-1.png"
                                        alt="Sức khỏe tâm thần từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Sức khỏe tâm thần từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-da-lieu-tu--xa.png"
                                        alt="Bác sĩ Da liễu từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Da liễu từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-cxk-tu--xa.png"
                                        alt="Bác sĩ Cơ-Xương-Khớp từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Cơ-Xương-Khớp từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-tieu-hoa-tu--xa.png"
                                        alt="Bác sĩ Tiêu hóa từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Tiêu hóa từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-tim-mach-tu--xa.png"
                                        alt="Bác sĩ Tim mạch từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Tim mạch từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-tai-mui-hong-tu--xa.png"
                                        alt="Bác sĩ Tai-Mũi-Họng từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Tai-Mũi-Họng từ xa
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/special/160245-than-kinh-tu-xa.png"
                                        alt="Bác sĩ Thần kinh từ xa"
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Bác sĩ Thần kinh từ xa
                                </h4>
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

export default connect(mapStateToProps, mapDispatchToProps)(Specialty);

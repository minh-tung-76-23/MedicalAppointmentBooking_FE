import React, { Component } from "react";
import { connect } from "react-redux";
import "./Information.scss";
// import { FormattedMessage } from "react-intl";
// import { languages } from "../../utils/constant";
// import { changeLangueApp } from "../../store/actions/appActions";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
class Information extends Component {
    // changeLangue = (language) => {
    //     this.props.changeLanguage(language);
    // };
    render() {
        let settings = {
            dots: false,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 2,
        };
        let language = this.props.language;
        console.log(language);
        return (
            <div className="section-information">
                <div className="information-content">
                    <div className="information-title">
                        <span>Sống khỏe suốt đời</span>
                        <button>Xem thêm</button>
                    </div>
                    <div className="information-body">
                        <Slider {...settings}>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
                                </h4>
                            </div>
                            <div className="img-custom shadow-sm">
                                <div className="img-custom-item">
                                    <img
                                        className="shadow-sm rounded-2xl"
                                        src="./images/info/114328-tre-sot-tren-38-do-co-nen-uong-ha-sot.jpg"
                                        alt="Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt? "
                                    ></img>
                                </div>
                                <h4 className="text-center text-custom-item">
                                    Giải đáp: Trẻ sốt 38 độ có nên uống hạ sốt?
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

export default connect(mapStateToProps, mapDispatchToProps)(Information);

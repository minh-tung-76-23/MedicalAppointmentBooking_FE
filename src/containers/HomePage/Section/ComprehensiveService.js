import React, { Component } from "react";
import { connect } from "react-redux";
import "./ComprehensiveService.scss";
import iconkhamtuxa from "../../../assets/images/iconkham-tu-xa.png";
import { FormattedMessage } from "react-intl";
import { languages } from "../../../utils/constant";
import { changeLangueApp } from "../../../store/actions/appActions";
class ComprehensiveService extends Component {
    changeLangue = (language) => {
        this.props.changeLanguage(language);
    };

    changePage = (text) => {
        console.log("Toggled:", text);
    };
    render() {
        return (
            <div className="comprehensive-service">
                <div className="w-full max-w-7xl py-4 px-10 mx-auto">
                    <h1 className="text-center font-semibold mb-10">
                        <FormattedMessage id="comprehensive-service.comprehensive-ser" />
                    </h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        {services.map((service, index) => (
                            <ServiceCard
                                key={index}
                                imgSrc={service.imgSrc}
                                alt={service.alt}
                                text={service.text}
                                changePage={this.changePage}
                            />
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

// Component ServiceCard
const ServiceCard = ({ imgSrc, alt, text, changePage }) => {
    return (
        <button
            className="flex items-center p-4 bg-white shadow-lg rounded-xl img-service transform transition duration-300 hover:scale-105 hover:bg-opacity-90 cursor-pointer"
            onClick={() => changePage(text)} // Gọi hàm changePage được truyền qua props
        >
            <img src={imgSrc} alt={alt} className="w-16 h-16 mr-4" />
            <span className="text-xl font-semibold ml-8">{text}</span>
        </button>
    );
};

const services = [
    {
        imgSrc: "./images/iconkham-chuyen-khoa.png",
        alt: "Icon of a hospital building",
        text: (
            <FormattedMessage id="comprehensive-service.specialist-examination" />
        ),
    },
    {
        imgSrc: iconkhamtuxa,
        alt: "Icon of a phone with a medical cross",
        text: (
            <FormattedMessage id="comprehensive-service.remote-examination" />
        ),
    },
    {
        imgSrc: "./images/iconkham-tong-quan.png",
        alt: "Icon of a clipboard with medical notes",
        text: (
            <FormattedMessage id="comprehensive-service.general-examination" />
        ),
    },
    {
        imgSrc: "./images/iconxet-nghiem-y-hoc.png",
        alt: "Icon of a test tube with a medical cross",
        text: <FormattedMessage id="comprehensive-service.medical-test" />,
    },
    {
        imgSrc: "./images/iconsuc-khoe-tinh-than.png",
        alt: "Icon of a head with a medical cross",
        text: <FormattedMessage id="comprehensive-service.mental-health" />,
    },
    {
        imgSrc: "./images/iconkham-nha-khoa.png",
        alt: "Icon of a tooth with a medical cross",
        text: <FormattedMessage id="comprehensive-service.dental-checkup" />,
    },
    {
        imgSrc: "./images/congoi-phau-thuat.png",
        alt: "Icon of a surgical table",
        text: <FormattedMessage id="comprehensive-service.surgery-package" />,
    },
    {
        imgSrc: "./images/thiet-ke-chua-co-ten-3.png",
        alt: "Icon of a glucose meter",
        text: (
            <FormattedMessage id="comprehensive-service.healthy-living-diabetes" />
        ),
    },
    {
        imgSrc: "./images/iconbai-test-suc-khoe2.png",
        alt: "Icon of a test paper",
        text: <FormattedMessage id="comprehensive-service.health-test" />,
    },
    {
        imgSrc: "./images/near-home-01.png",
        alt: "Icon of a house with a medical cross",
        text: (
            <FormattedMessage id="comprehensive-service.healthcare-near-you" />
        ),
    },
];

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

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ComprehensiveService);

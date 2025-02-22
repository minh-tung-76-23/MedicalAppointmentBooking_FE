import React, { Component } from "react";
import { connect } from "react-redux";
import HomeHeader from "./HomeHeader.js";
import Specialty from "./Section/Specialty.js";
import ComprehensiveService from "./Section/ComprehensiveService.js";
import HomeFooter from "./Section/HomeFooter.js";
import MediaBooking from "./Section/MediaBooking.js";
import Doctor from "./Section/Doctor.js";
import Information from "./Section/Information.js";
class HomePage extends Component {
    render() {
        return (
            <div>
                <HomeHeader />
                <ComprehensiveService />
                <Doctor />
                <Specialty />
                <Information />
                <MediaBooking />
                <HomeFooter />
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        isLoggedIn: state.user.isLoggedIn,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);

import React, { Component } from "react";
import { FormattedMessage } from "react-intl";
import { connect } from "react-redux";
class UserRedux extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // initial state
        };
    }

    componentDidMount() {}

    render() {
        return (
            <div className="user-redux-container">
                <div className="text-center title">User Redux</div>;
                <div className="text-center user-redux-body">
                    <div>Thêm mới người dùng</div>
                </div>
                ;
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

export default connect(mapStateToProps, mapDispatchToProps)(UserRedux);

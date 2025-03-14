import actionTypes from "../actions/actionTypes";

const initialState = {
    gender: [],
    roles: [],
    position: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            console.log("Check fetch gender start:", action);
            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            let coppyState = { ...state };
            console.log("Check fetch gender success:", coppyState);
            coppyState.gender = action.data;
            return {
                ...coppyState,
            };
        case actionTypes.FETCH_GENDER_FAIL:
            console.log("Check fetch gender failed:", action);

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default adminReducer;

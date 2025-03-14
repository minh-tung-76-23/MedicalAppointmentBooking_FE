import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoadingGender: false,
    isLoadingRoles: false,
    isLoadingPositions: false,
    gender: [],
    roles: [],
    position: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            console.log("Check fetch gender start:", action);
            return {
                ...copyState,
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            console.log("Check fetch gender success:", action);
            state.gender = action.data;
            state.isLoadingGender = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_FAIL:
            state.gender = [];
            state.isLoadingGender = false;

            console.log("Check fetch gender failed:", action);

            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            console.log("Check fetch position success:", action);
            state.position = action.data;
            state.isLoadingPositions = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_FAIL:
            state.position = [];
            state.isLoadingPositions = false;

            console.log("Check fetch position failed:", action);

            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            console.log("Check fetch role success:", action);
            state.roles = action.data;
            state.isLoadingRoles = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_FAIL:
            state.roles = [];
            state.isLoadingRoles = false;

            console.log("Check fetch role failed:", action);

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default adminReducer;

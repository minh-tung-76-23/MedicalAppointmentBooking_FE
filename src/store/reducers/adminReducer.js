import actionTypes from "../actions/actionTypes";

const initialState = {
    isLoadingGender: false,
    isLoadingRoles: false,
    isLoadingPositions: false,
    gender: [],
    roles: [],
    position: [],
    users: [],
};

const adminReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.FETCH_GENDER_START:
            let copyState = { ...state };
            copyState.isLoadingGender = true;
            return {
                ...copyState,
            };
        case actionTypes.FETCH_GENDER_SUCCESS:
            state.gender = action.data;
            state.isLoadingGender = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_GENDER_FAIL:
            state.gender = [];
            state.isLoadingGender = false;

            // console.log("Check fetch gender failed:", action);

            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_SUCCESS:
            state.position = action.data;
            state.isLoadingPositions = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_POSITION_FAIL:
            state.position = [];
            state.isLoadingPositions = false;

            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_SUCCESS:
            state.roles = action.data;
            state.isLoadingRoles = false;
            return {
                ...state,
            };
        case actionTypes.FETCH_ROLE_FAIL:
            state.roles = [];
            state.isLoadingRoles = false;

            return {
                ...state,
            };

        case actionTypes.FETCH_ALL_USER_SUCCESS:
            state.users = action.users;

            return {
                ...state,
            };

        case actionTypes.FETCH_ALL_USER_FAIL:
            state.users = [];

            return {
                ...state,
            };
        default:
            return state;
    }
};

export default adminReducer;

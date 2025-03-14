const actionTypes = Object.freeze({
    //app
    APP_START_UP_COMPLETE: "APP_START_UP_COMPLETE",
    SET_CONTENT_OF_CONFIRM_MODAL: "SET_CONTENT_OF_CONFIRM_MODAL",
    CHANGE_LANGUAGE: "CHANGE_LANGUAGE",

    // admin
    FETCH_GENDER_START: "FETCH_GENDER_START",
    FETCH_GENDER_SUCCESS: "FETCH_GENDER_SUCCESS",
    FETCH_GENDER_FAIL: "FETCH_GENDER_FAIL",

    FETCH_POSITION_START: "FETCH_POSITION_START",
    FETCH_POSITION_SUCCESS: "FETCH_POSITION_SUCCESS",
    FETCH_POSITION_FAIL: "FETCH_POSITION_FAIL",

    FETCH_ROLE_START: "FETCH_ROLE_START",
    FETCH_ROLE_SUCCESS: "FETCH_ROLE_SUCCESS",
    FETCH_ROLE_FAIL: "FETCH_ROLE_FAIL",

    CREATE_USER_SUCCESS: "CREATE_USER_SUCCESS",
    CREATE_USER_FAIL: "CREATE_USER_FAIL",

    UPDATE_USER_SUCCESS: "UPDATE_USER_SUCCESS",
    UPDATE_USER_FAIL: "UPDATE_USER_FAIL",

    DELETE_USER_SUCCESS: "DELETE_USER_SUCCESS",
    DELETE_USER_FAIL: "DELETE_USER_FAIL",

    FETCH_ALL_USER_SUCCESS: "FETCH_ALL_USER_SUCCESS",
    FETCH_ALL_USER_FAIL: "FETCH_ALL_USER_FAIL",

    //user
    ADD_USER_SUCCESS: "ADD_USER_SUCCESS",
    USER_LOGIN_SUCCESS: "USER_LOGIN_SUCCESS",
    USER_LOGIN_FAIL: "ADMIN_LOGIN_FAIL",
    PROCESS_LOGOUT: "PROCESS_LOGOUT",
});

export default actionTypes;

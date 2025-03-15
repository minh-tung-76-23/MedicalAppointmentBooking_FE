import {
    getAllCodeService,
    createNewUserService,
    getAllUsers,
    deleteUserService,
} from "../../services/userService";
import actionTypes from "./actionTypes";
import { ToastContainer, toast } from "react-toastify";
// export const fetchGenderStart = () => ({
//     type: actionTypes.FETCH_GENDER_START,
// });

export const fetchGenderStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_GENDER_START,
            });
            let res = await getAllCodeService("GENDER");
            if (res && res.errCode === 0) {
                dispatch(fetchGenderSuccess(res.data));
            } else {
                dispatch(fetchGenderFail());
                toast.warning(res.message);
            }
        } catch (error) {
            fetchGenderFail();
            toast.error(error);
        }
    };
};

export const fetchGenderSuccess = (genderData) => ({
    type: actionTypes.FETCH_GENDER_SUCCESS,
    data: genderData,
});

export const fetchGenderFail = () => ({
    type: actionTypes.FETCH_GENDER_FAIL,
});

export const fetchPositionStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_POSITION_START,
            });
            let res = await getAllCodeService("position");
            if (res && res.errCode === 0) {
                dispatch(fetchPositionSuccess(res.data));
            } else {
                dispatch(fetchPositionFail());
                toast.warning(res.message);
            }
        } catch (error) {
            fetchPositionFail();
            toast.error(error);
        }
    };
};

export const fetchPositionSuccess = (positionData) => ({
    type: actionTypes.FETCH_POSITION_SUCCESS,
    data: positionData,
});

export const fetchPositionFail = () => ({
    type: actionTypes.FETCH_POSITION_FAIL,
});

export const fetchRoleStart = () => {
    return async (dispatch, getState) => {
        try {
            dispatch({
                type: actionTypes.FETCH_ROLE_START,
            });
            let res = await getAllCodeService("role");
            if (res && res.errCode === 0) {
                dispatch(fetchRoleSuccess(res.data));
            } else {
                dispatch(fetchRoleFail());
                toast.warning(res.message);
            }
        } catch (error) {
            fetchRoleFail();
            toast.error(error);
        }
    };
};

export const fetchRoleSuccess = (roleData) => ({
    type: actionTypes.FETCH_ROLE_SUCCESS,
    data: roleData,
});

export const fetchRoleFail = () => ({
    type: actionTypes.FETCH_ROLE_FAIL,
});

export const createNewUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await createNewUserService(data);
            console.log("check value ", res);
            if (res && res.errCode === 0) {
                toast.success("User created successfully!");
                dispatch(createNewUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(createNewUserFailed());
                toast.warning(res.message);
            }
        } catch (error) {
            createNewUserFailed();
            toast.warning(error);
        }
    };
};

export const createNewUserSuccess = () => ({
    type: actionTypes.CREATE_USER_SUCCESS,
});
export const createNewUserFailed = () => ({
    type: actionTypes.CREATE_USER_FAIL,
});

export const fetchAllUserStart = () => {
    return async (dispatch, getState) => {
        try {
            let res = await getAllUsers("All");
            if (res && res.errCode === 0) {
                dispatch(fetchAllUserSuccess(res.users.reverse()));
                // console.log("get user success: ", res.users);
            } else {
                dispatch(fetchAllUserFail());
                toast.warning(res.message);
            }
        } catch (error) {
            fetchAllUserFail();
            toast.warning(error);
        }
    };
};

export const fetchAllUserSuccess = (data) => ({
    type: actionTypes.FETCH_ALL_USER_SUCCESS,
    users: data,
});

export const fetchAllUserFail = () => ({
    type: actionTypes.FETCH_ALL_USER_FAIL,
});

export const deleteUser = (data) => {
    return async (dispatch, getState) => {
        try {
            let res = await deleteUserService(data);
            // console.log("check value ", res);
            if (res && res.errCode === 0) {
                toast.success("User deleted successfully");
                dispatch(deleteUserSuccess());
                dispatch(fetchAllUserStart());
            } else {
                dispatch(deleteUserFailed());
                toast.warning(res.message);
            }
        } catch (error) {
            deleteUserFailed();
            toast.warning(error);
        }
    };
};

export const deleteUserSuccess = () => ({
    type: actionTypes.DELETE_USER_SUCCESS,
});
export const deleteUserFailed = () => ({
    type: actionTypes.DELETE_USER_FAIL,
});

import axios from "../axios";

const handleLogin = (email, password) => {
    return axios.post("/api/login", { email, password });
};

const getAllUsers = (inputId) => {
    return axios.get(`/api/get-all-users?id=${inputId}`);
};

const createNewUserService = (data) => {
    return axios.post("/api/create-new-user", data);
};

const deleteUserService = (userId) => {
    return axios.delete("/api/del-user", {
        data: {
            id: userId,
        },
    });
};

const getAllCodeService = (inputType) => {
    return axios.get(`/api/allcode?type=${inputType}`);
};

const editUserService = (data) => {
    return axios.put("/api/edit-user", data);
};

export {
    handleLogin,
    getAllUsers,
    createNewUserService,
    deleteUserService,
    editUserService,
    getAllCodeService,
};

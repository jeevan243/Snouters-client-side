import { ADMIN_AUTH, USER_AUTH } from "./actionType";

const initState = {
    user_status: false,
    admin_status: false
}

export const authReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADMIN_AUTH:
            return { store, user_status: payload };
        case USER_AUTH:
            return { store, admin_status: payload };
        default:
            return store;
    }
}
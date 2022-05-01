import { USER_AUTH } from "./actionType";

const initState = {
    user_status: false,
}

export const authReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case USER_AUTH:
            return { ...store, user_status: payload };
        default:
            return store;
    }
}
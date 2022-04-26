import { ADMIN_AUTH, USER_AUTH } from "./actionType";

export const userAuthStatus = (payload) => ({ type: USER_AUTH, payload: payload })
export const adminAuthStatus = (payload) => ({ type: ADMIN_AUTH, payload: payload })
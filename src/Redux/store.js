import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { petDataReducer } from "./pet_boarding/reducer";


const roodReducer = combineReducers({
    auth: authReducer,
    petData: petDataReducer
})

// const thunk = (store) => (next) => (action) => {
//     if (typeof action === "function") return action(store.dispatch)
//     next(action);
// }

export const store = legacy_createStore(roodReducer, applyMiddleware(thunk))
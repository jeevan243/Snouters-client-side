import { combineReducers, legacy_createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { authReducer } from "./auth/reducer";
import { petDataReducer } from "./pet_boarding/reducer";



const roodReducer = combineReducers({
    auth: authReducer,
    petData: petDataReducer
})


export const store = legacy_createStore(roodReducer, applyMiddleware(thunk))
import { ADD_PET_DATA } from "./actionType"

const initState = {
    petData: []
}

export const petDataReducer = (store = initState, { type, payload }) => {
    switch (type) {
        case ADD_PET_DATA:
            return { ...store, petData: payload }
        default:
            return store
    }
}
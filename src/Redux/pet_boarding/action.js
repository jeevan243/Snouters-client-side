import axios from "axios";
// import { USER_AUTH } from "../auth/actionType";
// import { userAuth } from "../auth/action";
import { ADD_PET_DATA } from "./actionType";

const API = "https://snouters-server-side.herokuapp.com/pets/all"

export const petData = (payload) => ({ type: ADD_PET_DATA, payload: payload })
// export const userAuth = (payload) = ({ type: USER_AUTH, payload: payload })


export const getApiData = (payload = "", type = "") => (dispatch) => {
        // dispatch(userAuth(true))
    axios.get(API).then(({ data }) => {
        if (type == "city") {
            data = data.filter((e) => {
                if (payload == e.city) {
                    return e;
                }
            });

            dispatch(petData(data));
        }
        else if (type == "verified") {
            data = data.filter((e) => {
                if (payload == e.verified) {
                    return e;
                }
            });
            dispatch(petData(data));
        }
        else {
            dispatch(petData(data));
        }

    }).catch((er) => {
        console.log({ error: er.message })
    });
};

//Sorting
export const handleByPriceAsc = () => (dispatch) => {
    console.log("here")
    axios.get(`${API}/sort1`).then((res) => {
        dispatch(petData(res.data));

    });
};

export const handleByPriceDsc = () => (dispatch) => {
    axios.get(`${API}/sort-1`).then((res) => {
        dispatch(petData(res.data));
    });
};

export const handleByRatingAsc = () => (dispatch) => {
    axios.get(`${API}/rating1`).then((res) => {
        dispatch(petData(res.data));
    });
};

export const handleByRatingDsc = () => (dispatch) => {
    axios.get(`${API}/rating-1`).then((res) => {
        dispatch(petData(res.data));
    });
};



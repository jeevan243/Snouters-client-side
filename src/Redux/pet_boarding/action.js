import axios from "axios";
import { ADD_PET_DATA } from "./actionType";

export const petData = (payload) => ({ type: ADD_PET_DATA, payload: payload })



export const getApiData = () => (dispacth) => {
    axios.get("https://snouters-server-side.herokuapp.com/pets/all").then((res) => {
        console.log("thunk", res.data)
        dispacth(petData(res.data));
        // setCountryselect(res.data);
    });
};

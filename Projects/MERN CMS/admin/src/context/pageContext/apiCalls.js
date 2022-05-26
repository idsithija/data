import axios from "axios";
import { createPageFailure, createPageStart, createPageSuccess, getPagesFailure, getPagesStart, getPagesSuccess } from "./PageActions";

export const getPages = async (dispatch) => {
        dispatch(getPagesStart());
    try{
        const res = await axios.get("pages", {
            headers: { token: "Test " + JSON.parse(localStorage.getItem('user')).accessToken,
        },
        });
        dispatch(getPagesSuccess(res.data));
    }catch(err){
        dispatch(getPagesFailure());
    }
};

//create
export const createPage = async (pages, dispatch) => {
    dispatch(createPageStart());
    try {
      const res = await axios.post("pages", pages, {
        headers: {
          token: "Test " + JSON.parse(localStorage.getItem("user")).accessToken,
        },
      });
      dispatch(createPageSuccess(res.data));
    } catch (err) {
      dispatch(createPageFailure());
    }
};
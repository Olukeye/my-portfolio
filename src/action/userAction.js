import axios from "axios";
import { toast } from 'react-toastify';
import { USER_REGISTER_FAIL, USER_REGISTER_REQUEST, USER_REGISTER_SUCCESS } from "../constant/userConstant";

export const register = (name, email, comments) => async (dispatch) => {
    try {
        dispatch({ type: USER_REGISTER_REQUEST });
        const config = {
            headers: {
                "Content-Type": "application/json",
            },
        };

        const { data } = await axios.post(
            "/api/v1/blog/create",
            { user: name, email, comments },
            config
        );

        dispatch({ type: USER_REGISTER_SUCCESS, payload: data });
        toast('🦄 Thanks for reaching out!!!', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });

    } catch (error) {
        console.log(error.response, "ERROR");

        dispatch({
            type: USER_REGISTER_FAIL,
            payload:
                error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message,
        });
    }
};
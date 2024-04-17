import api from "../../utils/api"
import ActionTypes from "../ActionTypes"


export const getRestourants = (restid) => (dispatch) => {

    dispatch({
        type: ActionTypes.REST_LOADING
    });

    const url = restid ? `/restourants/${restid}` : '/restourants';

    api.get(url)
        .then((res) => dispatch({
            type: ActionTypes.REST_SUCCESS,
            payload: res.data
        })).catch((err) => dispatch({
            type: ActionTypes.REST_ERROR,
            payload: err.message,
        }))
}
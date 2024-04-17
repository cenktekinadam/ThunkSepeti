import api from "../../utils/api"
import ActionTypes from "../ActionTypes"

//* THUNK Aksiyonu

const getProducts = (id) => (dispatch) => {

    dispatch({
        type: ActionTypes.PRODUCT_LOADING,

    })

    api.get(`/products?restaurantId=${id}`).then((res) => dispatch({
        type: ActionTypes.PRODUCT_SUCCESS, payload: res.data
    })).catch((err) => dispatch({
        type: ActionTypes.PRODUCT_ERROR, payload: err.message
    }))
}

export default getProducts;

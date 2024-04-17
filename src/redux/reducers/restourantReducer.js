import ActionTypes from "../ActionTypes";


const initialState = {
    isLoading: false,
    error: false,
    restourants: [],

}

const restourantReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.REST_LOADING:
            return { ...state, isLoading: true };
        case ActionTypes.REST_SUCCESS:
            return { ...state, isLoading: false, error: false, restourants: action.payload };
        case ActionTypes.REST_ERROR:
            return { ...state, isLoading: false, error: action.payload };
        default:
            return state;
    }
}

export default restourantReducer
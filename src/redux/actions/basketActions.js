//* 1- SEPETTEKİ ELMANLARI AL


import { v4 } from "uuid";
import ActionTypes from "../ActionTypes"
import api from './../../utils/api'
import axios from "axios";
export const getCart = () => (dispatch) => {
    dispatch({
        type: ActionTypes.CART_LOADING
    })
    api.get(`/cart`).then((res) => dispatch({
        type: ActionTypes.CART_SUCCESS,
        payload: res.data
    })).catch((err) => dispatch({
        type: ActionTypes.CART_ERROR,
        payload: err.message
    }));
}



//* 2- SEPETE YENİ ELEMAN EKLEME
export const addToBasket = (product, rest) => (dispatch) => {
    // a)Sepete eklenecek olan ürünün bilgilerini belirle
    const newItem = {
        id: v4,
        productId: product.id,
        title: product.title,
        photo: product.photo,
        price: product.price,
        restName: rest.name,
        amount: 1,
    };
    console.log(product, rest);
    //* b) elemanın apia ekle
    api.post(`/cart`, newItem)
        //* Başarılı olursa Reducera Haber Ver ve Bildirim gönder
        .then(() =>
            dispatch({
                type: ActionTypes.ADD_TO_CART,
                payload: newItem,
            }))
}



//* 3- SEPETTEKİ ELMANLARI GÜNCELLE (mİKTAR ARTTIRMA-AZALTMA)

export const updateItem = (id, newAmount) => (dispatch) => {
    //apida elemanı güncelle

    api.patch(`/cart/${id}`, { amount: newAmount })
        //* İstek başarılı olursa Reducera haber ver
        .then((res) => {
            console.log(res)
            dispatch({
                type: ActionTypes.UPDATE_CART,
                payload: res.data
            })
        })


}


//* 4-SEPETTEKİ ELMANI KALDIR

export const removeItem = (id) => (dispatch) => {
    api.delete(`/cart/${id}`).then(() =>
        dispatch({
            type: ActionTypes.DELETE_FROM_CART,
            payload: id,
        })
    )
}
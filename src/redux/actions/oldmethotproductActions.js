import axios from "axios"
import api from "../../utils/api"

// Senkron Yapının Kullanımını Main dosyasında uyguladık.
//CArd Bileşeninde aynı yapıyı kullanmak istediğimizde kod tekrarına girdik  Bu kod Tekrarını ve karmaşanın önüne redux-thunk ile geçtik
export const setLoading = () => ({
    type: 'SET_LOADİNG',
})
export const setProducts = (payload) => ({
    type: 'SET_PRODUCTS',
    payload,
})
export const setError = (payload) => ({
    type: 'SET_ERROR',
    payload,
})

//!Redux thunkın neye çözüm oldugunu belirtmek için  api isteklerini mainjsx Bileşeninde yaptım Ancak Card bileşeninde de aynı işleme ihtiyaç duyuldugunun ve kod tekrarının oldugunu farkettim.
//! Asenkron yapı ile redux-thunk aksiyonu oluşşturma
//? Ürün Verilerini store aktaran aksiyon
export const getProducts = () => {
    //Asenkron bir yapı ancak fonksiyonun içerisinde asenkron bir fonkiyon return edilerek oluşturulur.APidan gelen verileri daima thunk middleware ile store aktarmalıyız.
    return async (dispatch) => {
        dispatch(setLoading());
        axios.get('http://localhost:4000/products').then((res) => dispatch(setProducts(res.data))).catch((err) => dispatch(setError(err.message)));
    }
}
//! Yukarıdaki işlemin aynısını daha kısa kodalarla yapmak mumkün Bunu RestorantActions dosyasında inceleyebiliriz

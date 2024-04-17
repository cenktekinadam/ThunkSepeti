import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import Container from '../components/Container'
import { getCart } from "../redux/actions/basketActions";
import Loader from '../components/Loader'
import Error from '../components/Error'
import CartItem from "../components/CartItem";
import { Link } from "react-router-dom";
const Cart = () => {
    const { isLoading, error, data } = useSelector((store) => store.cart)
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getCart())
    }, [])


    return (

        <Container>
            <h1 className="text-2xl font-bold">Sepet </h1>
            <div>
                {isLoading ? <Loader /> : error
                    ? <Error message={error} /> :
                    data.length === 0 ? <p className="flex flex-col items-center gap-3">Sepette herhangş bir ürün eklenmemiştir <Link to={'/'} className="border p-2 shadow rounded hover:bg-gray-100">Ürün Ekle</Link></p> :
                        data.map((item) => <CartItem key={item.id} item={item} />)}
            </div>
        </Container>

    )
}

export default Cart

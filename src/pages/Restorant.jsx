import { useEffect } from 'react'
import Container from '../components/Container'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import getProducts from '../redux/actions/productActions'
import Loader from '../components/Loader'
import Error from '../components/Error'
import Product from '../components/Product'
import { IoMdFlame } from "react-icons/io";
import { getRestourants } from '../redux/actions/restourantActions'
import RestDetail from '../components/RestDetail'
import { addToBasket, updateItem } from '../redux/actions/basketActions'

const Restorant = () => {

    const { id } = useParams()
    const dispatch = useDispatch()
    const productState = useSelector((store) => store.products)
    const { isLooading, error, restourants } = useSelector((store) => store.restourants)
    useEffect(() => {
        dispatch(getProducts(id));
        dispatch(getRestourants(id));
    }, [])
    //Sepete ürün eklemeyi tetikler
    const handleAdd = (item, found) => {
        //Eleman idsi ile sepette bulunamazsa spete ekleyip bulundugu senaryodada septteki item amount arttır
        found ? dispatch(updateItem(found.id, found.amount + 1)) :
            dispatch(addToBasket(item, restourants))

    }
    return (
        <div>
            <div className='shadow'>
                <Container>
                    <h1>{isLooading ? <Loader /> : !error && <RestDetail data={restourants} />}</h1>
                </Container>
                <hr />
            </div>
            <Container>
                <div className='mb-6'>
                    <h2 className=' flex gap-2 items-center font-bold text-2xl'>
                        <IoMdFlame className='text-red-500' />
                        Popüler
                    </h2>
                    <p className='text-gray-600'>Restoranın en çok tercih edilen ürünleri</p>
                </div>

                <div className='grid grid-cols-1 lg:grid-cols-2 gap-2'>
                    {productState.isLooading ? <Loader /> : productState.error ? <Error message={productState.error} /> : (productState.products.map((item) => <Product key={item.id} item={item} handleAdd={handleAdd} />))}
                </div>
            </Container>
        </div>
    )
}

export default Restorant
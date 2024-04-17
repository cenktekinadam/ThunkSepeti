import { LuPlus } from "react-icons/lu";
import { useSelector } from 'react-redux';


const Product = ({ item, handleAdd }) => {

    const { data } = useSelector((store) => store.cart)

    const found = data.find((i) => i.productId === item.id)
    console.log(found);
    return (
        <div className='product-card border shadow p-3 rounded-lg  hover:bg-red-100 hover:scale-[1.02] transition duration-300 cursor-pointer'>
            <div className='flex flex-col justify-between
           '>
                <div>
                    <h1 className='text-xl'>{item.title}</h1>
                    <p className='text-gray-500'>{item.desc}</p>
                </div>
                <p className='text-lg font-semibold '>{item.price}</p>
            </div>
            <div className='relative'>
                <img className='rounded-md' width={115} height={115} src={item.photo} />
                <button onClick={() => handleAdd(item, found)} className='absolute end-2 bottom-2 bg-white rounded-full p-1 hover:bg-red-100'>
                    {found ? <span>{found.amount}</span> : <LuPlus className='text-xl' />}
                </button>
            </div>
        </div>
    )
}

export default Product;
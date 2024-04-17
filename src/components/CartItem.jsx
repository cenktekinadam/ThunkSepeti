import { IoTrash } from "react-icons/io5";
import { FaPlus, FaMinus } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { updateItem, removeItem } from "../redux/actions/basketActions";
const CartItem = ({ item }) => {

    const dispatch = useDispatch()

    const handleIncrease = () => {
        dispatch(updateItem(item.id, item.amount + 1))
    };
    const handleDeccrease = () => {
        item.amount > 1
            ? dispatch(updateItem(item.id, item.amount - 1))
            : dispatch(removeItem(item.id))

    };
    return (
        <div className=' flex gap-4 border mb-10 rounded-lg p-4'>
            <img className='w-[115px] rounded-lg' src={item.photo} alt="" />
            <div className='flex flex-col w-full  justify-between'>
                <h3 className='text-xl text-red-500 font-semibold'>{item.title}</h3>
                <p className='text-gray-500'>{item.restaurantName}</p>

                <div className='flex justify-between'>
                    <p className='font-semibold'>{item.price} TL</p>

                    <div className="border flex items-center rounded-xl">
                        <button onClick={handleDeccrease} className="p-3 text-lg hover:bg-red-200 transition text-red-500">{item.amount > 1 ? <FaMinus /> : <IoTrash />}</button>
                        <span className="text-lg">{item.amount}</span>
                        <button onClick={handleIncrease} className="p-3 text-lg text-red-500 hover:bg-red-200 transition"><FaPlus /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CartItem
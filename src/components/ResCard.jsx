import React from 'react'
import { FaClock } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import { MdOutlineDeliveryDining } from "react-icons/md";
import { Link } from 'react-router-dom';

const ResCard = ({ data }) => {

    return (

        <Link to={`/restourants/${data.id}`} className='shadow rounded-lg overflow-hidden hover:bg-gray-200 cursor-pointer hover:shadow-lg'>
            <img className='w-full object-contain' src={data.photo} alt={data.name} />
            <div className='p-3'>
                <div className='flex justify-between '>
                    <h3 className='font-semibold text-xl'>{data.name}</h3>

                    <p className='flex items-center gap-2'><FaStar className='text-red-500' />{data.rating}</p>
                </div>

                <p className='flex gap-4 text-sm my-2 text-gray-500'>
                    <span>{data.minPrice}Tl Minimum</span>
                    <span>Kategori</span>
                </p>
                <div>
                    <div className='flex items-center gap-2 font-semibold'>
                        <FaClock />
                        <span>{data.estimatedDelivery}min</span>

                        {data.isDeliveryFree && (<p className='text-red-500 font-bold text-sm flex gap-2 items-center' ><MdOutlineDeliveryDining className='text-xl' />Ücretsiz</p>)}
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default ResCard;
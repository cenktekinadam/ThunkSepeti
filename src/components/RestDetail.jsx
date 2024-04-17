import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaArrowCircleDown } from "react-icons/fa";
import { BsFillClockFill } from "react-icons/bs";

const RestDetail = ({ data }) => {
    return (
        <div className="flex gap-5">
            <img src={data.photo} className="w-[150px] max-md:w-[100px]: rounded-md" />
            <div className="flex flex-col justify-between" >
                <p className="flex gap-3">
                    <span className="flex items-center gap-2"><FaArrowCircleDown className="text-red-500" />  min{data.minPrice} TL</span>
                    <span className="flex items-center gap-2"><BsFillClockFill className="text-red-500" /> {data.estimatedDelivery} Dk </span>
                </p>
                <h1 className="text-3xl font-semibold max-md:text-2xl">{data.name}</h1>
                <p className="flex items-center gap-2"><MdOutlineStarPurple500 className="text-red-500" /> {data.rating}
                    <a className="text-red-500 font-semibold p-1 rounded hover:bg-red-100 transition" href="#">Yorumları Gör </a>
                </p>
            </div>
        </div>
    )
}

export default RestDetail
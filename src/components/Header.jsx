import { PiBasketLight } from "react-icons/pi";
import Container from "./Container";
import { Link } from "react-router-dom";
const Header = () => {
    return (
        <header className="shadow ">
            <Container design={`flex justify-between items-center`} >
                <Link to={'/'} className="text-red-500 font-bold text-2xl font-mon ">ThunkSepeti</Link>

                <div className="flex items-center gap-3">
                    <button className="border border-red-500 py-1 text-red-500 md:px-3 rounded  hover:bg-red-500 hover:text-white">Giriş Yap</button>
                    <button className="bg-red-500 text-white py-1 text md:px-3 rounded transition hover:brightness-75">Üye ol</button>
                    <Link to={'/cart'} className="hover:bg-red-500 hover:bg-opacity-25 rounded-full p-3"><PiBasketLight className="text-red-500 text-xl" /></Link>
                </div>
            </Container>
        </header >
    )
}

export default Header
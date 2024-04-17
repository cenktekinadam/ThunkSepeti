import { BiSolidMessageSquareError } from "react-icons/bi";

const Error = ({ message, retry }) => {
    return (<>
        <div className="bg-red-500 gap-3 p-5 rounded flex text-white my-10 align-items-center  justify-center">
            <BiSolidMessageSquareError className="text-5xl  " />
            <div>
                <h2 className="text-center">Üzgünüz Bir Sorun Oluştu!</h2>
                <h3 className="text-center">{message}</h3>
            </div>
        </div>
        <div className="flex justify-center">
            <button onClick={retry} className="border px-5 py-2 font-semibold hover:bg-gr">Tekrar Dene</button>
        </div>
    </>
    )
}

export default Error
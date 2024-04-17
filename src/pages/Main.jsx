import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { getRestourants } from "../redux/actions/restourantActions";
import Container from "../components/Container";
import Loader from "../components/Loader";
import Error from "../components/Error";
import ResCard from "../components/ResCard";

const Main = () => {
    //REstourant verilerine abone ol
    const { isLoading, error, restourants } = useSelector((store) => store.restourants)
    const dispatch = useDispatch();
    const getData = () => {
        dispatch(getRestourants())

    }
    useEffect(() => {
        getData()
    }, [])
    return (
        <Container>
            <h1 className="text-3xl">Tüm Restorantlar</h1>
            <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-5">{isLoading ? <Loader /> :
                error ? <Error message={error} retry={getData} />
                    : (restourants.length > 0 && restourants.map((item) => <div key={item.id} ><ResCard key={item.id} data={item} /></div>))}</div>
        </Container>)
}

export default Main

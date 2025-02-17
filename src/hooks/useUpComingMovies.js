import { useEffect } from "react";
import { options } from "../utils/constants"
import { useDispatch } from "react-redux";
import { addUpComingMovies } from "../utils/movieSlice";

const useUpComingMovies = ()=> {
    const dispatch = useDispatch()

    const getUpComingMovies = async()=> {
        const data = await fetch("https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1", options)
        const json = await data.json();
        dispatch(addUpComingMovies(json.results))

    };
    useEffect(()=> {
        getUpComingMovies();
    }, [])
}
export default useUpComingMovies;
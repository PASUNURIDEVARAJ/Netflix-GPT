import { useEffect } from "react";
import { addTrailerVideo } from "../utils/movieSlice";
import { options } from "../utils/constants";
import { useDispatch } from "react-redux";

const useTrailerVideo =(movieId)=> {
    const dispatch = useDispatch();
    const getMovieTrailer = async ()=> {
      const data = await fetch("https://api.themoviedb.org/3/movie/"+movieId+"/videos?language=en-US", options)
      const json = await data.json();
      console.log(json.results)
      const filterTrailer = json.results.filter((video)=>video.type==="Trailer");
      const trailer = filterTrailer.length ? filterTrailer[0] :json.results[0];
      console.log(trailer)
      dispatch(addTrailerVideo(trailer))
    }
    useEffect(()=> {
      getMovieTrailer();
    },[])
}
export default useTrailerVideo;
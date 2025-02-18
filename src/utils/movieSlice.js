import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
    name:"movies",
    initialState: {
        nowPlayingMovies:null,
        TrailerVideo:null ,
        UpComingMovies : null,
        TopRatedMovies : null,

    },
    reducers:{
        addNowPlayingMovies : (state , action)=> {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies : (state , action)=> {
            state.PopularMovies = action.payload
        },
        addUpComingMovies : (state , action)=> {
            state.UpComingMovies = action.payload
        },
        addTopRatedMovies : (state , action)=> {
            state.TopRatedMovies = action.payload
        },
        
            addTrailerVideo:(state, action)=> {
                state.TrailerVideo=action.payload
            }
        
    }

})
export const{addNowPlayingMovies, addTrailerVideo, 
    addPopularMovies , addUpComingMovies, addTopRatedMovies
    } = movieSlice.actions;
export default movieSlice.reducer;
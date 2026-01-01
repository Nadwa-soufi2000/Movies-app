import type { actionType, MovieObject, State } from "@/types/types-data"
import * as actions from "./Actions"

export const reducer  = (state : State , action : actionType) => 
{
    switch(action.type) {
        case actions.ADD_MOVIE_TO_WATCHLIST:
            return{
                ...state,
                WatchList : [action.payload , ...state.WatchList]
            }
        case actions.REMOVE_MOVIE_FROM_WATCHLIST:
            return{
                ...state,
                WatchList : state.WatchList.filter((movie : MovieObject) => movie.imdbID != action.payload.imdbID)
            }    
        case actions.ADD_MOVIE_TO_WATCHED:
            return{
                ...state,
                WatchList : state.WatchList.filter((movie: MovieObject) => movie.imdbID != action.payload.imdbID),
                Watched : [action.payload , ...state.Watched]
            }    
        case actions.REMOVE_MOVIE_FROM_WATCHED: 
            return{
                 ...state,
                 Watched : state.Watched.filter((movie: MovieObject) => movie.imdbID != action.payload.imdbID),
            }
        case actions.MOVE_TO_WATCHLIST:
            return{
                ...state,
                Watched : state.Watched.filter((movie: MovieObject) => movie.imdbID != action.payload.imdbID),
                WatchList : [action.payload , ...state.WatchList]
            }    
        default:
            return state      
    }
}
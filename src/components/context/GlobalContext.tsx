/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useReducer } from "react";
import { reducer } from "./reducer";
import type { childrenContext, MovieContextType, State } from "@/types/types-data";

const initialState : State = {
    WatchList: [],
    Watched: []
}

export const contextMovies = createContext<MovieContextType>({} as MovieContextType)

export default function GlobalContext({children} : childrenContext)
{
    const[state , dispatch] = useReducer(reducer , initialState)
    return(
       <contextMovies.Provider 
           value={{
           WatchList : state.WatchList,
           Watched : state.Watched,
           MovieAction : dispatch
           }}
        >
           {children}
       </contextMovies.Provider>
    )
}

export const useMovieContext = () =>
{
    return useContext(contextMovies)
}
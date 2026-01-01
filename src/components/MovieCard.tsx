import type { MovieObject } from "@/types/types-data";
import 
    { 
      Card, 
      CardHeader, 
      CardTitle , 
      CardContent , 
      CardFooter, 
      CardDescription
     } from "./ui/card";
import { Button } from "./ui/button";
import { useMovieContext } from "./context/GlobalContext";
import { ADD_MOVIE_TO_WATCHED, ADD_MOVIE_TO_WATCHLIST } from "./context/Actions";
import { useState } from "react";

export default function MovieCard({imdbID , Title , Poster , Year} : MovieObject) 
{
   const {MovieAction} = useMovieContext();
   const[add , setAdd] = useState("")

   const AddToWatched = () =>
   {
      MovieAction({
         type : ADD_MOVIE_TO_WATCHED,
         payload : {imdbID , Title , Poster , Year} 
      })

      setAdd("watched")
   }

   const AddToWatchList = () =>
   {
      MovieAction({
         type : ADD_MOVIE_TO_WATCHLIST,
         payload : {imdbID , Title , Poster , Year} 
      })

      setAdd("watchlist")
   }

    return(
        <Card id={imdbID} className="w-70 hover:scale-[1.08] duration-500 shadow-xl">
          <CardHeader>
            <CardTitle>{Title}</CardTitle>
            <CardDescription>{Year}</CardDescription>
          </CardHeader>
          <CardContent>
             <img src={Poster} alt="image" className="w-full h-70" />
          </CardContent>
          <CardFooter className="flex justify-center gap-3">
             <Button onClick={AddToWatched} disabled={add === "watched" || add === "watchlist"}  variant="default" className="bg-[#21d07a] text-[11px] text-white font-semibold">Add To Watched</Button>
             <Button onClick={AddToWatchList} disabled={ add === "watchlist"} variant="default" className="bg-[#21d07a] text-[10px] text-white font-semibold">Add To WatchList</Button>
          </CardFooter>
       </Card>
    )
}
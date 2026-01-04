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
import 
     {
       Dialog ,
       DialogContent
     } from "./ui/dialog"   
import { Button } from "./ui/button";
import { useMovieContext } from "./context/GlobalContext";
import { ADD_MOVIE_TO_WATCHED, ADD_MOVIE_TO_WATCHLIST } from "./context/Actions";
import { useState } from "react";
import {CheckCircle} from 'lucide-react'

export default function MovieCard({imdbID , Title , Poster , Year} : MovieObject) 
{
   const { MovieAction } = useMovieContext();
   // eslint-disable-next-line @typescript-eslint/no-explicit-any
   const[add , setAdd] = useState<any>("")

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
      <>
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

       <Dialog open={add} onOpenChange={setAdd}>
          <DialogContent className="flex flex-col justify-center items-center gap-4">  
               <CheckCircle className="text-[#21d07a] text-32"/>
               <p className="text-[#032541] font-semibold">{Title} has added successfully To {add}</p>
          </DialogContent>
        </Dialog>
       </>
    )
}
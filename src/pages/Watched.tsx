import { useMovieContext } from "@/components/context/GlobalContext"
import { Card, 
         CardContent, 
         CardDescription, 
         CardFooter, 
         CardHeader, 
         CardTitle 
        } from "@/components/ui/card"
import { EyeOff, X } from "lucide-react"
import {MOVE_TO_WATCHLIST , REMOVE_MOVIE_FROM_WATCHED} from '@/components/context/Actions'
import type { MovieObject } from "@/types/types-data"
export default function WatchedMovies() 
{
    const { Watched , MovieAction } = useMovieContext()
    
    const MoveToWatchList = (movie : MovieObject) =>
    {
       MovieAction({
         type: MOVE_TO_WATCHLIST,
         payload: movie
       })
    }

    const RemoveFromWatched = (movie : MovieObject) =>
    {
         MovieAction({
           type: REMOVE_MOVIE_FROM_WATCHED,
           payload: movie
       })
    }

    return(
       <>
        {
         Watched.length > 0 ?
         <div className="flex flex-wrap items-center justify-center gap-8 w-[80%] my-6 mx-auto">
             {
               Watched.map((item , index) => {
                  return(
                  <Card key={index} id={item.imdbID} className="w-70 hover:scale-[1.08] duration-500 shadow-xl">
                     <CardHeader>
                        <CardTitle>{item.Title}</CardTitle>
                        <CardDescription>{item.Year}</CardDescription>
                     </CardHeader>
                     <CardContent>
                        <img src={item.Poster} alt="image" className="w-full h-70" />
                     </CardContent>
                     <CardFooter className="flex justify-center gap-3">
                           <X onClick={() => RemoveFromWatched(item)} className="w-8 h-8 text-[#21d07a] hover:text-[#095832]" />
                           <EyeOff onClick={() => MoveToWatchList(item)} className="w-8 h-8 text-[#21d07a] hover:text-[#095832]" />
                     </CardFooter>
                  </Card>
                  )
               })
             }
         </div>
         :
         <div className="flex flex-col justify-center items-center gap-4">
           <img src="/search.png" className="md:w-125 md:h-125 sm:w-90 sm:h-90 w-60 h-60"/>
           <p className="text-gray-500 font-bold md:text-[55px] sm:text-[24px] text-[19px]">Add Movies To Watched</p>
        </div>
       }
      </>
    )
}
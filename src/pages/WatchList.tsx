import { ADD_MOVIE_TO_WATCHED, REMOVE_MOVIE_FROM_WATCHLIST } from "@/components/context/Actions";
import { useMovieContext } from "@/components/context/GlobalContext"
import { Card, 
         CardContent, 
         CardDescription, 
         CardFooter, 
         CardHeader, 
         CardTitle
         } from "@/components/ui/card"
import type { MovieObject } from "@/types/types-data";
import { EyeOff, X } from "lucide-react"

export default function WatchList() 
{
    const { WatchList , MovieAction } = useMovieContext();

    const RemoveFromWatchList = (movie : MovieObject) =>
    {
       MovieAction({
         type: REMOVE_MOVIE_FROM_WATCHLIST,
         payload: movie
       })
    }

    const AddToWatched = (movie : MovieObject) => 
    {
       MovieAction({
         type: ADD_MOVIE_TO_WATCHED,
         payload: movie
       })
    }

    return(
      <> 
      {
         WatchList.length > 0 ? 
          <div className="flex flex-wrap items-center justify-center gap-8 w-[80%] my-6 mx-auto">
            {
               WatchList.map((item , index) => {
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
                            <X onClick={() => RemoveFromWatchList(item)} className="w-8 h-8 text-[#21d07a]" />
                            <EyeOff onClick={() => AddToWatched(item)} className="w-8 h-8 text-[#21d07a]" />
                       </CardFooter>
                    </Card>
                  )
               })
            }
        </div>
        :
        <div className="flex flex-col justify-center items-center gap-4">
           <img src="/search.png" className="w-125 h-125"/>
           <p className="text-gray-500 font-bold text-[55px]">Add Movies To WatchList</p>
        </div>
      }
     </>
    )
}
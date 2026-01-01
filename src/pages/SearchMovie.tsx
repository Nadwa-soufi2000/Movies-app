import { Search } from "lucide-react"
import { useEffect, useState } from "react"
import axios from 'axios'
import MovieCard from "@/components/MovieCard"
import type { MovieObject } from "@/types/types-data"

export default function SearchAboutMovies() 
{
    const[movie , setMovie] = useState<string>("")
    const[movies , setMovies] = useState([])

    useEffect(() => {
        try{
          axios.get(`http://www.omdbapi.com/?s=${movie}&apikey=93bb619c`)
          .then((response) =>{
            console.log(response.data)
            setMovies(response.data.Search)
          })
        }catch(err) {
          console.log(err)
        }

    } ,[movie])

    return(
       <div className="w-full">
        <div className="flex w-xl flex-col gap-7 my-10 mx-auto ">
            <h1 className="text-[#032541] text-center font-bold text-[40px]">Search About Movies</h1>
            <div className="flex bg-[#032541] rounded-[10px] pl-3 justify-start h-15 items-center gap-2 shadow-xl w-full outline-none">
                <Search className="text-[20px] text-gray-400"/>
                <input 
                  type="text" 
                  className="text-gray-400 text-[20px] font-medium outline-none w-[70%] h-full bg-[#032541]" 
                  placeholder="Search About Movies..."
                  value={movie}
                  onChange={(e) => setMovie(e.target.value)}
                />
            </div>
         </div>
           
             
            <div className="flex flex-wrap items-center justify-center gap-8 w-[80%] my-2 mx-auto">
               { movies &&
                  movies.map((item : MovieObject , index) => 
                  {
                    return( 
                         <MovieCard 
                           key={index} 
                           id={item.imdbID}
                           title={item.Title} 
                           image={item.Poster}
                           history={item.Year}
                         />
                      ) 
                  })
                }
            </div>
       </div> 
    )
}
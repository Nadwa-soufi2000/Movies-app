import { useMovieContext } from "@/components/context/GlobalContext"
import { Card, 
         CardContent, 
         CardDescription, 
         CardFooter, 
         CardHeader, 
         CardTitle
         } from "@/components/ui/card"
import { Eye, X } from "lucide-react"

export default function WatchList() 
{
    const { WatchList } = useMovieContext()

    return(
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
                            <X className="w-8 h-8 text-[#21d07a]" />
                            <Eye className="w-8 h-8 text-[#21d07a]" />
                       </CardFooter>
                    </Card>
                  )
               })
            }
        </div>
    )
}
import type { MovieData } from "@/types/types-data";
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

export default function MovieCard({id , title , image , history} : MovieData) 
{
    return(
        <Card id={id} className="w-70 hover:scale-[1.08] duration-500">
          <CardHeader>
            <CardTitle>{title}</CardTitle>
            <CardDescription>{history}</CardDescription>
          </CardHeader>
          <CardContent>
             <img src={image} alt="image" className="w-full h-70" />
          </CardContent>
          <CardFooter className="flex jutify-center gap-3">
             <Button variant="default" className="bg-[#21d07a] text-[11px] text-white font-semibold">Add To Watched</Button>
             <Button variant="default" className="bg-[#21d07a] text-[10px] text-white font-semibold">Add To WatchList</Button>
          </CardFooter>
       </Card>
    )
}
import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar()
{
    return(
        <div className="w-full h-20 flex justify-center items-center p-2 bg-[#032541]">
            <ul className="flex justify-center items-center gap-8 w-90">
                <Link to="/watchList" className="text-white text-[20px] hover:text-[#21d07a]">Watched List</Link>
                <Link to="/watched" className="text-white text-[20px] hover:text-[#21d07a]">Watched</Link>
                <Link to="/search">
                   <Button variant="default" className="bg-[#21d07a] text-[20px] font-medium">Search</Button>
                </Link>
            </ul>
        </div>
    )
}
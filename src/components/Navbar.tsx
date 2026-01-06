import { Link } from "react-router-dom";
import { Button } from "./ui/button";

export default function Navbar()
{
    return(
        <div className="w-full h-20 flex justify-center items-center p-2 bg-[#032541]">
            <ul className="flex justify-center items-center gap-8 sm:w-90 w-70">
                <Link to="/watchList" className="text-white sm:text-[20px] text-[12px] hover:text-[#21d07a] font-medium">Watched List</Link>
                <Link to="/watched" className="text-white sm:text-[20px] text-[12px] hover:text-[#21d07a] font-medium">Watched</Link>
                <Link to="/search">
                   <Button variant="default" className="bg-[#21d07a] sm:text-[20px] text-[12px] font-medium">Search</Button>
                </Link>
            </ul>
        </div>
    )
}
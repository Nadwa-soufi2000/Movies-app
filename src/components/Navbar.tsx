import { Button } from "./ui/button";

export default function Navbar()
{
    return(
        <div className="w-full h-20 flex justify-center items-center p-2 bg-[#032541]">
            <ul className="flex justify-center items-center gap-8 w-90">
                <li className="text-white text-[20px]">Watched List</li>
                <li className="text-white text-[20px]">Watched</li>
                <li><Button variant="default" className="bg-[#21d07a] text-[20px] font-medium">Search</Button></li>
            </ul>
        </div>
    )
}
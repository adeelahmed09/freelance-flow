import { Search } from "lucide-react"
import NavLeft from "./NavLeft"

function Nav() {
  return (
    <div className=" w-full lg:h-[20%] sm:h-[90px] sm:flex  hidden ">
      <div className="w-full rounded-2xl flex justify-between items-center px-5 h-full shadow-lg bg-[#F7F7F7]">
        <div
        id="search-bar"
        className="flex items-center gap-1 justify-center"
        >
          <input type="text" placeholder="Search...." className="lg:w-[300px] sm:w-[200px] shadow-lg lg:h-[50px] sm:h-[40px] lg:px-5 sm:px-3 py-0.5 bg-white rounded-full outline-none border-gray-200 border" name="search-input" id="search-input" />
          <button className="bg-[#8F6EFB] px-2 py-1.5 rounded-full">
            <Search color="#f7f7f7" size={24} />
          </button>
        </div>
        <div>
          <NavLeft/>
        </div>
      </div>
    </div>
  )
}

export default Nav

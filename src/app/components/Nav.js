import { Search } from "lucide-react"
import NavLeft from "./NavLeft"

function Nav() {
  return (
    <div className=" w-full lg:h-[120px] sm:h-[90px] ">
      <div className="w-full rounded-2xl flex justify-between items-center px-5 h-full shadow-lg bg-[#F7F7F7]">
        <div
        id="search-bar"
        className="flex items-center gap-1.5 justify-center"
        >
          <input type="text" placeholder="Search...." className="w-[300px] shadow-lg h-[50px] px-5 py-1 bg-white rounded-full outline-none border-gray-200 border" name="search-input" id="search-input" />
          <button className="bg-[#8F6EFB] px-3 py-2.5 rounded-full">
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

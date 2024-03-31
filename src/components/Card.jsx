import React from 'react'
import { FaRegFileAlt } from "react-icons/fa";
import { LuDownload } from "react-icons/lu";

function Card() {
  return (
    <div className="relative h-72 w-60 bg-zinc-900/90 rounded-[45px] py-10 px-8 text-white overflow-hidden">
        <FaRegFileAlt/>
        <p className="text-sm mt-3 leading-tight font-semibold">Lorem ipsum dolor sit amet consectetur adipisicing.</p>
        <div className="absolute bottom-0 left-0 fotter w-full ">
            <div className="flex items-center justify-between   px-8 py-3 mb-3">
           <h5>.4MB</h5>
           <span className="w-7 h-7 bg-zinc-600 rounded-full flex items-center justify-center">  <LuDownload size=".7em" color="#fff"/></span>
        
          </div>
          <div className="tag w-full py-4 bg-green-600 flex items-center justify-center">
            <h3 className="font-semiboldtext-sm ">Download Now</h3>
          </div>

        </div>

    </div>
  )
}

export default Card
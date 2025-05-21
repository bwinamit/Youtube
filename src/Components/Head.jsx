import React from 'react'
import { Menu, Mic, Bell, User } from 'lucide-react'
import { FaYoutube } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'
import { useDispatch, useSelector } from 'react-redux'
import { toggleMenu } from '../Utils/appSlice'
import { useState,useEffect } from 'react'
import { YOUTUBE_SEARCH_API } from '../Utils/Constants'
import { cacheResults } from '../Utils/searchSlice'

const Head = () => {
  const dispatch = useDispatch()
  const [searchQuery, setSearchQuery] =useState("")
  const [suggestions, setSuggestions] = useState([])
  const [showSuggestions, setShowSuggestions] = useState(false)
  const searchCache = useSelector((store) => store.search)

  useEffect(() =>{
   const timer = setTimeout(() => {
    if (searchCache[searchQuery]) {
      setSuggestions(searchCache[searchQuery])
    }
    else{
    getSearchResuslts()
    }
   }, 200); 
    return () => {
      clearTimeout(timer)
    }
  },[searchQuery])

  const getSearchResuslts = async () => {
    const data = await fetch(YOUTUBE_SEARCH_API + searchQuery)
    const json = await data.json()
    console.log(json)
    setSuggestions(json[1])
    dispatch(cacheResults({
      [searchQuery]: json[1],
    }))
  }
  
  const toggleHandler = () => {
    // Logic to toggle the sidebar
    dispatch(toggleMenu())
  }
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      {/* Left Section: Hamburger + YouTube */}
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 cursor-pointer"  
        onClick={toggleHandler}
        />
        <div className="flex items-center gap-1 cursor-pointer">
          <FaYoutube className="text-red-600 w-7 h-7" />
          <span className="text-xl font-bold">YouTube</span>
        </div>
      </div>

      {/* Center Section: Search */}
      <div className="flex items-center w-full max-w-xl">
        <input
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          type="text"
          placeholder="Search"
          onFocus={() => setShowSuggestions(true)}
          onBlur={() => setShowSuggestions(false)}
          className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-r-full">
          <FiSearch className="w-5 h-5" />
        </button>
        <button className="ml-4 p-2 bg-gray-100 rounded-full">
          <Mic className="w-5 h-5" />
        </button>
      </div>
     {showSuggestions && suggestions.length > 0 && (
  <div className="absolute top-[60px] left-1/2 transform -translate-x-1/2 w-full max-w-xl bg-white border border-gray-200 rounded-lg shadow-lg z-50">
    <ul className="max-h-80 overflow-y-auto">
      {suggestions.map((suggestion, index) => (
        <li
          key={index}
          className="flex items-center gap-3 px-4 py-2 hover:bg-gray-100 cursor-pointer text-sm text-gray-700"
        >
          <FiSearch className="w-4 h-4 text-gray-500" />
          {suggestion}
        </li>
      ))}
    </ul>
  </div>
)}



      {/* Right Section: Notification + User */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}

export default Head

import React from 'react'
import { Menu, Mic, Bell, User } from 'lucide-react'
import { FaYoutube } from 'react-icons/fa'
import { FiSearch } from 'react-icons/fi'

const Head = () => {
  return (
    <div className="flex justify-between items-center px-4 py-2 shadow-md bg-white">
      {/* Left Section: Hamburger + YouTube */}
      <div className="flex items-center gap-4">
        <Menu className="w-6 h-6 cursor-pointer" />
        <div className="flex items-center gap-1 cursor-pointer">
          <FaYoutube className="text-red-600 w-7 h-7" />
          <span className="text-xl font-bold">YouTube</span>
        </div>
      </div>

      {/* Center Section: Search */}
      <div className="flex items-center w-full max-w-xl">
        <input
          type="text"
          placeholder="Search"
          className="w-full border border-gray-300 rounded-l-full px-4 py-2 focus:outline-none focus:ring-1 focus:ring-gray-400"
        />
        <button className="bg-gray-100 border border-gray-300 px-4 py-2 rounded-r-full">
          <FiSearch className="w-5 h-5" />
        </button>
        <button className="ml-4 p-2 bg-gray-100 rounded-full">
          <Mic className="w-5 h-5" />
        </button>
      </div>

      {/* Right Section: Notification + User */}
      <div className="flex items-center gap-4">
        <Bell className="w-5 h-5 cursor-pointer" />
        <User className="w-6 h-6 cursor-pointer" />
      </div>
    </div>
  )
}

export default Head

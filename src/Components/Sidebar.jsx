import React from 'react'
import {
  Home,
  Video,
  Flame,
  Radio,
  User,
  Clock
} from 'lucide-react'

const Sidebar = () => {
  return (
    <div className="w-60 p-4 space-y-6 bg-white shadow-md h-screen text-sm font-medium">
      {/* Section 1: Main Navigation */}
      <div className="space-y-4">
        <SidebarItem icon={<Home />} label="Home" />
        <SidebarItem icon={<Flame />} label="Shorts" />
        <SidebarItem icon={<Video />} label="Videos" />
        <SidebarItem icon={<Radio />} label="Live" />
      </div>

      <hr />

      {/* Section 2: Subscriptions */}
      <div className="space-y-4">
        <h4 className="text-gray-600 font-semibold text-xs">Subscriptions</h4>
        <SidebarItem icon={<User />} label="Music Channel" />
        <SidebarItem icon={<User />} label="Tech Explained" />
        <SidebarItem icon={<User />} label="News Today" />
      </div>

      <hr />

      {/* Section 3: Watch Later */}
      <div className="space-y-4">
        <h4 className="text-gray-600 font-semibold text-xs">Watch Later</h4>
        <SidebarItem icon={<Clock />} label="React Basics" />
        <SidebarItem icon={<Clock />} label="Tailwind Crash Course" />
        <SidebarItem icon={<Clock />} label="Live Podcast" />
      </div>
    </div>
  )
}

const SidebarItem = ({ icon, label }) => (
  <div className="flex items-center gap-4 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg">
    <span className="w-5 h-5">{icon}</span>
    <span>{label}</span>
  </div>
)

export default Sidebar

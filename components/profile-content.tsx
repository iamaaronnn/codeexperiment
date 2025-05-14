"use client"

import { Bell, ChevronDown, Clock, LogOut, Moon, Sun, User } from "lucide-react"
import { useTheme } from "./theme-provider"
import { ToggleSwitch } from "./toggle-switch"

export function ProfileContent() {
  const {
    darkMode,
    toggleDarkMode,
    remindersEnabled,
    setRemindersEnabled,
    notificationsEnabled,
    setNotificationsEnabled,
  } = useTheme()

  return (
    <div className="flex flex-col items-center pt-8 px-4 relative z-10">
      {/* Profile image and name */}
      <div className="w-20 h-20 border-2 border-white rounded-sm overflow-hidden mb-2">
        <div className="w-full h-full bg-gray-300 flex items-center justify-center">
          <User size={40} className="text-gray-600" />
        </div>
      </div>
      <h1 className="text-2xl font-bold mb-6">Aaron M</h1>

      {/* Stats cards */}
      <div className="flex justify-between w-full mb-6">
        <div className={`w-[30%] rounded-md p-3 flex flex-col items-center ${darkMode ? "bg-black" : "bg-white"}`}>
          <p className="text-xs text-center">CALORIES TODAY</p>
          <p className="text-3xl font-bold">999</p>
        </div>
        <div className={`w-[30%] rounded-md p-3 flex flex-col items-center ${darkMode ? "bg-black" : "bg-white"}`}>
          <p className="text-xs text-center">BMR</p>
          <p className="text-3xl font-bold">999</p>
        </div>
        <div className={`w-[30%] rounded-md p-3 flex flex-col items-center ${darkMode ? "bg-black" : "bg-white"}`}>
          <p className="text-xs text-center">FOOD ITEMS SCANNED</p>
          <p className="text-3xl font-bold">999</p>
        </div>
      </div>

      {/* Menu options */}
      <div className="w-full space-y-4">
        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="flex items-center">
            <Clock size={20} className="mr-2" />
            <span className="font-bold">WEEKLY CALORIES</span>
          </div>
          <ChevronDown size={20} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
          onClick={toggleDarkMode}
        >
          <div className="flex items-center">
            {darkMode ? (
              <>
                <Sun size={20} className="mr-2" />
                <span className="font-bold">LIGHT MODE</span>
              </>
            ) : (
              <>
                <Moon size={20} className="mr-2" />
                <span className="font-bold">DARK MODE</span>
              </>
            )}
          </div>
          <div className={`w-12 h-6 rounded-full relative ${darkMode ? "bg-gray-600" : "bg-gray-300"}`}>
            <div
              className={`absolute top-1 w-4 h-4 rounded-full transition-all ${
                darkMode ? "right-1 bg-white" : "left-1 bg-gray-700"
              }`}
            />
          </div>
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="flex items-center">
            <Bell size={20} className="mr-2" />
            <span className="font-bold">REMINDERS</span>
          </div>
          <ToggleSwitch checked={remindersEnabled} onCheckedChange={setRemindersEnabled} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="flex items-center">
            <Bell size={20} className="mr-2" />
            <span className="font-bold">NOTIFICATIONS</span>
          </div>
          <ToggleSwitch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${darkMode ? "bg-black" : "bg-white"}`}
        >
          <div className="flex items-center">
            <LogOut size={20} className="mr-2" />
            <span className="font-bold">SIGN OUT</span>
          </div>
        </button>
      </div>
    </div>
  )
}

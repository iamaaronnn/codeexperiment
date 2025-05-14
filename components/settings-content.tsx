"use client"

import { ArrowLeft, Bell, ChevronDown, Clock, Globe, Lock, Moon, Sun, User } from "lucide-react"
import { useRouter } from "next/navigation"
import { useTheme } from "./theme-provider"
import { ToggleSwitch } from "./toggle-switch"

export function SettingsContent() {
  const router = useRouter()
  const {
    darkMode,
    toggleDarkMode,
    remindersEnabled,
    setRemindersEnabled,
    notificationsEnabled,
    setNotificationsEnabled,
    privateAccountEnabled,
    setPrivateAccountEnabled,
  } = useTheme()

  return (
    <div className="flex flex-col pt-8 px-4 relative z-10">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center">
          <ArrowLeft size={24} onClick={() => router.push("/")} className="cursor-pointer" />
          <h1 className="text-3xl font-bold ml-4">SETTINGS</h1>
        </div>
        <User size={24} />
      </div>

      {/* Settings options */}
      <div className="w-full space-y-4">
        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
        >
          <div className="flex items-center">
            <Bell size={20} className="mr-2" />
            <span className="font-bold">REMINDERS</span>
          </div>
          <ToggleSwitch checked={remindersEnabled} onCheckedChange={setRemindersEnabled} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
        >
          <div className="flex items-center">
            <Lock size={20} className="mr-2" />
            <span className="font-bold">PRIVATE ACCOUNT</span>
          </div>
          <ToggleSwitch checked={privateAccountEnabled} onCheckedChange={setPrivateAccountEnabled} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
        >
          <div className="flex items-center">
            <Clock size={20} className="mr-2" />
            <span className="font-bold">TIME SPENT</span>
          </div>
          <ChevronDown size={20} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
        >
          <div className="flex items-center">
            <Globe size={20} className="mr-2" />
            <span className="font-bold">LANGUAGES</span>
          </div>
          <ChevronDown size={20} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
        >
          <div className="flex items-center">
            <Bell size={20} className="mr-2" />
            <span className="font-bold">NOTIFICATIONS</span>
          </div>
          <ToggleSwitch checked={notificationsEnabled} onCheckedChange={setNotificationsEnabled} />
        </button>

        <button
          className={`w-full flex items-center justify-between p-4 rounded-full ${
            darkMode ? "bg-black" : "bg-[#000000]"
          } ${darkMode ? "text-white" : "text-[#fffdd0]"}`}
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
      </div>
    </div>
  )
}

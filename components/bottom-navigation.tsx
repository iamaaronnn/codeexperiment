"use client"

import { usePathname, useRouter } from "next/navigation"
import { BookOpen, Camera, Home, User, Utensils, Trophy, Globe } from "lucide-react"
import { useTheme } from "./theme-provider"

export function BottomNavigation() {
  const { darkMode } = useTheme()
  const router = useRouter()
  const pathname = usePathname()

  const isSettings = pathname === "/settings"

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 max-w-md mx-auto flex justify-around items-center p-4 ${
        darkMode ? "bg-black" : "bg-white"
      }`}
    >
      {isSettings ? (
        <>
          <BookOpen size={24} className="cursor-pointer" />
          <Trophy size={24} className="cursor-pointer" />
          <Home size={24} className="cursor-pointer" onClick={() => router.push("/")} />
          <Globe size={24} className="cursor-pointer" />
          <User size={24} className="cursor-pointer" />
        </>
      ) : (
        <>
          <Utensils size={24} className="cursor-pointer" />
          <Camera size={24} className="cursor-pointer" />
          <Home size={24} className="cursor-pointer" />
          <BookOpen size={24} className="cursor-pointer" />
          <User size={24} className="cursor-pointer" onClick={() => router.push("/settings")} />
        </>
      )}
    </div>
  )
}

"use client"

import type React from "react"

import { createContext, useContext, useState, useEffect } from "react"

type ThemeContextType = {
  darkMode: boolean
  toggleDarkMode: () => void
  remindersEnabled: boolean
  setRemindersEnabled: (enabled: boolean) => void
  notificationsEnabled: boolean
  setNotificationsEnabled: (enabled: boolean) => void
  privateAccountEnabled: boolean
  setPrivateAccountEnabled: (enabled: boolean) => void
}

const ThemeContext = createContext<ThemeContextType>({
  darkMode: false,
  toggleDarkMode: () => {},
  remindersEnabled: false,
  setRemindersEnabled: () => {},
  notificationsEnabled: false,
  setNotificationsEnabled: () => {},
  privateAccountEnabled: false,
  setPrivateAccountEnabled: () => {},
})

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [darkMode, setDarkMode] = useState(false)
  const [remindersEnabled, setRemindersEnabled] = useState(false)
  const [notificationsEnabled, setNotificationsEnabled] = useState(false)
  const [privateAccountEnabled, setPrivateAccountEnabled] = useState(false)

  const toggleDarkMode = () => setDarkMode(!darkMode)

  // Apply theme to body
  useEffect(() => {
    document.body.className = darkMode ? "bg-black text-white" : "bg-white text-black"
  }, [darkMode])

  return (
    <ThemeContext.Provider
      value={{
        darkMode,
        toggleDarkMode,
        remindersEnabled,
        setRemindersEnabled,
        notificationsEnabled,
        setNotificationsEnabled,
        privateAccountEnabled,
        setPrivateAccountEnabled,
      }}
    >
      <div
        className={`min-h-screen ${
          darkMode
            ? "bg-gradient-to-b from-[#000000] via-[#333333] to-[#000000]"
            : "bg-gradient-to-b from-[#f2f2f2] via-[#d9d9d9] to-[#fffdd0]"
        }`}
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export const useTheme = () => useContext(ThemeContext)

"use client"

import { useTheme } from "./theme-provider"

export function StatusBar() {
  const { darkMode } = useTheme()

  return (
    <div className={`flex justify-between items-center p-2 relative z-10 ${darkMode ? "text-white" : "text-black"}`}>
      <div className="flex items-center">
        <span className="text-xs">Service</span>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="ml-1">
          <path
            d="M6 15L12 9L18 15"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
      <div className="text-xs">19:02</div>
      <div className="flex items-center">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="mr-1">
          <path
            d="M3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
            stroke="currentColor"
            strokeWidth="2"
          />
          <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
          <path
            d="M2 9.5C2 9.5 5.5 4 12 4C18.5 4 22 9.5 22 9.5"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13Z"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  )
}

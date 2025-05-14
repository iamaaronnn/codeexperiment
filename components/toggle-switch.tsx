"use client"

import { Switch } from "@/components/ui/switch"

interface ToggleSwitchProps {
  checked: boolean
  onCheckedChange: (checked: boolean) => void
}

export function ToggleSwitch({ checked, onCheckedChange }: ToggleSwitchProps) {
  return <Switch checked={checked} onCheckedChange={onCheckedChange} className={checked ? "bg-[#ff0000]" : ""} />
}

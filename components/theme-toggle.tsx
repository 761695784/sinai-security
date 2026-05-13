"use client"

import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)

useEffect(() => {
  setMounted(true)
  const saved = localStorage.getItem("sinai-theme")
  if (saved === "light") {
    document.documentElement.classList.remove("dark")
    setIsDark(false)
  } else {
    // dark par défaut si rien de sauvegardé
    document.documentElement.classList.add("dark")
    localStorage.setItem("sinai-theme", "dark")
    setIsDark(true)
  }
}, [])

  const toggleTheme = () => {
    const next = !isDark
    setIsDark(next)
    if (next) {
      document.documentElement.classList.add("dark")
      localStorage.setItem("sinai-theme", "dark")
    } else {
      document.documentElement.classList.remove("dark")
      localStorage.setItem("sinai-theme", "light")
    }
  }

  if (!mounted) {
    return (
      <button
        className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-80 transition-colors"
        disabled
        aria-label="Chargement du thème"
      >
        <Sun className="w-5 h-5" style={{ color: '#C8A24D' }} />
      </button>
    )
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg bg-secondary text-secondary-foreground hover:opacity-80 transition-colors"
      aria-label={isDark ? "Passer en mode clair" : "Passer en mode sombre"}
      style={{ color: '#C8A24D' }}
    >
      {isDark ? <Sun className="w-5 h-5" style={{ color: '#C8A24D' }} /> : <Moon className="w-5 h-5"  />}
    </button>
  )
}

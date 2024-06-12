"use client"

import { createContext, useContext, useEffect, useMemo } from "react"
import { useLocalStorage } from "usehooks-ts"

interface themeProps {
  themeMode: string
  onChangeThemeConfig: (mode?: string) => void
}

interface Props {
  children: React.ReactNode
}

const ThemeContext = createContext<Partial<themeProps> | null>(null)

export const ThemeProvider: React.FC<Props> = ({ children }) => {
  const [themeMode, setThemeMode] = useLocalStorage<string>("theme", "light")

  const toggleMode = () => {
    const html = document.querySelector<HTMLHtmlElement>("html")!
    if (themeMode === "light") {
      html.classList.remove("dark")
    } else {
      html.classList.add("dark")
    }
  }

  const values = useMemo(
    () => ({
      themeMode,
      onChangeThemeConfig: (mode?: string) => {
        if (mode === undefined) {
          setThemeMode(themeMode === "light" ? "dark" : "light")
          return
        }
        setThemeMode(mode)
      },
    }),
    [themeMode, setThemeMode],
  )

  useEffect(() => {
    toggleMode()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [themeMode])

  return <ThemeContext.Provider value={values}>{children}</ThemeContext.Provider>
}

export const useTheme = () => useContext(ThemeContext)

import { createContext, useContext, useMemo, useState } from "react"

const DateSelectContext = createContext(null)

const DateSelectProvider = ({ children }) => {
  const [selectedDay, setSelectedDay] = useState(null)

  const value = useMemo(
    () => ({
        selectedDay,
        setSelectedDay
    }),
    [
        selectedDay,
        setSelectedDay
    ],
  )

  return <DateSelectContext.Provider value={value}>{children}</DateSelectContext.Provider>
}

export const useDateSelect = () => {
  const context = useContext(DateSelectContext)
  if (!context) {
    throw new Error("useDateSelect must be used within a DateSelectProvider")
  }
  return context
}

export default DateSelectProvider

import { createContext, useContext, useMemo, useState } from "react"

const PopupWidgetContext = createContext(null)

const PopupWidgetProvider = ({ children }) => {
  const [isOpenAbout, setIsOpenAbout] = useState(false)

  const value = useMemo(() => ({
    isOpenAbout,
    setIsOpenAbout
  }), 
  [
    isOpenAbout,
    setIsOpenAbout
  ])

  return <PopupWidgetContext.Provider value={value}>{children}</PopupWidgetContext.Provider>
}

export const usePopupWidget = () => {
  const context = useContext(PopupWidgetContext)
  if (!context) {
    throw new Error("usePopupWidget must be used within a PopupWidgetProvider")
  }
  return context
}

export default PopupWidgetProvider

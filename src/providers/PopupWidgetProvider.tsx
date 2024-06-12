"use client"

import { createContext, useCallback, useContext, useMemo, useState } from "react"

const PopupWidgetContext = createContext(null)

const PopupWidgetProvider = ({ children }) => {
  const [openPopupStatus, setOpenPopupState] = useState(null)

  const openPopUp = useCallback((screenName) => {
    const temp = { ...openPopupStatus }

    temp[screenName] = !temp[screenName]

    setOpenPopupState({ ...temp })
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const value = useMemo(
    () => ({
      openPopupStatus,
      openPopUp,
    }),
    [openPopUp, openPopupStatus],
  )

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

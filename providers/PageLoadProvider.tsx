import { createContext, useContext, useMemo, useState } from "react"

const PageLoadContext = createContext(null)

const PageLoadProvider = ({ children }) => {
  const [entered, setEntered] = useState(false)

  const value = useMemo(
    () => ({
      entered,
      setEntered,
    }),
    [entered, setEntered],
  )

  return <PageLoadContext.Provider value={value}>{children}</PageLoadContext.Provider>
}

export const usePageLoad = () => {
  const context = useContext(PageLoadContext)
  if (!context) {
    throw new Error("usePageLoad must be used within a PageLoadProvider")
  }
  return context
}

export default PageLoadProvider

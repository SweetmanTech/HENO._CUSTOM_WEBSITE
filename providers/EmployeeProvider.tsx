import { createContext, useContext, useMemo } from "react"
import useEmployeeData from "@/hooks/useEmployeeData"

const EmployeeContext = createContext(null)

const EmployeeProvider = ({ children }) => {
  const employeeData = useEmployeeData()

  const value = useMemo(
    () => ({
      ...employeeData,
    }),
    [employeeData],
  )

  return <EmployeeContext.Provider value={value}>{children}</EmployeeContext.Provider>
}

export const useEmployee = () => {
  const context = useContext(EmployeeContext)
  if (!context) {
    throw new Error("useEmployee must be used within a EmployeeProvider")
  }
  return context
}

export default EmployeeProvider

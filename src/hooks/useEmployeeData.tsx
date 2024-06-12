import { useState } from "react"

export const milestones = ["#Milestone 1", "#Milestone 2", "#Milestone 3"]

const useEmployeeData = () => {
  const [selectedValue, setSelectedValue] = useState(milestones[0])

  return {
    setSelectedValue,
    selectedValue,
  }
}

export default useEmployeeData

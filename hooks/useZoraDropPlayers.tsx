import data from "@/lib/press-data"
import { useState } from "react"

const useZoraDropPlayers = () => {
  const [selectedDrop, setSelectedDrop] = useState(0)

  const nextDrop = () => {
    if (selectedDrop === data.length - 1) {
      setSelectedDrop(0)
      return
    }

    setSelectedDrop(selectedDrop + 1)
  }

  return {
    selectedDrop,
    setSelectedDrop,
    nextDrop,
  }
}

export default useZoraDropPlayers

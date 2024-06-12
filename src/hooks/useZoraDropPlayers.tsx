import data from "@/lib/press-data"
import { useState } from "react"

const useZoraDropPlayers = () => {
  const [selectedDrop, setSelectedDrop] = useState(0)
  const [zoraDropActive, setZoraDropActive] = useState(false)

  const nextDrop = () => {
    if (!zoraDropActive) return
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
    setZoraDropActive,
    zoraDropActive,
  }
}

export default useZoraDropPlayers

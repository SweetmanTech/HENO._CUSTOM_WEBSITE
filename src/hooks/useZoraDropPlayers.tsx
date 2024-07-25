import { useState } from "react"

const useZoraDropPlayers = () => {
  const [selectedDrop, setSelectedDrop] = useState(1)

  const nextDrop = () => {
    if (selectedDrop === 8) {
      setSelectedDrop(1)
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

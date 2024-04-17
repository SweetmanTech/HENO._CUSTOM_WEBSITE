import { useState } from "react"

const useZoraDropPlayers = () => {
  const [selectedDrop, setSelectedDrop] = useState(0)

  return {
    selectedDrop,
    setSelectedDrop,
  }
}

export default useZoraDropPlayers

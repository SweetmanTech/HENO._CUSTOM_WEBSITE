import { useEffect, useRef, useState } from "react"

const useClickOutsideSelect = () => {
  const selectRef = useRef() as any
  const [isVisibleSelect, setIsVisibleSelect] = useState(false)

  useEffect(() => {
    const handleClose = (e) => {
      if (selectRef.current && !selectRef.current.contains(e.target)) setIsVisibleSelect(false)
    }

    document.addEventListener("mousedown", handleClose)
    document.addEventListener("touchstart", handleClose)

    return () => {
      document.removeEventListener("mousedown", handleClose)
      document.removeEventListener("touchstart", handleClose)
    }
  }, [selectRef])

  return {
    isVisibleSelect,
    setIsVisibleSelect,
    selectRef,
  }
}

export default useClickOutsideSelect

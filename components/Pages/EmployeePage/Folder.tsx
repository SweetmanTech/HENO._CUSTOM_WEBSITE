import Media from "@/components/Core/Media"
import { useRouter } from "next/router"
import { useState } from "react"
import Draggable from "react-draggable"

const Folder = ({ name = "", link = "", isPopup }) => {
  const { push } = useRouter()
  const [firstX, setFirstX] = useState(0)
  const [firstY, setFirstY] = useState(0)

  return (
    <Draggable
      scale={1}
      bounds="parent"
      allowAnyClick={false}
      handle=".folder-handle"
      onStart={(_, data) => {
        setFirstX(data.lastX)
        setFirstY(data.lastY)
      }}
      onStop={(_, data) => {
        if (Math.abs(data.lastX - firstX) > 5 || Math.abs(data.lastY - firstY) > 5) return
        push(link)
      }}
    >
      <div
        className="flex flex-col justify-center items-center w-fit mx-auto folder-handle"
        draggable={false}
      >
        <Media
          type="image"
          link="/images/Employee/folder.png"
          blurLink="/images/Employee/folder.png"
          containerClasses={`${
            isPopup ? "w-[48px]" : "w-[64px]"
          } aspect-square active:border-dotted active:border`}
        />
        <p className={`uppercase ${isPopup ? "text-[12px]" : "text-[14px]"}`}>{name}</p>
      </div>
    </Draggable>
  )
}

export default Folder

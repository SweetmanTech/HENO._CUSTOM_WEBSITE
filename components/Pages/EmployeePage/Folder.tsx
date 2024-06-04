import Media from "@/components/Core/Media"
import { useRouter } from "next/router"
import Draggable from "react-draggable"

const Folder = ({ name = "", link = "", isPopup }) => {
  const { push } = useRouter()

  return (
    <Draggable scale={1} bounds="parent" allowAnyClick={false} handle=".folder-handle">
      <button
        className="flex flex-col justify-center items-center w-fit mx-auto"
        type="button"
        onDoubleClick={() => push(link)}
      >
        <Media
          type="image"
          link="/images/Employee/folder.png"
          blurLink="/images/Employee/folder.png"
          containerClasses={`${
            isPopup ? "w-[48px]" : "w-[64px]"
          } aspect-square folder-handle active:border-dotted active:border`}
        />
        <p className={`uppercase ${isPopup ? "text-[12px]" : "text-[14px]"}`}>{name}</p>
      </button>
    </Draggable>
  )
}

export default Folder

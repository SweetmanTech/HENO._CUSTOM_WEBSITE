import Image from "next/image"
import { CSSProperties } from "react"

interface IMedia {
  type: "video" | "image"
  link?: string
  containerStyle?: CSSProperties
  containerClasses?: string
  blurLink?: string
  alt?: string
  layout?: "fill" | "responsive" | "fixed" | "intrinsic"
}

function Media({
  type,
  link,
  containerClasses,
  containerStyle,
  blurLink,
  alt,
  layout = "fill",
}: IMedia) {
  return (
    <div className={`relative ${containerClasses || ""}`} style={containerStyle || {}}>
      {type === "image" && link && (
        <Image
          className="absolute !w-full object-contain pointer-events-none"
          src={link}
          layout={layout}
          alt={alt || "not found image"}
          placeholder="blur"
          blurDataURL={
            blurLink ||
            "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOcMXP2OQAGOQKc/DqDigAAAABJRU5ErkJggg=="
          }
          unoptimized
        />
      )}
    </div>
  )
}

export default Media
